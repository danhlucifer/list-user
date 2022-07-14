import React from 'react';
import {Link} from 'react-router-dom'

function Navbar({title}) {
  return (
    <>
        <div className='container-Navbar'>
            <div className='Navbar-header'>
                <h1>{title}</h1>
            </div>
            <div className='Navbar-title'>
                <div className='Navbar-todo'>
                    <Link to='/' style={{textDecoration: 'none', color: "#fff"}}><p>Home</p></Link>
                </div>
                <div className='Navbar-todo'>
                    <Link to='/todolist' style={{textDecoration: 'none', color: "#fff"}}><p>To Do List</p></Link>
                </div>
                <div className='Navbar-user'>
                    <Link to='/user' style={{textDecoration: 'none', color: "#fff"}}><p>User</p></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar