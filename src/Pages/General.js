import React, { useState } from 'react';
import { useContext } from 'react';
import UserDataContext from '../Componenets/ContextProvider';


const General = () => {
  const {userData, getUserData, generate} = useContext(UserDataContext);

  const handleClick = () =>{
    getUserData();
  }
  return (
    <div className='container'>
        {generate && <button className='generate' onClick={handleClick}>Generate User</button>}
        <div className='userContainer'>
          <img className={userData.gender} src={userData.picture?.large} onClick={handleClick}></img>
          <h1>{userData.name?.first} {userData.name?.last}</h1>
        </div>
        
    </div>
  )
}

export default General