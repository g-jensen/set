// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.utils');
goog.require('cljs.core');
set.utils.empty_tile = "_";
set.utils.empty_board = (function set$utils$empty_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(n * n),set.utils.empty_tile));
});
set.utils.board_3d_QMARK_ = (function set$utils$board_3d_QMARK_(board){
return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,board));
});
set.utils.tile_count = (function set$utils$tile_count(board,tile){
if(set.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__3795_SHARP_){
return set.utils.tile_count.call(null,p1__3795_SHARP_,tile);
}),board));
} else {
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3796_SHARP_){
return cljs.core._EQ_.call(null,tile,p1__3796_SHARP_);
}),board));
}
});
set.utils.in_range_QMARK_ = (function set$utils$in_range_QMARK_(start,end,n){
return (((n >= start)) && ((n < end)));
});
set.utils.empty_indices = (function set$utils$empty_indices(board){
var board__$1 = cljs.core.flatten.call(null,board);
return cljs.core.filter.call(null,(function (p1__3797_SHARP_){
return cljs.core._EQ_.call(null,set.utils.empty_tile,cljs.core.nth.call(null,board__$1,p1__3797_SHARP_));
}),cljs.core.range.call(null,(0),cljs.core.count.call(null,board__$1)));
});
set.utils.is_digit = (function set$utils$is_digit(c){
return cljs.core.some.call(null,(function (p1__3798_SHARP_){
return cljs.core._EQ_.call(null,c,p1__3798_SHARP_);
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3","4","5","6","7","8","9"], null));
});
set.utils.input_valid_QMARK_ = (function set$utils$input_valid_QMARK_(var_args){
var G__3801 = arguments.length;
switch (G__3801) {
case 1:
return set.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return set.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(set.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (input){
return (((!(cljs.core.empty_QMARK_.call(null,input)))) && (cljs.core.every_QMARK_.call(null,(function (p1__3799_SHARP_){
return set.utils.is_digit.call(null,p1__3799_SHARP_);
}),input)));
}));

(set.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (input,options){
return set.utils.in_range_QMARK_.call(null,(1),(cljs.core.count.call(null,options) + (1)),input);
}));

(set.utils.input_valid_QMARK_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utils.js.map
