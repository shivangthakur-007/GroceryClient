import React from "react";
import GroceryHeader from "../Homepage/GroceryHeader";
import GroceryComponents from "../Homepage/GroceryFooter";
import Blogscomponent from "./Blogscomponent";

function Blogs() {
  return (
    <div>
      <GroceryHeader />
      <Blogscomponent />
      <GroceryComponents />
    </div>
  );
}

export default Blogs;
