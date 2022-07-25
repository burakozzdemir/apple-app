import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "isLogin",
    initialState: {
        isLogin: false,
    },
    reducers: {
        loginEvent: (state) => {
            return {
                ...state,
                isLogin: true,
            };
        },
    },
});

export const { loginEvent } = loginSlice.actions;

// Selectors
export const selectLogin = (state) => state.isLogin.isLogin;

export default loginSlice.reducer;
