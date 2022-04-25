import React from "react";
import PropTypes from "prop-types";
import ItemModel from "./ItemModel";

class ShopItemClass extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    item: PropTypes.instanceOf(ItemModel).isRequired,
  };

  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="purchase-info">
          <div className="price">
            {item.currency}
            {item.price.toFixed(2)}
          </div>
          <button type="button">Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;
