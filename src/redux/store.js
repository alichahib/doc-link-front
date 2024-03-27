import { configureStore } from '@reduxjs/toolkit';
import { userSlice} from './features/userSlice';
import { doctorsSlice } from './features/doctorsSlice';
import { doctorSlice } from './features/doctorSlice';


export default configureStore({
    reducer:{
        user:userSlice.reducer,
        doctors:doctorsSlice.reducer,
        doctor:doctorSlice.reducer
    }
})