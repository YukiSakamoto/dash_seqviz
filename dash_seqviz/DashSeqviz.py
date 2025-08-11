# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class DashSeqviz(Component):
    """A DashSeqviz component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- annotations (list; optional):
    Feature annotations to render on the sequence. [{start:number,
    end:number, name?:string, direction?:1|-1|0, color?:string,
    id?:string|number, type?:string}].

- bpColors (optional):
    Base colors override, e.g. {A:\"#...\", C:\"#...\", G:\"#...\",
    T:\"#...\", U:\"#...\"}.

- className (string; optional):
    Extra CSS classes to apply to the wrapper <div>. (e.g., \"mb-3\").

- enzymes (list; optional):
    Restriction enzymes to show. Either names [\"EcoRI\", ...] or
    detailed objects.

- highlights (list; optional):
    Highlighted ranges on the sequence. [{start:number, end:number,
    color?:string, underline?:boolean, opacity?:number,
    label?:string}].

- name (string; optional):
    Display name/label of the sequence.

- primers (list; optional):
    Primer objects to render. [{start:number, end:number,
    name?:string, direction?:1|-1|0, sequence?:string, tm?:number}].

- selection (optional):
    Current selection returned to Dash callbacks. {start:number,
    end:number, clockwise?:boolean}.

- seq (string; default "ATGC"):
    Nucleotide sequence (string). Provide uppercase A/C/G/T/U/N etc.

- translations (list; optional):
    Translation tracks / ORFs to render. [{start:number, end:number,
    name?:string, frame?:0|1|2|-1|-2|-3, direction?:1|-1|0,
    aa?:string}].

- viewer (a value equal to: "linear", "circular", "both", "both_flip"; default "both"):
    Viewer mode: linear, circular, both, or both_flip.

- zoom (optional):
    Initial zoom window for the linear viewer: {start?:number,
    end?:number}."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_seqviz'
    _type = 'DashSeqviz'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        seq: typing.Optional[str] = None,
        name: typing.Optional[str] = None,
        viewer: typing.Optional[Literal["linear", "circular", "both", "both_flip"]] = None,
        annotations: typing.Optional[typing.Sequence[typing.Any]] = None,
        primers: typing.Optional[typing.Sequence[typing.Any]] = None,
        translations: typing.Optional[typing.Sequence[typing.Any]] = None,
        enzymes: typing.Optional[typing.Sequence[typing.Any]] = None,
        highlights: typing.Optional[typing.Sequence[typing.Any]] = None,
        zoom: typing.Optional[typing.Any] = None,
        bpColors: typing.Optional[typing.Any] = None,
        selection: typing.Optional[typing.Any] = None,
        onSelection: typing.Optional[typing.Any] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'annotations', 'bpColors', 'className', 'enzymes', 'highlights', 'name', 'primers', 'selection', 'seq', 'style', 'translations', 'viewer', 'zoom']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'annotations', 'bpColors', 'className', 'enzymes', 'highlights', 'name', 'primers', 'selection', 'seq', 'style', 'translations', 'viewer', 'zoom']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashSeqviz, self).__init__(**args)

setattr(DashSeqviz, "__init__", _explicitize_args(DashSeqviz.__init__))
