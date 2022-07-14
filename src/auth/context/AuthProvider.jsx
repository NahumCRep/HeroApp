import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const initialState = {
    logged: false
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState, init)
    
    const onLogin = (username = '') => {
        const user = {
            id: '123',
            name: username
        }

        localStorage.setItem('user', JSON.stringify(user))
        dispatch({type: types.login, payload:user})
    }

    const onLogout = () => {
        localStorage.removeItem('user')
        dispatch({type: types.logout})
    }

    return (
        <AuthContext.Provider value={{
            authState: state,
            login: onLogin,
            logout: onLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}