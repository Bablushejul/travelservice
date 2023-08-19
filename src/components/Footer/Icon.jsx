import React from "react";
import classes from "./Footer.module.css";
import {
  AiFillTwitterCircle,
  AiFillWechat,
  AiFillYoutube,
} from "react-icons/ai";

const Icon = () => {
  return (
    <div className={classes.symbol}>
      <AiFillTwitterCircle className={classes.symbol1} />
      <AiFillWechat className={classes.symbol1} />
      <AiFillYoutube className={classes.symbol1} />
    </div>
  );
};

export default Icon;
