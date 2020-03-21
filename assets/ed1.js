var highlight = ace.require("ace/ext/static_highlight");

function qsa(sel) {
    return Array.apply(null, document.querySelectorAll(sel));
}

qsa(".ed1").forEach(function(codeEl) {
    highlight(codeEl, {
        mode: "ace/mode/ed1",
        theme: "ace/theme/merbivore_soft",
        startLineNumber: 1,
        showGutter: false,
        trim: true
    }, function(highlighted) {
        console.log(codeEl);
        codeEl.style.visibility = 'initial';
    });
});
