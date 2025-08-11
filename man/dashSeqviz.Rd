% Auto-generated: do not edit by hand
\name{dashSeqviz}

\alias{dashSeqviz}

\title{DashSeqviz component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dashSeqviz(id=NULL, annotations=NULL, bpColors=NULL, className=NULL,
enzymes=NULL, highlights=NULL, name=NULL, onSelection=NULL,
primers=NULL, selection=NULL, seq=NULL, style=NULL,
translations=NULL, viewer=NULL, zoom=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{annotations}{List. Feature annotations to render on the sequence.
[{start:number, end:number, name?:string, direction?:1|-1|0, color?:string, id?:string|number, type?:string}]}

\item{bpColors}{Base colors override, e.g. {A:"#...", C:"#...", G:"#...", T:"#...", U:"#..."}.}

\item{className}{Character. Extra CSS classes to apply to the wrapper <div>. (e.g., "mb-3")}

\item{enzymes}{List. Restriction enzymes to show. Either names ["EcoRI", ...] or detailed objects.}

\item{highlights}{List. Highlighted ranges on the sequence.
[{start:number, end:number, color?:string, underline?:boolean, opacity?:number, label?:string}]}

\item{name}{Character. Display name/label of the sequence.}

\item{onSelection}{Optional JS-only selection handler when using this component in pure React.}

\item{primers}{List. Primer objects to render.
[{start:number, end:number, name?:string, direction?:1|-1|0, sequence?:string, tm?:number}]}

\item{selection}{Current selection returned to Dash callbacks.
{start:number, end:number, clockwise?:boolean}}

\item{seq}{Character. Nucleotide sequence (string). Provide uppercase A/C/G/T/U/N etc.}

\item{style}{Named list. Inline styles for the wrapper <div>. Must include a height for SeqViz to render.}

\item{translations}{List. Translation tracks / ORFs to render.
[{start:number, end:number, name?:string, frame?:0|1|2|-1|-2|-3, direction?:1|-1|0, aa?:string}]}

\item{viewer}{A value equal to: "linear", "circular", "both", "both_flip". Viewer mode: linear, circular, both, or both_flip.}

\item{zoom}{Initial zoom window for the linear viewer: {start?:number, end?:number}.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

