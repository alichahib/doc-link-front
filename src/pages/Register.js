import React from "react"
import { Input, Form, Select, message } from "antd";
import axios from 'axios'
import '../styles/registerStyles.css'
import { Link } from "react-router-dom";

const Register =  (values)=>{
    const onFinishHandler= async (values)=>{
try {
    console.log('kjhdqjqljhqskllksqjsqdk')
    const res = await axios.put('http://localhost:3000/user',values)
    if(res.data.success){
        message.success('Register well')
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
      label="email"
      name="email"
      rules={[
        {
            type: 'email',
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="phoneNumber"
      name="phoneNumber"
      rules={[
        {
          required: true,
          message: 'Please input your phone!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="type" name="type">
        <Select>
          <Select.Option value="professionel">professionel</Select.Option>
          <Select.Option value="particulier">particulier</Select.Option>
        </Select>
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
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    <Link to='/login' className="m-2">Already user login here</Link>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </Form.Item>
  </Form>
            </div>
        </>
    )
}

export default Register;