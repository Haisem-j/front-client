import React, { useState } from 'react';
import './sidebar.scss'
import { Layout, Menu } from 'antd';
import { PieChartOutlined, FolderOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined, PoweroffOutlined } from '@ant-design/icons'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const { Sider } = Layout

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { path } = useRouteMatch()
    const { logout } = useAuth()
    const history = useHistory()


    const handleLogout = async ()  => {
        try {
            await logout()
            history.push("/login")
        } catch {
            console.log("Failed to log out")
        }
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} >
            <Link to="/">
                <div className="sidebar-logo"></div>
            </Link>
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
                <Menu.Item key="7" icon={<PoweroffOutlined />} onClick={handleLogout}>
                    Logout
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar