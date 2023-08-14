// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.board_state');
goog.require('cljs.core');
goog.require('tictactoe.utils');
tictactoe.board_state.winning_line_QMARK_ = (function tictactoe$board_state$winning_line_QMARK_(seq){
if(cljs.core.not_EQ_.call(null,tictactoe.utils.empty_tile,cljs.core.first.call(null,seq))){
return cljs.core.apply.call(null,cljs.core._EQ_,seq);
} else {
return false;
}
});
tictactoe.board_state.board_size = (function tictactoe$board_state$board_size(board){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return tictactoe.board_state.board_size.call(null,cljs.core.first.call(null,board));
} else {
return (Math.sqrt(cljs.core.count.call(null,board)) | (0));
}
});
tictactoe.board_state.rotated_planes = (function tictactoe$board_state$rotated_planes(board){
var vec__5697 = cljs.core.first.call(null,board);
var a = cljs.core.nth.call(null,vec__5697,(0),null);
var b = cljs.core.nth.call(null,vec__5697,(1),null);
var c = cljs.core.nth.call(null,vec__5697,(2),null);
var d = cljs.core.nth.call(null,vec__5697,(3),null);
var e = cljs.core.nth.call(null,vec__5697,(4),null);
var f = cljs.core.nth.call(null,vec__5697,(5),null);
var g = cljs.core.nth.call(null,vec__5697,(6),null);
var h = cljs.core.nth.call(null,vec__5697,(7),null);
var i = cljs.core.nth.call(null,vec__5697,(8),null);
var vec__5700 = cljs.core.second.call(null,board);
var j = cljs.core.nth.call(null,vec__5700,(0),null);
var k = cljs.core.nth.call(null,vec__5700,(1),null);
var l = cljs.core.nth.call(null,vec__5700,(2),null);
var m = cljs.core.nth.call(null,vec__5700,(3),null);
var n = cljs.core.nth.call(null,vec__5700,(4),null);
var o = cljs.core.nth.call(null,vec__5700,(5),null);
var p = cljs.core.nth.call(null,vec__5700,(6),null);
var q = cljs.core.nth.call(null,vec__5700,(7),null);
var r = cljs.core.nth.call(null,vec__5700,(8),null);
var vec__5703 = cljs.core.nth.call(null,board,(2));
var s = cljs.core.nth.call(null,vec__5703,(0),null);
var t = cljs.core.nth.call(null,vec__5703,(1),null);
var u = cljs.core.nth.call(null,vec__5703,(2),null);
var v = cljs.core.nth.call(null,vec__5703,(3),null);
var w = cljs.core.nth.call(null,vec__5703,(4),null);
var x = cljs.core.nth.call(null,vec__5703,(5),null);
var y = cljs.core.nth.call(null,vec__5703,(6),null);
var z = cljs.core.nth.call(null,vec__5703,(7),null);
var aa = cljs.core.nth.call(null,vec__5703,(8),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,g,j,m,p,s,v,y], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,e,h,k,n,q,t,w,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,f,i,l,o,r,u,x,aa], null)], null);
});
tictactoe.board_state.diagonal_planes = (function tictactoe$board_state$diagonal_planes(board){
var vec__5706 = cljs.core.first.call(null,board);
var a = cljs.core.nth.call(null,vec__5706,(0),null);
var b = cljs.core.nth.call(null,vec__5706,(1),null);
var c = cljs.core.nth.call(null,vec__5706,(2),null);
var d = cljs.core.nth.call(null,vec__5706,(3),null);
var e = cljs.core.nth.call(null,vec__5706,(4),null);
var f = cljs.core.nth.call(null,vec__5706,(5),null);
var g = cljs.core.nth.call(null,vec__5706,(6),null);
var h = cljs.core.nth.call(null,vec__5706,(7),null);
var i = cljs.core.nth.call(null,vec__5706,(8),null);
var vec__5709 = cljs.core.second.call(null,board);
var j = cljs.core.nth.call(null,vec__5709,(0),null);
var k = cljs.core.nth.call(null,vec__5709,(1),null);
var l = cljs.core.nth.call(null,vec__5709,(2),null);
var m = cljs.core.nth.call(null,vec__5709,(3),null);
var n = cljs.core.nth.call(null,vec__5709,(4),null);
var o = cljs.core.nth.call(null,vec__5709,(5),null);
var p = cljs.core.nth.call(null,vec__5709,(6),null);
var q = cljs.core.nth.call(null,vec__5709,(7),null);
var r = cljs.core.nth.call(null,vec__5709,(8),null);
var vec__5712 = cljs.core.nth.call(null,board,(2));
var s = cljs.core.nth.call(null,vec__5712,(0),null);
var t = cljs.core.nth.call(null,vec__5712,(1),null);
var u = cljs.core.nth.call(null,vec__5712,(2),null);
var v = cljs.core.nth.call(null,vec__5712,(3),null);
var w = cljs.core.nth.call(null,vec__5712,(4),null);
var x = cljs.core.nth.call(null,vec__5712,(5),null);
var y = cljs.core.nth.call(null,vec__5712,(6),null);
var z = cljs.core.nth.call(null,vec__5712,(7),null);
var aa = cljs.core.nth.call(null,vec__5712,(8),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,k,u,d,n,x,g,q,aa], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,k,s,f,n,v,i,q,y], null)], null);
});
tictactoe.board_state.all_planes = (function tictactoe$board_state$all_planes(board){
return cljs.core.concat.call(null,board,tictactoe.board_state.rotated_planes.call(null,board),tictactoe.board_state.diagonal_planes.call(null,board));
});
tictactoe.board_state.game_over_message = (function tictactoe$board_state$game_over_message(board){
if(cljs.core.truth_(tictactoe.board_state.win_QMARK_.call(null,board))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tictactoe.board_state.winner.call(null,board))," has won!"].join('');
} else {
return "tie!";
}
});
tictactoe.board_state.rows = (function tictactoe$board_state$rows(board){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__5715_SHARP_){
return tictactoe.board_state.rows.call(null,p1__5715_SHARP_);
}),tictactoe.board_state.all_planes.call(null,board)));
} else {
return cljs.core.partition.call(null,tictactoe.board_state.board_size.call(null,board),board);
}
});
tictactoe.board_state.columns = (function tictactoe$board_state$columns(board){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__5716_SHARP_){
return tictactoe.board_state.columns.call(null,p1__5716_SHARP_);
}),tictactoe.board_state.all_planes.call(null,board)));
} else {
var iter__4529__auto__ = (function tictactoe$board_state$columns_$_iter__5718(s__5719){
return (new cljs.core.LazySeq(null,(function (){
var s__5719__$1 = s__5719;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5719__$1);
if(temp__5804__auto__){
var s__5719__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5719__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__5719__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__5721 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__5720 = (0);
while(true){
if((i__5720 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__5720);
cljs.core.chunk_append.call(null,b__5721,cljs.core.map.call(null,((function (i__5720,i,c__4527__auto__,size__4528__auto__,b__5721,s__5719__$2,temp__5804__auto__){
return (function (p1__5717_SHARP_){
return cljs.core.nth.call(null,p1__5717_SHARP_,i);
});})(i__5720,i,c__4527__auto__,size__4528__auto__,b__5721,s__5719__$2,temp__5804__auto__))
,tictactoe.board_state.rows.call(null,board)));

var G__5722 = (i__5720 + (1));
i__5720 = G__5722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5721),tictactoe$board_state$columns_$_iter__5718.call(null,cljs.core.chunk_rest.call(null,s__5719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5721),null);
}
} else {
var i = cljs.core.first.call(null,s__5719__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (i,s__5719__$2,temp__5804__auto__){
return (function (p1__5717_SHARP_){
return cljs.core.nth.call(null,p1__5717_SHARP_,i);
});})(i,s__5719__$2,temp__5804__auto__))
,tictactoe.board_state.rows.call(null,board)),tictactoe$board_state$columns_$_iter__5718.call(null,cljs.core.rest.call(null,s__5719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,(0),tictactoe.board_state.board_size.call(null,board)));
}
});
tictactoe.board_state.diagonals = (function tictactoe$board_state$diagonals(board){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__5723_SHARP_){
return tictactoe.board_state.diagonals.call(null,p1__5723_SHARP_);
}),tictactoe.board_state.all_planes.call(null,board)));
} else {
var size = tictactoe.board_state.board_size.call(null,board);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (p1__5724_SHARP_){
return cljs.core.nth.call(null,board,((size + (1)) * p1__5724_SHARP_));
}),cljs.core.range.call(null,(0),size)),cljs.core.map.call(null,(function (p1__5725_SHARP_){
return cljs.core.nth.call(null,board,((size - (1)) * (p1__5725_SHARP_ + (1))));
}),cljs.core.range.call(null,(0),size))], null);
}
});
tictactoe.board_state.horizontal_win_QMARK_ = (function tictactoe$board_state$horizontal_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,tictactoe.board_state.winning_line_QMARK_,tictactoe.board_state.rows.call(null,board))));
});
tictactoe.board_state.vertical_win_QMARK_ = (function tictactoe$board_state$vertical_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,tictactoe.board_state.winning_line_QMARK_,tictactoe.board_state.columns.call(null,board))));
});
tictactoe.board_state.diagonal_win_QMARK_ = (function tictactoe$board_state$diagonal_win_QMARK_(board){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,tictactoe.board_state.winning_line_QMARK_,tictactoe.board_state.diagonals.call(null,board))));
});
tictactoe.board_state.win_QMARK_ = (function tictactoe$board_state$win_QMARK_(board){
return ((tictactoe.board_state.horizontal_win_QMARK_.call(null,board)) || (tictactoe.board_state.vertical_win_QMARK_.call(null,board)) || (tictactoe.board_state.diagonal_win_QMARK_.call(null,board)));
});
tictactoe.board_state.winner = (function tictactoe$board_state$winner(board){
if(cljs.core._EQ_.call(null,tictactoe.utils.tile_count.call(null,board,"x"),tictactoe.utils.tile_count.call(null,board,"o"))){
return "o";
} else {
return "x";
}
});
tictactoe.board_state.tie_QMARK_ = (function tictactoe$board_state$tie_QMARK_(board){
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
if(cljs.core.every_QMARK_.call(null,(function (p1__5726_SHARP_){
return cljs.core._EQ_.call(null,tictactoe.utils.empty_tile,p1__5726_SHARP_);
}),cljs.core.flatten.call(null,board))){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__5727_SHARP_){
return tictactoe.board_state.tie_QMARK_.call(null,p1__5727_SHARP_);
}),tictactoe.board_state.all_planes.call(null,board)));
} else {
return false;
}
} else {
return (((!(tictactoe.board_state.win_QMARK_.call(null,board)))) && (cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__5728_SHARP_){
return cljs.core._EQ_.call(null,p1__5728_SHARP_,tictactoe.utils.empty_tile);
}),board))));
}
});
tictactoe.board_state.game_over_QMARK_ = (function tictactoe$board_state$game_over_QMARK_(board){
var or__4126__auto__ = tictactoe.board_state.win_QMARK_.call(null,board);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return tictactoe.board_state.tie_QMARK_.call(null,board);
}
});

//# sourceMappingURL=board_state.js.map
