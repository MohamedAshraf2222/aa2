import React from "react";
import { FacebookSVG, InstagramSVG, TiktokSVG, XSVG } from "../../assets/Icons";

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-4 lg:gap-2 ">
      <li className="cursor-pointer">
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
          {FacebookSVG}
        </a>
      </li>
      <li className="cursor-pointer">
        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
          {InstagramSVG}
        </a>
      </li>
      <li className="cursor-pointer">
        <a href="http://tiktok.com" target="_blank" rel="noopener noreferrer">
          {TiktokSVG}
        </a>
      </li>
      <li className="cursor-pointer">
        <a href="http://x.com" target="_blank" rel="noopener noreferrer">
          {XSVG}
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
