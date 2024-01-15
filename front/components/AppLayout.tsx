import React from 'react'


function AppLayout ({ children }: { children: React.ReactNode } ) {
  return (
    <div>
        <div>공통메뉴</div>
        {children}
    </div>
  )
}

export default AppLayout