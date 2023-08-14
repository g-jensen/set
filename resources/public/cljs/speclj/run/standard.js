// Compiled by ClojureScript 1.10.764 {}
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
var seq__5654_5658 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.descriptions));
var chunk__5655_5659 = null;
var count__5656_5660 = (0);
var i__5657_5661 = (0);
while(true){
if((i__5657_5661 < count__5656_5660)){
var description_5662 = cljs.core._nth.call(null,chunk__5655_5659,i__5657_5661);
speclj.running.run_description.call(null,this$__$1,description_5662,reporters);


var G__5663 = seq__5654_5658;
var G__5664 = chunk__5655_5659;
var G__5665 = count__5656_5660;
var G__5666 = (i__5657_5661 + (1));
seq__5654_5658 = G__5663;
chunk__5655_5659 = G__5664;
count__5656_5660 = G__5665;
i__5657_5661 = G__5666;
continue;
} else {
var temp__5804__auto___5667 = cljs.core.seq.call(null,seq__5654_5658);
if(temp__5804__auto___5667){
var seq__5654_5668__$1 = temp__5804__auto___5667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5654_5668__$1)){
var c__4556__auto___5669 = cljs.core.chunk_first.call(null,seq__5654_5668__$1);
var G__5670 = cljs.core.chunk_rest.call(null,seq__5654_5668__$1);
var G__5671 = c__4556__auto___5669;
var G__5672 = cljs.core.count.call(null,c__4556__auto___5669);
var G__5673 = (0);
seq__5654_5658 = G__5670;
chunk__5655_5659 = G__5671;
count__5656_5660 = G__5672;
i__5657_5661 = G__5673;
continue;
} else {
var description_5674 = cljs.core.first.call(null,seq__5654_5668__$1);
speclj.running.run_description.call(null,this$__$1,description_5674,reporters);


var G__5675 = cljs.core.next.call(null,seq__5654_5668__$1);
var G__5676 = null;
var G__5677 = (0);
var G__5678 = (0);
seq__5654_5658 = G__5675;
chunk__5655_5659 = G__5676;
count__5656_5660 = G__5677;
i__5657_5661 = G__5678;
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

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"speclj.run.standard/StandardRunner");
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
var args__4742__auto__ = [];
var len__4736__auto___5680 = arguments.length;
var i__4737__auto___5681 = (0);
while(true){
if((i__4737__auto___5681 < len__4736__auto___5680)){
args__4742__auto__.push((arguments[i__4737__auto___5681]));

var G__5682 = (i__4737__auto___5681 + (1));
i__4737__auto___5681 = G__5682;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
var config = cljs.core.apply.call(null,cljs.core.hash_map,configurations);
var config__$1 = cljs.core.merge.call(null,cljs.core.dissoc.call(null,speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),config);
return speclj.config.with_config.call(null,config__$1,(function (){
var temp__5802__auto___5683 = speclj.tags.describe_filter.call(null);
if(cljs.core.truth_(temp__5802__auto___5683)){
var filter_msg_5684 = temp__5802__auto___5683;
speclj.reporting.report_message_STAR_.call(null,speclj.config.active_reporters.call(null),filter_msg_5684);
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
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq5679){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5679));
}));


//# sourceMappingURL=standard.js.map
