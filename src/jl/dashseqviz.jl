# AUTO GENERATED FILE - DO NOT EDIT

export dashseqviz

"""
    dashseqviz(;kwargs...)

A DashSeqviz component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `annotations` (Array; optional): Feature annotations to render on the sequence.
[{start:number, end:number, name?:string, direction?:1|-1|0, color?:string, id?:string|number, type?:string}]
- `bpColors` (optional): Base colors override, e.g. {A:"#...", C:"#...", G:"#...", T:"#...", U:"#..."}.
- `className` (String; optional): Extra CSS classes to apply to the wrapper <div>. (e.g., "mb-3")
- `enzymes` (Array; optional): Restriction enzymes to show. Either names ["EcoRI", ...] or detailed objects.
- `highlights` (Array; optional): Highlighted ranges on the sequence.
[{start:number, end:number, color?:string, underline?:boolean, opacity?:number, label?:string}]
- `name` (String; optional): Display name/label of the sequence.
- `primers` (Array; optional): Primer objects to render.
[{start:number, end:number, name?:string, direction?:1|-1|0, sequence?:string, tm?:number}]
- `selection` (optional): Current selection returned to Dash callbacks.
{start:number, end:number, clockwise?:boolean}
- `seq` (String; optional): Nucleotide sequence (string). Provide uppercase A/C/G/T/U/N etc.
- `style` (Dict; optional): Inline styles for the wrapper <div>. Must include a height for SeqViz to render.
- `translations` (Array; optional): Translation tracks / ORFs to render.
[{start:number, end:number, name?:string, frame?:0|1|2|-1|-2|-3, direction?:1|-1|0, aa?:string}]
- `viewer` (a value equal to: "linear", "circular", "both", "both_flip"; optional): Viewer mode: linear, circular, both, or both_flip.
- `zoom` (optional): Initial zoom window for the linear viewer: {start?:number, end?:number}.
"""
function dashseqviz(; kwargs...)
        available_props = Symbol[:id, :annotations, :bpColors, :className, :enzymes, :highlights, :name, :primers, :selection, :seq, :style, :translations, :viewer, :zoom]
        wild_props = Symbol[]
        return Component("dashseqviz", "DashSeqviz", "dash_seqviz", available_props, wild_props; kwargs...)
end

