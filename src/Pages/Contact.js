import { useContext } from 'react'
import UserDataContext from '../Componenets/ContextProvider';
import GenerateButton from '../Utilities/GenerateButton';

const Contact = () => {
  const {userData, loaded} = useContext(UserDataContext);
  return (
    <div>
      <GenerateButton />
      {loaded && 
        <div className='contactContainer'>
          <div className='item'>
            <h3>{userData.name?.first} {userData.name?.last}'s Address:</h3>
            <p>{userData.location?.street.number} {userData.location?.street.name}</p>
            <p>{userData.location?.postcode}</p>
            <p>{userData.location?.city}</p>
            <p>{userData.location?.state}</p>
            <p>{userData.location?.country}</p>
          </div>
          <div className='item'>
            <h3>{userData.name?.first} {userData.name?.last}'s Contact Details:</h3>
            <p>Phone Number: {userData.phone}</p>
            <p>Email: {userData.email}</p>
          </div>
      </div>}
    </div>
  )
}

export default Contact