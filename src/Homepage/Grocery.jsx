import { FaEnvelope } from "react-icons/fa";
import { GoArrowRight, GoChevronDown, GoChevronUp } from "react-icons/go";
import {
  FaHeart,
  FaLuggageCart,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";
import menuBar from "../assets/Images/menu_20dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg";
import "./Grocerycomponent.css";
import off1 from "../assets/Images/off-1.webp";
import off2 from "../assets/Images/off-2.webp";
import frozenFoods from "../assets/Images/menu-14.svg";
import grocery from "../assets/Images/logo-no-background.png";
import GroceryComponents from "./GroceryComponents";
import Grocerytemplate from "../Category/Grocerytemplate";

function Grocery() {
  return (
    <>
      <header className="gr text-[16px] py-[10px] bg-[#26901B] text-white">
        <div className="px-[12px] flex justify-between flex-wrap">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div>Buy one get one free on first order</div>
            <span>|</span>
            <a href="/" className="flex items-center">
              <FaLuggageCart />
              <h2>Track your Order</h2>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <h3>Wishlisht</h3>
            <span>|</span>
            <h3>Checkout</h3>
          </div>
        </div>
      </header>
      {/* main */}
      <main className="px-[14px]">
        <div className="py-[30px] flex items-center justify-between">
          <a href="">
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
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Cart</li>
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
      <aside className="px-[12px]">
        <div className="p-[12px]">
          <div className="flex rounded-xl items-center bg-[url('./assets/Images/slider-scaled.jpg')] bg-cover">
            <div className="">
              <ul className="mr-[26px] mb-[4rem] gap-2 flex flex-col mx-[20px] my-[20px]">
                <a href="" className="lipad">
                  <li className="">Vegetables & fruits</li>
                </a>
                <a href="" className="lipad">
                  <li className=" flex items-center gap-2">
                    <img src={frozenFoods} className="" alt="" />
                    <span>Frozen foods</span>
                  </li>
                </a>
                <a href="" className="lipad">
                  <li className="">Beverages</li>
                </a>
                <a href="" className="lipad">
                  <li className="">Dairy, Backery & Eggs</li>
                </a>
                <a href="" className="lipad">
                  <li className="">Snacks & Munchies</li>
                </a>
                <a href="" className="lipad">
                  <li className="">Personal Care</li>
                </a>
                <a href="" className="lipad">
                  <li className="">Cleaning Essentials</li>
                </a>
                <a href="" className="lipad">
                  <li className="">Atta, Rice & Dal</li>
                </a>
              </ul>
            </div>
            <div className="pl-[80px]">
              <div className="w-[70%] ">
                <p className="bg-[#EEFFEC] mb-2 w-[15rem] text-[#26901B] px-[22px] py-[6px] text-[16px] rounded-[14px]">
                  100% organic Food
                </p>
                <h2 className="mb-4 fontf text-[#151414] text-[45px] font-semibold">
                  100% Fresh Grocery Combo Pack
                </h2>
                <p className="mb-4 text-[#151414] text-[16px]">
                  Sumptuous filling, and temptingly healthy.
                </p>
                <div className="flex items-center text-3xl text-[#26901B] gap-2 mb-4">
                  <span>From</span>
                  <span className="underline">₹50.00</span>
                </div>
                <a
                  href=""
                  className="hover:bg-[#26901B] hover:text-white flex gap-1 items-center rounded-[39px] border-[1.5px] border-[#26901b] text-[#26901B] text-[16px] font-semibold px-5 py-4 w-[9.5rem] justify-around"
                >
                  Shop Now <GoArrowRight size="20" />
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </aside>
      <main className="pt-[60px]">
        <section className="px-[18px] mb-[20px] pb-[8px]">
          <div className="flex justify-between items-center">
            <span className="text-[#151414] text-[30px] font-semibold">
              Popular Products
            </span>
            <span className="text-[#26901B] text-[18px] font-medium">
              Top Rating / Top
            </span>
          </div>
          <div className="px-[12px]">
            <Grocerytemplate />
          </div>
        </section>
        <div className="flex pt-[50px] pb-[80px]">
          <div className="flex items-center px-[12px] font-semibold">
            <h2 className="text-[30px] text-[#151414]">Latest Product</h2>
            <div className="flex">
              <GoChevronDown />
              <GoChevronUp />
            </div>
          </div>
          <div className="flex items-center px-[12px] gap-[8rem]">
            <div className="text-[30px] text-[#151414] font-semibold">
              Dairy Best Selling Product
            </div>
            <div>
              <ul className="flex">
                <li className="mr-[30px] relative">
                  <button className="slashhover text-[18px] text-[#26901B]  font-semibold">
                    Recent
                  </button>
                </li>
                <li className="mr-[30px] relative">
                  <button className="slashhover text-[18px] hover:text-[#26901B] text-[#5F6781]  font-semibold">
                    Best Seller
                  </button>
                </li>
                <li className="mr-[30px] relative">
                  <button className="slashhover text-[18px] hover:text-[#26901B] text-[#5F6781]  font-semibold">
                    Top
                  </button>
                </li>
                <li className="mr-[30px] relative">
                  <button className="slashhover text-[18px] hover:text-[#26901B] text-[#5F6781]  font-semibold">
                    New Arrivals
                  </button>
                </li>
                <li className="mr-[27px]">
                  <button className="text-[18px] text-[#5F6781] hover:text-[#26901B]  font-semibold">
                    Top Rating
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <section className="px-[12px] pt-[20px] pb-[40px]">
        <div className="flex justify-between px-[12px]">
          <h3 className="text-[30px] font-bold text-[#151414]">
            Deals Of the Day
          </h3>
          <button className="py-[5px] px-[18px] text-[15px] text-[#26901b] bg-[#EEFFEC] rounded-[25px]">
            See All
          </button>
        </div>
        <div>{/* Card */}</div>
      </section>
      <main className="flex items-center pt-[80px]">
        <div className="px-[12px]">
          <div className="flex items-center grainsbg gap-8 rounded-[20px] bg-[#FDCA41] p-[50px]">
            <div className="text-[#151414]">
              <span className="text-[18px] font-semibold">
                Get Save 30% OFF
              </span>
              <h2 className="text-[30px] font-semibold">
                Fresh premium Rice Big discount
              </h2>
            </div>
            <div>
              <img src={off1} className="w-[340px]" alt="" />
            </div>
          </div>
        </div>
        <div className="px-[12px]">
          <div className="flex items-center grainsbg2 bg-[#6AF2DA] rounded-[20px] py-[42px] px-[50px]">
            <div className="text-[#151414] ">
              <h2 className="text-[30px] font-semibold">
                Fresh Premium Fruits & Vegetables
              </h2>
              <div className="mt-[12px] flex items-center gap-2">
                <span className="text-[18px] font-semibold">₹23.02</span>
                <s className="text-[18px] text-[#5F6781]">₹32.00</s>
              </div>
            </div>
            <div>
              <img src={off2} className="w-[420px]" alt="" />
            </div>
          </div>
        </div>
      </main>
      <GroceryComponents />
    </>
  );
}

export default Grocery;
