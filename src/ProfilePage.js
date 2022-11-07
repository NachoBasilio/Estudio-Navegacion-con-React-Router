import React from 'react'
import {useAuth} from './auth'

export function ProfilePage() {
  const auth = useAuth()



  return (
    <>
      <h1>Perfil</h1>
      <p>Hi! {auth.user.username}</p>
    </>
  )
}
