import React from 'react';
import classes from './TopServices.module.css';
import Image1 from '../../../assets/Rectangle 148.png';
import Image2 from '../../../assets/Rectangle 149.png';
import Image3 from '../../../assets/Rectangle 151.png';
import Image4 from '../../../assets/Rectangle 152.png';
import Image5 from '../../../assets/Rectangle 153.png';

const TopServices = () => {
  return (
    <div className={classes.TopServices}>
      <img src={Image1} alt=' '  className={classes.image}/>
      <img src={Image2} alt=' '  className={classes.image}/>
      <img src={Image3} alt=' '  className={classes.image}/>
      <img src={Image4} alt=' '  className={classes.image}/>
      <img src={Image5} alt=' '  className={classes.image}/>
    </div>
  );
}

export default TopServices;
