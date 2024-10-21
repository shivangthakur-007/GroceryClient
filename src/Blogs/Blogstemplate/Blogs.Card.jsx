import React from "react";

function BlogsCard({ data }) {
  return (
    <div>
      <img
        width={1150}
        height={790}
        src={data?.image?.secure_url}
        alt={data?.image?.public_id}
      />
      <button>{data?.date}</button>
      <h2>{data?.headings}</h2>
      <p>{data?.role}</p>
      <h3>{data?.tags}</h3>
    </div>
  );
}

export default BlogsCard;
