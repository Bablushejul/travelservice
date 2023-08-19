import React from 'react';
import classes from './Offer.module.css'
import Image1 from '../../../assets/Rectangle 160.png'
import Image2 from '../../../assets/Rectangle 161.png'
import Image3 from '../../../assets/Rectangle 162.png'

const Offers = () => {
  return (
    <div className={classes.Offers}>
      <img src={Image1} alt=' '  className={classes.img}/>
      <img src={Image2} alt=' ' className={classes.img}/>
      <img src={Image3} alt=' ' className={classes.img}/>
    </div>
  );
}

export default Offers;
