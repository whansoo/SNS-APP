import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Layout, Menu, Row, Input } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import styled from 'styled-components';
import L from './Layout.styles';

const SearchInput = styled(Input.Search)`
vertical-align: middle;
`;




function AppLayout ({ children }: { children: React.ReactNode } ) {
 
  return (
    <L.Container>
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width:'560px'}}>
        <Menu
          theme="dark"
          mode="horizontal"
        
          items={[
            { label: <Link href="/">Travelbird</Link>, key: '/' },
            { label: <SearchInput
              // enterButton
            />,
            key: '/search' },
            { label: <Link href="/signup">프로필</Link>, key: '/profile' },
            { label: <Link href="/signup">로그아웃</Link>, key: '/profile' },
          ]}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 80 }}>
        <div style={{ minHeight: '400px', padding: '24px', backgroundColor: '#FFF' }}>
          {/* gutter 컬럼 사이의 간격 */}
          <Row gutter={12}>
            <Col xs={24} sm={24} md={8} lg={4} style={{ paddingTop: '12px' }}>
              Travelbird
            </Col>
            <Col xs={24} sm={24} md={8} lg={4} style={{ paddingTop: '12px' }}>
              프로필
            </Col>
            <Col xs={24} sm={24} md={16} lg={20} style={{ paddingTop: '12px' }}>
              {children}
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
    </L.Container>
  )
}

export default AppLayout