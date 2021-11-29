import React from 'react';
import { List, Avatar, Layout, Row, Col, Typography, Divider, Button } from 'antd';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const data = [
    {
        title: 'Bacon Egg And Cheese',
    },
    {
        title: 'Lasagne with Spinach',
    },
    {
        title: 'Hamburger and Fries',
    },
    {
        title: 'Rice and Noodles',
    },
];
const Recipes = () => {
    const { path } = useRouteMatch()
    return (
        <Layout>
            <Content className="main-content-container">
                <Row>
                    <Col span={24}>
                        <Title level={3}>My Recipes</Title>
                        <Divider />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Link to={`${path}/newrecipe`}>
                            <Button type="primary" style={{ marginBottom: '20px' }}>Create New Recipe</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <List
                            style={{ backgroundColor: 'white' }}
                            header={<Title level={5}>All Recipes</Title>}
                            bordered
                            itemLayout="horizontal"
                            dataSource={data}
                            locale={
                                { emptyText: (
                                    <>
                                    <h1>Somethign</h1>
                                    <Button type="primary">Click</Button>
                                    </>
                                ) }
                            }
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

export default Recipes

