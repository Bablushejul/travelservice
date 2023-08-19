import React from "react";
import classes from "./Footer.module.css";

const ContactInfo = () => {
  return (
    <div className={classes.forms}>
      <h1>Get In Touch To Connect</h1>
      <div>
        <h2> Contact Us</h2>
        <h3>mail : abc@abc.com</h3>
        <h3> call : 1234567890</h3>
        <h3> whatsApp : 1234567890</h3>
      </div>
    </div>
  );
};

export default ContactInfo;
