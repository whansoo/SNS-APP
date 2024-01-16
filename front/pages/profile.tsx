import AppLayout from '@/components/AppLayout'
import Head from 'next/head'
import React from 'react'

function Profile() {
  return (
    <>
    <Head>
        <title>프로필 | TravelBird</title>
    </Head>
    <AppLayout>프로필 페이지</AppLayout>
    </>
  )
}

export default Profile