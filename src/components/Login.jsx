import React, { useState } from 'react'
import classes from '../styles/Login.module.css'

import { useDispatch } from 'react-redux'
import { authActions } from '../reduxStore/store'

function Login() {

    const dispatch = useDispatch()
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [userHasError, setuserHasError] = useState(false)
    const [passwordHasError, setpasswordHasError] = useState(false)
    const [formHasError, setFormHasError] = useState(false)

    const handleUserChange = (event) => {
        setUser(event.target.value)
        if (event.target.value.trim() != '') {
            setuserHasError(false)
        }
    }

    const handleUserBlur = () => {
        if (user.trim() === '') {
            setuserHasError(true)
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        if (event.target.value.trim() != '') {
            setpasswordHasError(false)
        }
    }

    const handlePasswordBlur = () => {
        if (password.trim() === '') {
            setpasswordHasError(true)
        }
    }

    const submitHandler = () => {
        if (user === 'Sumer' && password === '1234') {
            setUser('')
            setPassword('')
            setFormHasError(false)
            dispatch(authActions.login())
            localStorage.setItem('name', user)
        } else {
            setFormHasError(true)
        }
    }

    const userClass = userHasError ? `${classes.fields} ${classes.invalid}` : `${classes.fields}`
    const passwordClass = passwordHasError ? `${classes.fields} ${classes.invalid}` : `${classes.fields}`

    return (
        <div className={classes.loginBox}>
            <p className={classes.heading}>Login form</p>
            <form onSubmit={submitHandler}>
                <div className={userClass}>
                    <label htmlFor='user' >User Name :</label> &nbsp;
                    <input
                        type='text'
                        id='user'
                        value={user}
                        onChange={handleUserChange}
                        onBlur={handleUserBlur} />
                    {userHasError && <p className={classes.error}>Please enter a valid user name</p>}
                </div>
                <div className={passwordClass}>
                    <label htmlFor='password'>Password :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur} />
                    {passwordHasError && <p className={classes.error}>Please enter a valid password</p>}
                </div>
            </form>
            <br />
            <button type='submit' className={classes.submit} onClick={submitHandler}>Login</button>
            {formHasError && <p className={classes.error}>Details mismatched</p>}
        </div>
    )
}

export default Login