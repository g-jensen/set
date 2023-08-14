// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.board_state');
goog.require('cljs.core');
goog.require('set.utils');
set.board_state.winning_line_QMARK_ = (function set$board_state$winning_line_QMARK_(seq){
if(cljs.core.not_EQ_.call(null,set.utils.empty_tile,cljs.core.first.call(null,seq))){
return cljs.core.apply.call(null,cljs.core._EQ_,seq);
} else {
return false;
}
});
set.board_state.board_size = (function set$board_state$board_size(board){
if(set.utils.board_3d_QMARK_.call(null,board)){
return set.board_state.board_size.call(null,cljs.core.first.call(null,board));
} else {
return (Math.sqrt(cljs.core.count.call(null,board)) | (0));
}
});
set.board_state.rotated_planes = (function set$board_state$rotated_planes(board){
var vec__3805 = cljs.core.first.call(null,board);
var a = cljs.core.nth.call(null,vec__3805,(0),null);
var b = cljs.core.nth.call(null,vec__3805,(1),null);
var c = cljs.core.nth.call(null,vec__3805,(2),null);
var d = cljs.core.nth.call(null,vec__3805,(3),null);
var e = cljs.core.nth.call(null,vec__3805,(4),null);
var f = cljs.core.nth.call(null,vec__3805,(5),null);
var g = cljs.core.nth.call(null,vec__3805,(6),null);
var h = cljs.core.nth.call(null,vec__3805,(7),null);
var i = cljs.core.nth.call(null,vec__3805,(8),null);
var vec__3808 = cljs.core.second.call(null,board);
var j = cljs.core.nth.call(null,vec__3808,(0),null);
var k = cljs.core.nth.call(null,vec__3808,(1),null);
var l = cljs.core.nth.call(null,vec__3808,(2),null);
var m = cljs.core.nth.call(null,vec__3808,(3),null);
var n = cljs.core.nth.call(null,vec__3808,(4),null);
var o = cljs.core.nth.call(null,vec__3808,(5),null);
var p = cljs.core.nth.call(null,vec__3808,(6),null);
var q = cljs.core.nth.call(null,vec__3808,(7),null);
var r = cljs.core.nth.call(null,vec__3808,(8),null);
var vec__3811 = cljs.core.nth.call(null,board,(2));
var s = cljs.core.nth.call(null,vec__3811,(0),null);
var t = cljs.core.nth.call(null,vec__3811,(1),null);
var u = cljs.core.nth.call(null,vec__3811,(2),null);
var v = cljs.core.nth.call(null,vec__3811,(3),null);
var w = cljs.core.nth.call(null,vec__3811,(4),null);
var x = cljs.core.nth.call(null,vec__3811,(5),null);
var y = cljs.core.nth.call(null,vec__3811,(6),null);
var z = cljs.core.nth.call(null,vec__3811,(7),null);
var aa = cljs.core.nth.call(null,vec__3811,(8),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,g,j,m,p,s,v,y], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,h,k,n,q,t,w,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,f,i,l,o,r,u,x,aa], null)], null);
});
set.board_state.diagonal_planes = (function set$board_state$diagonal_planes(board){
var vec__3814 = cljs.core.first.call(null,board);
var a = cljs.core.nth.call(null,vec__3814,(0),null);
var b = cljs.core.nth.call(null,vec__3814,(1),null);
var c = cljs.core.nth.call(null,vec__3814,(2),null);
var d = cljs.core.nth.call(null,vec__3814,(3),null);
var e = cljs.core.nth.call(null,vec__3814,(4),null);
var f = cljs.core.nth.call(null,vec__3814,(5),null);
var g = cljs.core.nth.call(null,vec__3814,(6),null);
var h = cljs.core.nth.call(null,vec__3814,(7),null);
var i = cljs.core.nth.call(null,vec__3814,(8),null);
var vec__3817 = cljs.core.second.call(null,board);
var j = cljs.core.nth.call(null,vec__3817,(0),null);
var k = cljs.core.nth.call(null,vec__3817,(1),null);
var l = cljs.core.nth.call(null,vec__3817,(2),null);
var m = cljs.core.nth.call(null,vec__3817,(3),null);
var n = cljs.core.nth.call(null,vec__3817,(4),null);
var o = cljs.core.nth.call(null,vec__3817,(5),null);
var p = cljs.core.nth.call(null,vec__3817,(6),null);
var q = cljs.core.nth.call(null,vec__3817,(7),null);
var r = cljs.core.nth.call(null,vec__3817,(8),null);
var vec__3820 = cljs.core.nth.call(null,board,(2));
var s = cljs.core.nth.call(null,vec__3820,(0),null);
var t = cljs.core.nth.call(null,vec__3820,(1),null);
var u = cljs.core.nth.call(null,vec__3820,(2),null);
var v = cljs.core.nth.call(null,vec__3820,(3),null);
var w = cljs.core.nth.call(null,vec__3820,(4),null);
var x = cljs.core.nth.call(null,vec__3820,(5),null);
var y = cljs.core.nth.call(null,vec__3820,(6),null);
var z = cljs.core.nth.call(null,vec__3820,(7),null);
var aa = cljs.core.nth.call(null,vec__3820,(8),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,k,u,d,n,x,g,q,aa], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k,s,f,n,v,i,q,y], null)], null);
});
set.board_state.all_planes = (function set$board_state$all_planes(board){
return cljs.core.concat.call(null,board,set.board_state.rotated_planes.call(null,board),set.board_state.diagonal_planes.call(null,board));
});
set.board_state.game_over_message = (function set$board_state$game_over_message(board){
if(cljs.core.truth_(set.board_state.win_QMARK_.call(null,board))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(set.board_state.winner.call(null,board))," has won!"].join('');
} else {
return "tie!";
}
});
set.board_state.rows = (function set$board_state$rows(board){
if(set.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__3823_SHARP_){
return set.board_state.rows.call(null,p1__3823_SHARP_);
}),set.board_state.all_planes.call(null,board)));
} else {
return cljs.core.partition.call(null,set.board_state.board_size.call(null,board),board);
}
});
set.board_state.columns = (function set$board_state$columns(board){
if(set.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__3824_SHARP_){
return set.board_state.columns.call(null,p1__3824_SHARP_);
}),set.board_state.all_planes.call(null,board)));
} else {
var iter__4529__auto__ = (function set$board_state$columns_$_iter__3826(s__3827){
return (new cljs.core.LazySeq(null,(function (){
var s__3827__$1 = s__3827;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__3827__$1);
if(temp__5804__auto__){
var s__3827__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__3827__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__3827__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__3829 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__3828 = (0);
while(true){
if((i__3828 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__3828);
cljs.core.chunk_append.call(null,b__3829,cljs.core.map.call(null,((function (i__3828,i,c__4527__auto__,size__4528__auto__,b__3829,s__3827__$2,temp__5804__auto__){
return (function (p1__3825_SHARP_){
return cljs.core.nth.call(null,p1__3825_SHARP_,i);
});})(i__3828,i,c__4527__auto__,size__4528__auto__,b__3829,s__3827__$2,temp__5804__auto__))
,set.board_state.rows.call(null,board)));

var G__3830 = (i__3828 + (1));
i__3828 = G__3830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3829),set$board_state$columns_$_iter__3826.call(null,cljs.core.chunk_rest.call(null,s__3827__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__3829),null);
}
} else {
var i = cljs.core.first.call(null,s__3827__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__3827__$2,temp__5804__auto__){
return (function (p1__3825_SHARP_){
return cljs.core.nth.call(null,p1__3825_SHARP_,i);
});})(i,s__3827__$2,temp__5804__auto__))
,set.board_state.rows.call(null,board)),set$board_state$columns_$_iter__3826.call(null,cljs.core.rest.call(null,s__3827__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),set.board_state.board_size.call(null,board)));
}
});
set.board_state.diagonals = (function set$board_state$diagonals(board){
if(set.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__3831_SHARP_){
return set.board_state.diagonals.call(null,p1__3831_SHARP_);
}),set.board_state.all_planes.call(null,board)));
} else {
var size = set.board_state.board_size.call(null,board);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (p1__3832_SHARP_){
return cljs.core.nth.call(null,board,((size + (1)) * p1__3832_SHARP_));
}),cljs.core.range.call(null,(0),size)),cljs.core.map.call(null,(function (p1__3833_SHARP_){
return cljs.core.nth.call(null,board,((size - (1)) * (p1__3833_SHARP_ + (1))));
}),cljs.core.range.call(null,(0),size))], null);
}
});
set.board_state.horizontal_win_QMARK_ = (function set$board_state$horizontal_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,set.board_state.winning_line_QMARK_,set.board_state.rows.call(null,board))));
});
set.board_state.vertical_win_QMARK_ = (function set$board_state$vertical_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,set.board_state.winning_line_QMARK_,set.board_state.columns.call(null,board))));
});
set.board_state.diagonal_win_QMARK_ = (function set$board_state$diagonal_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,set.board_state.winning_line_QMARK_,set.board_state.diagonals.call(null,board))));
});
set.board_state.win_QMARK_ = (function set$board_state$win_QMARK_(board){
return ((set.board_state.horizontal_win_QMARK_.call(null,board)) || (set.board_state.vertical_win_QMARK_.call(null,board)) || (set.board_state.diagonal_win_QMARK_.call(null,board)));
});
set.board_state.winner = (function set$board_state$winner(board){
if(cljs.core._EQ_.call(null,set.utils.tile_count.call(null,board,"x"),set.utils.tile_count.call(null,board,"o"))){
return "o";
} else {
return "x";
}
});
set.board_state.tie_QMARK_ = (function set$board_state$tie_QMARK_(board){
if(set.utils.board_3d_QMARK_.call(null,board)){
if(cljs.core.every_QMARK_.call(null,(function (p1__3834_SHARP_){
return cljs.core._EQ_.call(null,set.utils.empty_tile,p1__3834_SHARP_);
}),cljs.core.flatten.call(null,board))){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__3835_SHARP_){
return set.board_state.tie_QMARK_.call(null,p1__3835_SHARP_);
}),set.board_state.all_planes.call(null,board)));
} else {
return false;
}
} else {
return (((!(set.board_state.win_QMARK_.call(null,board)))) && (cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__3836_SHARP_){
return cljs.core._EQ_.call(null,p1__3836_SHARP_,set.utils.empty_tile);
}),board))));
}
});
set.board_state.game_over_QMARK_ = (function set$board_state$game_over_QMARK_(board){
var or__4126__auto__ = set.board_state.win_QMARK_.call(null,board);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return set.board_state.tie_QMARK_.call(null,board);
}
});

//# sourceMappingURL=board_state.js.map
