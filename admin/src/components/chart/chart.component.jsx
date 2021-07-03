import React from 'react'
import './Chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart() {
    const data = [
        {
          name: 'Jan',
          height: 2000
        },
        {
          name: 'Feb',
          height: 3000
        },
        {
          name: 'Mar',
          height: 2000
        },
        {
          name: 'May',
          height: 2780
        },
        {
          name: 'Avr',
          height: 1890
        },
        {
          name: 'Jun',
          height: 2390
        },
        {
          name: 'Jul',
          height: 3490
        },
      ];
    return (
        <div className="chart">
           <h4 className="chart__title font-weight-bold">Analytics</h4>
           <ResponsiveContainer width="100%" aspect={ 4 / 1}>
               <LineChart data={data}>
                   <XAxis dataKey="name" stroke="#5550bd"/>
                   <Line type="monotone" dataKey="height" stroke="#5550bd"/>
                   <Tooltip/>
                   <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
               </LineChart>
           </ResponsiveContainer>
        </div>
    )
}

export default Chart
