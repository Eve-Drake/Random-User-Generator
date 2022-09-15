
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import UserDataContext from '../Componenets/ContextProvider';

const Nav = () => {
    const {getUserData} = useContext(UserDataContext)
  return (
    <nav className='nav'>
        <button className='newUser' onClick={getUserData}>Generate New Random User Generator</button>
        <ul>
            <li><NavLink to='/' >General Infomation</NavLink></li>
            <li><NavLink to='contact' >Contact Details</NavLink></li>
            <li><NavLink to='login' >Login Details</NavLink></li>
        </ul>
    </nav>

  )
}

export default Nav