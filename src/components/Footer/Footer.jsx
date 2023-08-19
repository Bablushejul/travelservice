import React from "react";
import classes from "./Footer.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.form1}>
        <h1>Free Travel Trips</h1>
      </div>
      <ContactForm />
      <ContactInfo />
      <Icon />
    </div>
  );
};

export default Footer;
