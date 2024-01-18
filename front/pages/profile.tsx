import AppLayout from '@/components/AppLayout'
import ProfileForm from '@/components/ProfileForm'
import Head from 'next/head'
import React from 'react'

function Profile() {
  return (
    <>
    <Head>
        <title>프로필 | TravelBird</title>
    </Head>
    <ProfileForm/>
    </>
  )
}

export default Profile