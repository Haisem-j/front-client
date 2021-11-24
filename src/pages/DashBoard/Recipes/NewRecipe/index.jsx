import React, { useState } from 'react'
import UploadPicture from '../UploadPicture';
import { Layout, Row, Col, Typography, Divider, Button, Card, Input } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input


export default function NewRecipe() {
    const [content, setContent] = useState('')

    const handleSubmit = () => {

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
                            <Title level={5}>Title <span className="required">*</span></Title>
                            <Input placeholder="eg., 👋 Cheesy Baked Eggs" />
                            <Divider />
                            <Title level={5}>Image</Title>
                            <Text type="secondary" >Add a header image to appear between the title and contents</Text>
                            <div className="" style={{ marginBottom: '20px' }} />
                            <UploadPicture />
                            <Divider />
                            <Title level={5}>Contents <span className="required">*</span></Title>
                            <Text type="secondary" >Add text, links, bullets, and numbered lists. Perfect for a simple description, things the customer should keep in mind or other small notes.</Text>
                            <div className="" style={{ marginBottom: '20px' }} />
                            <TextArea showCount maxLength={100} onChange={(e) => { setContent(e.target.value) }} placeholder="Add contents here..." allowClear />
                            <Divider />
                            <Title level={5}>Video URL</Title>
                            <Text type="secondary" >Add a YouTube video, Vimeo link, Instagram post/reel, or TikTok to your resource. Copy and paste the link below.</Text>
                            <div className="" style={{ marginBottom: '20px' }} />
                            <Input placeholder="https://..." />
                            <Divider />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}
