// Compiled by ClojureScript 1.10.764 {}
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
var seq__5479 = cljs.core.seq.call(null,components);
var chunk__5480 = null;
var count__5481 = (0);
var i__5482 = (0);
while(true){
if((i__5482 < count__5481)){
var component = cljs.core._nth.call(null,chunk__5480,i__5482);
component.body.call(null);


var G__5483 = seq__5479;
var G__5484 = chunk__5480;
var G__5485 = count__5481;
var G__5486 = (i__5482 + (1));
seq__5479 = G__5483;
chunk__5480 = G__5484;
count__5481 = G__5485;
i__5482 = G__5486;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5479);
if(temp__5804__auto__){
var seq__5479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5479__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5479__$1);
var G__5487 = cljs.core.chunk_rest.call(null,seq__5479__$1);
var G__5488 = c__4556__auto__;
var G__5489 = cljs.core.count.call(null,c__4556__auto__);
var G__5490 = (0);
seq__5479 = G__5487;
chunk__5480 = G__5488;
count__5481 = G__5489;
i__5482 = G__5490;
continue;
} else {
var component = cljs.core.first.call(null,seq__5479__$1);
component.body.call(null);


var G__5491 = cljs.core.next.call(null,seq__5479__$1);
var G__5492 = null;
var G__5493 = (0);
var G__5494 = (0);
seq__5479 = G__5491;
chunk__5480 = G__5492;
count__5481 = G__5493;
i__5482 = G__5494;
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
var seq__5495 = cljs.core.seq.call(null,withs);
var chunk__5496 = null;
var count__5497 = (0);
var i__5498 = (0);
while(true){
if((i__5498 < count__5497)){
var with$ = cljs.core._nth.call(null,chunk__5496,i__5498);
speclj.components.reset_with.call(null,with$);


var G__5499 = seq__5495;
var G__5500 = chunk__5496;
var G__5501 = count__5497;
var G__5502 = (i__5498 + (1));
seq__5495 = G__5499;
chunk__5496 = G__5500;
count__5497 = G__5501;
i__5498 = G__5502;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__5495);
if(temp__5804__auto__){
var seq__5495__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5495__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5495__$1);
var G__5503 = cljs.core.chunk_rest.call(null,seq__5495__$1);
var G__5504 = c__4556__auto__;
var G__5505 = cljs.core.count.call(null,c__4556__auto__);
var G__5506 = (0);
seq__5495 = G__5503;
chunk__5496 = G__5504;
count__5497 = G__5505;
i__5498 = G__5506;
continue;
} else {
var with$ = cljs.core.first.call(null,seq__5495__$1);
speclj.components.reset_with.call(null,with$);


var G__5507 = cljs.core.next.call(null,seq__5495__$1);
var G__5508 = null;
var G__5509 = (0);
var G__5510 = (0);
seq__5495 = G__5507;
chunk__5496 = G__5508;
count__5497 = G__5509;
i__5498 = G__5510;
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
var G__5511 = cljs.core.deref.call(null,description__$1.parent);
var G__5512 = cljs.core.concat.call(null,getter.call(null,description__$1),components);
description__$1 = G__5511;
components = G__5512;
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
var befores = speclj.running.collect_components.call(null,(function (p1__5513_SHARP_){
return cljs.core.deref.call(null,p1__5513_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components.call(null,(function (p1__5514_SHARP_){
return cljs.core.deref.call(null,p1__5514_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic.call(null,befores,core_body,afters);
});
var arounds = speclj.running.collect_components.call(null,(function (p1__5515_SHARP_){
return cljs.core.deref.call(null,p1__5515_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns.call(null,before_and_after_body,cljs.core.map.call(null,(function (p1__5516_SHARP_){
return p1__5516_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components.call(null,(function (p1__5517_SHARP_){
return cljs.core.deref.call(null,p1__5517_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time.call(null);
try{full_body.call(null);

return speclj.running.report_result.call(null,speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e5518){var e = e5518;
if(speclj.platform.pending_QMARK_.call(null,e)){
return speclj.running.report_result.call(null,speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result.call(null,speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs.call(null,withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__5519(s__5520){
return (new cljs.core.LazySeq(null,(function (){
var s__5520__$1 = s__5520;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5520__$1);
if(temp__5804__auto__){
var s__5520__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5520__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5520__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5522 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5521 = (0);
while(true){
if((i__5521 < size__4528__auto__)){
var characteristic = cljs.core._nth.call(null,c__4527__auto__,i__5521);
cljs.core.chunk_append.call(null,b__5522,speclj.running.do_characteristic.call(null,characteristic,reporters));

var G__5523 = (i__5521 + (1));
i__5521 = G__5523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5522),speclj$running$do_characteristics_$_iter__5519.call(null,cljs.core.chunk_rest.call(null,s__5520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5522),null);
}
} else {
var characteristic = cljs.core.first.call(null,s__5520__$2);
return cljs.core.cons.call(null,speclj.running.do_characteristic.call(null,characteristic,reporters),speclj$running$do_characteristics_$_iter__5519.call(null,cljs.core.rest.call(null,s__5520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var contexts = cljs.core.deref.call(null,context.children);
while(true){
if(cljs.core.seq.call(null,contexts)){
var G__5524 = cljs.core.concat.call(null,results__$1,speclj.running.do_description.call(null,cljs.core.first.call(null,contexts),reporters));
var G__5525 = cljs.core.rest.call(null,contexts);
results__$1 = G__5524;
contexts = G__5525;
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
var var_names = cljs.core.map.call(null,(function (p1__5528_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5528_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.call(null,(function (p1__5529_SHARP_){
return [ns,".",cljs.core.name.call(null,p1__5529_SHARP_.unique_name)].join('');
}),withs);
var seq__5530_5562 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,var_names,unique_names)));
var chunk__5531_5563 = null;
var count__5532_5564 = (0);
var i__5533_5565 = (0);
while(true){
if((i__5533_5565 < count__5532_5564)){
var vec__5540_5566 = cljs.core._nth.call(null,chunk__5531_5563,i__5533_5565);
var n_5567 = cljs.core.nth.call(null,vec__5540_5566,(0),null);
var un_5568 = cljs.core.nth.call(null,vec__5540_5566,(1),null);
var code_5569 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5567)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_5568),";"].join('');
eval(code_5569);


var G__5570 = seq__5530_5562;
var G__5571 = chunk__5531_5563;
var G__5572 = count__5532_5564;
var G__5573 = (i__5533_5565 + (1));
seq__5530_5562 = G__5570;
chunk__5531_5563 = G__5571;
count__5532_5564 = G__5572;
i__5533_5565 = G__5573;
continue;
} else {
var temp__5804__auto___5574 = cljs.core.seq.call(null,seq__5530_5562);
if(temp__5804__auto___5574){
var seq__5530_5575__$1 = temp__5804__auto___5574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5530_5575__$1)){
var c__4556__auto___5576 = cljs.core.chunk_first.call(null,seq__5530_5575__$1);
var G__5577 = cljs.core.chunk_rest.call(null,seq__5530_5575__$1);
var G__5578 = c__4556__auto___5576;
var G__5579 = cljs.core.count.call(null,c__4556__auto___5576);
var G__5580 = (0);
seq__5530_5562 = G__5577;
chunk__5531_5563 = G__5578;
count__5532_5564 = G__5579;
i__5533_5565 = G__5580;
continue;
} else {
var vec__5543_5581 = cljs.core.first.call(null,seq__5530_5575__$1);
var n_5582 = cljs.core.nth.call(null,vec__5543_5581,(0),null);
var un_5583 = cljs.core.nth.call(null,vec__5543_5581,(1),null);
var code_5584 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5582)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_5583),";"].join('');
eval(code_5584);


var G__5585 = cljs.core.next.call(null,seq__5530_5575__$1);
var G__5586 = null;
var G__5587 = (0);
var G__5588 = (0);
seq__5530_5562 = G__5585;
chunk__5531_5563 = G__5586;
count__5532_5564 = G__5587;
i__5533_5565 = G__5588;
continue;
}
} else {
}
}
break;
}

try{return body.call(null);
}finally {var seq__5546_5589 = cljs.core.seq.call(null,var_names);
var chunk__5547_5590 = null;
var count__5548_5591 = (0);
var i__5549_5592 = (0);
while(true){
if((i__5549_5592 < count__5548_5591)){
var vec__5556_5593 = cljs.core._nth.call(null,chunk__5547_5590,i__5549_5592);
var n_5594 = cljs.core.nth.call(null,vec__5556_5593,(0),null);
var code_5595 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5594)," = null;"].join('');
eval(code_5595);


var G__5596 = seq__5546_5589;
var G__5597 = chunk__5547_5590;
var G__5598 = count__5548_5591;
var G__5599 = (i__5549_5592 + (1));
seq__5546_5589 = G__5596;
chunk__5547_5590 = G__5597;
count__5548_5591 = G__5598;
i__5549_5592 = G__5599;
continue;
} else {
var temp__5804__auto___5600 = cljs.core.seq.call(null,seq__5546_5589);
if(temp__5804__auto___5600){
var seq__5546_5601__$1 = temp__5804__auto___5600;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5546_5601__$1)){
var c__4556__auto___5602 = cljs.core.chunk_first.call(null,seq__5546_5601__$1);
var G__5603 = cljs.core.chunk_rest.call(null,seq__5546_5601__$1);
var G__5604 = c__4556__auto___5602;
var G__5605 = cljs.core.count.call(null,c__4556__auto___5602);
var G__5606 = (0);
seq__5546_5589 = G__5603;
chunk__5547_5590 = G__5604;
count__5548_5591 = G__5605;
i__5549_5592 = G__5606;
continue;
} else {
var vec__5559_5607 = cljs.core.first.call(null,seq__5546_5601__$1);
var n_5608 = cljs.core.nth.call(null,vec__5559_5607,(0),null);
var code_5609 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_5608)," = null;"].join('');
eval(code_5609);


var G__5610 = cljs.core.next.call(null,seq__5546_5601__$1);
var G__5611 = null;
var G__5612 = (0);
var G__5613 = (0);
seq__5546_5589 = G__5610;
chunk__5547_5590 = G__5611;
count__5548_5591 = G__5612;
i__5549_5592 = G__5613;
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
return speclj.running.nested_fns.call(null,run_characteristics_fn,cljs.core.map.call(null,(function (p1__5614_SHARP_){
return p1__5614_SHARP_.body;
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

var speclj$running$Runner$run_directories$dyn_5615 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,directories,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,directories,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_5615.call(null,this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_5616 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description);
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_5616.call(null,this$,description);
}
});

var speclj$running$Runner$run_description$dyn_5617 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,description,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,description,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_5617.call(null,this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_5618 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,this$,reporters);
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,this$,reporters);
} else {
throw cljs.core.missing_protocol.call(null,"Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_5618.call(null,this$,reporters);
}
});


//# sourceMappingURL=running.js.map
