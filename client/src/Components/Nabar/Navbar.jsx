import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Left">
        <div className="Lang">
          EN
          {/* <LanguageRoundedIcon/> */}
        </div>
        <div className="Input-Box-Navabar">
          <input type="text" />
          <SearchIcon style={{ fontSize: "19px", color: "grey" }} />
        </div>
      </div>
      <div className="Navbar-Center">
        <div className="Navbar-Nameblock">KARA.O</div>
      </div>
      <div className="Navbar-Right">
        <div className="Navbar-Right-box">REGISTER</div>
        <div className="Navbar-Right-box">SIGNIN</div>
        <div className="Navbar-Right-box">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
