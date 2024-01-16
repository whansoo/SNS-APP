import Link from 'next/link'
import React, { useState } from 'react'
import { Menu } from 'antd'

function AppLayout ({ children }: { children: React.ReactNode } ) {


 
  return (
    <div>
        <div>  
        <Menu mode="inline">
          <Menu.Item><Link href="/signup">노드버드</Link></Menu.Item>
          <Menu.Item><Link href="/signup">프로필</Link></Menu.Item>
          <Menu.Item><Link href="/signup">회원가입</Link></Menu.Item>
        </Menu>
        
            
        </div>
        {children}

    </div>
  )
}

export default AppLayout