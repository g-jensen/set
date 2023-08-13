// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__5711 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5712 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5712);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__5713 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__5714 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__5714);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5713);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__5711);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__5716 = arguments.length;
switch (G__5716) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__5717 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__5717,(0),null);
var callback = cljs.core.nth.call(null,vec__5717,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__5721_5737 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__5722_5738 = null;
var count__5723_5739 = (0);
var i__5724_5740 = (0);
while(true){
if((i__5724_5740 < count__5723_5739)){
var vec__5731_5741 = cljs.core._nth.call(null,chunk__5722_5738,i__5724_5740);
var container_5742 = cljs.core.nth.call(null,vec__5731_5741,(0),null);
var comp_5743 = cljs.core.nth.call(null,vec__5731_5741,(1),null);
reagent.dom.re_render_component.call(null,comp_5743,container_5742);


var G__5744 = seq__5721_5737;
var G__5745 = chunk__5722_5738;
var G__5746 = count__5723_5739;
var G__5747 = (i__5724_5740 + (1));
seq__5721_5737 = G__5744;
chunk__5722_5738 = G__5745;
count__5723_5739 = G__5746;
i__5724_5740 = G__5747;
continue;
} else {
var temp__5804__auto___5748 = cljs.core.seq.call(null,seq__5721_5737);
if(temp__5804__auto___5748){
var seq__5721_5749__$1 = temp__5804__auto___5748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5721_5749__$1)){
var c__5565__auto___5750 = cljs.core.chunk_first.call(null,seq__5721_5749__$1);
var G__5751 = cljs.core.chunk_rest.call(null,seq__5721_5749__$1);
var G__5752 = c__5565__auto___5750;
var G__5753 = cljs.core.count.call(null,c__5565__auto___5750);
var G__5754 = (0);
seq__5721_5737 = G__5751;
chunk__5722_5738 = G__5752;
count__5723_5739 = G__5753;
i__5724_5740 = G__5754;
continue;
} else {
var vec__5734_5755 = cljs.core.first.call(null,seq__5721_5749__$1);
var container_5756 = cljs.core.nth.call(null,vec__5734_5755,(0),null);
var comp_5757 = cljs.core.nth.call(null,vec__5734_5755,(1),null);
reagent.dom.re_render_component.call(null,comp_5757,container_5756);


var G__5758 = cljs.core.next.call(null,seq__5721_5749__$1);
var G__5759 = null;
var G__5760 = (0);
var G__5761 = (0);
seq__5721_5737 = G__5758;
chunk__5722_5738 = G__5759;
count__5723_5739 = G__5760;
i__5724_5740 = G__5761;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map
