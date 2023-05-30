import React from 'react'
import classes from '../styles/Navigation.module.css'

import { useSelector } from 'react-redux';

function Navigation() {

    const user = localStorage.getItem('name')
    const auth = useSelector(state => state.isAuthenticated)

    return (
        <div className={classes.head}>
            <ul className={classes.list}>
                <li>
                    {auth ? 'Logout' : 'Login'}
                </li>
                <li>
                    Visualise
                </li>
            </ul>
        </div>
    )
}

export default Navigation