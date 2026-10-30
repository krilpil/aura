#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'HELP'
Usage: ./docker-deploy.sh USER@SERVER [options]

Transfer a local image over SSH and recreate its container on the server.
  --image IMAGE          Local image tag (default: aura:latest)
  --container NAME       Container name (default: aura)
  --env-file PATH        Absolute server env file (default: /opt/aura/aura.env)
  --port PORT            Server loopback port (default: 3000)
  -h, --help             Show help

SSH aliases and ports are configured in ~/.ssh/config.
The server needs Bash, Docker access without interactive sudo, and an env file.
Build the image first with ./docker-build.sh. Updating briefly interrupts service.
HELP
}

die() { printf 'Error: %s\n' "$*" >&2; exit 1; }

target=
image=aura:latest
container=aura
env_file=/opt/aura/aura.env
port=3000
while (($#)); do
  case "$1" in
    --image|--container|--env-file|--port)
      (($# >= 2)) && [[ -n "$2" && "$2" != -* ]] || die "Missing value for $1"
      case "$1" in
        --image) image=$2 ;;
        --container) container=$2 ;;
        --env-file) env_file=$2 ;;
        --port) port=$2 ;;
      esac
      shift 2
      ;;
    -h|--help) usage; exit 0 ;;
    -*) die "Unknown argument: $1 (see --help)" ;;
    *) [[ -z "$target" ]] || die 'Only one SSH target is allowed'; target=$1; shift ;;
  esac
done
[[ -n "$target" && "$target" != *[[:space:]]* ]] || die 'Specify an SSH target, e.g. user@server'
[[ "$container" =~ ^[a-zA-Z0-9][a-zA-Z0-9_.-]*$ ]] || die 'Invalid container name'
[[ "$env_file" == /* ]] || die '--env-file must be an absolute path on the server'
[[ "$port" =~ ^[0-9]{1,5}$ ]] || die 'Port must be an integer from 1 to 65535'
port=$((10#$port))
((port >= 1 && port <= 65535)) || die 'Port must be an integer from 1 to 65535'
command -v docker >/dev/null 2>&1 || die 'Docker is not installed'
command -v ssh >/dev/null 2>&1 || die 'SSH is not installed'
docker info >/dev/null 2>&1 || die 'Docker daemon is unavailable'
docker image inspect "$image" >/dev/null 2>&1 || die "Local image not found: $image; build it first"

# SSH passes commands through the remote login shell: quote each argument for POSIX sh.
shell_quote() {
  local rest=$1
  printf "'"
  while [[ "$rest" == *"'"* ]]; do
    printf '%s%s' "${rest%%\'*}" "'\"'\"'"
    rest=${rest#*\'}
  done
  printf "%s'" "$rest"
}
remote_command="bash -s -- $(shell_quote "$image") $(shell_quote "$container") $(shell_quote "$env_file") $(shell_quote "$port")"

printf 'Checking server %s\n' "$target"
ssh -T "$target" "$remote_command" <<'REMOTE'
set -euo pipefail
command -v docker >/dev/null
docker info >/dev/null
[[ -f "$3" && -r "$3" ]] || { printf 'Server env file is missing or unreadable: %s\n' "$3" >&2; exit 1; }
REMOTE

printf 'Transferring %s to %s\n' "$image" "$target"
docker save "$image" | ssh -T "$target" 'docker load'

printf 'Starting container %s\n' "$container"
ssh -T "$target" "$remote_command" <<'REMOTE'
set -euo pipefail
image=$1
container=$2
env_file=$3
port=$4
docker image inspect "$image" >/dev/null
[[ -f "$env_file" && -r "$env_file" ]] || { printf 'Server env file is missing or unreadable: %s\n' "$env_file" >&2; exit 1; }
existing=$(docker container ls -a --format '{{.Names}}')
if printf '%s\n' "$existing" | grep -Fxq -- "$container"; then
  docker stop "$container"
  docker rm "$container"
fi
docker run -d --name "$container" --restart unless-stopped \
  --env-file "$env_file" -p "127.0.0.1:$port:3000" "$image"
sleep 2
docker container ls -a --filter "name=^/$container$" --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'
docker logs --tail 50 "$container"
[[ "$(docker inspect --format '{{.State.Running}}' "$container")" == true ]] || {
  printf 'Container failed to stay running; see logs above.\n' >&2
  exit 1
}
REMOTE

printf 'Container is running on %s at 127.0.0.1:%s. Check the public site and request form.\n' "$target" "$port"
