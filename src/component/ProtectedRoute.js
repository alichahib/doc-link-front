import {React,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import {useDispatch,useSelector,useStore } from 'react-redux'
import { setUser } from '../redux/features/userSlice';
import axios from 'axios';

const ProtectedRoute=({children})=>{
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)

    const getUser=async ()=>{
        try {
            const res = await axios.post('http://localhost:3000/user/getUserData',{ token : localStorage.getItem('token')},            {headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }})
            if(res.data.success){
               dispatch(setUser(res.data.data))
            }
            else{
                localStorage.clear();
                <Navigate to='/login'/>
            }
        } catch (error) {
            localStorage.clear();
            console.log(error)
        }

    }

    useEffect(()=>{
        if(!user.user){
        getUser()
    }
    },[[user]])
    if(localStorage.getItem("token")){
        return children;
    }else{
       return  <Navigate to='/login'/>
    }
} 

export default ProtectedRoute;