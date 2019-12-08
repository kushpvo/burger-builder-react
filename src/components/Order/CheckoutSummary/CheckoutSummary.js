import React from "react";

import Burger from "../../Burger/Burger";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className="btn btn-danger m-1" onClick={props.checkoutCancelled}>
        CANCEL
      </button>
      <button className="btn btn-success m-1" onClick={props.checkoutContinued}>
        CONTINUE
      </button>
    </div>
  );
};

export default checkoutSummary;
