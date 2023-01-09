import { createReducer } from "@reduxjs/toolkit";
const initialState ={
    c:0,
}
export const customReducer =createReducer(initialState,{
increment:(state)=>{
    state.c +=1;
},
decrement:(state)=>{
    state.c -=1;
},
addition:(state,action)=>{
    state.c = action.payload+action.payload2;
},
sub:(state,action)=>{
    state.c = action.payload-action.payload2;
}
});