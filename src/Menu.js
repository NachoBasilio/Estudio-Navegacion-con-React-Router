import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const routes = []
routes.push({
  to: '/',
  text: 'Home'

})
routes.push({
  to: '/blog',
  text: 'Blog'

})
routes.push({
  to: '/profile',
  text: 'Profile',

})

export function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li>
            <NavLink   
            style={({isActive})=>({
              color: isActive ? 'red' : 'blue'
            })}
            to={route.to}
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li>
           <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">Profile</Link> 

           <NavLink 
            style={({isActive})=>({
              color: isActive ? 'red' : 'blue'
            })}
          to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </li>  */}
      </ul>
    </nav>
  )
}

