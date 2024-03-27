import React, {useEffect,useState} from 'react';
import { Table } from "antd";
import { useSelector } from "react-redux";
import Layout from "../component/layout";
import { useLocation } from 'react-router-dom';
import { event } from 'jquery';

const Doctors = ()=>{
  const location = useLocation();
  const test = location.state;
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
                        Détails professionel santé
                    </h1>
                    <Table columns={columns} dataSource={test}   onRow={(record, rowIndex) => {
    return {
      onClick: (event) => {
        console.log('jshjkhsdjhjsh')
      }, // click row
    };
  }}></Table>

            </Layout>
    )
}


export default Doctors;