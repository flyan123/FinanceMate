import homes from './home.module.less'
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import Mainmenu from '../../components/Mainmenu';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  // const navigateTo = useNavigate()

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
       <Mainmenu></Mainmenu>
      </Sider>

      {/* 右边侧边栏 */}
      <Layout>

        {/* 右边侧边栏头部
        <Header
          style={{
            paddingLeft: "16px",
            background: colorBgContainer,
          }}
        >  
          <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          
        </Header> */}

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
            padding: '0px',
            lineHeight: '48px'
          }}
        >
          ©电影院后台管理系统
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;