// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.components_spec');
goog.require('cljs.core');
goog.require('speclj.core');
var description__4940__auto___5283 = speclj.components.new_description.call(null,"A Collection of TicTacToe Components","set.components-spec");
var _STAR_parent_description_STAR__orig_val__5277_5284 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__5278_5285 = description__4940__auto___5283;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__5278_5285);

try{var seq__5279_5286 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"fails",((function (_STAR_parent_description_STAR__orig_val__5277_5284,_STAR_parent_description_STAR__temp_val__5278_5285,description__4940__auto___5283){
return (function (){
var expected__5025__auto__ = (0);
var actual__5026__auto__ = (1);
if(cljs.core._EQ_.call(null,expected__5025__auto__,actual__5026__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5025__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5025__auto__)),speclj.platform.endl,"     got: ",(((actual__5026__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5026__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__5277_5284,_STAR_parent_description_STAR__temp_val__5278_5285,description__4940__auto___5283))
)],null)));
var chunk__5280_5287 = null;
var count__5281_5288 = (0);
var i__5282_5289 = (0);
while(true){
if((i__5282_5289 < count__5281_5288)){
var component__4941__auto___5290 = cljs.core._nth.call(null,chunk__5280_5287,i__5282_5289);
speclj.components.install.call(null,component__4941__auto___5290,description__4940__auto___5283);


var G__5291 = seq__5279_5286;
var G__5292 = chunk__5280_5287;
var G__5293 = count__5281_5288;
var G__5294 = (i__5282_5289 + (1));
seq__5279_5286 = G__5291;
chunk__5280_5287 = G__5292;
count__5281_5288 = G__5293;
i__5282_5289 = G__5294;
continue;
} else {
var temp__5804__auto___5295 = cljs.core.seq.call(null,seq__5279_5286);
if(temp__5804__auto___5295){
var seq__5279_5296__$1 = temp__5804__auto___5295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5279_5296__$1)){
var c__4556__auto___5297 = cljs.core.chunk_first.call(null,seq__5279_5296__$1);
var G__5298 = cljs.core.chunk_rest.call(null,seq__5279_5296__$1);
var G__5299 = c__4556__auto___5297;
var G__5300 = cljs.core.count.call(null,c__4556__auto___5297);
var G__5301 = (0);
seq__5279_5286 = G__5298;
chunk__5280_5287 = G__5299;
count__5281_5288 = G__5300;
i__5282_5289 = G__5301;
continue;
} else {
var component__4941__auto___5302 = cljs.core.first.call(null,seq__5279_5296__$1);
speclj.components.install.call(null,component__4941__auto___5302,description__4940__auto___5283);


var G__5303 = cljs.core.next.call(null,seq__5279_5296__$1);
var G__5304 = null;
var G__5305 = (0);
var G__5306 = (0);
seq__5279_5286 = G__5303;
chunk__5280_5287 = G__5304;
count__5281_5288 = G__5305;
i__5282_5289 = G__5306;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__5277_5284);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__4940__auto___5283);
}


//# sourceMappingURL=components_spec.js.map
