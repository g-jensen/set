// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5077__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5078__i = 0, G__5078__a = new Array(arguments.length -  0);
while (G__5078__i < G__5078__a.length) {G__5078__a[G__5078__i] = arguments[G__5078__i + 0]; ++G__5078__i;}
  args = new cljs.core.IndexedSeq(G__5078__a,0,null);
} 
return G__5077__delegate.call(this,args);};
G__5077.cljs$lang$maxFixedArity = 0;
G__5077.cljs$lang$applyTo = (function (arglist__5079){
var args = cljs.core.seq(arglist__5079);
return G__5077__delegate(args);
});
G__5077.cljs$core$IFn$_invoke$arity$variadic = G__5077__delegate;
return G__5077;
})()
);

(o.error = (function() { 
var G__5080__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5081__i = 0, G__5081__a = new Array(arguments.length -  0);
while (G__5081__i < G__5081__a.length) {G__5081__a[G__5081__i] = arguments[G__5081__i + 0]; ++G__5081__i;}
  args = new cljs.core.IndexedSeq(G__5081__a,0,null);
} 
return G__5080__delegate.call(this,args);};
G__5080.cljs$lang$maxFixedArity = 0;
G__5080.cljs$lang$applyTo = (function (arglist__5082){
var args = cljs.core.seq(arglist__5082);
return G__5080__delegate(args);
});
G__5080.cljs$core$IFn$_invoke$arity$variadic = G__5080__delegate;
return G__5080;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
