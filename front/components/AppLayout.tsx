import Link from 'next/link'
import React from 'react'


function AppLayout ({ children }: { children: React.ReactNode } ) {
  return (
    <div>
        <div>  
            <Link href="/signup">노드버드</Link>
        </div>
        {children}
    </div>
  )
}

export default AppLayout