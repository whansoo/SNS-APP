import React from 'react'
import L from './Layout.styles'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'


const Layoutprofile = styled.div`
     /* display: flex; */
     width: 560px;
     /* border: 1px solid #c8c8c8; */
     min-height: 100vh;
     margin: auto auto 0;
`
function ProfileForm() {
  return (
    
       <Layoutprofile>
   
        <div style={{display:'flex'}}>
        <Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50}/></Link>
        
        <p>프로필</p>
        </div>
        <div style={{borderBottom: '1px solid #c8c8c8'}}>

        </div>
        <div>
        <div>
          <Image src="/cat.jpeg" alt="설명" width={50} height={50}/>
          <div>
            <span>신환수</span>
          </div>
        </div>
            </div>
      
 
        </Layoutprofile>
 
  )
}

export default ProfileForm