import React from 'react';
import { List, Avatar, Layout, Row, Col, Typography, Divider, Button } from 'antd';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const data = [
    {
        title: 'Best Breakfast Ideas',
    },
    {
        title: 'Nutrional Recipes',
    },
    {
        title: 'Date Night Recipes',
    },
    {
        title: 'Quick Snack Ideas',
    },
];
const Programs = () => {
    return (
        <Layout>
            <Content className="main-content-container">
                <Row>
                    <Col span={24}>
                        <Title level={3}>My Programs</Title>
                        <Divider />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Button type="primary" style={{marginBottom: '20px'}}>Create New Program</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <List
                            style={{ backgroundColor: 'white' }}
                            header={<Title level={5}>All Programs</Title>}
                            bordered
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item style={{ backgroundColor: 'white', padding: '25px', cursor: 'pointer' }}
                                actions={[<EditOutlined />, <CloseCircleOutlined />]}
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size={74} shape="square" />}
                                        title={<a href="https://ant.design">{item.title}</a>}
                                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    />
                                </List.Item>
                            )} />
                    </Col>
                </Row>

            </Content>
        </Layout>
    )
}

export default Programs

