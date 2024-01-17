import React from 'react'

import LoginForm from '@/components/LoginForm';
import Head from 'next/head';

function login() {
  return (
    <>
    <Head>
    <title>로그인 | TravelBird</title>
    </Head>
      <LoginForm/>
      </>
   
  )
}

export default login