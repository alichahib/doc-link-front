import { createSlice} from '@reduxjs/toolkit';

export const doctorsSlice = createSlice({
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

export const {setDoctors} = doctorsSlice.actions;