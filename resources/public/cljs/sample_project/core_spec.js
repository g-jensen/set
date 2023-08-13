// Compiled by ClojureScript 1.11.54 {:optimizations :none}
goog.provide('sample_project.core_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('sample_project.components');
var description__5785__auto___6321 = speclj.components.new_description.call(null,"hello-world component","sample-project.core-spec");
var _STAR_parent_description_STAR__orig_val__6315_6322 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__6316_6323 = description__5785__auto___6321;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__6316_6323);

try{var seq__6317_6324 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"says hello to the entire world",((function (_STAR_parent_description_STAR__orig_val__6315_6322,_STAR_parent_description_STAR__temp_val__6316_6323,description__5785__auto___6321){
return (function (){
var expected__5870__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello, world!"], null);
var actual__5871__auto__ = sample_project.components.hello_world.call(null);
if(cljs.core._EQ_.call(null,expected__5870__auto__,actual__5871__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__5870__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__5870__auto__)),speclj.platform.endl,"     got: ",(((actual__5871__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__5871__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__6315_6322,_STAR_parent_description_STAR__temp_val__6316_6323,description__5785__auto___6321))
)],null)));
var chunk__6318_6325 = null;
var count__6319_6326 = (0);
var i__6320_6327 = (0);
while(true){
if((i__6320_6327 < count__6319_6326)){
var component__5786__auto___6328 = cljs.core._nth.call(null,chunk__6318_6325,i__6320_6327);
speclj.components.install.call(null,component__5786__auto___6328,description__5785__auto___6321);


var G__6329 = seq__6317_6324;
var G__6330 = chunk__6318_6325;
var G__6331 = count__6319_6326;
var G__6332 = (i__6320_6327 + (1));
seq__6317_6324 = G__6329;
chunk__6318_6325 = G__6330;
count__6319_6326 = G__6331;
i__6320_6327 = G__6332;
continue;
} else {
var temp__5804__auto___6333 = cljs.core.seq.call(null,seq__6317_6324);
if(temp__5804__auto___6333){
var seq__6317_6334__$1 = temp__5804__auto___6333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6317_6334__$1)){
var c__5565__auto___6335 = cljs.core.chunk_first.call(null,seq__6317_6334__$1);
var G__6336 = cljs.core.chunk_rest.call(null,seq__6317_6334__$1);
var G__6337 = c__5565__auto___6335;
var G__6338 = cljs.core.count.call(null,c__5565__auto___6335);
var G__6339 = (0);
seq__6317_6324 = G__6336;
chunk__6318_6325 = G__6337;
count__6319_6326 = G__6338;
i__6320_6327 = G__6339;
continue;
} else {
var component__5786__auto___6340 = cljs.core.first.call(null,seq__6317_6334__$1);
speclj.components.install.call(null,component__5786__auto___6340,description__5785__auto___6321);


var G__6341 = cljs.core.next.call(null,seq__6317_6334__$1);
var G__6342 = null;
var G__6343 = (0);
var G__6344 = (0);
seq__6317_6324 = G__6341;
chunk__6318_6325 = G__6342;
count__6319_6326 = G__6343;
i__6320_6327 = G__6344;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__6315_6322);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__5785__auto___6321);
}


//# sourceMappingURL=core_spec.js.map
