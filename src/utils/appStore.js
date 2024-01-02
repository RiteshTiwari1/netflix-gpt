import userReducer from "./userSlice"
const { configureStore } = require("@reduxjs/toolkit");


console.log(userReducer);
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
        }
    }
)

export default appStore;