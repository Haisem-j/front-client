import React, { useState } from 'react'
import UploadPicture from '../UploadPicture';
import { Layout, Row, Col, Typography, Divider, Form, Card, Input, Button } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

export default function NewRecipe() {
    const [content, setContent] = useState('')

    const handleSubmit = (values) => {
        console.log('HANDLE DAT');
        console.log(values);
    }
    return (
        <Layout>
            <Content className="main-content-container">
                <Row>
                    <Col span={24}>
                        <Title level={3}>New Recipe</Title>
                        <Divider />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card>
                            <Form onFinish={handleSubmit} validateMessages={validateMessages}>
                                <Title level={5}>Title <span className="required">*</span></Title>
                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="eg., 👋 Cheesy Baked Eggs" />
                                </Form.Item>
                                <Divider />

                                <Title level={5}>Image</Title>
                                <Text type="secondary" >Add a header image to appear between the title and contents</Text>
                                <div className="" style={{ marginBottom: '20px' }} />
                                <Form.Item
                                    name="upload"
                                >
                                    <UploadPicture />
                                </Form.Item>
                                <Divider />
                                <Title level={5}>Contents <span className="required">*</span></Title>
                                <Text type="secondary" >Add text, links, bullets, and numbered lists. Perfect for a simple description, things the customer should keep in mind or other small notes.</Text>
                                <div className="" style={{ marginBottom: '20px' }} />
                                <Form.Item
                                    name="content"
                                >
                                    <TextArea showCount maxLength={100} onChange={(e) => { setContent(e.target.value) }} placeholder="Add contents here..." allowClear />
                                </Form.Item>
                                <Divider />
                                <Title level={5}>Video URL</Title>

                                <Text type="secondary" >Add a YouTube video, Vimeo link, Instagram post/reel, or TikTok to your resource. Copy and paste the link below.</Text>
                                    <div className="" style={{ marginBottom: '20px' }} />
                                <Form.Item
                                    name="videoLink"
                                >
                                    <Input placeholder="https://..." />
                                </Form.Item>
                                <Divider />
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
