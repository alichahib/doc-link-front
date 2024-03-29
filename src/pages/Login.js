import React from "react"
import { Input, Form, message } from "antd";
import axios from 'axios'
import '../styles/registerStyles.css'
import { Link, useNavigate } from 'react-router-dom';

const Login =  (values)=>{
    const navigate = useNavigate();
    const onFinishHandler= async (values)=>{
try {
    const res = await axios.post('http://localhost:3000/user',values)
    if(res.data.success){
        message.success('Register well');
        localStorage.setItem("token",res.data.token)
        navigate('/');
    }
} catch (error) {
    console.log(error);
    message.error('smth wrong')
}
    }
    return (
        <>
        <div className="from-container">
        <Form
    className="login-form"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 700,
    }}
    onFinish={onFinishHandler}
    autoComplete="off"
  >
    <Form.Item
      label="userName"
      name="userName"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </Form.Item>
  </Form>
            </div>
        </>
    )
}

export default Login;