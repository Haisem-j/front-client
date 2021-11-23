import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Button, Form, Input, Layout, Card, Row, Col, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from 'context/AuthContext';

const { Title, Text } = Typography;

export default function SignUp() {
    const { signup } = useAuth();
    const history = useHistory()

    const handleSubmit = async (values) => {
        let { password, email } = values
        try {
            await signup(email, password);
            history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }} className="validation-container">
            <Card className="validation-card">
                <Title style={{ textAlign: "center" }} level={3}>Sign Up</Title>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" type="email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={24}>
                                <Button block type="primary" htmlType="submit" className="login-form-button">
                                    Sign Up
                                </Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Row>
                        <Col span={24}>
                            <Text>Already have an acccount? Login <Link to="/login">here</Link>.</Text>
                        </Col>
                    </Row>

                </Form>
            </Card>
        </Layout>
    )
}

