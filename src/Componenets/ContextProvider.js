import axios from "axios";
import { createContext, useState } from "react";

const UserDataContext = createContext();

export function UserDataProvider({children}){
    const [userData, setUserData] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const getUserData = async () =>{
        try{
            const response = await axios.get('https://randomuser.me/api/')
            setUserData(response.data.results[0]);
            setLoaded(true)
        }
        catch(err){
            
            if (err.response){
                //Respnse recieved
                console.log(err.response.data)
            }
            else{
                //No response
                console.log(err)
            }
        }
    }

    

return(
        <UserDataContext.Provider value={{userData, getUserData, loaded}}>{children}</UserDataContext.Provider>
    )
    }

export default UserDataContext