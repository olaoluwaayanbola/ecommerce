import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar-Container">
      <div className="Navbar-Left">
        <div className="Lang">
          EN
        </div>
        <div className="Input-Box-Navabar">
          <input type="text" />
          <SearchIcon style={{ fontSize: "19px", color: "grey" }} />
        </div>
      </div>
      <div className="Navbar-Center">
        <div className="Navbar-Nameblock">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            ASOTUNTUN.C
          </Link>
        </div>
      </div>
      <div className="Navbar-Right">
        <div className="Navbar-Right-box">
          <Link to="/Signin" style={{ textDecoration: 'none' }}>
            REGISTER
          </Link>
        </div>
        <div className="Navbar-Right-box">
          <Link to="/login" style={{ textDecoration: 'none' }}>
            SIGNIN
          </Link>
        </div>
        <div className="Navbar-Right-box">
          <Badge badgeContent={2} color="primary">
            <Link to="/Cart">
              <ShoppingCartOutlinedIcon />
            </Link>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
