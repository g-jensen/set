// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.move');
goog.require('cljs.core');
goog.require('set.utils');
goog.require('set.board_state');
set.move.player_to_move = (function set$move$player_to_move(board){
if(cljs.core._EQ_.call(null,set.utils.tile_count.call(null,board,"x"),set.utils.tile_count.call(null,board,"o"))){
return "x";
} else {
return "o";
}
});
set.move.move_valid_QMARK_ = (function set$move$move_valid_QMARK_(board,index){
var board__$1 = ((set.utils.board_3d_QMARK_.call(null,board))?cljs.core.flatten.call(null,board):board);
return ((set.utils.in_range_QMARK_.call(null,(0),cljs.core.count.call(null,board__$1),index)) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,board__$1,index),set.utils.empty_tile)));
});
set.move.play_move = (function set$move$play_move(board,index){
if((!(set.move.move_valid_QMARK_.call(null,board,index)))){
return board;
} else {
if(set.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.partition.call(null,cljs.core.count.call(null,cljs.core.first.call(null,board)),cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.flatten.call(null,board)),index,set.move.player_to_move.call(null,board)));
} else {
return cljs.core.assoc.call(null,board,index,set.move.player_to_move.call(null,board));
}
}
});
set.move.x_wins_QMARK_ = (function set$move$x_wins_QMARK_(board){
return ((set.board_state.win_QMARK_.call(null,board)) && (cljs.core._EQ_.call(null,"x",set.board_state.winner.call(null,board))));
});
set.move.o_wins_QMARK_ = (function set$move$o_wins_QMARK_(board){
return ((set.board_state.win_QMARK_.call(null,board)) && (cljs.core._EQ_.call(null,"o",set.board_state.winner.call(null,board))));
});
set.move.score_board = (function set$move$score_board(board){
if(set.move.x_wins_QMARK_.call(null,board)){
return (10);
} else {
if(set.move.o_wins_QMARK_.call(null,board)){
return (-10);
} else {
if(cljs.core.truth_(set.board_state.tie_QMARK_.call(null,board))){
return (0);
} else {
return null;
}
}
}
});
set.move.move_weight = (function set$move$move_weight(board,index,depth){
var board__$1 = set.move.play_move.call(null,board,index);
if(cljs.core.truth_(set.board_state.game_over_QMARK_.call(null,board__$1))){
return set.move.score_board.call(null,board__$1);
} else {
if((depth === (0))){
return (0);
} else {
if(cljs.core._EQ_.call(null,"x",set.move.player_to_move.call(null,board__$1))){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__3839_SHARP_){
return set.move.move_weight.call(null,board__$1,p1__3839_SHARP_,(depth - (1)));
}),set.utils.empty_indices.call(null,board__$1)));
} else {
return cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__3840_SHARP_){
return set.move.move_weight.call(null,board__$1,p1__3840_SHARP_,(depth - (1)));
}),set.utils.empty_indices.call(null,board__$1)));

}
}
}
});
set.move.move_weight = cljs.core.memoize.call(null,set.move.move_weight);
set.move.initial_depth = (function set$move$initial_depth(board){
var size = set.board_state.board_size.call(null,board);
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
set.move.max_key_or_min_key_QMARK_ = (function set$move$max_key_or_min_key_QMARK_(board){
if(cljs.core._EQ_.call(null,"x",set.move.player_to_move.call(null,board))){
return cljs.core.max_key;
} else {
return cljs.core.min_key;
}
});
set.move.includes_QMARK_ = (function set$move$includes_QMARK_(coll,val){
return cljs.core.some.call(null,(function (p1__3841_SHARP_){
return cljs.core._EQ_.call(null,val,p1__3841_SHARP_);
}),coll);
});
set.move.board_with_o = (function set$move$board_with_o(board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3842_SHARP_){
return set.move.includes_QMARK_.call(null,cljs.core.nth.call(null,board,p1__3842_SHARP_),"o");
}),cljs.core.range.call(null,(0),(3))));
});
set.move.board_with_x = (function set$move$board_with_x(board){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__3843_SHARP_){
return set.move.includes_QMARK_.call(null,cljs.core.nth.call(null,board,p1__3843_SHARP_),"x");
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)));
});
set.move.get_3d_move = (function set$move$get_3d_move(board){
if(cljs.core._EQ_.call(null,"o",set.move.player_to_move.call(null,board))){
return cljs.core.apply.call(null,cljs.core.min_key,(function (p1__3844_SHARP_){
return set.move.move_weight.call(null,board,p1__3844_SHARP_,(2));
}),set.utils.empty_indices.call(null,board));
} else {
var moves_map = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(13),(13),(13)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),(22),(21)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6),(18),(24)], null)], null);
var x_count = set.utils.tile_count.call(null,board,"x");
var vec__3847 = cljs.core.nth.call(null,moves_map,x_count,cljs.core.repeat.call(null,null));
var x1 = cljs.core.nth.call(null,vec__3847,(0),null);
var y1 = cljs.core.nth.call(null,vec__3847,(1),null);
var x2 = cljs.core.nth.call(null,vec__3847,(2),null);
var y2 = cljs.core.nth.call(null,vec__3847,(3),null);
if((x_count < (2))){
if(cljs.core._EQ_.call(null,(0),set.move.board_with_o.call(null,board))){
if(set.move.move_valid_QMARK_.call(null,board,x1)){
return x1;
} else {
return y1;
}
} else {
if(set.move.move_valid_QMARK_.call(null,board,x2)){
return x2;
} else {
return y2;
}
}
} else {
if(cljs.core._EQ_.call(null,x_count,(2))){
var computer_move = cljs.core.apply.call(null,cljs.core.max_key,(function (p1__3845_SHARP_){
return set.move.move_weight.call(null,board,p1__3845_SHARP_,(1));
}),set.utils.empty_indices.call(null,board));
if(cljs.core.truth_(set.board_state.game_over_QMARK_.call(null,set.move.play_move.call(null,board,computer_move)))){
return computer_move;
} else {
if(cljs.core._EQ_.call(null,(0),set.move.board_with_x.call(null,board))){
if(set.move.move_valid_QMARK_.call(null,board,x1)){
return x1;
} else {
return y1;
}
} else {
if(set.move.move_valid_QMARK_.call(null,board,x2)){
return x2;
} else {
return y2;
}
}
}
} else {
return cljs.core.apply.call(null,cljs.core.max_key,(function (p1__3846_SHARP_){
return set.move.move_weight.call(null,board,p1__3846_SHARP_,(1));
}),set.utils.empty_indices.call(null,board));

}
}
}
});
if((typeof set !== 'undefined') && (typeof set.move !== 'undefined') && (typeof set.move.get_computer_move !== 'undefined')){
} else {
set.move.get_computer_move = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"set.move","get-computer-move"),(function (difficulty,board){
return difficulty;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core._add_method.call(null,set.move.get_computer_move,new cljs.core.Keyword(null,"hard","hard",2068420191),(function (_,board){
var depth = set.move.initial_depth.call(null,board);
var empty_indices = set.utils.empty_indices.call(null,board);
if(set.utils.board_3d_QMARK_.call(null,board)){
return set.move.get_3d_move.call(null,board);
} else {
return cljs.core.apply.call(null,set.move.max_key_or_min_key_QMARK_.call(null,board),(function (p1__3850_SHARP_){
return set.move.move_weight.call(null,board,p1__3850_SHARP_,depth);
}),empty_indices);
}
}));
cljs.core._add_method.call(null,set.move.get_computer_move,new cljs.core.Keyword(null,"medium","medium",-1864319384),(function (_,board){
if((cljs.core.rand.call(null) >= 0.7)){
return cljs.core.first.call(null,set.utils.empty_indices.call(null,board));
} else {
return set.move.get_computer_move.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),board);
}
}));
cljs.core._add_method.call(null,set.move.get_computer_move,new cljs.core.Keyword(null,"easy","easy",315769928),(function (_,board){
if((cljs.core.rand.call(null) >= 0.2)){
return cljs.core.first.call(null,set.utils.empty_indices.call(null,board));
} else {
return set.move.get_computer_move.call(null,new cljs.core.Keyword(null,"hard","hard",2068420191),board);
}
}));

//# sourceMappingURL=move.js.map
