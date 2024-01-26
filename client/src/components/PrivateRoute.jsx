import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const { currentUser } = useSelector(state => state.user)
    /* When there is a current user, then we are gonna show the children whatever inside this(in our case, it is Profile)  */
    return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}
