import React from 'react'
import { useAuth } from './auth'

export function LoginPage() {
  const auth = useAuth()
  const [username, setUsername] = React.useState("")

  const login = (e) => {
    e.preventDefault()
    auth.login({username})
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={login}>
      <label>Nombre de usuario</label>
      <input 
      type="text" 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />

      <button type="submit">Entre</button>
    </form>
    </>
  )
}
