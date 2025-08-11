dash_seqviz
===========

A Dash component wrapping SeqViz, an interactive biological sequence viewer for DNA/RNA visualization.

Features:
- Linear / circular / both viewers
- Annotations, primers, translations, enzymes, highlights
- Selection events exposed to Dash callbacks
- Zero custom serialization: pure JSON props

Heads-up: SeqViz requires the container element to have a non-zero height. Always set style={"height": ...} (and usually "width") on the component.

Installation
------------

From source (recommended for now):

    npm install
    npm run build

    python -m venv .venv && source .venv/bin/activate
    pip install -e .

(Later) From PyPI:

    pip install dash-seqviz

Quickstart
----------

    import dash
    from dash import html, Output, Input
    import dash_seqviz as dsv

    app = dash.Dash(__name__)
    app.layout = html.Div([
        dsv.SeqvizViewer(
            id="sv",
            name="Demo",
            seq="TTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGC",
            annotations=[{"start": 0, "end": 34, "name": "promoter", "direction": 1}],
            style={"width": "100%", "height": "420px", "border": "1px solid #ccc"}
        ),
        html.Pre(id="sel")
    ])

    @app.callback(Output("sel","children"), Input("sv","selection"))
    def show_selection(sel):
        return f"selection: {sel}"

    if __name__ == "__main__":
        app.run(debug=True)

Props (subset)
--------------

id: string  
className: string  
style: object - Inline styles for wrapper. Must set height.  
seq: string - Nucleotide sequence (A/C/G/T/U/N...)  
name: string - Display name of the sequence  
viewer: "linear" | "circular" | "both" | "both_flip"  
annotations: array of Annotation objects  
primers: array of Primer objects  
translations: array of Translation objects  
enzymes: array of string or Enzyme objects  
highlights: array of Highlight objects  
zoom: object { start?: number, end?: number }  
bpColors: object { A?: string, C?: string, G?: string, T?: string, U?: string }  
selection: object { start: number, end: number, clockwise?: boolean }  

Development
-----------

Dev server (demo page):

    npm start

Build JS bundle + generate Python bindings:

    npm run build

Python side (editable install):

    pip install -e .

File map:
- src/lib/components/DashSeqviz.react.js : React wrapper (function component)
- src/lib/index.js : Exports
- dash_seqviz/ : Python package (includes built .min.js)

Releasing
---------

1. Bump version in package.json
2. Build and commit bundles:

       npm run build
       git add -A
       git commit -m "release: vX.Y.Z"
       git tag vX.Y.Z
       git push origin main --tags

3. (Optional) Publish to PyPI:

       python -m pip install build twine
       python -m build
       twine upload dist/*

Troubleshooting
---------------

- Blank view: container has zero height. Set style={"height": 420}.
- "Invalid hook call": Remove react / react-dom from dependencies; keep in peerDependencies.
- Prop not reaching Python: Declare it in propTypes; rebuild and pip install -e . again.
- Dev vs Dash mismatch: npm start is the demo only; Dash app uses the built bundle.

License
-------

MIT

