import React from 'react'
import L from './Layout.styles'
import Image from 'next/image'
import { Input } from 'antd'
import Link from 'next/link'
import CommonButton from '../components/LoginForm.styles';
import { useForm } from 'react-hook-form'

function Signup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  return (
    <L.Container>
   <div style={{marginTop: '40px'}}>
         <Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50}/></Link>
        <h2>
        회원가입을 하고
        <br />
         </h2>
          <h2>더 많은 Travelbird를 만나보세요.</h2>
           <form style={{marginTop: '40px'}}>
            <h4>이메일 주소</h4>
              <Input {...register('mail', {required: "이메일은 필수입니다.", maxLength:20})} placeholder='이메일 주소 입력'/>
              <h4>닉네임</h4>
              <Input {...register('name', {required: "닉네임은 필수입니다.", maxLength:20})} placeholder='TravelBird에서 어떻게 불러드릴까요?'/>          
            <h4>비밀번호</h4>
              <Input {...register('password', {required: "비멀번호 입력은 필수 입니다..", maxLength:20})} placeholder='비밀번호 입력'/>     
            <h4>비밀번호 확인</h4>
              <Input {...register('password-confirm', {required: "비멀번호 입력 확인 필수", maxLength:20})} placeholder='비밀번호 확인'/>     
              <h4>이미 회원이신가요?</h4>
                <Link href="/login">
                    <h5>로그인 하러가기</h5>
                </Link>
                <CommonButton>
                    회원가입
                </CommonButton>
            </form>
        </div>
    </L.Container>
  )
}

export default Signup