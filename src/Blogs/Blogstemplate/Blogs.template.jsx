import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../../Helper/axiosInstance";
import BlogsCard from "./Blogs.Card";

function Blogstempalte() {
  const Blogstemplate = () => {
    return useQuery(["/blogs"], () => {
      return axiosInstance.get("/blogs");
    });
  };
  const { isloading, data, isError, error } = Blogstemplate();
  if (isloading) {
    <h2>loading...</h2>;
  }
  if (isError) {
    <h2>{error.message}</h2>;
  }
    // console.log(data?.data)
  return (
    <div className="flex items-center flex-col">
      {data?.data.Blogs?.map((blog) => {
        return <BlogsCard key={blog._id} data={blog} />;
      })}
    </div>
  );
}

export default Blogstempalte;
