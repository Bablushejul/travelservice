import React from 'react';
import classes from './Destination.module.css';
import Image1 from '../../../assets/Ellipse 25.png';
import Image2 from '../../../assets/Ellipse 26.png';
import Image3 from '../../../assets/Ellipse 27.png';
import Image4 from '../../../assets/Ellipse 28.png';
import Image5 from '../../../assets/Ellipse 29.png';

const Destinations = () => {
  return (
    <div className={classes.Destinationss}>
      <img src={Image1} alt=' '  className={classes.Image}/>
      <img src={Image2} alt=' '  className={classes.Image}/>
      <img src={Image3} alt=' '  className={classes.Image}/>
      <img src={Image4} alt=' '  className={classes.Image}/>
      <img src={Image5} alt=' '  className={classes.Image}/>
    </div>
  );
}

export default Destinations;
