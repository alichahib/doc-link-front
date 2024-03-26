import { configureStore } from '@reduxjs/toolkit';
import { userSlice} from './features/userSlice';
import { doctorSlice } from './features/doctorsSlice';


export default configureStore({
    reducer:{
        user:userSlice.reducer,
        doctors:doctorSlice.reducer
    }
})