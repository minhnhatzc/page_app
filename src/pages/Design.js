import React from "react";
import img1 from ".././img/image-1.png";
import img2 from ".././img/boxgo-thumbnail.png";
import img3 from ".././img/image.png";
import img4 from ".././img/kiva-thumbnail.png";
import "./All.css";

const Design = () => {
	return (
		<div className="product">
		  <div className="product_list">
		    <div className="product_item">
		      <img src={img1} alt="" className="product_img" />
		      <span className=" product_title">TOI 3D Customize E-commerce</span>
		    </div>
		    <div className="product_item">
		      <img src={img2} alt="" className="product_img" />
		      <span className=" product_title">E-learning – Internal training platform</span>
		    </div>
		    <div className="product_item">
		      <img src={img3} alt="" className="product_img" />
		      <span className=" product_title">Summer 21 Cosmetic E-commerce Platform</span>
		    </div>
		    <div className="product_item">
		      <img src={img4} alt="" className="product_img" />
		      <span className=" product_title">Kiva – Ambition to digital transformation</span>
		    </div>
		  </div>
		</div>
	     );
};

export default Design;
