// pages/HomePage.js

import React, {useEffect} from 'react';
import Layout from '../component/layout';
import axios from 'axios'

function HomePage() {
  const getUserData = async () => {

    try {
      const res = await axios.post('http://localhost:3000/user/getUserData',{},{
        headers:{
          authorization: 'Bearer ' +localStorage.getItem("token")
        }
      })
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
     <Layout>
      <h1>Home Page</h1>
     </Layout>
  );
}

export default HomePage;
