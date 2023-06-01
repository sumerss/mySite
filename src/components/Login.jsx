import React, { useState } from 'react'
import classes from '../styles/Login.module.css'

import useInputValidate from '../hooks/useInputValidate'
import { useDispatch } from 'react-redux'
import { authActions } from '../reduxStore/store'

function Login() {

    const dispatch = useDispatch()
    const [formHasError, setFormHasError] = useState(false)

    const {
        value: userName,
        isValid: nameIsValid,
        hasError: nameHasError,
        handleValueInput: handleNameInput,
        handleValueBlurr: handleNameBlurr,
        reset: resetNameInput
    } = useInputValidate(value => value.trim() !== '')

    const {
        value: userPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        handleValueInput: handlePasswordInput,
        handleValueBlurr: handlePasswordBlurr,
        reset: resetPasswordInput
    } = useInputValidate(value => value.trim() !== '')

    let isFormValid = false;

    if (nameIsValid && passwordIsValid) {
        isFormValid = true;
    }

    const submitHandler = () => {
        if (userPassword === '1234') {
            resetNameInput()
            resetPasswordInput()
            setFormHasError(false)
            dispatch(authActions.login())
            localStorage.setItem('name', userName)
        } else {
            setFormHasError(true)
        }
    }

    const userClass = nameHasError ? `${classes.fields} ${classes.invalid}` : `${classes.fields}`
    const passwordClass = passwordHasError ? `${classes.fields} ${classes.invalid}` : `${classes.fields}`
    const buttonClass = isFormValid ? `${classes.submit}` : `${classes.submit} ${classes.notSubmit}`

    return (
        <div className={classes.loginBox}>
            <p className={classes.heading}>Login form</p>
            <form >
                <div className={userClass}>
                    <label htmlFor='user' >User Name :</label> &nbsp;
                    <input
                        type='text'
                        id='user'
                        value={userName}
                        onChange={handleNameInput}
                        onBlur={handleNameBlurr} />
                    {nameHasError && <p className={classes.error}>Please enter a valid user name</p>}
                </div>
                <div className={passwordClass}>
                    <label htmlFor='password'>Password :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type='password'
                        id='password'
                        value={userPassword}
                        onChange={handlePasswordInput}
                        onBlur={handlePasswordBlurr} />
                    {passwordHasError && <p className={classes.error}>Please enter a valid password</p>}
                </div>
            </form>
            <br />
            <button className={buttonClass} onClick={submitHandler} disabled={!isFormValid}>Login</button>
            {formHasError && <p className={classes.error}>Password mismatched</p>}
        </div>
    )
}

export default Login