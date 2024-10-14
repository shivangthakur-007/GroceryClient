import React from "react";
import Aboutimg1 from "../../src/assets/Images/aboutimage.jpg";
import Aboutimg2 from "../../src/assets/Images/img_03-1.jpg";
import "./Aboutgrocery.css";

function Abgrocerycenter() {
  return (
    <>
      <div className="mt-[12px]">
        <ul className="flex items-center py-[30px] px-[12px]">
          <li className="">
            <a href="/" className="homebefore">
              Home
            </a>
          </li>
          <li className="text-[#FFB41B]">About</li>
        </ul>
      </div>
      <div className="flex items-center px-[12px] w-[100%]">
        <div className="flex">
          <img
            src={Aboutimg1}
            alt="aboutgrocery"
            className=""
            width={1436}
            height={826}
          />
        </div>
        <div className="pl-[70px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-[30px] text-[#121416] font-bold">About Us</h2>
            <p className="text-[14px]">
              Welcome to DailyUseDelivery, your premier destination for
              effortless grocery shopping in Gurugram. Our mission is simple: to
              make your grocery experience as fresh, convenient, and enjoyable
              as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-[12px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#121416] text-[30px] font-semibold">
              Who We Are
            </h2>
            <p className="text-[14px] text-[#121416] leading-9">
              At DailyUseDelivery, we’re passionate about delivering more than
              just groceries—we deliver a better way to shop. Based in the
              vibrant heart of Gurugram, we pride ourselves on offering a
              diverse range of high-quality products right to your doorstep. Our
              team is dedicated to sourcing the freshest produce, finest
              ingredients, and everyday essentials with an unwavering commitment
              to excellence.
            </p>
          </div>
          <div>
            <h2 className="text-[#121416] text-[30px] font-semibold">
              Our Commitment
            </h2>
            <ul className="flex flex-col px-[12px]">
              <li>
                <b>Unmatched Quality </b>
                <span className="pb-[26px]">
                  We partner with trusted suppliers to bring you the highest
                  quality products. From farm-fresh fruits and vegetables to
                  artisanal bakery items and premium pantry staples, our
                  selection is curated to meet your every need.
                </span>
              </li>
              <li>
                <b>Fresher First </b>
                <span>Our streamlined supply</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={Aboutimg2} alt="" width="2394px" height="auto" />
        </div>
      </div>
    </>
  );
}

export default Abgrocerycenter;
