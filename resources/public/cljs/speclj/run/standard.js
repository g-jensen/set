// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.counter = cljs.core.atom.call(null,(0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description.call(null,description,reporters);
return cljs.core.swap_BANG_.call(null,self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__6390_6394 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.descriptions));
var chunk__6391_6395 = null;
var count__6392_6396 = (0);
var i__6393_6397 = (0);
while(true){
if((i__6393_6397 < count__6392_6396)){
var description_6398 = cljs.core._nth.call(null,chunk__6391_6395,i__6393_6397);
speclj.running.run_description.call(null,this$__$1,description_6398,reporters);


var G__6399 = seq__6390_6394;
var G__6400 = chunk__6391_6395;
var G__6401 = count__6392_6396;
var G__6402 = (i__6393_6397 + (1));
seq__6390_6394 = G__6399;
chunk__6391_6395 = G__6400;
count__6392_6396 = G__6401;
i__6393_6397 = G__6402;
continue;
} else {
var temp__5804__auto___6403 = cljs.core.seq.call(null,seq__6390_6394);
if(temp__5804__auto___6403){
var seq__6390_6404__$1 = temp__5804__auto___6403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6390_6404__$1)){
var c__5565__auto___6405 = cljs.core.chunk_first.call(null,seq__6390_6404__$1);
var G__6406 = cljs.core.chunk_rest.call(null,seq__6390_6404__$1);
var G__6407 = c__5565__auto___6405;
var G__6408 = cljs.core.count.call(null,c__5565__auto___6405);
var G__6409 = (0);
seq__6390_6394 = G__6406;
chunk__6391_6395 = G__6407;
count__6392_6396 = G__6408;
i__6393_6397 = G__6409;
continue;
} else {
var description_6410 = cljs.core.first.call(null,seq__6390_6404__$1);
speclj.running.run_description.call(null,this$__$1,description_6410,reporters);


var G__6411 = cljs.core.next.call(null,seq__6390_6404__$1);
var G__6412 = null;
var G__6413 = (0);
var G__6414 = (0);
seq__6390_6394 = G__6411;
chunk__6391_6395 = G__6412;
count__6392_6396 = G__6413;
i__6393_6397 = G__6414;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_.call(null,reporters,cljs.core.deref.call(null,self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write.call(null,writer__5328__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write.call(null,writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer.call(null,cljs.core.deref.call(null,x__$1.descriptions),writer,opts);

return cljs.core._write.call(null,writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write.call(null,writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.call(null,speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_.call(null,speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_.call(null,speclj.config.default_runner,speclj.run.standard.new_standard_runner.call(null));
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5772__auto__ = [];
var len__5766__auto___6416 = arguments.length;
var i__5767__auto___6417 = (0);
while(true){
if((i__5767__auto___6417 < len__5766__auto___6416)){
args__5772__auto__.push((arguments[i__5767__auto___6417]));

var G__6418 = (i__5767__auto___6417 + (1));
i__5767__auto___6417 = G__6418;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
var config = cljs.core.apply.call(null,cljs.core.hash_map,configurations);
var config__$1 = cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),config);
return speclj.config.with_config.call(null,config__$1,(function (){
var temp__5802__auto___6419 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5802__auto___6419)){
var filter_msg_6420 = temp__5802__auto___6419;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_6420);
} else {
}

speclj.running.run_and_report.call(null,speclj.config.active_runner.call(null),speclj.config.active_reporters.call(null));

return speclj.results.fail_count.call(null,cljs.core.deref.call(null,speclj.config.active_runner.call(null).results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq6415){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6415));
}));


//# sourceMappingURL=standard.js.map
