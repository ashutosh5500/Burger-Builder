import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[orderSummary] componentDidUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Order Summary</h3>
        <p>A delicious Burger is ready with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price}</strong>
        </p>
        <p>continue to checkout</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
