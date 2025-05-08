import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
  name: "User",
  initialState: {
    userInfo: [{
        userName:"",
        userPassword:"",
        userMail:""
    }],
    userDone:{},
    doneStatue:null, 
  },
  reducers: {
    setUserInfo: (state, action) => {
        state.userInfo.push(action.payload);
      },
      clearUserInfo: (state) => {
        state.userInfo = [];
        state.doneStatue=false
      },
      doneAndReplace:(state,action)=>{
        if(state.userInfo){
        state.userDone=action.payload;
        state.doneStatue = true}
        else{state.doneStatue = false}
      }
    
  },
});


export const { setUserInfo,clearUserInfo,doneAndReplace } = UserSlice.actions;

export default UserSlice.reducer; 
