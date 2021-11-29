import React from 'react'
import { Link } from 'react-router-dom';

import { Button } from 'antd';

export const LandingPage = () => {
    return (
        <>
            <Link to="/dashboard"> <Button type="primary">Dashboard</Button></Link>
        </>
    )
}