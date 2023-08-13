// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('sample_project.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('sample_project.components');
if((typeof sample_project !== 'undefined') && (typeof sample_project.core !== 'undefined') && (typeof sample_project.core.state !== 'undefined')){
} else {
sample_project.core.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
sample_project.core.main = (function sample_project$core$main(){
cljs.core.println.call(null,"Hello, from main!");

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sample_project.components.hello_world], null),document.getElementById("app"));
});
goog.exportSymbol('sample_project.core.main', sample_project.core.main);
sample_project.core.main.call(null);

//# sourceMappingURL=core.js.map
