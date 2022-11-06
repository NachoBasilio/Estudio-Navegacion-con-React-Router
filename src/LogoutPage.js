import React from 'react'
import {useAuth} from './auth'

export function LogoutPage() {
  const auth = useAuth()

  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }

  return (
    <>
    <h1>Logout</h1>
    <form onSubmit={logout}>
      <label>¿Segurp de que quieres salir?</label>

      <button type="submit">Seguro</button>
    </form>
    </>
  )
}
