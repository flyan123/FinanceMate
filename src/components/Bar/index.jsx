import { Column } from '@ant-design/plots';
import React from 'react';

const data = [
  { type: '喜剧', value: 3 },
  { type: '卡通', value: 6 },
  { type: '动作', value: 5 },
  { type: '青春', value:  3},
  { type: '励志', value: 1 },
  { type: '悬疑', value: 3 },
  { type: '科幻', value: 4 },
 
];

const DemoColumn = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    style: '#22CBCC',
    
    // legend: false,
  };
  return <Column {...config} />;
};

export default DemoColumn
