import React from 'react';
import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

interface LoginPageProps{
    logIn: () => void
   
}

const LoginPg : React.FC <LoginPageProps> = ({logIn}) =>{
const navigate = useNavigate()
const {register, handleSubmit, setError} = useForm<FormData>()


interface FormData{
    email: string;
    password: string;
}

const onSubmit: SubmitHandler<FormData> = (data) => {
  if (data.email !== 'guri@gmail.com' || data.password !== '12345') {
    setError('email', {
      type: 'manual',
      message: 'Invalid email or password',
    });
    console.log('Invalid email or password'); // Log the error to the console
    toast.error('Invalid email or password'); // Show the error as a toast
  } else {
    console.log('Logged in successfully');
    toast('Logged in successfully')
    logIn()
    navigate('/')
  }
};



  return (

    <div className='login'>
        <div>
            <FontAwesomeIcon icon={faHome} />
           DataGuri 
            <h1>
               Top up your Phone's airtime, get affordable data, 
               pay electricity bills, renew TV subscriptions etc...
               <span> Quick. Cheap and Safe</span>
            </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Email:
            <input 
            type='email'{...register('email')}
            placeholder='h@example.com'
            />
            
        </label>

        <label>
            Password:
            <input
            type='password' {...register('password')}
            placeholder='enter password'
          />
        </label>
        <div>
            Remember Me <input type='checkbox'/>
        </div>
        <button type='submit'>Login</button>
    </form>
    <p>
        Don't have an account? <Link to='/signup'>Sign up here</Link>
    </p>
    
    </div>
  )
}
export default LoginPg;
