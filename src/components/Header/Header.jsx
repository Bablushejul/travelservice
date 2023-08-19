import React, { useState } from 'react';
import classes from './Header.module.css'
import icon from '../../assets/headericon.png'
import { AiOutlineBars ,AiOutlineClose} from "react-icons/ai";

const Header = () => {

  const [mobile,setMobile]=useState(false)

  return (
    <div className={classes.Header}>
      <img src={icon} alt='' className={classes.img}/>
      
      <div style={{marginTop:"2%"}} >
      <input type='search' name='search' placeholder='search' />
      </div>
      <div className={classes.navbar}>
      <ul className={mobile?classes.mobile:classes.links} onClick={()=>setMobile(false)}>
        <li>Home</li>
        <li>Visa</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <button>Log In</button>
      </ul>
      <button className={classes.icon} onClick={()=>setMobile(!mobile)}>
        {mobile ? <AiOutlineClose />:<AiOutlineBars />}
      </button>
      </div>
      
    </div>
  );
}

export default Header;
