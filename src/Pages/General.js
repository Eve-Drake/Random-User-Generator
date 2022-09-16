import React from 'react';
import { useContext } from 'react';
import UserDataContext from '../Componenets/ContextProvider';
import GenerateButton from '../Utilities/GenerateButton';


const General = () => {
  const {userData, getUserData, loaded} = useContext(UserDataContext);
  return (
    <div className='userContainer'>
        <GenerateButton />
        {loaded && <div >
          <img className={userData.gender} src={userData.picture?.large} onClick={getUserData} alt='User Generated Through An API'></img>
          <h1>{userData.name?.first} {userData.name?.last}</h1>
          <p>Date of Birth: {userData.dob?.date.slice(0, 10)}</p>
          <p>Age: {userData.dob?.age}</p>
        </div>}
    </div>
  )
}

export default General