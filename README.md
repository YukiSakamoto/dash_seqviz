# dash_seqviz

A Dash component wrapping **SeqViz**, an interactive biological sequence viewer for DNA/RNA visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features
- Linear / circular / both viewers
- Annotations, primers, translations, enzymes, highlights
- Selection events exposed to Dash callbacks
- Zero custom serialization: pure JSON props

> **Heads-up:** SeqViz requires the container element to have a **non-zero height**. Always set `style={"height": ...}` (and usually `width`) on the component.

---

## Installation

### From source (recommended for now)
```bash
# JS build
npm install
npm run build

# Python install
python -m venv .venv && source .venv/bin/activate
pip install -e .
```

### (Later)From PyPI
```bash
pip install dash-seqviz
```

## Quickstart
```python
import dash
from dash import html, Output, Input
import dash_seqviz as dsv

app = dash.Dash(__name__)
app.layout = html.Div([
    dsv.DashSeqviz(
        id="sv",
        viewer = "linear",
        name="J23100",
        seq="TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC",
        annotations=[{"start":0, "end":34, "name":"promoter", "direction":1}],
        style={"width": "100%", "height": "420px", "border": "1px solid #ccc"}  # ← important
    ),
    html.Pre(id="sel")
])

@app.callback(Output("sel","children"), Input("sv","selection"))
def show_selection(sel):
    return f"selection: {sel}"

if __name__ == "__main__":
    app.run(debug=True)


```

### Props (subset)

| Prop           | Type                                                             | Description                                        |
| -------------- | ---------------------------------------------------------------- | -------------------------------------------------- |
| `id`           | `string`                                                         | Dash component id.                                 |
| `className`    | `string`                                                         | Extra CSS classes for wrapper `<div>`.             |
| `style`        | `object`                                                         | Inline styles for wrapper `<div>`. **Set height**. |
| `seq`          | `string`                                                         | Nucleotide sequence (A/C/G/T/U/N…).                |
| `name`         | `string`                                                         | Display name of the sequence.                      |
| `viewer`       | `"linear" \| "circular" \| "both" \| "both_flip"`                | Viewer mode.                                       |
| `annotations`  | `Array<Annotation>`                                              | Feature tracks.                                    |
| `primers`      | `Array<Primer>`                                                  | Primers.                                           |
| `translations` | `Array<Translation>`                                             | ORFs / translations.                               |
| `enzymes`      | `Array<string \| Enzyme>`                                        | Restriction enzymes to display.                    |
| `highlights`   | `Array<Highlight>`                                               | Highlighted ranges.                                |
| `zoom`         | `{ start?: number, end?: number }`                               | Initial linear zoom.                               |
| `bpColors`     | `{ A?: string, C?: string, G?: string, T?: string, U?: string }` | Base color overrides.                              |
| **Outputs**    |                                                                  |                                                    |
| `selection`    | `{ start: number, end: number, clockwise?: boolean }`            | Updated on user selection.                         |

### Development

```bash
# Dev server (demo page at http://localhost:PORT)
npm start

# Build JS bundle + generate Python bindings (dash-generate-components)
npm run build

# Python side (editable install)
pip install -e .

```

#### Filemap
```
src/lib/components/DashSeqviz.react.js   # React wrapper (function component)
src/lib/index.js                         # Exports
dash_seqviz/                             # Python package (includes built .min.js)
```

### Releasing
1. Bump version in package.json (this project reads it via package-info.json in setup.py)

2. Build & commit bundles:

```bash
npm run build
git add -A
git commit -m "release: vX.Y.Z"
git tag vX.Y.Z
git push origin main --tags

```

3. (Optional) Publish to PyPI:

```bash
python -m pip install build twine
python -m build
twine upload dist/*
```

### Troubleshooting
* Blank view → The container has zero height. Set style={"height": 420} (and width).
* “Invalid hook call” → Remove react / react-dom from dependencies; keep them as peerDependencies.
* Prop not reaching Python → Declare it in propTypes; rebuild (npm run build) and pip install -e . again.
* Dev vs Dash mismatch → npm start is the demo only; the Dash app uses the built bundle.

### License
MIT

