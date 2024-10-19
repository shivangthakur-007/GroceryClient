import React from 'react'
import "./Grocerycomponent.css";
import grocery from "../assets/Images/logo-no-background.png";
import menuBar from "../assets/Images/menu_20dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";
import { FaEnvelope, FaHeart, FaLuggageCart, FaShoppingBasket, FaUser } from 'react-icons/fa';
import { GoChevronDown } from 'react-icons/go';

function GroceryHeader() {
  return (
    <>
      <header className="gr text-[16px] py-[10px] bg-[#26901B] text-white">
        <div className="px-[12px] flex justify-between flex-wrap">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div>Buy one get one free on first order</div>
            <span>|</span>
            <a href="/order-tracking" className="flex items-center">
              <FaLuggageCart />
              <h2>Track your Order</h2>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h3>Wishlisht</h3>
            <span>|</span>
            <a href='/checkout'>Checkout</a>
          </div>
        </div>
      </header>
      {/* main */}
      <main className="px-[14px]">
        <div className="py-[30px] flex items-center justify-between">
          <a href="/grocery">
            <img className="max-h-[61px]" src={grocery} alt="" />
          </a>
          <div className="p-[10px] bg-[#EEEEEE] rounded-3xl pt-[13px] pr-[24px] pb-[13px] pl-[48px] hover:border-2 hover:bg-[#ffffff] relative">
            <div className="flex items-center searchbef">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search For Products..."
                className="w-[28rem] outline-0 leading-6 text-[15px ] bg-transparent text-[#7A7A7A]"
              />
            </div>
          </div>
          <div>
            <h2>Call Us</h2>
            <h3>+91-9888533988</h3>
          </div>
          <div className="flex items-center">
            <button className="pl-[1px] pr-[6px]">
              <FaUser />
            </button>
            <button className="pl-[1px] pr-[6px] flex z-10 items-center">
              <FaHeart />
              <span className="relative bottom-[10px] right-[8px] z-40">0</span>
            </button>
            <button className="pl-[1px] pr-[6px]">
              <FaShoppingBasket />
            </button>
          </div>
        </div>
      </main>
      <section className="py-[15px]">
        <div className="flex items-center justify-between px-[12px]">
          <div className="flex justify-between items-center gap-[2rem]">
            <div className="bg-[#26901B] gap-2 mr-[30px] pt-[12px] pr-[24px] rounded-[12px] pb-[12px] pl-[18px] text-white flex items-center">
              <span className="flex gap-2 text-[16px] items- font-medium">
                <img src={menuBar} alt="" sizes={22} />
                Browser All Categories
              </span>
              <GoChevronDown size={20} />
            </div>
            <ul className="flex mx-[30px] justify-around gap-8 text-[#555555] font-medium text-[18px]">
              <a href="/">
                <li className='hover:text-[#26901B]'>Home</li>
              </a>
              <a href="/about">
                <li className='hover:text-[#26901B]'>About</li>
              </a>
              <a href="/contact">
                <li className='hover:text-[#26901B]'>Contact</li>
              </a>
              <a href="/blog">
                <li className='hover:text-[#26901B]'>Blog</li>
              </a>
              <a href="">
                <li className='hover:text-[#26901B]'>Cart</li>
              </a>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#26901B]">
              <FaEnvelope size={30} />
            </div>
            <div className="flex flex-col text-[#191919]">
              <span className="text-[17px]">Email Us</span>
              <span className="font-bold text-[18px]">
                dailyUsedelivery@gmail.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GroceryHeader
