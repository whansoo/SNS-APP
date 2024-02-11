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
import { Button, Drawer, Input, Layout, Menu, theme } from 'antd';
import Image from 'next/image';
import PostCard from './PostCard';

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
`


function MainForm ({ children }: { children: React.ReactNode } ) {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('글쓰기');
  const showDrawer = (e:any) => {
    setOpen(true);
    setCurrent(e.key)
  };

  const onClose = () => {
    setOpen(false);
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const containerStyle: React.CSSProperties = {
    position: 'relative',
  };

  return (
    <>
    <L.Container style={containerStyle}>
    <Layout style={{ minHeight: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor: 'white' }}>
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={['1']} mode="inline" items={[
          getItem(<Link href="/">Home</Link>, '1', <HomeOutlined />),
          getItem(<SearchInput/>, 'sub2', <SearchOutlined />),   
          getItem(<Link href="/login">로그인</Link>, '2', <DesktopOutlined />),
          getItem(<Link href="/profile">프로필</Link>, 'sub1', <Link href="/profile"><UserOutlined /></Link>, [
            getItem('글목록', '3'),
            getItem('팔로잉', '4'),
            getItem('팔로워', '5'),
          ]),
          getItem(<span onClick={showDrawer}>글쓰기</span>, '6', <span onClick={showDrawer}><EditOutlined /></span>),
        ]}/>
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
          <div><Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50} style={{marginTop: '6px',marginLeft: '70px'}}/></Link></div>
          <div style={{marginTop: '-17px', marginLeft: '5px',whiteSpace: 'nowrap'}}><h2>TravelBird</h2></div>
          </Header>
       
          {/*content부분*/}
        <Content style={{ margin: '10px 16px' }}>
        
        
          {[1,2,3,4,5].map((star) => (
            <PostCard />
              // <div
              // key={star}
              // style={{
              //   padding: 24,
              //   marginBottom: '20px',
              //   minHeight: 300,
              //   background: colorBgContainer,
              //   borderRadius: borderRadiusLG,
              // }}
              // >
              // 글 내용이 들어갑니다.
              // </div>
          ))}
         
        </Content>
        {/*footer 부분 */}
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    </Layout>
    <Drawer
        title="글쓰기"
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={false}
        style={{borderRadius:'10px',textAlign:'center'}}
      >
        <p>Some contents...</p>
      </Drawer>
    </L.Container>
      </>
  )
}

export default MainForm