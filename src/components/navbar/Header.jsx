import React from "react";
import { PhoneSVG } from "../../assets/Icons";
import SocialLinks from "../utilities/SocialLinks";
import { FormControlLabel, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="flex justify-center px-0 py-2 bg-darkBg text-lightGray lg:justify-between lg:px-40">
      <div className="items-center hidden gap-1 text-white lg:flex">
        {PhoneSVG} Hire an Expert : (+966543777271)
      </div>
      <div className="flex gap-4 lg:gap-6 justify-center items-center">
        <SocialLinks />
        <FormControlLabel
          color="default"
          control={<Switch defaultChecked color="default" />}
          onClick={() => {
            handleChangeLang(i18n.language == "en" ? "ar" : "en");
          }}
          label={i18n.language == "en" ? "EN" : "AR"}
        />
      </div>
    </div>
  );
};

export default Header;
