import { HashRouter, Route, Routes } from 'react-router-dom'
import { BlogPage } from './BlogPage';
import { HomePage } from './HomePage';
import { Menu } from './Menu';
import { ProfilePage } from './ProfilePage';
import React from 'react'
import {BlogPost} from './BlogPost';
import {LoginPage} from './LoginPage';
import {LogoutPage} from './LogoutPage';
import {AuthProvider, useAuth} from './auth'

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu/>
          <Routes>//Esta parte va a ser dinamica, osea que va a cambiar dependiendo de la ruta en la que estemos
            <Route path='/' element={<HomePage/>}/>

              <Route path='/blog' element={<BlogPage/>}>
                <Route path=':slug' element={<BlogPost/>}/>
              </Route>

            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/logout' element={<LogoutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/*' element={<p>Not found</p>}/>//Cuando ponemos un asterisco (*) nos referimos a que sea el valor por defecto si las rutas de arriba no se cumple.

          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
