import {useContext} from 'react'
import UserDataContext from '../Componenets/ContextProvider';

const GenerateButton = () => {
    const {getUserData, loaded} = useContext(UserDataContext);

  return (
    <div className='userContainer'>
        {!loaded && <button className='generate' onClick={getUserData}>Generate User</button>}
    </div>
  )
}

export default GenerateButton