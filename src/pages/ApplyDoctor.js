import { Form, Row, Col, Input, Button, message } from "antd";
import Layout from "../component/layout";
import React from "react";
import applyDoctor from "../styles/applyDoctor.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const AplyDoctor = ()=>{
    const navigate = useNavigate();
    const handleFinish = async (values)=>{
        try {
            const res = await axios.post('http://localhost:3000/user/apply-doctor',values)
            if(res.data.success){
                message.success('Register well');
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            message.error('smth wrong')
        }

    }
    return(
            <Layout>
                <h1 className="align-center">Creation profile docteur</h1>
                <Form layout="vertical"  onFinish={handleFinish} className="m-3 login-form">
                <h4 className="text-right">Details personneles</h4>
                    <Row gutter={20} >
                        <Col>
                        <Form.Item
                            label="firstName"
                            name="firstName"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your username!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre prenom" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="lastName"
                            name="lastName"
                            rules={[
                                {
                                required: true,
                                message: 'Entrer votre nom!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre nom" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="phoneNumber"
                            name="phoneNumber"
                            rules={[
                                {
                                required: true,
                                message: 'Entrer votre numero de telephone!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre numero de telephone" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="email"
                            name="email"
                            rules={[
                                {
                                required: true,
                                message: 'Entrer votre email!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre email" />
                        </Form.Item>
                        </Col>
                        
                    </Row>
                    <h4 className="text-right">Details professionels</h4>
                    <Row gutter={20} >
                        <Col>
                        <Form.Item
                            label="address"
                            name="address"
                            rules={[
                                {
                                required: true,
                                message: 'Entrer votre address!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre address" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="website"
                            name="website"
                            rules={[
                                {
                                message: 'Entrer votre website!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre website" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="speciality"
                            name="speciality"
                            rules={[
                                {
                                required: true,
                                message: 'Entrer votre speciality!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre speciality" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="timings"
                            name="timings"
                            rules={[
                                {
                                message: 'Entrer vos horaires de travail!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez vos horaires de travail" />
                        </Form.Item>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
                </div>
                </Form>

            </Layout>
    )
}

export default AplyDoctor;