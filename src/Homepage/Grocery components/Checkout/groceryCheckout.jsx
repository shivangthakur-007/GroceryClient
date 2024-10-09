import React from "react";
import GroceryCheck from "./GroceryCheck";
import GroceryHeader from "../../GroceryHeader";
import GroceryComponents from "../../GroceryFooter";

function GroceryCheckout() {
  return (
    <>
      <GroceryHeader />
      <GroceryCheck/>
      <GroceryComponents   />
    </>
  );
}

export default GroceryCheckout;
