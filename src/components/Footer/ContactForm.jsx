import React from "react";
import classes from "./ContactForm.module.css";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className={classes.form}>
      <form className={classes.container}>
        <input type="text" className={classes.container} />
        <button className={classes.btn}>submit</button>
      </form>
      <Button />
    </div>
  );
};

export default ContactForm;
