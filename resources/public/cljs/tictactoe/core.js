// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('tictactoe.components');
tictactoe.core.main = (function tictactoe$core$main(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.components.main], null),document.getElementById("app"));
});
goog.exportSymbol('tictactoe.core.main', tictactoe.core.main);
tictactoe.core.main.call(null);

//# sourceMappingURL=core.js.map
