import React, { Component } from "react";
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Sidenav.css'


class Sidenav extends Component {
  render() {
    const { isMenuActive, onOverLayClick } = this.props;
    const sideMenuClasses = classnames('side-menu', {
      'side-menu--active': isMenuActive,
    })
    const sideMenuContentClasses = classnames('side-menu__content', {
      'side-menu__content--active': isMenuActive,
    })
    return (
      <aside className={sideMenuClasses}>
      <div className="side-menu__overlay" onClick={onOverLayClick} />
      <div className={sideMenuContentClasses}>
      <a href="javascript:void(0)" class="closebtn" onClick={onOverLayClick}>&times;</a>
      <div class='side-list'>
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
      </div>
      <div class='right-buttons'>  
    
    <button class="dropbtn">Login</button>
     
    <button class="bordered-button">Register</button>
   
    
      </div>
        </div>
      </aside>
    )
  }
}

export default Sidenav
