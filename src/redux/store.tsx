import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userInfo/userInfoSlide"

const rootReducer = {
    user: userReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store