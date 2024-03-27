import { Form, Row, Col, Input, Button, message } from "antd";
import Layout from "../component/layout";
import React, {useEffect} from "react";
import applyDoctor from "../styles/applyDoctor.css"
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { setDoctors } from "../redux/features/doctorsSlice"
import axios from "axios";
import Doctors from "./Doctors"

const ResearchDoctor = ()=>{
    const navigate = useNavigate();
    const handleFinish = async (values)=>{
        try {
            const res = await axios.post('http://localhost:3000/user/search-doctor',values)
            if(res.data.success){
                console.log(res.data)
                console.log(res.data.data)
                 navigate('/doctors',{state:res.data.data});
            }
        } catch (error) {
            console.log(error);
            message.error('smth wrong')
        }

    }
    useEffect(()=>{
        setDoctors()
    },[])
    return(
            <Layout>
                <h1 className="align-center">Rechercher des personneles de santé</h1>
                <Form layout="vertical"  onFinish={handleFinish} className="m-3 login-form">
                <h4 className="text-right">Critères</h4>
                    <Row gutter={20} >
                        <Col>
                        <Form.Item
                            label="address"
                            name="address"
                            rules={[
                                {
                                required: true,
                                message: 'Please input the address!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Entrez votre localisation" />
                        </Form.Item>
                        </Col>
                        <Col>
                        <Form.Item
                            label="speciality"
                            name="speciality"
                            rules={[
                                {
                                required: true,
                                message: 'Renseigner speciality!',
                                },
                            ]}
                            >
                            <Input type="text" placeholder="Renseigner speciality" />
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

export default ResearchDoctor;