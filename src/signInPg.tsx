import React from 'react';
import './App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from 'react-router-dom';

const signUp : React.FC = () =>{
  return (

    <div className='login-register'>
        <div>
        
            <h1>
               Top up your Phone's airtime, get affordable data, 
               pay electricity bills, renew TV subscriptions etc...
               <span> Quick. Cheap and Safe</span>
            </h1>
        </div>
        <div>
            <h3>
                Please fill up the form below to create an account 
            </h3>
        </div>
    <form className='form-register'>
        <label>
            Full Name:
            <input 
            type='name'
            required
            placeholder='first and lastname'/>
        </label>
        <label>
            Email Address:
            <input 
            type='email'
            required
            placeholder='h@example.com'
            />
        </label>
        <label>
            Username:
            <input 
            type= 'username'
            required
            placeholder='e.g guri-data'/>
        </label>
        <label>
            Phone Number:
            <input 
            type='phone number'
            required
            placeholder='08123456789'/>
        </label>
        <label>
            Password:
            <input
            type='password'
            required
            placeholder='enter password'/>
        </label>
        <label>
          Enter referral code
          <input
          type='code'
          placeholder='c1dabb'
           />
        </label>
        <button type='submit'>Register</button>
    </form>
    <p>Already have an account? Login <NavLink to={'/login'}>here</NavLink></p>
    <p>
      
    </p>
    </div>
  )
}
export default signUp;
