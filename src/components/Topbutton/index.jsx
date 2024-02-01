import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import topstyle from './top.module.less'
import { BgColorsOutlined } from '@ant-design/icons';

const items = [
  {
    label: '后台管理系统',
    key: '/',
  },
  {
    label: '注册',
    key: '/signup',

  },
  {
    label: '登入',
    key: '/loginto',
  },
 
];
const Topbutton = () => {
    const navigateTo = useNavigate()
    const onClick = (e) => {
        //   console.log('点击了菜单栏', e.key)
        navigateTo(e.key)
        
    }
//   const [current, setCurrent] = useState('mail');
//   const onClick = (e) => {
//     // console.log('click ', e);
//     setCurrent(e.key);
// selectedKeys={[current]} 
//   };
  return <Menu className={topstyle.top} onClick={onClick} mode="horizontal" items={items}  light/>;
};
export default Topbutton;