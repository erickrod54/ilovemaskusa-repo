import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import shopReducer from "../../redux/shop/shop.reducer";

//select cartItems.. pero yo quiero seleccionar todos los items de Shop_Data
import "./stock.styles.scss";

const StockPage = () => (
  <div className="stock-page">
    <div className="stock-header">
      <div className="headerblock">
        <span>Product</span>
      </div>
      <div className="headerblock">
        <span>Description</span>
      </div>
      <div className="headerblock">
        <span>Quantity</span>
      </div>
      <div className="headerblock">
        <span>Price</span>
      </div>
      <div className="headerblock">
        <span>Remove</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  shopReducer
});

export default connect(mapStateToProps)(StockPage);