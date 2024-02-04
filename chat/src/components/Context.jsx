import { useNavigate } from "react-router";
import { date } from "yup";

const { createContext, useState, useEffect } = require("react");

export const AContext = createContext();


const UserContext = ({children}) => {
    const [user, setUser] = useState({loggedIn:null});
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8000/auth/login",{
            credentials:"include",

        }).catch(err =>{
            setUser({loggedIn:false});
            return;
        }).then(r =>{
            if(!r || !r.ok || r.status>=400){
                setUser({loggedIn:false});
                return;
            }
            return r.json();
        }).then(data =>{
            if(!data){
                setUser({loggedIn:false});
                return;
            }
            
            setUser({...data});
            navigate("/"); 
        })
    },[])
    return(
        <AContext.Provider value={{user, setUser}}>
            {children}
        </AContext.Provider>

    )
}


export default UserContext;