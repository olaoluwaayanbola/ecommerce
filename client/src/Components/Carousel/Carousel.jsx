import { useState } from "react";
import "./Carousel.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const Carousel = () => {
  const [state, setstate] = useState(0);
  const handleSlide = (dir) => {
    if (dir === "left") {
      setstate(state > 0 ? state - 1 : 2);
    }
    if (dir === "right") {
      setstate(state >= 2 ? 0 : state + 1);
    }
  };
  const style = {
    transform: `translateX(${state * -98.8}vw)`,
  };
  return (
    <div className="Carousel-Container">
      <div className="Arrow-Container left" onClick={() => handleSlide("left")}>
        <ArrowBackIosNewRoundedIcon />
      </div>
      <div className="wrapper" style={style}>
        <div className="Sider-Container">
          <div className="Img-container">
            <img
              src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
              alt=""
            />
          </div>
          <div className="Description">
            <div className="des-wrapper">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p className="desc-block">
                molestias provident velit, quo quae iusto eius nostrum, 1
              </p>
              <div className="button">
                <button>SHOW NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Sider-Container">
          <div className="Img-container">
            <img
              src="https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png"
              alt=""
            />
          </div>
          <div className="Description">
            <div className="des-wrapper">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p className="desc-block">
                molestias provident velit, quo quae iusto eius nostrum, 2
              </p>
              <div className="button">
                <button>SHOW NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Sider-Container">
          <div className="Img-container">
            <img
              src="https://static.wixstatic.com/media/c6dc2b_93e69491181a4784bacf188699b6491d~mv2.jpg/v1/fill/w_1349,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c6dc2b_93e69491181a4784bacf188699b6491d~mv2.jpg"
              alt=""
            />
          </div>
          <div className="Description">
            <div className="des-wrapper">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p className="desc-block">
                molestias provident velit, quo quae iusto eius nostrum,3
              </p>
              <div className="button">
                <button>SHOW NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Arrow-Container right"
        onClick={() => handleSlide("right")}
      >
        <ArrowForwardIosRoundedIcon />
      </div>
    </div>
  );
};

export default Carousel;
