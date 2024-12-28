import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/white_logo.png";

const WhiteLogo = () => {
  return (
    <Link to={"home"} className='flex justify-center items-center flex-col gap-2'>
      <img width={120} src={logo} alt="logo" />
      {/* <h2 className="text-center text-xs">Glowing Competencies <br />For General Services</h2> */}
    </Link>
  );
};

export default WhiteLogo