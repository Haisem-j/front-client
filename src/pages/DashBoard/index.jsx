import React from 'react';

import SideBar from 'components/SideBar';
import MainContent from './MainContent';
import Recipes from './Recipes'

import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd'

import './styles/dashboard.scss'
import { useRouteMatch } from 'react-router-dom';

export const Dashboard = () => {
    const { path } = useRouteMatch()

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Switch>
                <Route exact path={path} component={MainContent} />
                <Route exact path={`${path}/recipes`} component={Recipes} />
            </Switch>
        </Layout>
    )
}
