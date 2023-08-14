// Compiled by ClojureScript 1.10.764 {}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__4979_SHARP_){
return p1__4979_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_4980 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,reporter,message);
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,reporter,message);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_4980.call(null,reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_4981 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_4981.call(null,this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_4982 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_4982.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_4983 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_4983.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_4984 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,result);
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,result);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_4984.call(null,this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_4985 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,results);
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,results);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_4985.call(null,this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_4986 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,exception);
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,exception);
} else {
throw cljs.core.missing_protocol.call(null,"Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_4986.call(null,this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type.call(null,result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,speclj.reporting.report_run,speclj.results.PassResult,(function (result,reporters){
var seq__4987 = cljs.core.seq.call(null,reporters);
var chunk__4988 = null;
var count__4989 = (0);
var i__4990 = (0);
while(true){
if((i__4990 < count__4989)){
var reporter = cljs.core._nth.call(null,chunk__4988,i__4990);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4991 = seq__4987;
var G__4992 = chunk__4988;
var G__4993 = count__4989;
var G__4994 = (i__4990 + (1));
seq__4987 = G__4991;
chunk__4988 = G__4992;
count__4989 = G__4993;
i__4990 = G__4994;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__4987);
if(temp__5804__auto__){
var seq__4987__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4987__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4987__$1);
var G__4995 = cljs.core.chunk_rest.call(null,seq__4987__$1);
var G__4996 = c__4556__auto__;
var G__4997 = cljs.core.count.call(null,c__4556__auto__);
var G__4998 = (0);
seq__4987 = G__4995;
chunk__4988 = G__4996;
count__4989 = G__4997;
i__4990 = G__4998;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__4987__$1);
speclj.reporting.report_pass.call(null,reporter,result);


var G__4999 = cljs.core.next.call(null,seq__4987__$1);
var G__5000 = null;
var G__5001 = (0);
var G__5002 = (0);
seq__4987 = G__4999;
chunk__4988 = G__5000;
count__4989 = G__5001;
i__4990 = G__5002;
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
var seq__5003 = cljs.core.seq.call(null,reporters);
var chunk__5004 = null;
var count__5005 = (0);
var i__5006 = (0);
while(true){
if((i__5006 < count__5005)){
var reporter = cljs.core._nth.call(null,chunk__5004,i__5006);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5007 = seq__5003;
var G__5008 = chunk__5004;
var G__5009 = count__5005;
var G__5010 = (i__5006 + (1));
seq__5003 = G__5007;
chunk__5004 = G__5008;
count__5005 = G__5009;
i__5006 = G__5010;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5003);
if(temp__5804__auto__){
var seq__5003__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5003__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5003__$1);
var G__5011 = cljs.core.chunk_rest.call(null,seq__5003__$1);
var G__5012 = c__4556__auto__;
var G__5013 = cljs.core.count.call(null,c__4556__auto__);
var G__5014 = (0);
seq__5003 = G__5011;
chunk__5004 = G__5012;
count__5005 = G__5013;
i__5006 = G__5014;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5003__$1);
speclj.reporting.report_fail.call(null,reporter,result);


var G__5015 = cljs.core.next.call(null,seq__5003__$1);
var G__5016 = null;
var G__5017 = (0);
var G__5018 = (0);
seq__5003 = G__5015;
chunk__5004 = G__5016;
count__5005 = G__5017;
i__5006 = G__5018;
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
var seq__5019 = cljs.core.seq.call(null,reporters);
var chunk__5020 = null;
var count__5021 = (0);
var i__5022 = (0);
while(true){
if((i__5022 < count__5021)){
var reporter = cljs.core._nth.call(null,chunk__5020,i__5022);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5023 = seq__5019;
var G__5024 = chunk__5020;
var G__5025 = count__5021;
var G__5026 = (i__5022 + (1));
seq__5019 = G__5023;
chunk__5020 = G__5024;
count__5021 = G__5025;
i__5022 = G__5026;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5019);
if(temp__5804__auto__){
var seq__5019__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5019__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5019__$1);
var G__5027 = cljs.core.chunk_rest.call(null,seq__5019__$1);
var G__5028 = c__4556__auto__;
var G__5029 = cljs.core.count.call(null,c__4556__auto__);
var G__5030 = (0);
seq__5019 = G__5027;
chunk__5020 = G__5028;
count__5021 = G__5029;
i__5022 = G__5030;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5019__$1);
speclj.reporting.report_pending.call(null,reporter,result);


var G__5031 = cljs.core.next.call(null,seq__5019__$1);
var G__5032 = null;
var G__5033 = (0);
var G__5034 = (0);
seq__5019 = G__5031;
chunk__5020 = G__5032;
count__5021 = G__5033;
i__5022 = G__5034;
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
var seq__5035 = cljs.core.seq.call(null,reporters);
var chunk__5036 = null;
var count__5037 = (0);
var i__5038 = (0);
while(true){
if((i__5038 < count__5037)){
var reporter = cljs.core._nth.call(null,chunk__5036,i__5038);
speclj.reporting.report_error.call(null,reporter,result);


var G__5039 = seq__5035;
var G__5040 = chunk__5036;
var G__5041 = count__5037;
var G__5042 = (i__5038 + (1));
seq__5035 = G__5039;
chunk__5036 = G__5040;
count__5037 = G__5041;
i__5038 = G__5042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5035);
if(temp__5804__auto__){
var seq__5035__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5035__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5035__$1);
var G__5043 = cljs.core.chunk_rest.call(null,seq__5035__$1);
var G__5044 = c__4556__auto__;
var G__5045 = cljs.core.count.call(null,c__4556__auto__);
var G__5046 = (0);
seq__5035 = G__5043;
chunk__5036 = G__5044;
count__5037 = G__5045;
i__5038 = G__5046;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5035__$1);
speclj.reporting.report_error.call(null,reporter,result);


var G__5047 = cljs.core.next.call(null,seq__5035__$1);
var G__5048 = null;
var G__5049 = (0);
var G__5050 = (0);
seq__5035 = G__5047;
chunk__5036 = G__5048;
count__5037 = G__5049;
i__5038 = G__5050;
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
var levels_5051 = speclj.platform.stack_trace.call(null,exception);
var elides_5052 = (0);
while(true){
if(cljs.core.seq.call(null,levels_5051)){
var level_5053 = cljs.core.first.call(null,levels_5051);
if(speclj.platform.elide_level_QMARK_.call(null,level_5053)){
var G__5054 = cljs.core.rest.call(null,levels_5051);
var G__5055 = (elides_5052 + (1));
levels_5051 = G__5054;
elides_5052 = G__5055;
continue;
} else {
speclj.reporting.print_elides.call(null,elides_5052);

cljs.core.println.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_5053));

var G__5056 = cljs.core.rest.call(null,levels_5051);
var G__5057 = (0);
levels_5051 = G__5056;
elides_5052 = G__5057;
continue;
}
} else {
speclj.reporting.print_elides.call(null,elides_5052);
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
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5058_5062 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5059_5063 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5060_5064 = true;
var _STAR_print_fn_STAR__temp_val__5061_5065 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5060_5064);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5061_5065);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace.call(null,exception);
} else {
speclj.reporting.print_exception.call(null,null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5059_5063);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5058_5062);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5069 = arguments.length;
var i__4737__auto___5070 = (0);
while(true){
if((i__4737__auto___5070 < len__4736__auto___5069)){
args__4742__auto__.push((arguments[i__4737__auto___5070]));

var G__5071 = (i__4737__auto___5070 + (1));
i__4737__auto___5070 = G__5071;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.call(null,cljs.core.str,args);
var lines = clojure.string.split.call(null,value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.call(null,(function (p1__5066_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5066_SHARP_)].join('');
}),lines);
return clojure.string.join.call(null,speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq5067){
var G__5068 = cljs.core.first.call(null,seq5067);
var seq5067__$1 = cljs.core.next.call(null,seq5067);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5068,seq5067__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___5074 = arguments.length;
var i__4737__auto___5075 = (0);
while(true){
if((i__4737__auto___5075 < len__4736__auto___5074)){
args__4742__auto__.push((arguments[i__4737__auto___5075]));

var G__5076 = (i__4737__auto___5075 + (1));
i__4737__auto___5075 = G__5076;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq5072){
var G__5073 = cljs.core.first.call(null,seq5072);
var seq5072__$1 = cljs.core.next.call(null,seq5072);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5073,seq5072__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__5077 = cljs.core.seq.call(null,reporters);
var chunk__5078 = null;
var count__5079 = (0);
var i__5080 = (0);
while(true){
if((i__5080 < count__5079)){
var reporter = cljs.core._nth.call(null,chunk__5078,i__5080);
speclj.reporting.report_description.call(null,reporter,description);


var G__5081 = seq__5077;
var G__5082 = chunk__5078;
var G__5083 = count__5079;
var G__5084 = (i__5080 + (1));
seq__5077 = G__5081;
chunk__5078 = G__5082;
count__5079 = G__5083;
i__5080 = G__5084;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5077);
if(temp__5804__auto__){
var seq__5077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5077__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5077__$1);
var G__5085 = cljs.core.chunk_rest.call(null,seq__5077__$1);
var G__5086 = c__4556__auto__;
var G__5087 = cljs.core.count.call(null,c__4556__auto__);
var G__5088 = (0);
seq__5077 = G__5085;
chunk__5078 = G__5086;
count__5079 = G__5087;
i__5080 = G__5088;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5077__$1);
speclj.reporting.report_description.call(null,reporter,description);


var G__5089 = cljs.core.next.call(null,seq__5077__$1);
var G__5090 = null;
var G__5091 = (0);
var G__5092 = (0);
seq__5077 = G__5089;
chunk__5078 = G__5090;
count__5079 = G__5091;
i__5080 = G__5092;
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
var seq__5093 = cljs.core.seq.call(null,reporters);
var chunk__5094 = null;
var count__5095 = (0);
var i__5096 = (0);
while(true){
if((i__5096 < count__5095)){
var reporter = cljs.core._nth.call(null,chunk__5094,i__5096);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5097 = seq__5093;
var G__5098 = chunk__5094;
var G__5099 = count__5095;
var G__5100 = (i__5096 + (1));
seq__5093 = G__5097;
chunk__5094 = G__5098;
count__5095 = G__5099;
i__5096 = G__5100;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5093);
if(temp__5804__auto__){
var seq__5093__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5093__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5093__$1);
var G__5101 = cljs.core.chunk_rest.call(null,seq__5093__$1);
var G__5102 = c__4556__auto__;
var G__5103 = cljs.core.count.call(null,c__4556__auto__);
var G__5104 = (0);
seq__5093 = G__5101;
chunk__5094 = G__5102;
count__5095 = G__5103;
i__5096 = G__5104;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5093__$1);
speclj.reporting.report_runs.call(null,reporter,results);


var G__5105 = cljs.core.next.call(null,seq__5093__$1);
var G__5106 = null;
var G__5107 = (0);
var G__5108 = (0);
seq__5093 = G__5105;
chunk__5094 = G__5106;
count__5095 = G__5107;
i__5096 = G__5108;
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
var seq__5109 = cljs.core.seq.call(null,reporters);
var chunk__5110 = null;
var count__5111 = (0);
var i__5112 = (0);
while(true){
if((i__5112 < count__5111)){
var reporter = cljs.core._nth.call(null,chunk__5110,i__5112);
speclj.reporting.report_message.call(null,reporter,message);


var G__5113 = seq__5109;
var G__5114 = chunk__5110;
var G__5115 = count__5111;
var G__5116 = (i__5112 + (1));
seq__5109 = G__5113;
chunk__5110 = G__5114;
count__5111 = G__5115;
i__5112 = G__5116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5109);
if(temp__5804__auto__){
var seq__5109__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5109__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5109__$1);
var G__5117 = cljs.core.chunk_rest.call(null,seq__5109__$1);
var G__5118 = c__4556__auto__;
var G__5119 = cljs.core.count.call(null,c__4556__auto__);
var G__5120 = (0);
seq__5109 = G__5117;
chunk__5110 = G__5118;
count__5111 = G__5119;
i__5112 = G__5120;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5109__$1);
speclj.reporting.report_message.call(null,reporter,message);


var G__5121 = cljs.core.next.call(null,seq__5109__$1);
var G__5122 = null;
var G__5123 = (0);
var G__5124 = (0);
seq__5109 = G__5121;
chunk__5110 = G__5122;
count__5111 = G__5123;
i__5112 = G__5124;
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
var seq__5125 = cljs.core.seq.call(null,reporters);
var chunk__5126 = null;
var count__5127 = (0);
var i__5128 = (0);
while(true){
if((i__5128 < count__5127)){
var reporter = cljs.core._nth.call(null,chunk__5126,i__5128);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5129 = seq__5125;
var G__5130 = chunk__5126;
var G__5131 = count__5127;
var G__5132 = (i__5128 + (1));
seq__5125 = G__5129;
chunk__5126 = G__5130;
count__5127 = G__5131;
i__5128 = G__5132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5125);
if(temp__5804__auto__){
var seq__5125__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5125__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5125__$1);
var G__5133 = cljs.core.chunk_rest.call(null,seq__5125__$1);
var G__5134 = c__4556__auto__;
var G__5135 = cljs.core.count.call(null,c__4556__auto__);
var G__5136 = (0);
seq__5125 = G__5133;
chunk__5126 = G__5134;
count__5127 = G__5135;
i__5128 = G__5136;
continue;
} else {
var reporter = cljs.core.first.call(null,seq__5125__$1);
speclj.reporting.report_error.call(null,reporter,exception);


var G__5137 = cljs.core.next.call(null,seq__5125__$1);
var G__5138 = null;
var G__5139 = (0);
var G__5140 = (0);
seq__5125 = G__5137;
chunk__5126 = G__5138;
count__5127 = G__5139;
i__5128 = G__5140;
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
