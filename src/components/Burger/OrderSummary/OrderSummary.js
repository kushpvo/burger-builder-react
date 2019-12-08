import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class

  // componentWillUpdate() {
  //   console.log("[OrderSummar] Will Update");
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <button
          className="btn btn-danger m-1"
          onClick={this.props.purchaseCancelled}
        >
          CANCEL
        </button>
        <button
          className="btn btn-success m-1"
          onClick={this.props.purchaseContinue}
        >
          CONTINUE
        </button>
      </Aux>
    );
  }
}

export default OrderSummary;
