import React from "react";
import GroceryHeader from "./GroceryHeader";
import GroceryComponents from "./GroceryFooter";
import Grocerycenter from "./Grocerycenter";
function Grocery() {
  return (
    <>
      <GroceryHeader/>
      <Grocerycenter />
      <GroceryComponents />
    </>
  );
}

export default Grocery;
