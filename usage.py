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

