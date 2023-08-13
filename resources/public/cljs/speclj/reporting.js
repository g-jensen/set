// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__5715_SHARP_){
return p1__5715_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_5716 = (function (reporter,message){
var x__5390__auto__ = (((reporter == null))?null:reporter);
var m__5391__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,reporter,message);
} else {
var m__5389__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_5716.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_5717 = (function (this$,description){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,description);
} else {
var m__5389__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_5717.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_5718 = (function (this$,result){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,result);
} else {
var m__5389__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_5718.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_5719 = (function (this$,result){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,result);
} else {
var m__5389__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_5719.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_5720 = (function (this$,result){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,result);
} else {
var m__5389__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_5720.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_5721 = (function (this$,results){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,results);
} else {
var m__5389__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_5721.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_5722 = (function (this$,exception){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,exception);
} else {
var m__5389__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_5722.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__5723 = cljs.core.seq.call(null,reporters);
var chunk__5724 = null;
var count__5725 = (0);
var i__5726 = (0);
while(true){
if((i__5726 < count__5725)){
var reporter = cljs.core._nth.call(null,chunk__5724,i__5726);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5727 = seq__5723;
var G__5728 = chunk__5724;
var G__5729 = count__5725;
var G__5730 = (i__5726 + (1));
seq__5723 = G__5727;
chunk__5724 = G__5728;
count__5725 = G__5729;
i__5726 = G__5730;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5723);
if(temp__5804__auto__){
var seq__5723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5723__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5723__$1);
var G__5731 = cljs.core.chunk_rest.call(null,seq__5723__$1);
var G__5732 = c__5565__auto__;
var G__5733 = cljs.core.count.call(null,c__5565__auto__);
var G__5734 = (0);
seq__5723 = G__5731;
chunk__5724 = G__5732;
count__5725 = G__5733;
i__5726 = G__5734;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5723__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__5735 = cljs.core.next.call(null,seq__5723__$1);
var G__5736 = null;
var G__5737 = (0);
var G__5738 = (0);
seq__5723 = G__5735;
chunk__5724 = G__5736;
count__5725 = G__5737;
i__5726 = G__5738;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.FailResult,(function (result,reporters){
var seq__5739 = cljs.core.seq.call(null,reporters);
var chunk__5740 = null;
var count__5741 = (0);
var i__5742 = (0);
while(true){
if((i__5742 < count__5741)){
var reporter = cljs.core._nth.call(null,chunk__5740,i__5742);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5743 = seq__5739;
var G__5744 = chunk__5740;
var G__5745 = count__5741;
var G__5746 = (i__5742 + (1));
seq__5739 = G__5743;
chunk__5740 = G__5744;
count__5741 = G__5745;
i__5742 = G__5746;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5739);
if(temp__5804__auto__){
var seq__5739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5739__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5739__$1);
var G__5747 = cljs.core.chunk_rest.call(null,seq__5739__$1);
var G__5748 = c__5565__auto__;
var G__5749 = cljs.core.count.call(null,c__5565__auto__);
var G__5750 = (0);
seq__5739 = G__5747;
chunk__5740 = G__5748;
count__5741 = G__5749;
i__5742 = G__5750;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5739__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5751 = cljs.core.next.call(null,seq__5739__$1);
var G__5752 = null;
var G__5753 = (0);
var G__5754 = (0);
seq__5739 = G__5751;
chunk__5740 = G__5752;
count__5741 = G__5753;
i__5742 = G__5754;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PendingResult,(function (result,reporters){
var seq__5755 = cljs.core.seq.call(null,reporters);
var chunk__5756 = null;
var count__5757 = (0);
var i__5758 = (0);
while(true){
if((i__5758 < count__5757)){
var reporter = cljs.core._nth.call(null,chunk__5756,i__5758);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5759 = seq__5755;
var G__5760 = chunk__5756;
var G__5761 = count__5757;
var G__5762 = (i__5758 + (1));
seq__5755 = G__5759;
chunk__5756 = G__5760;
count__5757 = G__5761;
i__5758 = G__5762;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5755);
if(temp__5804__auto__){
var seq__5755__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5755__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5755__$1);
var G__5763 = cljs.core.chunk_rest.call(null,seq__5755__$1);
var G__5764 = c__5565__auto__;
var G__5765 = cljs.core.count.call(null,c__5565__auto__);
var G__5766 = (0);
seq__5755 = G__5763;
chunk__5756 = G__5764;
count__5757 = G__5765;
i__5758 = G__5766;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5755__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5767 = cljs.core.next.call(null,seq__5755__$1);
var G__5768 = null;
var G__5769 = (0);
var G__5770 = (0);
seq__5755 = G__5767;
chunk__5756 = G__5768;
count__5757 = G__5769;
i__5758 = G__5770;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.ErrorResult,(function (result,reporters){
var seq__5771 = cljs.core.seq.call(null,reporters);
var chunk__5772 = null;
var count__5773 = (0);
var i__5774 = (0);
while(true){
if((i__5774 < count__5773)){
var reporter = cljs.core._nth.call(null,chunk__5772,i__5774);
speclj.reporting.report_error.call(null,reporter,result);


var G__5775 = seq__5771;
var G__5776 = chunk__5772;
var G__5777 = count__5773;
var G__5778 = (i__5774 + (1));
seq__5771 = G__5775;
chunk__5772 = G__5776;
count__5773 = G__5777;
i__5774 = G__5778;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5771);
if(temp__5804__auto__){
var seq__5771__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5771__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5771__$1);
var G__5779 = cljs.core.chunk_rest.call(null,seq__5771__$1);
var G__5780 = c__5565__auto__;
var G__5781 = cljs.core.count.call(null,c__5565__auto__);
var G__5782 = (0);
seq__5771 = G__5779;
chunk__5772 = G__5780;
count__5773 = G__5781;
i__5774 = G__5782;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5771__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__5783 = cljs.core.next.call(null,seq__5771__$1);
var G__5784 = null;
var G__5785 = (0);
var G__5786 = (0);
seq__5771 = G__5783;
chunk__5772 = G__5784;
count__5773 = G__5785;
i__5774 = G__5786;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer.call(null,"31");
speclj.reporting.green = speclj.reporting.stylizer.call(null,"32");
speclj.reporting.yellow = speclj.reporting.stylizer.call(null,"33");
speclj.reporting.grey = speclj.reporting.stylizer.call(null,"90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.call(null,"\t...",n,"stack levels elided ...");
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_5787 = speclj.platform.stack_trace.call(null,exception);
var elides_5788 = (0);
while(true){
if(cljs.core.seq.call(null,levels_5787)){
var level_5789 = cljs.core.first.call(null,levels_5787);
if(speclj.platform.elide_level_QMARK_.call(null,level_5789)){
var G__5790 = cljs.core.rest.call(null,levels_5787);
var G__5791 = (elides_5788 + (1));
levels_5787 = G__5790;
elides_5788 = G__5791;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_5788);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_5789));

var G__5792 = cljs.core.rest.call(null,levels_5787);
var G__5793 = (0);
levels_5787 = G__5792;
elides_5788 = G__5793;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_5788);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause.call(null,exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return speclj.reporting.print_exception.call(null,"Caused by:",cause);
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.call(null,prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
} else {
cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception));
}

return speclj.reporting.print_stack_levels.call(null,exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5794_5798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5795_5799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5796_5800 = true;
var _STAR_print_fn_STAR__temp_val__5797_5801 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5796_5800);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5797_5801);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5795_5799);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5794_5798);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5772__auto__ = [];
var len__5766__auto___5805 = arguments.length;
var i__5767__auto___5806 = (0);
while(true){
if((i__5767__auto___5806 < len__5766__auto___5805)){
args__5772__auto__.push((arguments[i__5767__auto___5806]));

var G__5807 = (i__5767__auto___5806 + (1));
i__5767__auto___5806 = G__5807;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__5802_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5802_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq5803){
var G__5804 = cljs.core.first.call(null,seq5803);
var seq5803__$1 = cljs.core.next.call(null,seq5803);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5804,seq5803__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5772__auto__ = [];
var len__5766__auto___5810 = arguments.length;
var i__5767__auto___5811 = (0);
while(true){
if((i__5767__auto___5811 < len__5766__auto___5810)){
args__5772__auto__.push((arguments[i__5767__auto___5811]));

var G__5812 = (i__5767__auto___5811 + (1));
i__5767__auto___5811 = G__5812;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.call(null,(function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.call(null,spaces));
return cljs.core.apply.call(null,speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq5808){
var G__5809 = cljs.core.first.call(null,seq5808);
var seq5808__$1 = cljs.core.next.call(null,seq5808);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5809,seq5808__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__5813 = cljs.core.seq.call(null,reporters);
var chunk__5814 = null;
var count__5815 = (0);
var i__5816 = (0);
while(true){
if((i__5816 < count__5815)){
var reporter = cljs.core._nth.call(null,chunk__5814,i__5816);
speclj.reporting.report_description.call(null,reporter,description);


var G__5817 = seq__5813;
var G__5818 = chunk__5814;
var G__5819 = count__5815;
var G__5820 = (i__5816 + (1));
seq__5813 = G__5817;
chunk__5814 = G__5818;
count__5815 = G__5819;
i__5816 = G__5820;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5813);
if(temp__5804__auto__){
var seq__5813__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5813__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5813__$1);
var G__5821 = cljs.core.chunk_rest.call(null,seq__5813__$1);
var G__5822 = c__5565__auto__;
var G__5823 = cljs.core.count.call(null,c__5565__auto__);
var G__5824 = (0);
seq__5813 = G__5821;
chunk__5814 = G__5822;
count__5815 = G__5823;
i__5816 = G__5824;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5813__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__5825 = cljs.core.next.call(null,seq__5813__$1);
var G__5826 = null;
var G__5827 = (0);
var G__5828 = (0);
seq__5813 = G__5825;
chunk__5814 = G__5826;
count__5815 = G__5827;
i__5816 = G__5828;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__5829 = cljs.core.seq.call(null,reporters);
var chunk__5830 = null;
var count__5831 = (0);
var i__5832 = (0);
while(true){
if((i__5832 < count__5831)){
var reporter = cljs.core._nth.call(null,chunk__5830,i__5832);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5833 = seq__5829;
var G__5834 = chunk__5830;
var G__5835 = count__5831;
var G__5836 = (i__5832 + (1));
seq__5829 = G__5833;
chunk__5830 = G__5834;
count__5831 = G__5835;
i__5832 = G__5836;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5829);
if(temp__5804__auto__){
var seq__5829__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5829__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5829__$1);
var G__5837 = cljs.core.chunk_rest.call(null,seq__5829__$1);
var G__5838 = c__5565__auto__;
var G__5839 = cljs.core.count.call(null,c__5565__auto__);
var G__5840 = (0);
seq__5829 = G__5837;
chunk__5830 = G__5838;
count__5831 = G__5839;
i__5832 = G__5840;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5829__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5841 = cljs.core.next.call(null,seq__5829__$1);
var G__5842 = null;
var G__5843 = (0);
var G__5844 = (0);
seq__5829 = G__5841;
chunk__5830 = G__5842;
count__5831 = G__5843;
i__5832 = G__5844;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__5845 = cljs.core.seq.call(null,reporters);
var chunk__5846 = null;
var count__5847 = (0);
var i__5848 = (0);
while(true){
if((i__5848 < count__5847)){
var reporter = cljs.core._nth.call(null,chunk__5846,i__5848);
speclj.reporting.report_message.call(null,reporter,message);


var G__5849 = seq__5845;
var G__5850 = chunk__5846;
var G__5851 = count__5847;
var G__5852 = (i__5848 + (1));
seq__5845 = G__5849;
chunk__5846 = G__5850;
count__5847 = G__5851;
i__5848 = G__5852;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5845);
if(temp__5804__auto__){
var seq__5845__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5845__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5845__$1);
var G__5853 = cljs.core.chunk_rest.call(null,seq__5845__$1);
var G__5854 = c__5565__auto__;
var G__5855 = cljs.core.count.call(null,c__5565__auto__);
var G__5856 = (0);
seq__5845 = G__5853;
chunk__5846 = G__5854;
count__5847 = G__5855;
i__5848 = G__5856;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5845__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__5857 = cljs.core.next.call(null,seq__5845__$1);
var G__5858 = null;
var G__5859 = (0);
var G__5860 = (0);
seq__5845 = G__5857;
chunk__5846 = G__5858;
count__5847 = G__5859;
i__5848 = G__5860;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__5861 = cljs.core.seq.call(null,reporters);
var chunk__5862 = null;
var count__5863 = (0);
var i__5864 = (0);
while(true){
if((i__5864 < count__5863)){
var reporter = cljs.core._nth.call(null,chunk__5862,i__5864);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5865 = seq__5861;
var G__5866 = chunk__5862;
var G__5867 = count__5863;
var G__5868 = (i__5864 + (1));
seq__5861 = G__5865;
chunk__5862 = G__5866;
count__5863 = G__5867;
i__5864 = G__5868;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5861);
if(temp__5804__auto__){
var seq__5861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5861__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__5861__$1);
var G__5869 = cljs.core.chunk_rest.call(null,seq__5861__$1);
var G__5870 = c__5565__auto__;
var G__5871 = cljs.core.count.call(null,c__5565__auto__);
var G__5872 = (0);
seq__5861 = G__5869;
chunk__5862 = G__5870;
count__5863 = G__5871;
i__5864 = G__5872;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5861__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5873 = cljs.core.next.call(null,seq__5861__$1);
var G__5874 = null;
var G__5875 = (0);
var G__5876 = (0);
seq__5861 = G__5873;
chunk__5862 = G__5874;
count__5863 = G__5875;
i__5864 = G__5876;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=reporting.js.map
