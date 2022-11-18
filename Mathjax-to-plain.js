// ==UserScript==
// @name         MathJax to plain
// @version      0.1
// @description  Convert MathJax2 equation to plain
// @author       Seniorious
// @match        *://*/*
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
  });
  $("script").filter(function(index, ele) {
    return pattern.test(ele.id) && ele.type == "math/tex";
  }).remove();
  $("script").filter(function(index, ele) {
    return pattern.test(ele.id) && ele.type == "math/tex; mode=display";
  }).map(function() {
    $(this).after("$$" + $(this).html() + "$$");
  });
  $("script").filter(function(index, ele) {
    return pattern.test(ele.id) && ele.type == "math/tex; mode=display";
  }).remove();
};
