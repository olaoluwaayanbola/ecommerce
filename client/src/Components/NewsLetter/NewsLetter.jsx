import React from "react";
import "./News.scss";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const NewsLetter = () => {
  return (
    <div className="NewsLetter-container">
      <div className="wrapper">
        <h3>Newsletter</h3>
        <p>Get timely updates from your favorite products</p>
        <div className="input-button">
          <input type="text" placeholder="Email" />
          <button>
            <SendOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
