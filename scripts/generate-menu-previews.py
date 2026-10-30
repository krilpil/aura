"""Render the restaurant's source PDF into carousel previews and a generated manifest."""
import argparse
import hashlib
import json
from pathlib import Path
from tempfile import TemporaryDirectory

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
MENU_DIRECTORY = ROOT / 'public/media/restaurant/menu'


def generate(pdf_path, output_directory, manifest_path):
    version = hashlib.sha256(pdf_path.read_bytes()).hexdigest()[:16]
    pages = []
    output_directory.mkdir(parents=True, exist_ok=True)
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    with pymupdf.open(pdf_path) as document:
        if document.needs_pass:
            raise ValueError('The menu PDF must not be password protected.')
        if document.page_count < 1:
            raise ValueError('The menu PDF must contain at least one page.')
        # Finish rendering every page before replacing the previous previews.
        with TemporaryDirectory(prefix='aura-menu-', dir=output_directory) as temporary:
            staging = Path(temporary)
            for number, page in enumerate(document, start=1):
                pixels = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), colorspace=pymupdf.csRGB, alpha=False)
                image = Image.frombytes('RGB', (pixels.width, pixels.height), pixels.samples)
                filename = f'page-{number:03d}.webp'
                image.save(staging / filename, 'WEBP', quality=92)
                pages.append({
                    'page': number,
                    'src': f'/media/restaurant/menu/{filename}?v={version}',
                    'width': pixels.width,
                    'height': pixels.height,
                })
            for preview in staging.glob('page-*.webp'):
                preview.replace(output_directory / preview.name)
            expected = {f'page-{number:03d}.webp' for number in range(1, len(pages) + 1)}
            for preview in output_directory.glob('page-*.webp'):
                if preview.name not in expected:
                    preview.unlink()
    manifest_path.write_text(json.dumps({'version': version, 'pages': pages}, indent=2) + '\n', encoding='utf-8')
    print(f'Updated {len(pages)} menu previews from {pdf_path.name}; source PDF unchanged.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pdf', type=Path, default=MENU_DIRECTORY / 'aura-menu.pdf')
    parser.add_argument('--output-dir', type=Path, default=MENU_DIRECTORY)
    parser.add_argument('--manifest', type=Path, default=ROOT / 'src/screens/RestaurantScreen/model/menu-pages.json')
    args = parser.parse_args()
    generate(args.pdf, args.output_dir, args.manifest)
