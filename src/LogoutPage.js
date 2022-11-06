import React from 'react'

export function LogoutPage() {
  const logout = (e) => {
    e.preventDefault()
    console.log('salimo')
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
