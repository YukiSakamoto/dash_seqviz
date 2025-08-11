import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SeqViz } from "seqviz";

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
const DashSeqviz = (props) => {
    const {id, className, style, setProps, onSelection, ...opts} = props;

    const handleSelection = (sel) => {
        /*
        * Send the new value to the parent component.
        * setProps is a prop that is automatically supplied
        * by dash's front-end ("dash-renderer").
        * In a Dash app, this will update the component's
        * props and send the data back to the Python Dash
        * app server if a callback uses the modified prop as
        * Input or State.
        */
       if (setProps) setProps({selection: sel});
       if (typeof onSelection === "function") onSelection(sel);
    };

    return (
        <div id={id} className={className} style={style}>
            <SeqViz {...opts} onSelection={handleSelection} />
        </div>
    );
};

const RangeShape = PropTypes.shape({
    start: PropTypes.number.isRequired, // 0-based index
    end: PropTypes.number.isRequired,   // includesive or exclusive depends on the library
    direction: PropTypes.oneOf([1, -1, 0]), // 1: forward, -1: reverse, 0: not specified
});

const AnnotationShape = PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    name: PropTypes.string, // feature name
    direction: PropTypes.oneOf([1, -1, 0]),
    color: PropTypes.string,    // CSS color
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
});

const PrimerShape = PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    name: PropTypes.string,
    directin: PropTypes.oneOf([1, -1, 0]),
    sequence: PropTypes.string,
    tm: PropTypes.number,
});

const TranslationShape = PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired,
    name: PropTypes.string,
    frame: PropTypes.oneOf([0, 1, 2, -1, -2, -3]),
    direction: PropTypes.oneOf([1, -1, 0]),
    aa: PropTypes.string,
});

const EnzymeShape = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        name: PropTypes.string.isRequired,  // enzyme name
        site: PropTypes.string,             // recognition sequence
        forwardRegex: PropTypes.string,
        reverseRegex: PropTypes.string,
        cutOffset: PropTypes.number,
    }),
]);

const HighlightShape = PropTypes.shape({
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  color: PropTypes.string,               // highlight color
  underline: PropTypes.bool,
  opacity: PropTypes.number,
  label: PropTypes.string,
});

const ZoomShape = PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number,
});

const BpColorsShape = PropTypes.shape({
  A: PropTypes.string,
  C: PropTypes.string,
  G: PropTypes.string,
  T: PropTypes.string,
  U: PropTypes.string, // for RNA
  // add other characters when required
});

const SelectionShape = PropTypes.shape({
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  clockwise: PropTypes.bool,             // for circular
});

DashSeqviz.defaultProps = {viewer: "both", seq: "ATGC"};

export const SeqvizPropTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
     /**
      * Extra CSS classes to apply to the wrapper <div>. (e.g., "mb-3")
      */
    className: PropTypes.string,
    /**
     * Inline styles for the wrapper <div>. Must include a height for SeqViz to render.
     */
    style: PropTypes.object,

    /**
     * Nucleotide sequence (string). Provide uppercase A/C/G/T/U/N etc.
     */
    seq: PropTypes.string,

    /**
     * Display name/label of the sequence.
     */
    name: PropTypes.string,

    /**
     * Viewer mode: linear, circular, both, or both_flip.
     */
    viewer: PropTypes.oneOf(["linear", "circular", "both", "both_flip"]),

    /**
     * Feature annotations to render on the sequence.
     * [{start:number, end:number, name?:string, direction?:1|-1|0, color?:string, id?:string|number, type?:string}]
     */
    annotations: PropTypes.arrayOf(AnnotationShape),

    /**
     * Primer objects to render.
     * [{start:number, end:number, name?:string, direction?:1|-1|0, sequence?:string, tm?:number}]
     */
    primers: PropTypes.arrayOf(PrimerShape),

    /**
     * Translation tracks / ORFs to render.
     * [{start:number, end:number, name?:string, frame?:0|1|2|-1|-2|-3, direction?:1|-1|0, aa?:string}]
     */
    translations: PropTypes.arrayOf(TranslationShape),

    /**
     * Restriction enzymes to show. Either names ["EcoRI", ...] or detailed objects.
     */
    enzymes: PropTypes.arrayOf(EnzymeShape),

    /**
     * Highlighted ranges on the sequence.
     * [{start:number, end:number, color?:string, underline?:boolean, opacity?:number, label?:string}]
     */
    highlights: PropTypes.arrayOf(HighlightShape),

    /**
     * Initial zoom window for the linear viewer: {start?:number, end?:number}.
     */
    zoom: ZoomShape,

    /**
     * Base colors override, e.g. {A:"#...", C:"#...", G:"#...", T:"#...", U:"#..."}.
     */
    bpColors: BpColorsShape,

    /**
     * Current selection returned to Dash callbacks.
     * {start:number, end:number, clockwise?:boolean}
     */
    selection: SelectionShape,

    /**
     * Dash-injected callback to report prop changes back to Dash.
     */
    setProps: PropTypes.func,

    /**
     * Optional JS-only selection handler when using this component in pure React.
     */
    onSelection: PropTypes.func,
};

DashSeqviz.propTypes = SeqvizPropTypes;
export default DashSeqviz;
