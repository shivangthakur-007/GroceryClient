import React from "react";
import grocery from "../assets/Images/logo-no-background.png";
import groceryPayment from "../assets/Images/payment_method.webp";
import "./Grocerycomponent.css";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function GroceryComponents() {
  return (
    <>
      <footer className="bg-[url('./assets/Images/footer-bg.webp')] ">
        <div className="flex py-[70px] justify-around ">
          <div className="px-[12px] w-[235px] text-[14px]">
            <a href="">
              <img className="h-[56px]" src={grocery} alt="" />
            </a>
            <div>
              Welcome to DailyUseDelivery, Your premier destination for
              effortless grocery shopping in Gurugram. Our mission is simple: to
              make your grocery experience as fresh, convinient, and enjoy as
              possible.
            </div>
          </div>
          <div className="bfr relative pl-[70px] ">
            <h2 className="text-[26px] text-white text-2xl font-semibold">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-4">
              <a className="flex text-[17px] font-semibold bgicon" href="">
                <li>Home</li>
              </a>
              <a className="flex text-[17px] font-semibold bgicon" href="">
                <li>About</li>
              </a>
              <a className="flex text-[17px] font-semibold bgicon" href="">
                <li>Contact</li>
              </a>
              <a className="flex text-[17px] font-semibold bgicon" href="">
                <li>Cart</li>
              </a>
              <a className="flex text-[17px] font-semibold bgicon" href="">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className="bfr relative pl-[70px]">
            <h2 className="text-white text-2xl font-semibold">Categories</h2>
            <ul className="flex flex-col gap-4">
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Vegetables & Fruit</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Atta, Rice & Dal</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Beverages</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Personal Care</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Dairy, Bakery & Eggs</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Cleaning Essentials</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>frozen Foods</li>
              </a>
              <a href="" className="bgicon flex text-[17px] font-semibold">
                <li>Snacks & Munchies</li>
              </a>
            </ul>
          </div>
          <div className="bfr relative pl-[70px]">
            <h3 className="text-white text-2xl font-semibold">Contact Us</h3>
            <ul>
              <li>Address: 1026, Sector-9, Gurgaon-122001</li>
              <li>Email: dailyusedelivery@gmail.com</li>
              <li>Phone: +91-9888533988</li>
            </ul>
            <div className="flex">
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <FaCopyright />
            2024 Daily Use Delivery Store. All Rights Reserved.
          </div>
          <span>
            <img src={groceryPayment} alt="" />
          </span>
        </div>
      </footer>
    </>
  );
}

export default GroceryComponents;
