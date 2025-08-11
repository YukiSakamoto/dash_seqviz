# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashSeqviz <- function(id=NULL, annotations=NULL, bpColors=NULL, className=NULL, enzymes=NULL, highlights=NULL, name=NULL, onSelection=NULL, primers=NULL, selection=NULL, seq=NULL, style=NULL, translations=NULL, viewer=NULL, zoom=NULL) {
    
    props <- list(id=id, annotations=annotations, bpColors=bpColors, className=className, enzymes=enzymes, highlights=highlights, name=name, onSelection=onSelection, primers=primers, selection=selection, seq=seq, style=style, translations=translations, viewer=viewer, zoom=zoom)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashSeqviz',
        namespace = 'dash_seqviz',
        propNames = c('id', 'annotations', 'bpColors', 'className', 'enzymes', 'highlights', 'name', 'onSelection', 'primers', 'selection', 'seq', 'style', 'translations', 'viewer', 'zoom'),
        package = 'dashSeqviz'
        )

    structure(component, class = c('dash_component', 'list'))
}
