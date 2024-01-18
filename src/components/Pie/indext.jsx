import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const DemoPie = () => {

  const config = {
    data: [
      { type: '女性', value: 40,  color: 'red' },
      { type: '男性', value: 60, color: 'blue' },
      
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value' ,
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 2,
      },
    },
  };
  return <Pie {...config} />;
};
export default  DemoPie