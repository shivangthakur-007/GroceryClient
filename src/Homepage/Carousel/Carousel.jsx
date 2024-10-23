import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../../Helper/axiosInstance";
import CarouselCard from "./CarouselCard";

function Carousel() {
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
  // Ref for the scrollable container
  const carouselRef = React.useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full pl-[12px]">
      {/* Scroll left button */}
      <button
        onClick={scrollLeft}
        className="absolute right-14 top-[-30px] transform -translate-y-1/2 bg-white hover:bg-[#26901b] border-2 border-slate-200 hover:font-semibold text-slate-200 px-4 py-2 z-10 rounded-3xl mx-2"
      >
        ❮
      </button>

      {/* Scrollable container */}
      <div
        className="grid grid-flow-col gap-4 overflow-x-hidden p-2 w-[100%] scrollbar-hide pt-[25px]"
        ref={carouselRef}
      >
        {data?.data.Blogs?.map((blog) => (
          <CarouselCard key={blog._id} data={blog} />
        ))}
      </div>

      {/* Scroll right button */}
      <button
        onClick={scrollRight}
        className="absolute right-3 top-[-30px] transform -translate-y-1/2 bg-white hover:bg-[#26901b] hover:font-semibold border-2 border-slate-200 text-slate-200 px-4 py-2 z-10 rounded-3xl"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;
