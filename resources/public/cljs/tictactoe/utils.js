// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.utils');
goog.require('cljs.core');
tictactoe.utils.empty_tile = "_";
tictactoe.utils.empty_board = (function tictactoe$utils$empty_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,(n * n),tictactoe.utils.empty_tile));
});
tictactoe.utils.board_3d_QMARK_ = (function tictactoe$utils$board_3d_QMARK_(board){
return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,board));
});
tictactoe.utils.tile_count = (function tictactoe$utils$tile_count(board,tile){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__5687_SHARP_){
return tictactoe.utils.tile_count.call(null,p1__5687_SHARP_,tile);
}),board));
} else {
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__5688_SHARP_){
return cljs.core._EQ_.call(null,tile,p1__5688_SHARP_);
}),board));
}
});
tictactoe.utils.in_range_QMARK_ = (function tictactoe$utils$in_range_QMARK_(start,end,n){
return (((n >= start)) && ((n < end)));
});
tictactoe.utils.empty_indices = (function tictactoe$utils$empty_indices(board){
var board__$1 = cljs.core.flatten.call(null,board);
return cljs.core.filter.call(null,(function (p1__5689_SHARP_){
return cljs.core._EQ_.call(null,tictactoe.utils.empty_tile,cljs.core.nth.call(null,board__$1,p1__5689_SHARP_));
}),cljs.core.range.call(null,(0),cljs.core.count.call(null,board__$1)));
});
tictactoe.utils.is_digit = (function tictactoe$utils$is_digit(c){
return cljs.core.some.call(null,(function (p1__5690_SHARP_){
return cljs.core._EQ_.call(null,c,p1__5690_SHARP_);
}),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0","1","2","3","4","5","6","7","8","9"], null));
});
tictactoe.utils.input_valid_QMARK_ = (function tictactoe$utils$input_valid_QMARK_(var_args){
var G__5693 = arguments.length;
switch (G__5693) {
case 1:
return tictactoe.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tictactoe.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tictactoe.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (input){
return (((!(cljs.core.empty_QMARK_.call(null,input)))) && (cljs.core.every_QMARK_.call(null,(function (p1__5691_SHARP_){
return tictactoe.utils.is_digit.call(null,p1__5691_SHARP_);
}),input)));
}));

(tictactoe.utils.input_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (input,options){
return tictactoe.utils.in_range_QMARK_.call(null,(1),(cljs.core.count.call(null,options) + (1)),input);
}));

(tictactoe.utils.input_valid_QMARK_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=utils.js.map
