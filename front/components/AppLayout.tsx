import Link from 'next/link'
import React, { useState } from 'react'
import { Input, Menu } from 'antd'
import { VerticalAlignMiddleOutlined } from '@ant-design/icons'

function AppLayout ({ children }: { children: React.ReactNode } ) {


 
  return (
    <div>
        <div>  
        <Menu mode="horizontal">
          <Menu.Item><Link href="/">TrevelBird</Link></Menu.Item>
          <Menu.Item><Link href="/profile">프로필</Link></Menu.Item>
          <Menu.Item><Input.Search enterButton style={{ verticalAlign: 'middle'}}/></Menu.Item>
          <Menu.Item><Link href="/signup">회원가입</Link></Menu.Item>
        </Menu>
        
            
        </div>
        {children}

    </div>
  )
}

export default AppLayout