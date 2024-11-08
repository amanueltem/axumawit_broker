import React from "react";
import styles from "./Footer.module.scss";
import axumawit from "../../assets/axumawit.jpeg"

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return <div className={styles.footer}>&copy; {year} <img src={axumawit}/> </div>;
};

export default Footer;
