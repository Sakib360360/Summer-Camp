import React from 'react';
import { PieChart, Pie, Legend, Tooltip } from "recharts";
const Chart = ({name1,value1,name2,value2,name3,value3,name4,value4 }) => {

    const data01 = [
        { name: name1, value: value1 },
        { name: name2, value: value2 },
        { name: name3, value: value3 },
        { name: name4, value: value4 },
        
    ];
    return (
        <div>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data01}
                    cx={300}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Chart;