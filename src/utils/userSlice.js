const { createSlice } = require("@reduxjs/toolkit");
const { act } = require("react-dom/test-utils");

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state)=>{
            return null;
        }
    }
})

// console.log(userSlice);
export const{addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;