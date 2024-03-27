import React, {useEffect,useState} from 'react';
import { Table } from "antd";
import { useSelector } from "react-redux";
import Layout from "../component/layout";
import { Navigate, useLocation } from 'react-router-dom';
import { setDoctor } from "../redux/features/doctorSlice"
import axios from 'axios';

const Doctor = (test)=>{
    console.log(test)
  const location = useLocation();
  console.log(location.state)
  const doctor = useSelector(state=>state.doctor)
  console.log(doctor)
  console.log('µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ')

  const getDoctor = async (values)=>{
      try {
          const res = await axios.post('http://localhost:3000/user/get-doctor',test.email)
          if(res.data.success){
              console.log(res.data)
              console.log(res.data.data)
             //  navigate('/doctors',{state:{doctors:res.data.data}});
          }
      } catch (error) {
          console.log(error);
        //  message.error('smth wrong')
      }

  }
 // 
  const columns = [{
    title:"email",
    dataIndex:"email",
    },
  {
    title:"email",
    dataIndex:"email"
  }]

  useEffect(()=>{
    setDoctor()
},[getDoctor])
      
    return(
            <Layout>
                    <h1>
                        Détails professionel santé
                    </h1>
                    <Table row={columns} columns={columns} ></Table>

            </Layout>
    )
}


export default Doctor;