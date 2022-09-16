import {useContext} from 'react'
import GenerateButton from '../Utilities/GenerateButton'
import UserDataContext from '../Componenets/ContextProvider';

const LoginDetails = () => {
  const {userData, loaded} = useContext(UserDataContext);
  return (
    <div>
      <GenerateButton />
      <div>
        {loaded && 
          <div className='item'>
            <h4>{userData.name?.first} {userData.name?.last}'s Login Details:</h4>
            <p>Username: {userData.login?.username}</p>
            <p className='password'>Password: {userData.login?.password}</p>
            <p>User ID: {userData.login?.uuid}</p>
          </div>}
        </div>
    </div>
  )
}

export default LoginDetails