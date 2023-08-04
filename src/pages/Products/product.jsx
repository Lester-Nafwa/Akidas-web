import React from "react";
import "./product.css";
import Items from "../Items/items";

const Products = () => {
  return (
    <div>
      <div className="product-sect">
        <div className="item-compo">
          <div className="bimed-sect">
            <div className="pro-title">
              {" "}
              <span>BIMED Products</span>
            </div>
            <div className="itesm">
              <Items />
            </div>
          </div>
          <hr />
          <div className="others-pro">
            <span>Other Medical Supplies</span>
          </div>
          <div className="other-products">
            <div className="other-pro-title">
              {" "}
              <span>Medical Supplies</span>
            </div>
            <div className="other-pro-title">
              <span>Medical & Hospital Machiner</span>
            </div>
            <div className="other-pro-title">
              <span>Medical Equipments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
