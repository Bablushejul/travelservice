import React from "react";
import classes from "./Services.module.css";
import Header from "../../Header/Header";
import Line from "../Services/Line";

const Services = () => {
  return (
    <div className={classes.Services}>
      <Header />
      <Line />
    </div>
  );
};

export default Services;
