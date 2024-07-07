// import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: ""
}

export const useInfoSlide = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.access_token = action.payload
        },
        logout: (state, action) => {
            state.access_token = action.payload
        }
    },
})

const {reducer, actions} = useInfoSlide
export const {login, logout} = actions
export default reducer