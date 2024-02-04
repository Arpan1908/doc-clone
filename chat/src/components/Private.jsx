import {AContext} from "./Context";

import {useContext}  from "react";


const {Outlet,Navigate} = require("react-router-dom");

const useAuth = () => {
    const {user} = useContext(AContext);
    return user && user.loggedIn;
}

const Private = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default Private;