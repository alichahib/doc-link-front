import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}){
    if(localStorage.getItem("token")){
        console.log('rrydss')
        console.log(localStorage.getItem("token"))
        return children;
    }else{
        console.log('kqdlmkmlsqdlmklsmdkqls');
       return  <Navigate to='/login'/>
    }
} 