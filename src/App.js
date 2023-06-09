import React, { useState } from 'react'
import logo from './assets/images/logo.svg';
import './App.css';
import Sidenav from'./components/sidenav/Sidenav';
import './components/header/Header.css';
import Body from './components/body/Body';
import Hamburger from './components/menu-icon/Hamburger';
import { FaBars } from "react-icons/fa";

function App() {
  const [isMenuActive, activeMenu] = useState(false)
  return (
    
    <div className="App" id="outer-container">
<div>
        <div class="navbar">
        <img src={logo} height='20px' width='60px' />
   
  <div class="dropdown">
  <a class="dropbtn content-link img1" href="#news">Features </a>
    <div class="dropdown-content">
    
     
      <a href="#" class='content-link img1'> Todo List</a>
    <a href="#" class='content-link img2' >Calendar</a>
    <a href="#" class='content-link img3'>Reminders</a>
    <a href="#" class='content-link img4'>Planning</a>     
  
    </div>
  </div>
  <div class="dropdown">
  <a class="dropbtn content-link img2" href="#news">Company </a>
    <div class="dropdown-content content2">
      <a href="#">History</a>
      <a href="#">Our Team</a>
      <a href="#">Blog</a>
    </div>
  </div>
  <a class="dropbtn" href="#news">Careers </a>
  <a class="dropbtn" href="#news">About</a>

    <div class='right-buttons'>
    
    <button onClick={() => activeMenu(!isMenuActive)}  class="icon">  
    <FaBars />
    </button>
        
    
      <button class="dropbtn">Login</button>
       
      <button class="bordered-button">Register</button>
     
      
    </div>
</div>
<Sidenav isMenuActive={isMenuActive}
          onOverLayClick={() => activeMenu(!isMenuActive)}
        >
        
        </Sidenav>
        </div>

      <div id="page-wrap">      
        
      <Body />
      
      </div>
  
    </div>
  );
}

export default App;
