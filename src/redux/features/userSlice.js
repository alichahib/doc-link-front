import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        setUser:(state,action)=>{
            console.log('inside the setUser Slive')
            console.log(state)
            console.log(action)
            state.user=action.payload
        }
    }
})

export const {setUser} = userSlice.actions;