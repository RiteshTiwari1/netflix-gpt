import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"

// console.log(userReducer);
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
        }
    }
)

export default appStore;