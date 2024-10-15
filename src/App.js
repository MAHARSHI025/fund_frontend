import './App.css';
import "./components/CSS/Addfund.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js"
import Sidebar from './components/Sidebar.js';
import FundForm from './components/FundForm.js';
import Update from './components/Update.js';
import Factsheet from './components/Factsheet.js';
import Navbar from './components/Navbar.js';
import Navigation from './components/containers/Navigation.js';
// import Addfund from './components/Addfund.js';

function App() {
  return (


    <Router>
      <div className='align-route-components'>
          <Navigation />

        <div>
          <div className='align-main-content'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/requests" element={<Home />} />
              <Route path="/account" element={<Home />} />
            </Routes>
          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;
