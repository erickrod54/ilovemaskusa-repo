import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/**es el que utilizaremos para traernos la data 
 * y viene desde el shop.selectors
 */
//import selectAllItems from "../../redux/shop/shop.selectors";

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
/**en este mapStateToProps nos traeremos las propiedades
 * que necesitamos para llenar todos los items
 */
const mapStateToProps = createStructuredSelector({
 
});

export default connect(mapStateToProps)(StockPage);