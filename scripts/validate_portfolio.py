#!/usr/bin/env python3
"""Validación estática del portfolio (stdlib; sin conexión externa)."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(ROOT.glob("*.html"))
errors = []


class Inspector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.refs = []
        self.headings = []
        self.has_main = False
        self.has_title = False
        self.has_description = False
        self.has_canonical = False
        self.has_skip_link = False
        self.nav_count = 0

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        if d.get("id"):
            self.ids.add(d["id"])
        if tag == "main" and d.get("id") == "main-content":
            self.has_main = True
        if tag == "title":
            self.has_title = True
        if tag == "h1":
            self.headings.append(tag)
        if tag == "meta" and d.get("name") == "description" and d.get("content"):
            self.has_description = True
        if tag == "link" and d.get("rel") == "canonical":
            self.has_canonical = True
        if tag == "a" and d.get("class", "").find("skip-link") >= 0:
            self.has_skip_link = True
        if tag == "nav" and d.get("id") == "siteNav":
            self.nav_count += 1
        if tag == "img" and "alt" not in d:
            errors.append("Imagen sin alt")
        for key in ("src", "href", "poster"):
            if d.get(key):
                self.refs.append(d[key])


if not PAGES:
    errors.append("No se encontraron páginas HTML.")

for path in PAGES:
    checker = Inspector()
    try:
        checker.feed(path.read_text(encoding="utf-8-sig"))
    except Exception as exc:
        errors.append(f"{path.name}: HTML ilegible: {exc}")
        continue
    checks = {
        "sin title": checker.has_title,
        "sin meta description": checker.has_description,
        "sin URL canonical": checker.has_canonical,
        "sin main#main-content": checker.has_main,
        "sin enlace para saltar al contenido": checker.has_skip_link,
        "sin encabezado h1": bool(checker.headings),
        "navegación repetida o ausente": checker.nav_count == 1,
    }
    for msg, ok in checks.items():
        if not ok:
            errors.append(f"{path.name}: {msg}")
    for raw in checker.refs:
        if raw.startswith(("mailto:", "tel:", "data:", "javascript:")):
            continue
        url = urlsplit(raw)
        if url.scheme or url.netloc:
            continue
        ref = unquote(url.path)
        if not ref and url.fragment:
            if url.fragment not in checker.ids:
                errors.append(f"{path.name}: ancla interna ausente #{url.fragment}")
        elif ref:
            target = (path.parent / ref).resolve()
            if not target.is_relative_to(ROOT):
                errors.append(f"{path.name}: ruta fuera del sitio {raw}")
            elif not target.exists():
                errors.append(f"{path.name}: archivo inexistente {raw}")

for required in ("robots.txt", "sitemap.xml", "favicon.svg", "style.css", "js/script.js"):
    if not (ROOT / required).exists():
        errors.append(f"Falta archivo esperado: {required}")

print(f"Portfolio: {len(PAGES)} páginas HTML comprobadas.")
if errors:
    for error in errors:
        print(f"ERROR: {error}", file=sys.stderr)
    sys.exit(1)
print("Validación estática completada sin rutas locales rotas.")
