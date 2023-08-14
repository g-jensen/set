// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.move');
goog.require('cljs.core');
goog.require('tictactoe.utils');
goog.require('tictactoe.board_state');
tictactoe.move.player_to_move = (function tictactoe$move$player_to_move(board){
if(cljs.core._EQ_.call(null,tictactoe.utils.tile_count.call(null,board,"x"),tictactoe.utils.tile_count.call(null,board,"o"))){
return "x";
} else {
return "o";
}
});
tictactoe.move.move_valid_QMARK_ = (function tictactoe$move$move_valid_QMARK_(board,index){
var board__$1 = ((tictactoe.utils.board_3d_QMARK_.call(null,board))?cljs.core.flatten.call(null,board):board);
return ((tictactoe.utils.in_range_QMARK_.call(null,(0),cljs.core.count.call(null,board__$1),index)) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,board__$1,index),tictactoe.utils.empty_tile)));
});
tictactoe.move.play_move = (function tictactoe$move$play_move(board,index){
if((!(tictactoe.move.move_valid_QMARK_.call(null,board,index)))){
return board;
} else {
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.partition.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board)),cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.flatten.call(null,board)),index,tictactoe.move.player_to_move.call(null,board)));
} else {
return cljs.core.assoc.call(null,board,index,tictactoe.move.player_to_move.call(null,board));
}
}
});
tictactoe.move.x_wins_QMARK_ = (function tictactoe$move$x_wins_QMARK_(board){
return ((tictactoe.board_state.win_QMARK_.call(null,board)) && (cljs.core._EQ_.call(null,"x",tictactoe.board_state.winner.call(null,board))));
});
tictactoe.move.o_wins_QMARK_ = (function tictactoe$move$o_wins_QMARK_(board){
return ((tictactoe.board_state.win_QMARK_.call(null,board)) && (cljs.core._EQ_.call(null,"o",tictactoe.board_state.winner.call(null,board))));
});
tictactoe.move.score_board = (function tictactoe$move$score_board(board){
if(tictactoe.move.x_wins_QMARK_.call(null,board)){
return (10);
} else {
if(tictactoe.move.o_wins_QMARK_.call(null,board)){
return (-10);
} else {
if(cljs.core.truth_(tictactoe.board_state.tie_QMARK_.call(null,board))){
return (0);
} else {
return null;
}
}
}
});
tictactoe.move.move_weight = (function tictactoe$move$move_weight(board,index,depth){
var board__$1 = tictactoe.move.play_move.call(null,board,index);
if(cljs.core.truth_(tictactoe.board_state.game_over_QMARK_.call(null,board__$1))){
return tictactoe.move.score_board.call(null,board__$1);
} else {
if((depth === (0))){
return (0);
} else {
if(cljs.core._EQ_.call(null,"x",tictactoe.move.player_to_move.call(null,board__$1))){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__5731_SHARP_){
return tictactoe.move.move_weight.call(null,board__$1,p1__5731_SHARP_,(depth - (1)));
}),tictactoe.utils.empty_indices.call(null,board__$1)));
} else {
return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__5732_SHARP_){
return tictactoe.move.move_weight.call(null,board__$1,p1__5732_SHARP_,(depth - (1)));
}),tictactoe.utils.empty_indices.call(null,board__$1)));

}
}
}
});
tictactoe.move.move_weight = cljs.core.memoize.call(null,tictactoe.move.move_weight);
tictactoe.move.initial_depth = (function tictactoe$move$initial_depth(board){
var size = tictactoe.board_state.board_size.call(null,board);
if(cljs.core._EQ_.call(null,(3),size)){
return (10);
} else {
if(cljs.core._EQ_.call(null,(4),size)){
return (4);
} else {
return (2);

}
}
});
tictactoe.move.max_key_or_min_key_QMARK_ = (function tictactoe$move$max_key_or_min_key_QMARK_(board){
if(cljs.core._EQ_.call(null,"x",tictactoe.move.player_to_move.call(null,board))){
return cljs.core.max_key;
} else {
return cljs.core.min_key;
}
});
tictactoe.move.includes_QMARK_ = (function tictactoe$move$includes_QMARK_(coll,val){
return cljs.core.some.call(null,(function (p1__5733_SHARP_){
return cljs.core._EQ_.call(null,val,p1__5733_SHARP_);
}),coll);
});
tictactoe.move.board_with_o = (function tictactoe$move$board_with_o(board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5734_SHARP_){
return tictactoe.move.includes_QMARK_.call(null,cljs.core.nth.call(null,board,p1__5734_SHARP_),"o");
}),cljs.core.range.call(null,(0),(3))));
});
tictactoe.move.board_with_x = (function tictactoe$move$board_with_x(board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__5735_SHARP_){
return tictactoe.move.includes_QMARK_.call(null,cljs.core.nth.call(null,board,p1__5735_SHARP_),"x");
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)));
});
tictactoe.move.get_3d_move = (function tictactoe$move$get_3d_move(board){
if(cljs.core._EQ_.call(null,"o",tictactoe.move.player_to_move.call(null,board))){
return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__5736_SHARP_){
return tictactoe.move.move_weight.call(null,board,p1__5736_SHARP_,(2));
}),tictactoe.utils.empty_indices.call(null,board));
} else {
var moves_map = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(13),(13),(13)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),(22),(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6),(18),(24)], null)], null);
var x_count = tictactoe.utils.tile_count.call(null,board,"x");
var vec__5739 = cljs.core.nth.call(null,moves_map,x_count,cljs.core.repeat.call(null,null));
var x1 = cljs.core.nth.call(null,vec__5739,(0),null);
var y1 = cljs.core.nth.call(null,vec__5739,(1),null);
var x2 = cljs.core.nth.call(null,vec__5739,(2),null);
var y2 = cljs.core.nth.call(null,vec__5739,(3),null);
if((x_count < (2))){
if(cljs.core._EQ_.call(null,(0),tictactoe.move.board_with_o.call(null,board))){
if(tictactoe.move.move_valid_QMARK_.call(null,board,x1)){
return x1;
} else {
return y1;
}
} else {
if(tictactoe.move.move_valid_QMARK_.call(null,board,x2)){
return x2;
} else {
return y2;
}
}
} else {
if(cljs.core._EQ_.call(null,x_count,(2))){
var computer_move = cljs.core.apply.call(null,cljs.core.max_key,(function (p1__5737_SHARP_){
return tictactoe.move.move_weight.call(null,board,p1__5737_SHARP_,(1));
}),tictactoe.utils.empty_indices.call(null,board));
if(cljs.core.truth_(tictactoe.board_state.game_over_QMARK_.call(null,tictactoe.move.play_move.call(null,board,computer_move)))){
return computer_move;
} else {
if(cljs.core._EQ_.call(null,(0),tictactoe.move.board_with_x.call(null,board))){
if(tictactoe.move.move_valid_QMARK_.call(null,board,x1)){
return x1;
} else {
return y1;
}
} else {
if(tictactoe.move.move_valid_QMARK_.call(null,board,x2)){
return x2;
} else {
return y2;
}
}
}
} else {
return cljs.core.apply.call(null,cljs.core.max_key,(function (p1__5738_SHARP_){
return tictactoe.move.move_weight.call(null,board,p1__5738_SHARP_,(1));
}),tictactoe.utils.empty_indices.call(null,board));

}
}
}
});
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.move !== 'undefined') && (typeof tictactoe.move.get_computer_move !== 'undefined')){
} else {
tictactoe.move.get_computer_move = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.move","get-computer-move"),(function (difficulty,board){
return difficulty;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,tictactoe.move.get_computer_move,new cljs.core.Keyword(null,"hard","hard",2068420191),(function (_,board){
var depth = tictactoe.move.initial_depth.call(null,board);
var empty_indices = tictactoe.utils.empty_indices.call(null,board);
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return tictactoe.move.get_3d_move.call(null,board);
} else {
return cljs.core.apply.call(null,tictactoe.move.max_key_or_min_key_QMARK_.call(null,board),(function (p1__5742_SHARP_){
return tictactoe.move.move_weight.call(null,board,p1__5742_SHARP_,depth);
}),empty_indices);
}
}));
cljs.core._add_method.call(null,tictactoe.move.get_computer_move,new cljs.core.Keyword(null,"medium","medium",-1864319384),(function (_,board){
if((cljs.core.rand.call(null) >= 0.7)){
return cljs.core.first.call(null,tictactoe.utils.empty_indices.call(null,board));
} else {
return tictactoe.move.get_computer_move.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),board);
}
}));
cljs.core._add_method.call(null,tictactoe.move.get_computer_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (_,board){
if((cljs.core.rand.call(null) >= 0.2)){
return cljs.core.first.call(null,tictactoe.utils.empty_indices.call(null,board));
} else {
return tictactoe.move.get_computer_move.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),board);
}
}));

//# sourceMappingURL=move.js.map
