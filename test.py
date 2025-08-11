from dash import Dash, html
import dash_seqviz


app = Dash(__name__)

app.layout = html.Div([
    dash_seqviz.DashSeqviz(
        label = "hoge",
        id="viewer",
        value = "aaaaaaa",
        #seq="ATGCGTACGTAGCTAGCTAGCTAG",
        #viewer="linear",
        #annotations=[
        #    {"start": 0, "end": 3, "name": "gene1", "color": "red"}
        #]
    )
])

if __name__ == "__main__":
    app.run(debug=True)
