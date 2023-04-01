import './index.css'
import React from 'react';
import logo from '../../images/logo.png'
const Navbar = () => {
return(
<nav className='navbar'>
    <div>
        <img src={logo} alt="logo" />
    </div>
    <div>
        <a href="#">Login</a>
        <a href="#">Signup</a>
    </div>
</nav>
)


}
export default Navbar
