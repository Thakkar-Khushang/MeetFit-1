import React from "react";
import { render } from "react-dom";
import CarouselSlider from "../../../../node_modules/react-carousel-slider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let data = [
  {
    imgSrc:
    "images/Tirth.jpg",
    des1:"Tirth Patel",
    
    
  },
  {
    imgSrc:
      "images/Akriti.jpeg",
    des1: "Akriti Dalal",
    
    
  },

  {
    imgSrc:
      "images/Sachi Kaushik.jpg",
    des1: "Sachi Kaushik",
   
  },
  {
    imgSrc:
      "images/Khushang.png",
    des1: "Khushang Thakkar" ,
    
  }
];

let sliderBoxStyle = {
  height: "250px",
  width: "300px",
  background: "transparent",
  border: "1px solid #e1e4e8"
};

let itemsStyle = {
  height: "80%",
  padding: "0px",
  background: "transparent",
  border: "1px solid #e1e4e8",
  borderRadius: "2px"
};

let textBoxStyle = {
  width: "60%",
  background: "rgba(155, 108, 27, 0.5)",
  top: "80%",
  textAlign: "centre",
  color: "#ffffff"
};

// let textBoxStyle2 = {
//   width: "30%",
//   top: "30%",
//   color: "#ffffff",
//   marginRight: "0%"
// };
// margin to tune the textbox
let buttonSetting = {
  placeOn: "middle-outside",
  style: {
    left: {
      color: "#929393",
      background: "transparent",
      border: "1px solid #e1e4e8",
      borderRadius: "50%"
    },
    right: {
      color: "#929393",
      background: "transparent",
      border: "1px solid #e1e4e8",
      borderRadius: "50%"
    }
  }
};

let dotsSetting = {
  placeOn: "top",
  style: {
    dotSize: "5px",
    currDotColor: "rgba(155, 108, 27, 0.5)",
    marginTop: "0px"
  }
};

let customSlideCpnts = data.map((item, index) => (
  <Link to={"/page" + index} key={index}>
    <img src={item.imgSrc} />
    <p style={textBoxStyle}>{item.des1}</p>
    {/* <p style={textBoxStyle2}>{item.des2}</p> */}
  </Link>
));
export function Team(){
return(
    <div style={{ width: "400px", margin: "0 auto", position: "relative" }}>
      <CarouselSlider
        slideCpnts={customSlideCpnts}
        manner={{ circular: false }}
        sliderBoxStyle={sliderBoxStyle}
        dotsSetting={dotsSetting}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
);
}

// render(<App />, document.getElementById("root"));
