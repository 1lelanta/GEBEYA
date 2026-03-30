import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import { fetchJson } from '../config/api'

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData, setFormData] = useState({
    userName:"",
    password:"",
    email:""
  } )
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitAuth = async (endpoint) => {
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const responseData = await fetchJson(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token)
        window.location.replace('/')
        return
      }

      setErrorMessage(responseData.errors || 'Authentication failed')
    } catch (error) {
      setErrorMessage('Unable to reach server. Please check backend and try again.')
      console.error('Authentication request failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const login = async () => submitAuth('/login')

  const signup = async () => submitAuth('/signup')

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
          {state==="Sign Up"?<input type="text" name ='userName' value={formData.userName} onChange={changeHandler} placeholder='Your name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>
        <button disabled={isSubmitting} onClick={()=>{state==="Login"?login(): signup()}}>
          {isSubmitting ? 'Please wait...' : 'Continue'}
        </button>

        {errorMessage ? <p className="loginsignup-error">{errorMessage}</p> : null}

        {state === "Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>setState("Login")}>Login</span></p>:
        <p className="loginsignup-login">Create an account? <span onClick={()=> setState("Sign Up")}>Click here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By contiuning, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup