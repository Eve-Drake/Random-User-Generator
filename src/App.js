
import {  Route, Routes } from 'react-router-dom';
import './index.css';
import {UserDataProvider} from './Componenets/ContextProvider'
import General from './Pages/General'
import Nav from './Utilities/Nav';
import Contact from './Pages/Contact'
import LoginDetails from './Pages/LoginDetails';

function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<General />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<LoginDetails />}></Route>
        </Routes>
      </UserDataProvider>
    </div>
  );
}

export default App;
