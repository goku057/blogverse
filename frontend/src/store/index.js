import {configureStore, createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice(
    {
        name: "auth",
        initialState: {
            isLoggedin: false,
            userID:-1,
            verified:0
        },
        reducers: {
            login(state, action){
                state.isLoggedin = true;
                // console.log("The user id is " + action.payload);
            },
            logout(state){
                state.isLoggedin = false;
                state = {
                    isLoggedin: false,
                    userID:-1,
                    verified:0
                }
            }
        }
    }
);

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer
})