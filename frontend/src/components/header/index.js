import './index.css'
import React from 'react';
import header from '../../images/home-header.png'
const Header = () => {
return(

<div className='header'>
    <h1 className='header-title'>E-ducate: Online E-Learning System</h1>
    <div>
        <img src={header}alt="header" />
    </div>
</div>
   

)


}
export default Header
