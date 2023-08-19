import React from "react";
import classes from "./Layout.module.css";
import Footer from '../Footer/Footer';
import VacationRentals from './VacationRentals/VacationRentals';
import TopLayout from './Services/TopLayout';
import TopServices from './TopServices/TopServices';
import Offers from './Offers/Offers';
import Destinations from './Destinations/Destinations';

const Layout = () => {
  return (
    <div className={classes.main}>
      <TopLayout />
      <h1 className={classes.headings}>Our Top Services</h1>
      <TopServices />
      <h1 className={classes.headings}>Offers </h1>
      <Offers />
      <h1 className={classes.headings}>Popular Destination Outside India</h1>
      <Destinations />
      <h1 className={classes.headings}>Explore our Best Vacation Rentals</h1>
      <VacationRentals />
      <h1 className={classes.headings}> </h1>
      <Footer />
    </div>
  );
};

export default Layout;
