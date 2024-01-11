import React from 'react'
import "./Header.scss"
import {NavLink} from "react-router-dom"
import { useAuth } from '../../context/auth'
import { token } from 'morgan'
import toast from 'react-hot-toast'

const Header = () => {
  const [auth,setAuth] = useAuth();
  const handleLogOut = () =>{
    setAuth({
      ...auth,
      user:null,
      token:""
    })
    localStorage.removeItem("auth");
    toast.success("Log Out Successfully");
  }
  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo"></img> */}
        <h1>ShopIt</h1>
      </div>

      <ul className="app__navbar-links">
          <li>
            <NavLink to="/home" >home</NavLink>
          </li>
          <li>
            <NavLink to="/category" >category</NavLink>
          </li>
          {!auth.user ? (<>
            <li>
              <NavLink to="/register" >Register</NavLink>
            </li>
            <li>
              <NavLink to="/login" >Log In</NavLink>
            </li>
          </>) : (<>
            <li>
              <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} >Dashboard</NavLink>
            </li> 
            <li>
              <NavLink onClick={handleLogOut} to="/login" >Log Out</NavLink>
            </li>
          </>)}
          <li>
            <NavLink to="/cart" >Cart (0)</NavLink>
          </li>
      </ul>
    </nav>
  )
}
export default Header