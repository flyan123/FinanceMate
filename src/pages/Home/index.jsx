import homes from './home.module.less'
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet,useNavigate} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('栏目 1', '/part1', <PieChartOutlined />),
  getItem('栏目 2', '/part2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];



const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate()

  const menuClick=(e)=>{
    console.log('点击了菜单栏' ,e.key)
    navigateTo(e.key)
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className={homes.logo} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}  onClick={menuClick}/>
      </Sider>

      {/* 右边侧边栏 */}
      <Layout>

        {/* 右边侧边栏头部 */}
        <Header
          style={{
            paddingLeft: "16px",
            background: colorBgContainer,
          }}
        >
           <Breadcrumb
            style={{
              // margin: '16px 0',
              lineHeight:'64px'
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        {/* 右边侧边栏内容 */}
        <Content
          style={{
            margin: '16px 16px 0px',
            // padding: "24px",
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 窗口内容 */}
          <Outlet />
        </Content>

        {/* 右边侧边栏底部 */}
        <Footer
          style={{
            textAlign: 'center',
            padding:'0px',
            lineHeight:'48px'
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;