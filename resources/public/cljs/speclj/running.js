// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__6215 = cljs.core.seq.call(null,components);
var chunk__6216 = null;
var count__6217 = (0);
var i__6218 = (0);
while(true){
if((i__6218 < count__6217)){
var component = cljs.core._nth.call(null,chunk__6216,i__6218);
component.body.call(null);


var G__6219 = seq__6215;
var G__6220 = chunk__6216;
var G__6221 = count__6217;
var G__6222 = (i__6218 + (1));
seq__6215 = G__6219;
chunk__6216 = G__6220;
count__6217 = G__6221;
i__6218 = G__6222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6215);
if(temp__5804__auto__){
var seq__6215__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6215__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__6215__$1);
var G__6223 = cljs.core.chunk_rest.call(null,seq__6215__$1);
var G__6224 = c__5565__auto__;
var G__6225 = cljs.core.count.call(null,c__5565__auto__);
var G__6226 = (0);
seq__6215 = G__6223;
chunk__6216 = G__6224;
count__6217 = G__6225;
i__6218 = G__6226;
continue;
} else {
var component = cljs.core.first.call(null,seq__6215__$1);
component.body.call(null);


var G__6227 = cljs.core.next.call(null,seq__6215__$1);
var G__6228 = null;
var G__6229 = (0);
var G__6230 = (0);
seq__6215 = G__6227;
chunk__6216 = G__6228;
count__6217 = G__6229;
i__6218 = G__6230;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq.call(null,fns)){
return cljs.core.partial.call(null,cljs.core.first.call(null,fns),speclj.running.nested_fns.call(null,base,cljs.core.rest.call(null,fns)));
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components.call(null,befores);

try{return body.call(null);
}finally {speclj.running.eval_components.call(null,afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__6231 = cljs.core.seq.call(null,withs);
var chunk__6232 = null;
var count__6233 = (0);
var i__6234 = (0);
while(true){
if((i__6234 < count__6233)){
var with$ = cljs.core._nth.call(null,chunk__6232,i__6234);
speclj.components.reset_with.call(null,with$);


var G__6235 = seq__6231;
var G__6236 = chunk__6232;
var G__6237 = count__6233;
var G__6238 = (i__6234 + (1));
seq__6231 = G__6235;
chunk__6232 = G__6236;
count__6233 = G__6237;
i__6234 = G__6238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__6231);
if(temp__5804__auto__){
var seq__6231__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6231__$1)){
var c__5565__auto__ = cljs.core.chunk_first.call(null,seq__6231__$1);
var G__6239 = cljs.core.chunk_rest.call(null,seq__6231__$1);
var G__6240 = c__5565__auto__;
var G__6241 = cljs.core.count.call(null,c__5565__auto__);
var G__6242 = (0);
seq__6231 = G__6239;
chunk__6232 = G__6240;
count__6233 = G__6241;
i__6234 = G__6242;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__6231__$1);
speclj.components.reset_with.call(null,with$);


var G__6243 = cljs.core.next.call(null,seq__6231__$1);
var G__6244 = null;
var G__6245 = (0);
var G__6246 = (0);
seq__6231 = G__6243;
chunk__6232 = G__6244;
count__6233 = G__6245;
i__6234 = G__6246;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__6247 = cljs.core.deref.call(null,description__$1.parent);
var G__6248 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__6247;
components = G__6248;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since.call(null,start_time),failure], null));
var result = cljs.core.apply.call(null,result_constructor,present_args);
speclj.reporting.report_run.call(null,result,reporters);

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref.call(null,characteristic.parent);
var befores = speclj.running.collect_components.call(null,(function (p1__6249_SHARP_){
return cljs.core.deref.call(null,p1__6249_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__6250_SHARP_){
return cljs.core.deref.call(null,p1__6250_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__6251_SHARP_){
return cljs.core.deref.call(null,p1__6251_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__6252_SHARP_){
return p1__6252_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__6253_SHARP_){
return cljs.core.deref.call(null,p1__6253_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e6254){var e = e6254;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__5520__auto__ = (function speclj$running$do_characteristics_$_iter__6255(s__6256){
return (new cljs.core.LazySeq(null,(function (){
var s__6256__$1 = s__6256;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__6256__$1);
if(temp__5804__auto__){
var s__6256__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6256__$2)){
var c__5518__auto__ = cljs.core.chunk_first.call(null,s__6256__$2);
var size__5519__auto__ = cljs.core.count.call(null,c__5518__auto__);
var b__6258 = cljs.core.chunk_buffer.call(null,size__5519__auto__);
if((function (){var i__6257 = (0);
while(true){
if((i__6257 < size__5519__auto__)){
var characteristic = cljs.core._nth.call(null,c__5518__auto__,i__6257);
cljs.core.chunk_append.call(null,b__6258,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__6259 = (i__6257 + (1));
i__6257 = G__6259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6258),speclj$running$do_characteristics_$_iter__6255.call(null,cljs.core.chunk_rest.call(null,s__6256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6258),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__6256__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__6255.call(null,cljs.core.rest.call(null,s__6256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var contexts = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,contexts)){
var G__6260 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__6261 = cljs.core.rest.call(null,contexts);
results__$1 = G__6260;
contexts = G__6261;
continue;
} else {
speclj.running.eval_components.call(null,cljs.core.deref.call(null,context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.call(null,speclj.tags.tags_for.call(null,context)))){
return speclj.running.do_characteristics.call(null,cljs.core.deref.call(null,context.charcteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.call(null,cljs.core.deref.call(null,description.withs),cljs.core.deref.call(null,description.with_alls));
var ns = clojure.string.replace.call(null,description.ns,"-","_");
var var_names = cljs.core.map.call(null,(function (p1__6264_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6264_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__6265_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__6265_SHARP_.unique_name)].join('');
}),withs);
var seq__6266_6298 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__6267_6299 = null;
var count__6268_6300 = (0);
var i__6269_6301 = (0);
while(true){
if((i__6269_6301 < count__6268_6300)){
var vec__6276_6302 = cljs.core._nth.call(null,chunk__6267_6299,i__6269_6301);
var n_6303 = cljs.core.nth.call(null,vec__6276_6302,(0),null);
var un_6304 = cljs.core.nth.call(null,vec__6276_6302,(1),null);
var code_6305 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6303)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6304),";"].join('');
eval(code_6305);


var G__6306 = seq__6266_6298;
var G__6307 = chunk__6267_6299;
var G__6308 = count__6268_6300;
var G__6309 = (i__6269_6301 + (1));
seq__6266_6298 = G__6306;
chunk__6267_6299 = G__6307;
count__6268_6300 = G__6308;
i__6269_6301 = G__6309;
continue;
} else {
var temp__5804__auto___6310 = cljs.core.seq.call(null,seq__6266_6298);
if(temp__5804__auto___6310){
var seq__6266_6311__$1 = temp__5804__auto___6310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6266_6311__$1)){
var c__5565__auto___6312 = cljs.core.chunk_first.call(null,seq__6266_6311__$1);
var G__6313 = cljs.core.chunk_rest.call(null,seq__6266_6311__$1);
var G__6314 = c__5565__auto___6312;
var G__6315 = cljs.core.count.call(null,c__5565__auto___6312);
var G__6316 = (0);
seq__6266_6298 = G__6313;
chunk__6267_6299 = G__6314;
count__6268_6300 = G__6315;
i__6269_6301 = G__6316;
continue;
} else {
var vec__6279_6317 = cljs.core.first.call(null,seq__6266_6311__$1);
var n_6318 = cljs.core.nth.call(null,vec__6279_6317,(0),null);
var un_6319 = cljs.core.nth.call(null,vec__6279_6317,(1),null);
var code_6320 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6318)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_6319),";"].join('');
eval(code_6320);


var G__6321 = cljs.core.next.call(null,seq__6266_6311__$1);
var G__6322 = null;
var G__6323 = (0);
var G__6324 = (0);
seq__6266_6298 = G__6321;
chunk__6267_6299 = G__6322;
count__6268_6300 = G__6323;
i__6269_6301 = G__6324;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__6282_6325 = cljs.core.seq.call(null,var_names);
var chunk__6283_6326 = null;
var count__6284_6327 = (0);
var i__6285_6328 = (0);
while(true){
if((i__6285_6328 < count__6284_6327)){
var vec__6292_6329 = cljs.core._nth.call(null,chunk__6283_6326,i__6285_6328);
var n_6330 = cljs.core.nth.call(null,vec__6292_6329,(0),null);
var code_6331 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6330)," = null;"].join('');
eval(code_6331);


var G__6332 = seq__6282_6325;
var G__6333 = chunk__6283_6326;
var G__6334 = count__6284_6327;
var G__6335 = (i__6285_6328 + (1));
seq__6282_6325 = G__6332;
chunk__6283_6326 = G__6333;
count__6284_6327 = G__6334;
i__6285_6328 = G__6335;
continue;
} else {
var temp__5804__auto___6336 = cljs.core.seq.call(null,seq__6282_6325);
if(temp__5804__auto___6336){
var seq__6282_6337__$1 = temp__5804__auto___6336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6282_6337__$1)){
var c__5565__auto___6338 = cljs.core.chunk_first.call(null,seq__6282_6337__$1);
var G__6339 = cljs.core.chunk_rest.call(null,seq__6282_6337__$1);
var G__6340 = c__5565__auto___6338;
var G__6341 = cljs.core.count.call(null,c__5565__auto___6338);
var G__6342 = (0);
seq__6282_6325 = G__6339;
chunk__6283_6326 = G__6340;
count__6284_6327 = G__6341;
i__6285_6328 = G__6342;
continue;
} else {
var vec__6295_6343 = cljs.core.first.call(null,seq__6282_6337__$1);
var n_6344 = cljs.core.nth.call(null,vec__6295_6343,(0),null);
var code_6345 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_6344)," = null;"].join('');
eval(code_6345);


var G__6346 = cljs.core.next.call(null,seq__6282_6337__$1);
var G__6347 = null;
var G__6348 = (0);
var G__6349 = (0);
seq__6282_6325 = G__6346;
chunk__6283_6326 = G__6347;
count__6284_6327 = G__6348;
i__6285_6328 = G__6349;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context.call(null,description,reporters);
return speclj.running.do_child_contexts.call(null,description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__6350_SHARP_){
return p1__6350_SHARP_.body;
}),cljs.core.deref.call(null,description.around_alls))).call(null);
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
var tag_sets = speclj.tags.tag_sets_for.call(null,description);
if(cljs.core.truth_(cljs.core.some.call(null,speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_.call(null,reporters,description);

return speclj.running.with_withs_bound.call(null,description,(function (){
speclj.running.eval_components.call(null,cljs.core.deref.call(null,description.before_alls));

try{return speclj.running.with_around_alls.call(null,description,cljs.core.partial.call(null,speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs.call(null,cljs.core.deref.call(null,description.with_alls));
}}));
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result.call(null,e);
cljs.core.swap_BANG_.call(null,runner.results,cljs.core.conj,error_result);

return speclj.reporting.report_run.call(null,error_result,speclj.config.active_reporters.call(null));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_6351 = (function (this$,directories,reporters){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.running.run_directories[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,directories,reporters);
} else {
var m__5389__auto__ = (speclj.running.run_directories["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_6351.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_6352 = (function (this$,description){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.running.submit_description[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,description);
} else {
var m__5389__auto__ = (speclj.running.submit_description["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_6352.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_6353 = (function (this$,description,reporters){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.running.run_description[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,description,reporters);
} else {
var m__5389__auto__ = (speclj.running.run_description["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_6353.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_6354 = (function (this$,reporters){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (speclj.running.run_and_report[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return m__5391__auto__.call(null,this$,reporters);
} else {
var m__5389__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__5389__auto__ == null)))){
return m__5389__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_6354.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
