// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.components');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('tictactoe.game_state');
goog.require('tictactoe.move');
goog.require('tictactoe.utils');
tictactoe.components.initial_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"dimension","dimension",543254198),(2),new cljs.core.Keyword(null,"board-size","board-size",140730505),(3),new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.utils.empty_board.call(null,(3)),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"character","character",380652989),"x"], null);
tictactoe.components.state = reagent.core.atom.call(null,tictactoe.components.initial_state);
tictactoe.components.change_state = (function tictactoe$components$change_state(key,value){
if(cljs.core.fn_QMARK_.call(null,value)){
return cljs.core.swap_BANG_.call(null,tictactoe.components.state,cljs.core.assoc,key,value.call(null,key.call(null,cljs.core.deref.call(null,tictactoe.components.state))));
} else {
return cljs.core.swap_BANG_.call(null,tictactoe.components.state,cljs.core.assoc,key,value);
}
});
tictactoe.components.banner = (function tictactoe$components$banner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"TicTacToe"], null)], null);
});
tictactoe.components.padded_label = (function tictactoe$components$padded_label(name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null)], null),name], null);
});
tictactoe.components.option_name = (function tictactoe$components$option_name(opt){
var val = cljs.reader.read_string.call(null,opt);
if((val instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,val);
} else {
return val;
}
});
tictactoe.components.menu = (function tictactoe$components$menu(label,options,do_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tictactoe.components.padded_label.call(null,cljs.core.name.call(null,label)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__7333_SHARP_){
tictactoe.components.change_state.call(null,label,cljs.reader.read_string.call(null,p1__7333_SHARP_.target.value));

return do_fn.call(null);
})], null),cljs.core.doall.call(null,(function (){var iter__4529__auto__ = (function tictactoe$components$menu_$_iter__7334(s__7335){
return (new cljs.core.LazySeq(null,(function (){
var s__7335__$1 = s__7335;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__7335__$1);
if(temp__5804__auto__){
var s__7335__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7335__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__7335__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__7337 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__7336 = (0);
while(true){
if((i__7336 < size__4528__auto__)){
var opt = cljs.core._nth.call(null,c__4527__auto__,i__7336);
cljs.core.chunk_append.call(null,b__7337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),opt], null),tictactoe.components.option_name.call(null,opt)], null));

var G__7338 = (i__7336 + (1));
i__7336 = G__7338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7337),tictactoe$components$menu_$_iter__7334.call(null,cljs.core.chunk_rest.call(null,s__7335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7337),null);
}
} else {
var opt = cljs.core.first.call(null,s__7335__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),opt], null),tictactoe.components.option_name.call(null,opt)], null),tictactoe$components$menu_$_iter__7334.call(null,cljs.core.rest.call(null,s__7335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,options);
})())], null)], null);
});
tictactoe.components.try_change = (function tictactoe$components$try_change(label,valid_QMARK_,f){
if(cljs.core.truth_(valid_QMARK_.call(null,f.call(null,label.call(null,cljs.core.deref.call(null,tictactoe.components.state)))))){
return tictactoe.components.change_state.call(null,label,f);
} else {
return null;
}
});
tictactoe.components.counter = (function tictactoe$components$counter(label,valid_QMARK_,do_fn){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tictactoe.components.padded_label.call(null,cljs.core.name.call(null,label)),tictactoe.components.padded_label.call(null,label.call(null,cljs.core.deref.call(null,tictactoe.components.state))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"-",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
tictactoe.components.try_change.call(null,label,valid_QMARK_,cljs.core.dec);

return do_fn.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"+",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
tictactoe.components.try_change.call(null,label,valid_QMARK_,cljs.core.inc);

return do_fn.call(null);
})], null)], null)], null);
});
tictactoe.components.build_tile = (function tictactoe$components$build_tile(idx){
var board = ((tictactoe.utils.board_3d_QMARK_.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))))?cljs.core.flatten.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))):new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)));
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state));
var real_idx = (idx - cljs.core.quot.call(null,(idx + (1)),(size + (1))));
if((cljs.core.mod.call(null,(idx + (1)),(size + (1))) === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,board,real_idx),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tictactoe.components.state,(function (x){
return tictactoe.game_state.next_state.call(null,x,(real_idx + (1)));
}));
})], null)], null);
}
});
tictactoe.components.board = (function tictactoe$components$board(){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state));
var size = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state));
if(tictactoe.utils.board_3d_QMARK_.call(null,board)){
return cljs.core.map.call(null,tictactoe.components.build_tile,cljs.core.range.call(null,(0),(36)));
} else {
return cljs.core.map.call(null,tictactoe.components.build_tile,cljs.core.range.call(null,(0),(size * (size + (1)))));
}
});
tictactoe.components.greater_than_two = (function tictactoe$components$greater_than_two(n){
return (n > (2));
});
tictactoe.components.reset_state = (function tictactoe$components$reset_state(){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.utils.empty_board.call(null,new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))));

if(cljs.core._EQ_.call(null,(3),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(3),tictactoe.utils.empty_board.call(null,(3))));

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board-size","board-size",140730505),(3));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928));

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"character","character",380652989),"x");
} else {
}

if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))) && (cljs.core._EQ_.call(null,"o",new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))))){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.move.play_move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)),tictactoe.move.get_computer_move.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))));
} else {
}

return tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"over?","over?",993474009),false);
});
tictactoe.components.main = (function tictactoe$components$main(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),tictactoe.components.banner.call(null),tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2","3"], null),tictactoe.components.reset_state),((cljs.core._EQ_.call(null,(2),new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))))?tictactoe.components.counter.call(null,new cljs.core.Keyword(null,"board-size","board-size",140730505),tictactoe.components.greater_than_two,tictactoe.components.reset_state):null),tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":pvp",":pvc"], null),tictactoe.components.reset_state),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))))?tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [":easy",":medium",":hard"], null),tictactoe.components.reset_state):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state))))?tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"x\"","\"o\""], null),tictactoe.components.reset_state):null),tictactoe.components.board.call(null),(cljs.core.truth_(new cljs.core.Keyword(null,"over?","over?",993474009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Play Again",new cljs.core.Keyword(null,"on-click","on-click",1632826543),tictactoe.components.reset_state], null)], null):null)], null);
});

//# sourceMappingURL=components.js.map
