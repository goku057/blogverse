import {configureStore, createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice(
    {
        name: "auth",
        initialState: {
            isLoggedin: false,
            userID:-1,
            verified:0,
            userName:undefined,
            search:undefined
        },
        reducers: {
            login(state, action){
                state.isLoggedin = true;
                console.log("The user id is " + action.payload);
                state.userID = action.payload.userID;
                state.verified = action.payload.verified;
                state.userName = action.payload.username;

            },
            logout(state){
                state.isLoggedin = false;
                state.userID = -1;
                state.verified = 0;
                state.userName = undefined;
            },
            setSearchResult(state, action){
                state.search = action.payload.search
            },
            accountVerifyTrue(state){
                state.verified = 1
            }
        }
    }
);

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer
})