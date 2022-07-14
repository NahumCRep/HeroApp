import React, { useContext, useMemo } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRoute = ({children}) => {
    const { authState } = useContext(AuthContext)
    const {pathname, search} = useLocation()
    const lastPage = pathname + search

    useMemo(() => {
        localStorage.setItem('lastPage', lastPage)
    }, [lastPage])

    return (authState.logged)
        ? children
        : <Navigate to='/login' />
}
