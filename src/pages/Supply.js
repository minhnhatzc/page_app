import React from 'react';
import "./All.css";
import img6 from ".././img/img6.jpg";
import img7 from ".././img/img7.jpg";
import img8 from ".././img/img8.jpg";
import img9 from ".././img/img9.jpg";
import img10 from ".././img/img10.jpg";
import img11 from ".././img/img11.jpg";


const Supply = () => {
	return (
		<div className="product">
		  <div className="product_list">
		    <div className="product_item">
		      <img src={img6} alt="" className="product_img" />
		      <span className="product_title">Dsoft</span>
		    </div>
		    <div className="product_item">
		      <img src={img7} alt="" className="product_img" />
		      <span className="product_title">MITC</span>
		    </div>
		    <div className="product_item">
		      <img src={img8} alt="" className="product_img" />
		      <span className="product_title">Tego</span>
		    </div>
		    <div className="product_item">
		      <img src={img9} alt="" className="product_img" />
		      <span className="product_title">More</span>
		    </div>
		    <div className="product_item">
		      <img src={img10} alt="" className="product_img" />
		      <span className="product_title">Code Complete</span>
		    </div>
		    <div className="product_item">
		      <img src={img11} alt="" className="product_img" />
		      <span className="product_title">Smart Dev</span>
		    </div>
		  </div>
		</div>
	     );
};

export default Supply;
