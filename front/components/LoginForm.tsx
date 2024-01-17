import React from 'react'
import L from './Layout.styles'
import { Input } from 'antd'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import CommonButton from '../components/LoginForm.styles';

interface EnterForm {
    mail: string;
    password: string;
  }

function LoginForm() {
    

    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<EnterForm>();
  return (
    <L.Container>
        <div style={{marginTop: '40px'}}>
        <Image src="/travel-logo.svg" alt="설명" width={50} height={50}/>
        <h2>
        로그인을 하고
        <br />
         </h2>
          <h2>더 많은 Travelbird를 만나보세요.</h2>
           <form style={{marginTop: '40px'}}>
            <h4>이메일 주소</h4>
              <Input {...register('mail', {required: "이메일은 필수 입니다.", maxLength:20})} placeholder='가입하신 이메일 주소를 입력해주세요'/>     
            <h4>비밀번호</h4>
              <Input {...register('password', {required: "비멀번호 입력은 필수 입니다..", maxLength:20})} placeholder='비밀번호 입력'/>     
              <h4>아직 회원이 아니신가요?</h4>
                <Link href="/signup">
                    <h5>회원가입 하러 가기</h5>
                </Link>
                <CommonButton>
                    로그인
                </CommonButton>
            </form>
        </div>
    </L.Container>
  )
}

export default LoginForm