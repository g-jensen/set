// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.game_state');
goog.require('cljs.core');
goog.require('tictactoe.board_state');
goog.require('tictactoe.move');
goog.require('tictactoe.utils');
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.run_tictactoe !== 'undefined')){
} else {
tictactoe.game_state.run_tictactoe = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","run-tictactoe"),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.next_state !== 'undefined')){
} else {
tictactoe.game_state.next_state = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","next-state"),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.ui_components !== 'undefined')){
} else {
tictactoe.game_state.ui_components = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","ui-components"),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.db_initialize !== 'undefined')){
} else {
tictactoe.game_state.db_initialize = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","db-initialize"),new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.db_fetch_games !== 'undefined')){
} else {
tictactoe.game_state.db_fetch_games = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","db-fetch-games"),new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.db_delete_game !== 'undefined')){
} else {
tictactoe.game_state.db_delete_game = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","db-delete-game"),new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof tictactoe !== 'undefined') && (typeof tictactoe.game_state !== 'undefined') && (typeof tictactoe.game_state.db_update_game !== 'undefined')){
} else {
tictactoe.game_state.db_update_game = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tictactoe.game-state","db-update-game"),(function (state){
return new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
tictactoe.game_state.db_save_game = (function tictactoe$game_state$db_save_game(state){
tictactoe.game_state.db_delete_game.call(null,state,new cljs.core.Keyword(null,"old-date","old-date",-330587699).cljs$core$IFn$_invoke$arity$1(state));

return tictactoe.game_state.db_update_game.call(null,state);
});
tictactoe.game_state.over_QMARK_ = (function tictactoe$game_state$over_QMARK_(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
return tictactoe.board_state.game_over_QMARK_.call(null,board);
});
tictactoe.game_state.computer_turn_QMARK_ = (function tictactoe$game_state$computer_turn_QMARK_(state){
return (((!(cljs.core.empty_QMARK_.call(null,tictactoe.utils.empty_indices.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(state),tictactoe.move.player_to_move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))));
});
tictactoe.game_state.clean_up = (function tictactoe$game_state$clean_up(state){
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(state);
return tictactoe.game_state.db_delete_game.call(null,state,date);
});
tictactoe.game_state.update_over = (function tictactoe$game_state$update_over(state){
if(cljs.core.truth_(tictactoe.game_state.over_QMARK_.call(null,state))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(state))){
tictactoe.game_state.clean_up.call(null,state);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"over?","over?",993474009),true);
} else {
return state;
}
});
tictactoe.game_state.update_computer = (function tictactoe$game_state$update_computer(state){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
var difficulty = new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(state);
if(tictactoe.game_state.computer_turn_QMARK_.call(null,state)){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.move.play_move.call(null,board,tictactoe.move.get_computer_move.call(null,difficulty,board)));
} else {
return state;
}
});
cljs.core._add_method.call(null,tictactoe.game_state.next_state,new cljs.core.Keyword(null,"done","done",-889844188),(function (state,input){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state);
if((!((input == null)))){
var new_state = tictactoe.game_state.update_computer.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.move.play_move.call(null,board,(input - (1)))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(new_state))){
tictactoe.game_state.db_initialize.call(null,new_state);

tictactoe.game_state.db_save_game.call(null,new_state);
} else {
}

return tictactoe.game_state.update_over.call(null,new_state);
} else {
return state;
}
}));

//# sourceMappingURL=game_state.js.map
