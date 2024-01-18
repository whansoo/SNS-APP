import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';
import L from './Layout.styles';
import {
  DesktopOutlined,
  EditOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Input, Layout, Menu, theme } from 'antd';
import Image from 'next/image';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;
const items: MenuItem[] = [
  getItem(<Link href="/">Home</Link>, '1', <HomeOutlined />),
  getItem(<SearchInput/>, 'sub2', <SearchOutlined />),   
  getItem(<Link href="/login">로그인</Link>, '2', <DesktopOutlined />),
  getItem('프로필', 'sub1', <UserOutlined />, [
    getItem('글목록', '3'),
    getItem('팔로잉', '4'),
    getItem('팔로워', '5'),
  ]),
   
  getItem('글쓰기', '9', <EditOutlined />),
];





function AppLayout ({ children }: { children: React.ReactNode } ) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <L.Container>
    <Layout style={{ minHeight: '100vh'}}>
      <Sider  trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: 'white' }}>
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
     
          {/*header 부분 */}
        <Header style={{display: 'flex', background: colorBgContainer, padding: '0' }}> 
   
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div><Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50} style={{marginTop: '6px'}}/></Link></div>
          <div style={{marginTop: '-17px', marginLeft: '10px'}}><h3>TravelBird에 오신 것을 환영합니다</h3></div>
          </Header>
        {/* <a href='/' style={{display: 'inline'}}><Image src="/travel-logo.svg" alt="설명" width={50} height={50}></Image></a> */}
       
       
          {/*content부분*/}
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        {/*footer 부분 */}
        <Footer style={{ textAlign: 'center' }}>
         
        </Footer>
      </Layout>
    </Layout>
    </L.Container>
  )
}

export default AppLayout