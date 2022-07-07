import React from "react";
import "./Category.scss";
import { Link ,useParams} from "react-router-dom";
const Category = ({img}) => {
  console.log(img)
  return (
    <div className="Category-Container">
      <div className="overay">
        <h1>lOREM IPSUM</h1>
        <Link to = "/Categorypage/hkbvjh">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <img
        src={`${img}`}
        alt=""
      />
    </div>
  );
};

export default Category;
