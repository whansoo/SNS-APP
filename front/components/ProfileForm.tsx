import React from 'react'
import L from './Layout.styles'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar, Badge } from 'antd'
import { FormOutlined, TwitterOutlined, UsergroupAddOutlined } from '@ant-design/icons'


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
   
        <div style={{display:'flex', justifyContent:'center'}}>
        <Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50}/></Link>
        
        <p>프로필</p>
        </div>
        <div style={{borderBottom: '1px solid #c8c8c8'}}>

        </div>
        <div>
        <div style={{marginTop:'40px', paddingLeft:'40px', display:'flex'}}>
          <Image src="/cat.jpeg" alt="설명" width={80} height={80} style={{borderRadius:'40px'}}/>
          <div style={{paddingTop:'30px', paddingLeft:'15px'}}>
            <span>신환수</span>
          </div>
        </div>

      <div style={{display:'flex', justifyContent:'center',marginTop:'80px'}}>
      <div style={{padding:'50px'}}>
      <Badge count={5}>
      <Avatar shape="circle" style={{backgroundColor:'orange', width:'50px', height:'50px'}}><TwitterOutlined style={{fontSize:'30px', paddingTop:'8px'}}/></Avatar>
    </Badge>
    <div style={{paddingTop:'10px', paddingLeft:'5px', color:'#c8c8c8'}}><span>팔로잉</span></div>
      </div>
    
    <div style={{padding:'50px'}}>
      
      <Badge count={5}>
        <Avatar shape="circle" size="large" style={{backgroundColor:'orange', width:'50px', height:'50px'}}><UsergroupAddOutlined style={{fontSize:'30px', paddingTop:'8px'}}/></Avatar>
      </Badge>
      <div style={{paddingTop:'10px', paddingLeft:'5px', color:'#c8c8c8'}}><span>팔로워</span></div>
        </div>
      
      <div style={{padding:'50px'}}>
      
      <Badge count={5}>
        <Avatar shape="circle" size="large" style={{backgroundColor:'orange', width:'50px', height:'50px'}}><FormOutlined style={{fontSize:'30px', paddingTop:'8px'}}/></Avatar>
      </Badge>
      <div style={{paddingTop:'10px', paddingLeft:'5px', color:'#c8c8c8'}}><span>글목록</span></div>
        </div>
      
      </div>
            </div>
      
 
        </Layoutprofile>
 
  )
}

export default ProfileForm