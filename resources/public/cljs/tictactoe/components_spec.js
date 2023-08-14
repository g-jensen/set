// Compiled by ClojureScript 1.10.764 {}
goog.provide('tictactoe.components_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tictactoe.components');
goog.require('tictactoe.utils');
var description__8453__auto___8796 = speclj.components.new_description.call(null,"A Collection of TicTacToe Components","tictactoe.components-spec");
var _STAR_parent_description_STAR__orig_val__8790_8797 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__8791_8798 = description__8453__auto___8796;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__8791_8798);

try{var seq__8792_8799 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
return cljs.core.swap_BANG_.call(null,tictactoe.components.state,cljs.core.constantly.call(null,tictactoe.components.initial_state));
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"has an initial state",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var expected__8538__auto__ = tictactoe.components.initial_state;
var actual__8539__auto__ = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"changes state to value",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198),(3));

var expected__8538__auto__ = (3);
var actual__8539__auto__ = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state));
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"changes state with function",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198),cljs.core.dec);

var expected__8538__auto__ = (1);
var actual__8539__auto__ = new cljs.core.Keyword(null,"dimension","dimension",543254198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.components.state));
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"has a banner component",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var expected__8538__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"TicTacToe"], null)], null);
var actual__8539__auto__ = tictactoe.components.banner.call(null);
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"creates a padded label",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var expected__8538__auto___8803 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null)], null),"hi"], null);
var actual__8539__auto___8804 = tictactoe.components.padded_label.call(null,"hi");
if(cljs.core._EQ_.call(null,expected__8538__auto___8803,actual__8539__auto___8804)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8803 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8803)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8804 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8804))," (using =)"].join('')));
}

var expected__8538__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px"], null)], null),"greg"], null);
var actual__8539__auto__ = tictactoe.components.padded_label.call(null,"greg");
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"creates a menu",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var expected__8589__auto___8805 = cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"opt1"], null),new cljs.core.Symbol(null,"opt1","opt1",1062615027,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"opt2"], null),new cljs.core.Symbol(null,"opt2","opt2",-1214072787,null)], null));
var actual__8590__auto___8806 = cljs.core.nth.call(null,tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"my-menu","my-menu",1829241351),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opt1","opt2"], null),(function (){
return cljs.core.List.EMPTY;
})),(2));
if((actual__8590__auto___8806 == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto___8805 == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto___8805)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8589__auto___8805 === 'string') && (typeof actual__8590__auto___8806 === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8590__auto___8806.indexOf(expected__8589__auto___8805))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto___8805 == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto___8805)),speclj.platform.endl,"to be in: ",(((actual__8590__auto___8806 == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto___8806))," (using .contains)"].join('')));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8589__auto___8805)) && (typeof actual__8590__auto___8806 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8589__auto___8805,actual__8590__auto___8806))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8590__auto___8806 == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto___8806)),speclj.platform.endl,"to match: ",(((expected__8589__auto___8805 == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto___8805))," (using re-seq)"].join('')));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8590__auto___8806)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8590__auto___8806,expected__8589__auto___8805)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto___8805 == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto___8805)),speclj.platform.endl,"to be a key in: ",(((actual__8590__auto___8806 == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto___8806))," (using contains?)"].join('')));
} else {
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8590__auto___8806)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8588__8591__auto__){
return cljs.core._EQ_.call(null,expected__8589__auto___8805,p1__8588__8591__auto__);
}),actual__8590__auto___8806))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto___8805 == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto___8805)),speclj.platform.endl,"to be in: ",(((actual__8590__auto___8806 == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto___8806))," (using =)"].join('')));
} else {
}
} else {
throw (new Error(["should-contain doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8589__auto___8805)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8590__auto___8806))),"]"].join('')));

}
}
}
}
}

var expected__8589__auto__ = cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"opt3"], null),new cljs.core.Symbol(null,"opt3","opt3",1024247066,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"opt4"], null),new cljs.core.Symbol(null,"opt4","opt4",-812542315,null)], null));
var actual__8590__auto__ = cljs.core.nth.call(null,tictactoe.components.menu.call(null,new cljs.core.Keyword(null,"my-menu1","my-menu1",1260083224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opt3","opt4"], null),(function (){
return cljs.core.List.EMPTY;
})),(2));
if((actual__8590__auto__ == null)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto__)),speclj.platform.endl,"to be in: nil"].join('')));
} else {
if(((typeof expected__8589__auto__ === 'string') && (typeof actual__8590__auto__ === 'string'))){
if(cljs.core._EQ_.call(null,(-1),actual__8590__auto__.indexOf(expected__8589__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto__)),speclj.platform.endl,"to be in: ",(((actual__8590__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto__))," (using .contains)"].join('')));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__8589__auto__)) && (typeof actual__8590__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__8589__auto__,actual__8590__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((actual__8590__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto__)),speclj.platform.endl,"to match: ",(((expected__8589__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto__))," (using re-seq)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__8590__auto__)){
if((!(cljs.core.contains_QMARK_.call(null,actual__8590__auto__,expected__8589__auto__)))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto__)),speclj.platform.endl,"to be a key in: ",(((actual__8590__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto__))," (using contains?)"].join('')));
} else {
return null;
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__8590__auto__)){
if(cljs.core.not.call(null,cljs.core.some.call(null,(function (p1__8588__8591__auto__){
return cljs.core._EQ_.call(null,expected__8589__auto__,p1__8588__8591__auto__);
}),actual__8590__auto__))){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8589__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8589__auto__)),speclj.platform.endl,"to be in: ",(((actual__8590__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8590__auto__))," (using =)"].join('')));
} else {
return null;
}
} else {
throw (new Error(["should-contain doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.type_name.call(null,cljs.core.type.call(null,expected__8589__auto__)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.type_name.call(null,cljs.core.type.call(null,actual__8590__auto__))),"]"].join('')));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"checks if a board-size counter is valid",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var value__8526__auto___8807 = tictactoe.components.greater_than_two.call(null,(3));
if((!(value__8526__auto___8807))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8526__auto___8807 == null))?"nil":cljs.core.pr_str.call(null,value__8526__auto___8807)),""].join('')));
} else {
}

var value__8532__auto___8808 = tictactoe.components.greater_than_two.call(null,(2));
if(value__8532__auto___8808){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__8532__auto___8808 == null))?"nil":cljs.core.pr_str.call(null,value__8532__auto___8808))].join('')));
} else {
}

var value__8526__auto__ = tictactoe.components.greater_than_two.call(null,(4));
if((!(value__8526__auto__))){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__8526__auto__ == null))?"nil":cljs.core.pr_str.call(null,value__8526__auto__)),""].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"has a board",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var expected__8538__auto___8809 = (12);
var actual__8539__auto___8810 = cljs.core.count.call(null,tictactoe.components.board.call(null));
if(cljs.core._EQ_.call(null,expected__8538__auto___8809,actual__8539__auto___8810)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8809 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8809)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8810 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8810))," (using =)"].join('')));
}

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(3),tictactoe.utils.empty_board.call(null,(3))));

var expected__8538__auto__ = (36);
var actual__8539__auto__ = cljs.core.count.call(null,tictactoe.components.board.call(null));
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
),speclj.components.new_characteristic.call(null,"resets state",((function (_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796){
return (function (){
var init_2d = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"dimension","dimension",543254198),(2),new cljs.core.Keyword(null,"board-size","board-size",140730505),(3),new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.utils.empty_board.call(null,(3)),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"character","character",380652989),"x",new cljs.core.Keyword(null,"over?","over?",993474009),false], null);
var init_2d_pvc = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"dimension","dimension",543254198),(2),new cljs.core.Keyword(null,"board-size","board-size",140730505),(3),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_","_","_","_","_","_","_","x"], null),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvc","pvc",1171128787),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191),new cljs.core.Keyword(null,"character","character",380652989),"o",new cljs.core.Keyword(null,"over?","over?",993474009),false], null);
var init_3d = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"dimension","dimension",543254198),(3),new cljs.core.Keyword(null,"board-size","board-size",140730505),(3),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.repeat.call(null,(3),tictactoe.utils.empty_board.call(null,(3))),new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvp","pvp",-374773148),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928),new cljs.core.Keyword(null,"character","character",380652989),"x",new cljs.core.Keyword(null,"over?","over?",993474009),false], null);
tictactoe.components.reset_state.call(null);

var expected__8538__auto___8811 = init_2d;
var actual__8539__auto___8812 = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto___8811,actual__8539__auto___8812)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8811 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8811)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8812 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8812))," (using =)"].join('')));
}

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x","_","_","_","_","_","_","_","_"], null));

tictactoe.components.reset_state.call(null);

var expected__8538__auto___8813 = init_2d;
var actual__8539__auto___8814 = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto___8813,actual__8539__auto___8814)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8813 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8813)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8814 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8814))," (using =)"].join('')));
}

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198),(3));

tictactoe.components.reset_state.call(null);

var expected__8538__auto___8815 = init_3d;
var actual__8539__auto___8816 = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto___8815,actual__8539__auto___8816)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8815 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8815)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8816 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8816))," (using =)"].join('')));
}

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvp","pvp",-374773148));

tictactoe.components.reset_state.call(null);

var expected__8538__auto___8817 = init_3d;
var actual__8539__auto___8818 = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto___8817,actual__8539__auto___8818)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto___8817 == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto___8817)),speclj.platform.endl,"     got: ",(((actual__8539__auto___8818 == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto___8818))," (using =)"].join('')));
}

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"dimension","dimension",543254198),(2));

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"versus-type","versus-type",2040721233),new cljs.core.Keyword(null,"pvc","pvc",1171128787));

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"character","character",380652989),"o");

tictactoe.components.change_state.call(null,new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"hard","hard",2068420191));

tictactoe.components.reset_state.call(null);

var expected__8538__auto__ = init_2d_pvc;
var actual__8539__auto__ = cljs.core.deref.call(null,tictactoe.components.state);
if(cljs.core._EQ_.call(null,expected__8538__auto__,actual__8539__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__8538__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__8538__auto__)),speclj.platform.endl,"     got: ",(((actual__8539__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__8539__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__8790_8797,_STAR_parent_description_STAR__temp_val__8791_8798,description__8453__auto___8796))
)],null)));
var chunk__8793_8800 = null;
var count__8794_8801 = (0);
var i__8795_8802 = (0);
while(true){
if((i__8795_8802 < count__8794_8801)){
var component__8454__auto___8819 = cljs.core._nth.call(null,chunk__8793_8800,i__8795_8802);
speclj.components.install.call(null,component__8454__auto___8819,description__8453__auto___8796);


var G__8820 = seq__8792_8799;
var G__8821 = chunk__8793_8800;
var G__8822 = count__8794_8801;
var G__8823 = (i__8795_8802 + (1));
seq__8792_8799 = G__8820;
chunk__8793_8800 = G__8821;
count__8794_8801 = G__8822;
i__8795_8802 = G__8823;
continue;
} else {
var temp__5804__auto___8824 = cljs.core.seq.call(null,seq__8792_8799);
if(temp__5804__auto___8824){
var seq__8792_8825__$1 = temp__5804__auto___8824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8792_8825__$1)){
var c__4556__auto___8826 = cljs.core.chunk_first.call(null,seq__8792_8825__$1);
var G__8827 = cljs.core.chunk_rest.call(null,seq__8792_8825__$1);
var G__8828 = c__4556__auto___8826;
var G__8829 = cljs.core.count.call(null,c__4556__auto___8826);
var G__8830 = (0);
seq__8792_8799 = G__8827;
chunk__8793_8800 = G__8828;
count__8794_8801 = G__8829;
i__8795_8802 = G__8830;
continue;
} else {
var component__8454__auto___8831 = cljs.core.first.call(null,seq__8792_8825__$1);
speclj.components.install.call(null,component__8454__auto___8831,description__8453__auto___8796);


var G__8832 = cljs.core.next.call(null,seq__8792_8825__$1);
var G__8833 = null;
var G__8834 = (0);
var G__8835 = (0);
seq__8792_8799 = G__8832;
chunk__8793_8800 = G__8833;
count__8794_8801 = G__8834;
i__8795_8802 = G__8835;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__8790_8797);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8453__auto___8796);
}


//# sourceMappingURL=components_spec.js.map
