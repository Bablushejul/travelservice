import React from 'react';
import classes from './Services.module.css'
import Header from '../../Header/Header';

const Services = () => {
  return (
    <div className={classes.Services}>
      <Header />
      <div className={classes.service}>
      <h1>Services</h1>
    </div>
    </div>
  );
}

export default Services;
