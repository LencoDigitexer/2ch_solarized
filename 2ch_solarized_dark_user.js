// ==UserScript==
// @name         2ch solarized dark
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Append solarized theme in 2ch
// @author       LencoDigitexer
// @match        http://2ch.hk/*
// @match        https://2ch.hk/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}


addGlobalStyle('body { color: #93a1a1; background: #002b36; }');
addGlobalStyle('.post_type_reply, .pager, .qr, .bb, .fm__header { background: #073642}');
addGlobalStyle('.unkfunc{color: #859900;}');
addGlobalStyle('a, .a-link-emulator {color: #b58900;}');
addGlobalStyle('.post__reflink {color: #b58900;}');
addGlobalStyle('.post__anon {color: #b58900;}');
