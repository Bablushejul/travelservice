import React from 'react';
import classes from './Header.module.css'
import icon from '../../assets/headericon.png'

const Header = () => {
  return (
    <div className={classes.Header}>
      <img src={icon} alt='' className={classes.img}/>
      
      <div style={{marginTop:"20px"}} >
      <input type='search' name='search' placeholder='search' />
      </div>
      <div>
      <ul className={classes.list}>
        <li>Home</li>
        <li>Visa</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <button>Log In</button>
      </ul>
      </div>
      
    </div>
  );
}

export default Header;
