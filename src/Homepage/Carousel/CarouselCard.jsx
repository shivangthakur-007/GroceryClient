import React from 'react'

const CarouselCard = ({ data }) => {
  return (
    <div className='mx-2 w-[25rem] flex flex-col items-center h-[31rem] shadow-custom'>
      <img
        sizes={500}
        src={data?.image?.secure_url}
        alt={data?.image?.public_id}
        className="rounded-md"
      />
      <button className="text-sm bg-blue-500 text-white py-1 px-2 rounded-md mt-2">
        {data?.date}
      </button>
      <h2 className="text-lg font-semibold mt-2">{data?.headings}</h2>
      <p className="text-sm text-gray-600">{data?.role}</p>
      <h3 className="text-sm font-medium text-blue-700">{data?.tags}</h3>
    </div>
  );
};

export default CarouselCard;
