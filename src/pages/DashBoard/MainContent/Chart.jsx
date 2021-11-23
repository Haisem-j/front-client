import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

import { chartData } from 'dummydata.js';

/**
 * Data obj should look like this
 *  {
        Date: "2010-01",
        sales: 20
    }
 */

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        setData(chartData)
    };
    const config = {
        data,
        padding: 'auto',
        xField: 'Date',
        yField: 'sales',
        xAxis: {
            tickCount: 5,
        },
    };

    return <Line {...config} />;
};

export default Chart;

