import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const googleSlice =createSlice({
    name: 'google',
    initialState,
    reducer: {
        setUser(state, action){
            console.log(action.payload)
            state.user.push(action.payload)
        },
        removeUser(state){
            state.user = {};
        }
    }
})

export const {setUser,removeUser} = googleSlice.actions;
export default googleSlice.reducer;