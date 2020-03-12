import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import "./footerStyles.css"
 
const Footer = () => {
  return (
    <div className="footerClassname"> <p> Coded with <FontAwesomeIcon icon={faHeart} color="blue"/>  by Fernando Cutire </p> </div>
  );
};

export default Footer;
