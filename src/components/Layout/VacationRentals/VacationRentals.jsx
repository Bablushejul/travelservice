import React from 'react';
import classes from './VacationRentals.module.css';
import Image1 from '../../../assets/Rectangle 170.png';
import Image2 from '../../../assets/Rectangle 171.png';
import Image3 from '../../../assets/Rectangle 172.png'

const VacationRentals = () => {
  return (
    <div className={classes.VacationRentals}>
       <img src={Image1} alt=' '  className={classes.spot}/>
       <img src={Image2} alt=' '  className={classes.spot}/>
       <img src={Image3} alt=' '  className={classes.spot}/>
      
    </div>
  );
}

export default VacationRentals;
