import React from "react";
const Card = ({ isPopular }) => {
  return (
    <div class="popular-product">
      <div class="card item mycard">
        <div class="img-card">
          <img
            class=""
            src="img/clothes.png"
            alt="our product xpress clothes discount"
          />
        </div>
        <h5 class="card-name">Autumn women's new high-waist slim..</h5>
        {isPopular && (
          <div >
            <p class="size">size:0000</p>
            <p class="old-price strikethrough">40 KWD</p>
            <p class="new-price">40 KWD</p>
            <div className="row">
            <div class="bottom-card">
              <a href="#" class="btn-minus">
                {" "}
                <i class="fa-solid fa-minus"></i>
                {" "}
              </a>
              <input
                type="text"
                readonly="1"
                value="1"
                class="input-add-product-num"
              />
              <a href="#" class="btn-plus">
                {" "}
                <i class="fa-solid fa-plus"></i> 
                {" "}
              </a>
              <a href="#" class="btn-add-product">
                ADD
              </a>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
