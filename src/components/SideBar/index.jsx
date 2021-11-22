import React, { useState } from 'react';
import './sidebar.scss'
import { Layout, Menu } from 'antd';
import { PieChartOutlined, FolderOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
const { Sider } = Layout

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { path } = useRouteMatch()
    console.log(path);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} >
            <div className="sidebar-logo"></div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to={`${path}`}>
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ShopOutlined />}>
                    <Link to={`${path}/recipes`}>
                        My Recipes
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<FolderOutlined />}>
                    <Link to={`${path}/programs`}>
                        My Programs
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ShopOutlined />}>
                    <Link to={`${path}/storefront`}>
                        Storefront
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ShoppingCartOutlined />}>
                    <Link to={`${path}/customers`}>
                        Payments / Customers
                    </Link>
                </Menu.Item>
                <Menu.Item key="6" icon={<UserOutlined />}>
                    <Link to={`${path}/profile`}>
                        Profile
                    </Link>
                </Menu.Item>
                <Menu.Item key="7" icon={<PoweroffOutlined />}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar