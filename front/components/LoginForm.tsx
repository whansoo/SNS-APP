import React from 'react'
import L from './Layout.styles'
import { Input } from 'antd'
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import CommonButton from '../components/LoginForm.styles';
import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';
import { signup } from '@/pages/apis/auth';
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';
import User from '@/interfaces/user';

interface EnterForm {
    mail: string;
    password: string;
  }
const Containsub = styled.div`
  margin-top: 40px;
`

const Formlayout = styled.form`
  margin-top: 40px;
`
function LoginForm() {
  const router = useRouter();
  // const { mutate: signupmutate, error: singuperr } = useMutation(signup, {
  //   onSuccess: (data:any) => {
  //     router.replace('login');
  //   },
  //   onError: (err: AxiosError) => {},
  // });
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<User>();

    const onValid = (data: User) => {
      const user = {
        email: data.email,
        nickname: data.nickname,
        password: data.password,
      };
    };
  return (
    <L.Container>
        <Containsub>
       <Link href='/'><Image src="/travel-logo.svg" alt="설명" width={50} height={50}/></Link>
        <h2>
        로그인을 하고
        <br />
         </h2>
          <h2>더 많은 Travelbird를 만나보세요.</h2>
           <Formlayout onSubmit={handleSubmit(onValid)}>
            <h4>이메일 주소</h4>
              <Input {...register('email', {required: "이메일은 필수 입니다.", maxLength:20})} placeholder='가입하신 이메일 주소를 입력해주세요'/>     
            <h4>비밀번호</h4>
              <Input {...register('password', {required: "비멀번호 입력은 필수 입니다..", maxLength:20})} placeholder='비밀번호 입력'/>     
              <h4>아직 회원이 아니신가요?</h4>
                <Link href="/signup">
                    <h5>회원가입 하러 가기</h5>
                </Link>
                <CommonButton>
                    로그인
                </CommonButton>
            </Formlayout>
        </Containsub>
    </L.Container>
  )
}

export default LoginForm