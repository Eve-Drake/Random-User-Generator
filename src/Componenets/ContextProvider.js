import axios from "axios";
import { createContext, useState } from "react";

const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [userData, setUserData] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const getUserData = async () =>{
        await axios.get('https://randomuser.me/api/')
        .then(resp=>{
            setUserData(resp.data.results[0])
            setLoaded(true)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    

return(
        <UserDataContext.Provider value={{userData, getUserData, loaded}}>{children}</UserDataContext.Provider>
    )
    }

export default UserDataContext