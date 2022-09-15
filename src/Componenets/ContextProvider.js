import axios from "axios";
import { createContext, useState } from "react";

const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [userData, setUserData] = useState([]);
    const [generate, setGenerate] = useState(true)

    const getUserData = async () =>{
        setGenerate(false)
        await axios.get('https://randomuser.me/api/')
        .then(resp=>{
            setUserData(resp.data.results[0])
        })
        .catch(err =>{
            console.log(err)
        })
    }
    

return(
        <UserDataContext.Provider value={{userData, getUserData, generate}}>{children}</UserDataContext.Provider>
    )
    }

export default UserDataContext