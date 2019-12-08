import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/burger-builder-react" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/burger-builder-react/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
