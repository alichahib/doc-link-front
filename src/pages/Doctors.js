import React, {useEffect,useState} from 'react';
import { Table } from "antd";
import { useSelector } from "react-redux";
import Layout from "../component/layout";
import { useLocation } from 'react-router-dom';

const Doctors = ()=>{
  const state = useLocation();
  const doctors = useSelector(state=>state.doctors)
  console.log(state)
  //const {doctors,user} = state;
  console.log(state.state.doctors)
  const test = state.state.doctors;
 // 
  const columns = [{
    title:"email",
    dataIndex:"email",
    },
  {
    title:"email",
    dataIndex:"email"
  }]
      
    return(
            <Layout>
                    <h1>
                        Doctors list
                    </h1>
                    <Table columns={columns} dataSource={test}></Table>

            </Layout>
    )
}


export default Doctors;