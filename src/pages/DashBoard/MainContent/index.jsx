import React from 'react';
import Chart from './Chart'

import './maincontent.scss'

import { Layout, Row, Col, Button, Divider, Card, Tag } from 'antd';
import { Typography } from 'antd';

const { Title, Text } = Typography;
const { Content } = Layout

const MainContent = () => {
    return (
        <Layout>
            <Content className="main-content-container">
                <Row>
                    <Col span={12}>
                        <Title level={3}>SaaS Dashboard</Title>
                        <Text className="content-text">Welcome back, Lucy! We've missed you. 👋</Text>
                    </Col>
                    <Col span={12} className="flex-end">
                        <Button type="primary">Today: Nov 22</Button>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={6}>
                        <Card className="content-card">
                            <Row style={{ marginBottom: '10px' }}>
                                <Col span={12}>
                                    <Text className="content-text">Income</Text>
                                </Col>
                                <Col span={12} className="flex-end">
                                    <Tag color="#108ee9" className="flex-center">Monthly</Tag>
                                </Col>
                            </Row>

                            <Text className="card-income">$37.500</Text>
                            <Row style={{ marginTop: '10px' }}>
                                <Col span={24}>
                                    <Tag color="green">+14%</Tag>
                                    <Text>Since last month</Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="content-card">
                            <Row style={{ marginBottom: '10px' }}>
                                <Col span={12}>
                                    <Text className="content-text">Visitors</Text>
                                </Col>
                                <Col span={12} className="flex-end">
                                    <Tag color="#108ee9" className="flex-center">Annual</Tag>
                                </Col>
                            </Row>

                            <Text className="card-income">$150.12</Text>
                            <Row style={{ marginTop: '10px' }}>
                                <Col span={24}>
                                    <Tag color="red">-12%</Tag>
                                    <Text>Since last month</Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="content-card">
                            <Row style={{ marginBottom: '10px' }}>
                                <Col span={12}>
                                    <Text className="content-text"> Orders</Text>
                                </Col>
                                <Col span={12} className="flex-end">
                                    <Tag color="#108ee9" className="flex-center">Weekly</Tag>
                                </Col>
                            </Row>

                            <Text className="card-income">12.432</Text>
                            <Row style={{ marginTop: '10px' }}>
                                <Col span={24}>
                                    <Tag color="green">24%</Tag>
                                    <Text>Since last month</Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="content-card">
                            <Row style={{ marginBottom: '10px' }}>
                                <Text className="content-text">Pending Orders</Text>

                            </Row>

                            <Text className="card-income">22</Text>
                            <Row style={{ marginTop: '10px' }}>
                                <Col span={24}>
                                    <Tag color="red">-6%</Tag>
                                    <Text>Since last month</Text>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Divider />
                <Card>
                    <div className="margin-top">
                        <Text className="content-text" >Sales / Revenue</Text>
                    </div>
                    <Chart />
                </Card>
            </Content>
        </Layout>
    )
}

export default MainContent