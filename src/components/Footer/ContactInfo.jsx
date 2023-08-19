import React from "react";
import classes from "./Footer.module.css";

const ContactInfo = () => {
  return (
    <div className={classes.forms}>
      <h3>Get In Touch To Connect</h3>
      <div>
        <h4> Contact Us</h4>
        <h5>mail : abc@abc.com</h5>
        <h5> call : 1234567890</h5>
        <h5> whatsApp : 1234567890</h5>
      </div>
    </div>
  );
};

export default ContactInfo;
