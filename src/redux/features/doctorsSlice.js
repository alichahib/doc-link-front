import { createSlice} from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
    name:"doctor",
    initialState:{
        user:null
    },
    reducers:{
        setDoctors:(state,action)=>{
            state.doctors=action.payload
        }
    }
})

export const {setDoctors} = doctorSlice.actions;