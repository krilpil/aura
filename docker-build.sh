#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'HELP'
Usage: ./docker-build.sh [--image IMAGE] [--platform PLATFORM]

Build and load the production image into local Docker.
Also save it as aura-image.tar in the project root, replacing any previous archive
only after a successful export (including when using a custom --image tag).
  --image IMAGE        Image tag (default: aura:latest)
  --platform PLATFORM  Target platform (default: linux/amd64; one platform only)
  -h, --help           Show help

Optional build arguments from the environment:
  SITE_URL, GOOGLE_SITE_VERIFICATION, YANDEX_SITE_VERIFICATION
No .env files are loaded. SMTP credentials are only used at container startup.
HELP
}

die() { printf 'Error: %s\n' "$*" >&2; exit 1; }

image=aura:latest
platform=linux/amd64
while (($#)); do
  case "$1" in
    --image|--platform)
      (($# >= 2)) && [[ -n "$2" && "$2" != -* ]] || die "Missing value for $1"
      case "$1" in
        --image) image=$2 ;;
        --platform) platform=$2 ;;
      esac
      shift 2
      ;;
    -h|--help) usage; exit 0 ;;
    *) die "Unknown argument: $1 (see --help)" ;;
  esac
done
[[ "$platform" =~ ^linux/[a-z0-9_]+(/[a-zA-Z0-9_]+)?$ ]] || die 'Expected one Linux platform, e.g. linux/amd64 or linux/arm64'
command -v docker >/dev/null 2>&1 || die 'Docker is not installed'
docker info >/dev/null 2>&1 || die 'Docker daemon is unavailable'
docker buildx version >/dev/null 2>&1 || die 'Docker Buildx is unavailable'

project_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
build_args=()
for name in SITE_URL GOOGLE_SITE_VERIFICATION YANDEX_SITE_VERIFICATION; do
  if [[ -n "${!name+x}" ]]; then
    build_args+=(--build-arg "$name=${!name}")
  fi
done

printf 'Building %s for %s\n' "$image" "$platform"
docker buildx build --platform "$platform" --load --tag "$image" \
  ${build_args[@]+"${build_args[@]}"} "$project_dir"

archive="$project_dir/aura-image.tar"
archive_tmp=$(mktemp "$project_dir/.aura-image.tar.XXXXXXXX")
trap 'rm -f -- "$archive_tmp"' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM
printf 'Saving %s to %s\n' "$image" "$archive"
docker save --output "$archive_tmp" "$image"
mv -f -- "$archive_tmp" "$archive"
printf 'Image archive saved: %s\n' "$archive"
