import React from 'react'

import './styles/dashboard.scss'
import { MainContent } from './MainContent'
import { SideBar } from './SideBar'



export const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <SideBar />
            <MainContent />
        </div>

    )
}