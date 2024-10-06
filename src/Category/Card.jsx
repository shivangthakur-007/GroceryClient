function Card({ data }) {
  return (
    <div className="px-[12px]">
      <div className="border-[1px] border-black flex flex-col items-center">
        <img
          src={data?.image?.secure_url}
          alt="product thumbnail"
          className="w-[300px] mb-[30px]"
        />
        <p className="border-[1px] rounded-2xl text-[12px] px-[6px] py-[4px]">
          {data?.category}
        </p>
        <span className="text-[20px] text-[#121416] font-bold]">
          {data?.name}
        </span>
        <p>{data?.review}</p>
        <div>
          <span>{data?.price}</span>
          <button className="rounded-xl py-[5px] px-[6px] bg-[#25901B] text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
