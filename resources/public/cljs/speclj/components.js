// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.components');
goog.require('cljs.core');

/**
 * @interface
 */
speclj.components.SpecComponent = function(){};

var speclj$components$SpecComponent$install$dyn_5267 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.components.install[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.components.install["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"SpecComponent.install",this$);
}
}
});
speclj.components.install = (function speclj$components$install(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$components$SpecComponent$install$arity$2 == null)))))){
return this$.speclj$components$SpecComponent$install$arity$2(this$,description);
} else {
return speclj$components$SpecComponent$install$dyn_5267.call(null,this$,description);
}
});

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__5268 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__5269 = null;
var count__5270 = (0);
var i__5271 = (0);
while(true){
if((i__5271 < count__5270)){
var component = cljs.core._nth.call(null,chunk__5269,i__5271);
speclj.components.install.call(null,component,description);


var G__5284 = seq__5268;
var G__5285 = chunk__5269;
var G__5286 = count__5270;
var G__5287 = (i__5271 + (1));
seq__5268 = G__5284;
chunk__5269 = G__5285;
count__5270 = G__5286;
i__5271 = G__5287;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5268);
if(temp__5804__auto__){
var seq__5268__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5268__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5268__$1);
var G__5288 = cljs.core.chunk_rest.call(null,seq__5268__$1);
var G__5289 = c__4556__auto__;
var G__5290 = cljs.core.count.call(null,c__4556__auto__);
var G__5291 = (0);
seq__5268 = G__5288;
chunk__5269 = G__5289;
count__5270 = G__5290;
i__5271 = G__5291;
continue;
} else {
var component = cljs.core.first.call(null,seq__5268__$1);
speclj.components.install.call(null,component,description);


var G__5292 = cljs.core.next.call(null,seq__5268__$1);
var G__5293 = null;
var G__5294 = (0);
var G__5295 = (0);
seq__5268 = G__5292;
chunk__5269 = G__5293;
count__5270 = G__5294;
i__5271 = G__5295;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.List.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__5272 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__5273 = null;
var count__5274 = (0);
var i__5275 = (0);
while(true){
if((i__5275 < count__5274)){
var component = cljs.core._nth.call(null,chunk__5273,i__5275);
speclj.components.install.call(null,component,description);


var G__5296 = seq__5272;
var G__5297 = chunk__5273;
var G__5298 = count__5274;
var G__5299 = (i__5275 + (1));
seq__5272 = G__5296;
chunk__5273 = G__5297;
count__5274 = G__5298;
i__5275 = G__5299;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5272);
if(temp__5804__auto__){
var seq__5272__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5272__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5272__$1);
var G__5300 = cljs.core.chunk_rest.call(null,seq__5272__$1);
var G__5301 = c__4556__auto__;
var G__5302 = cljs.core.count.call(null,c__4556__auto__);
var G__5303 = (0);
seq__5272 = G__5300;
chunk__5273 = G__5301;
count__5274 = G__5302;
i__5275 = G__5303;
continue;
} else {
var component = cljs.core.first.call(null,seq__5272__$1);
speclj.components.install.call(null,component,description);


var G__5304 = cljs.core.next.call(null,seq__5272__$1);
var G__5305 = null;
var G__5306 = (0);
var G__5307 = (0);
seq__5272 = G__5304;
chunk__5273 = G__5305;
count__5274 = G__5306;
i__5275 = G__5307;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__5276 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__5277 = null;
var count__5278 = (0);
var i__5279 = (0);
while(true){
if((i__5279 < count__5278)){
var component = cljs.core._nth.call(null,chunk__5277,i__5279);
speclj.components.install.call(null,component,description);


var G__5308 = seq__5276;
var G__5309 = chunk__5277;
var G__5310 = count__5278;
var G__5311 = (i__5279 + (1));
seq__5276 = G__5308;
chunk__5277 = G__5309;
count__5278 = G__5310;
i__5279 = G__5311;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5276);
if(temp__5804__auto__){
var seq__5276__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5276__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5276__$1);
var G__5312 = cljs.core.chunk_rest.call(null,seq__5276__$1);
var G__5313 = c__4556__auto__;
var G__5314 = cljs.core.count.call(null,c__4556__auto__);
var G__5315 = (0);
seq__5276 = G__5312;
chunk__5277 = G__5313;
count__5278 = G__5314;
i__5279 = G__5315;
continue;
} else {
var component = cljs.core.first.call(null,seq__5276__$1);
speclj.components.install.call(null,component,description);


var G__5316 = cljs.core.next.call(null,seq__5276__$1);
var G__5317 = null;
var G__5318 = (0);
var G__5319 = (0);
seq__5276 = G__5316;
chunk__5277 = G__5317;
count__5278 = G__5318;
i__5279 = G__5319;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var this$__$1 = this;
var seq__5280 = cljs.core.seq.call(null,cljs.core.seq.call(null,this$__$1));
var chunk__5281 = null;
var count__5282 = (0);
var i__5283 = (0);
while(true){
if((i__5283 < count__5282)){
var component = cljs.core._nth.call(null,chunk__5281,i__5283);
speclj.components.install.call(null,component,description);


var G__5320 = seq__5280;
var G__5321 = chunk__5281;
var G__5322 = count__5282;
var G__5323 = (i__5283 + (1));
seq__5280 = G__5320;
chunk__5281 = G__5321;
count__5282 = G__5322;
i__5283 = G__5323;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5280);
if(temp__5804__auto__){
var seq__5280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5280__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5280__$1);
var G__5324 = cljs.core.chunk_rest.call(null,seq__5280__$1);
var G__5325 = c__4556__auto__;
var G__5326 = cljs.core.count.call(null,c__4556__auto__);
var G__5327 = (0);
seq__5280 = G__5324;
chunk__5281 = G__5325;
count__5282 = G__5326;
i__5283 = G__5327;
continue;
} else {
var component = cljs.core.first.call(null,seq__5280__$1);
speclj.components.install.call(null,component,description);


var G__5328 = cljs.core.next.call(null,seq__5280__$1);
var G__5329 = null;
var G__5330 = (0);
var G__5331 = (0);
seq__5280 = G__5328;
chunk__5281 = G__5329;
count__5282 = G__5330;
i__5283 = G__5331;
continue;
}
} else {
return null;
}
}
break;
}
}));

goog.object.set(speclj.components.SpecComponent,"null",true);

goog.object.set(speclj.components.install,"null",(function (this$,description){
throw cljs.core.ex_info.call(null,"Oops!  It looks like you tried to add 'nil' to a spec.  That's probabaly not what you wanted.",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(speclj.components.SpecComponent,"object",true);

goog.object.set(speclj.components.install,"object",(function (this$,description){
return null;
}));

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Description = (function (name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
this.name = name;
this.ns = ns;
this.parent = parent;
this.children = children;
this.charcteristics = charcteristics;
this.tags = tags;
this.befores = befores;
this.before_alls = before_alls;
this.afters = afters;
this.after_alls = after_alls;
this.withs = withs;
this.with_alls = with_alls;
this.arounds = arounds;
this.around_alls = around_alls;
});
(speclj.components.Description.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,this$__$1.parent,description);

return cljs.core.swap_BANG_.call(null,description.children,cljs.core.conj,this$__$1);
}));

(speclj.components.Description.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["Description: ","\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Description.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"charcteristics","charcteristics",504516064,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"befores","befores",695378544,null),new cljs.core.Symbol(null,"before-alls","before-alls",2010698475,null),new cljs.core.Symbol(null,"afters","afters",730798999,null),new cljs.core.Symbol(null,"after-alls","after-alls",1969611356,null),new cljs.core.Symbol(null,"withs","withs",86966390,null),new cljs.core.Symbol(null,"with-alls","with-alls",307687875,null),new cljs.core.Symbol(null,"arounds","arounds",203860653,null),new cljs.core.Symbol(null,"around-alls","around-alls",919934233,null)], null);
}));

(speclj.components.Description.cljs$lang$type = true);

(speclj.components.Description.cljs$lang$ctorStr = "speclj.components/Description");

(speclj.components.Description.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/Description");
}));

/**
 * Positional factory function for speclj.components/Description.
 */
speclj.components.__GT_Description = (function speclj$components$__GT_Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls){
return (new speclj.components.Description(name,ns,parent,children,charcteristics,tags,befores,before_alls,afters,after_alls,withs,with_alls,arounds,around_alls));
});

speclj.components.new_description = (function speclj$components$new_description(name,ns){
return (new speclj.components.Description(name,ns,cljs.core.atom.call(null,null),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {speclj.components.Object}
*/
speclj.components.Characteristic = (function (name,parent,body){
this.name = name;
this.parent = parent;
this.body = body;
});
(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Characteristic.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_.call(null,this$__$1.parent,description);

return cljs.core.swap_BANG_.call(null,description.charcteristics,cljs.core.conj,this$__$1);
}));

(speclj.components.Characteristic.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name),"\""].join('');
}));

(speclj.components.Characteristic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.Characteristic.cljs$lang$type = true);

(speclj.components.Characteristic.cljs$lang$ctorStr = "speclj.components/Characteristic");

(speclj.components.Characteristic.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/Characteristic");
}));

/**
 * Positional factory function for speclj.components/Characteristic.
 */
speclj.components.__GT_Characteristic = (function speclj$components$__GT_Characteristic(name,parent,body){
return (new speclj.components.Characteristic(name,parent,body));
});

speclj.components.new_characteristic = (function speclj$components$new_characteristic(var_args){
var G__5333 = arguments.length;
switch (G__5333) {
case 2:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$2 = (function (name,body){
return (new speclj.components.Characteristic(name,cljs.core.atom.call(null,null),body));
}));

(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3 = (function (name,description,body){
return (new speclj.components.Characteristic(name,cljs.core.atom.call(null,description),body));
}));

(speclj.components.new_characteristic.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Before = (function (body){
this.body = body;
});
(speclj.components.Before.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Before.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.befores,cljs.core.conj,this$__$1);
}));

(speclj.components.Before.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.Before.cljs$lang$type = true);

(speclj.components.Before.cljs$lang$ctorStr = "speclj.components/Before");

(speclj.components.Before.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/Before");
}));

/**
 * Positional factory function for speclj.components/Before.
 */
speclj.components.__GT_Before = (function speclj$components$__GT_Before(body){
return (new speclj.components.Before(body));
});

speclj.components.new_before = (function speclj$components$new_before(body){
return (new speclj.components.Before(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.After = (function (body){
this.body = body;
});
(speclj.components.After.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.After.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.afters,cljs.core.conj,this$__$1);
}));

(speclj.components.After.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.After.cljs$lang$type = true);

(speclj.components.After.cljs$lang$ctorStr = "speclj.components/After");

(speclj.components.After.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/After");
}));

/**
 * Positional factory function for speclj.components/After.
 */
speclj.components.__GT_After = (function speclj$components$__GT_After(body){
return (new speclj.components.After(body));
});

speclj.components.new_after = (function speclj$components$new_after(body){
return (new speclj.components.After(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Around = (function (body){
this.body = body;
});
(speclj.components.Around.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Around.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.arounds,cljs.core.conj,this$__$1);
}));

(speclj.components.Around.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.Around.cljs$lang$type = true);

(speclj.components.Around.cljs$lang$ctorStr = "speclj.components/Around");

(speclj.components.Around.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/Around");
}));

/**
 * Positional factory function for speclj.components/Around.
 */
speclj.components.__GT_Around = (function speclj$components$__GT_Around(body){
return (new speclj.components.Around(body));
});

speclj.components.new_around = (function speclj$components$new_around(body){
return (new speclj.components.Around(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.BeforeAll = (function (body){
this.body = body;
});
(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.BeforeAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.before_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.BeforeAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.BeforeAll.cljs$lang$type = true);

(speclj.components.BeforeAll.cljs$lang$ctorStr = "speclj.components/BeforeAll");

(speclj.components.BeforeAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/BeforeAll");
}));

/**
 * Positional factory function for speclj.components/BeforeAll.
 */
speclj.components.__GT_BeforeAll = (function speclj$components$__GT_BeforeAll(body){
return (new speclj.components.BeforeAll(body));
});

speclj.components.new_before_all = (function speclj$components$new_before_all(body){
return (new speclj.components.BeforeAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AfterAll = (function (body){
this.body = body;
});
(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AfterAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.after_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AfterAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.AfterAll.cljs$lang$type = true);

(speclj.components.AfterAll.cljs$lang$ctorStr = "speclj.components/AfterAll");

(speclj.components.AfterAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/AfterAll");
}));

/**
 * Positional factory function for speclj.components/AfterAll.
 */
speclj.components.__GT_AfterAll = (function speclj$components$__GT_AfterAll(body){
return (new speclj.components.AfterAll(body));
});

speclj.components.new_after_all = (function speclj$components$new_after_all(body){
return (new speclj.components.AfterAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.AroundAll = (function (body){
this.body = body;
});
(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.AroundAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.around_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.AroundAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"body","body",-408674142,null)], null);
}));

(speclj.components.AroundAll.cljs$lang$type = true);

(speclj.components.AroundAll.cljs$lang$ctorStr = "speclj.components/AroundAll");

(speclj.components.AroundAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/AroundAll");
}));

/**
 * Positional factory function for speclj.components/AroundAll.
 */
speclj.components.__GT_AroundAll = (function speclj$components$__GT_AroundAll(body){
return (new speclj.components.AroundAll(body));
});

speclj.components.new_around_all = (function speclj$components$new_around_all(body){
return (new speclj.components.AroundAll(body));
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.With = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.With.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.With.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.withs,cljs.core.conj,this$__$1);
}));

(speclj.components.With.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943),cljs.core.deref.call(null,self__.value))){
cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else {
}

return cljs.core.deref.call(null,self__.value);
}));

(speclj.components.With.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"unique-name","unique-name",-487981563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bang","bang",-1936704923,null)], null);
}));

(speclj.components.With.cljs$lang$type = true);

(speclj.components.With.cljs$lang$ctorStr = "speclj.components/With");

(speclj.components.With.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/With");
}));

/**
 * Positional factory function for speclj.components/With.
 */
speclj.components.__GT_With = (function speclj$components$__GT_With(name,unique_name,body,value,bang){
return (new speclj.components.With(name,unique_name,body,value,bang));
});

speclj.components.reset_with = (function speclj$components$reset_with(with$){
cljs.core.reset_BANG_.call(null,with$.value,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943));

if(cljs.core.truth_(with$.bang)){
return cljs.core.deref.call(null,with$);
} else {
return null;
}
});
speclj.components.new_with = (function speclj$components$new_with(name,unique_name,body,bang){
var with$ = (new speclj.components.With(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943)),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref.call(null,with$);
} else {
}

return with$;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
 * @implements {cljs.core.IDeref}
*/
speclj.components.WithAll = (function (name,unique_name,body,value,bang){
this.name = name;
this.unique_name = unique_name;
this.body = body;
this.value = value;
this.bang = bang;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(speclj.components.WithAll.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.WithAll.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.with_alls,cljs.core.conj,this$__$1);
}));

(speclj.components.WithAll.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943),cljs.core.deref.call(null,self__.value))){
cljs.core.reset_BANG_.call(null,self__.value,self__.body.call(null));
} else {
}

return cljs.core.deref.call(null,self__.value);
}));

(speclj.components.WithAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"unique-name","unique-name",-487981563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bang","bang",-1936704923,null)], null);
}));

(speclj.components.WithAll.cljs$lang$type = true);

(speclj.components.WithAll.cljs$lang$ctorStr = "speclj.components/WithAll");

(speclj.components.WithAll.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/WithAll");
}));

/**
 * Positional factory function for speclj.components/WithAll.
 */
speclj.components.__GT_WithAll = (function speclj$components$__GT_WithAll(name,unique_name,body,value,bang){
return (new speclj.components.WithAll(name,unique_name,body,value,bang));
});

speclj.components.new_with_all = (function speclj$components$new_with_all(name,unique_name,body,bang){
var with_all = (new speclj.components.WithAll(name,unique_name,body,cljs.core.atom.call(null,new cljs.core.Keyword("speclj.components","none","speclj.components/none",222465943)),bang));
if(cljs.core.truth_(bang)){
cljs.core.deref.call(null,with_all);
} else {
}

return with_all;
});

/**
* @constructor
 * @implements {speclj.components.SpecComponent}
*/
speclj.components.Tag = (function (name){
this.name = name;
});
(speclj.components.Tag.prototype.speclj$components$SpecComponent$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Tag.prototype.speclj$components$SpecComponent$install$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,description.tags,cljs.core.conj,self__.name);
}));

(speclj.components.Tag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
}));

(speclj.components.Tag.cljs$lang$type = true);

(speclj.components.Tag.cljs$lang$ctorStr = "speclj.components/Tag");

(speclj.components.Tag.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.components/Tag");
}));

/**
 * Positional factory function for speclj.components/Tag.
 */
speclj.components.__GT_Tag = (function speclj$components$__GT_Tag(name){
return (new speclj.components.Tag(name));
});

speclj.components.new_tag = (function speclj$components$new_tag(name){
return (new speclj.components.Tag(name));
});

//# sourceMappingURL=components.js.map
