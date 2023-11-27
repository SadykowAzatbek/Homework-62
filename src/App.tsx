import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';

function App() {

  return (
    <>
      <header className="d-flex justify-content-between bg-light p-3 rounded-3 mt-3">
        <h1 className="text-success p-1">Travelulu</h1>
        <nav className="pt-3">
          <ul className="navbar-nav ms-auto flex-row gap-2 flex-nowrap">
            <li className="nav-item">
              <NavLink to="/" className="text-black">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="text-black">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="text-black">Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={(
          <Home></Home>
        )} />
        <Route path="/about-us" element={(
          <About></About>
        )} />
        <Route path="/contacts" element={(
          <Contacts></Contacts>
        )} />
      </Routes>
    </>
  )
}

export default App;
