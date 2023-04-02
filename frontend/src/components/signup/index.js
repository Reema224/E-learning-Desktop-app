import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import './index.css'
const Signup = ()=>{
       return (
        <div>
        
        <div className='signup-form'>
        
        <h1>Create Account</h1><br/>
        <form>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input className='input-field name' type="text" placeholder='Name' />
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field email' type="email" placeholder='Email'/>
            </div><br/>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Password:</label>
                <input className='input-field pass' type="password" placeholder='Password'/>
            </div>
            {/* <div className="signupp-btn"><SignupButton2/></div> */}
            <div className='signup-container'>
                <label className='label' htmlFor="name">Already have an account?<a href='login'>Login</a></label>
            </div>
        </form>
        </div><br/>
        </div>
    );
}



export default Signup;