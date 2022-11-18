// ==UserScript==
// @name         MathJax to plain
// @namespace    https://github.com/Senioriousg
// @version      1.1
// @description  Convert MathJax2 equation to plain
// @author       Seniorious
// @match        *://*/*
// @updateURL    https://github.com/Senioriousg/MathJax-to-plain/raw/main/Mathjax-to-plain.js
// @downloadURL  https://github.com/Senioriousg/MathJax-to-plain/raw/main/Mathjax-to-plain.js
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js
// @grant        none
// ==/UserScript==

let pattern = /MathJax-Element[0-9]*/;

window.MJ2toPlain = function() {
  $("span.MathJax").remove();
  $("span.MathJax_Preview").remove();
  $("script").filter(function(index, ele) {
    return pattern.test(ele.id) && ele.type == "math/tex";
  }).map(function() {
    $(this).after("$" + $(this).html() + "$");
    $(this).remove();
  });
  $("script").filter(function(index, ele) {
    return pattern.test(ele.id) && ele.type == "math/tex; mode=display";
  }).map(function() {
    $(this).after("$$" + $(this).html() + "$$");
    $(this).remove();
  });
};
