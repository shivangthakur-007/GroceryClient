import { useQuery } from "react-query";
import axiosInstance from "../Helper/axiosInstance.js";
import Card from "./Card.jsx";

function Grocerytemplate() {
  const Grocerytemplate = () => {
    return useQuery(["/grocery"], () => {
      return axiosInstance.get("/product");
    });
  };
  const { isLoading, data, isError, error } = Grocerytemplate();
  if (isLoading) {
    <h2>Loading...</h2>;
  }
  if (isError) {
    <h2>{error.message}</h2>;
  }
  // console.log(data?.data.products)
  return (
    <div className="grid grid-cols-4">
      {data?.data.products?.map((h)=>{
        return <Card key={h._id} data={h}/>
      })}
    </div>
  );
}

export default Grocerytemplate;
