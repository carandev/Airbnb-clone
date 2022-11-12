import React from 'react'
import style from './Menu.module.css'

const Menu = ({handleLogin, handleMenu}) => {
  return (
    <div className={style.container}>
      <ul className={style.ul}>
        <li 
          className={style.bold}
          onClick={() => {
            handleLogin()
            handleMenu()
          }}
        >
          Sign Up
        </li>
        <li 
          className={style.login}
          onClick={() => {
            handleLogin()
            handleMenu()
          }}
        >
          Log In
        </li>
        <li>Host your home</li>
        <li>Host an experience</li>
        <li>Help</li>
      </ul>
    </div>
  )
}

export default Menu
