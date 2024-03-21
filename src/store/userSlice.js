import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: "yosuva"
    },
    reducers:{
        updateUserdata:(state,action)=>{
            state.userData = action.payload
        }
    }
})

export const {updateUserdata} = userSlice.actions
export default userSlice