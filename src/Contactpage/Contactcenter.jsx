import React from "react";
import "./Contact.css";
import imgtab_1 from '../assets/Images/img_01-1.jpg';
import imgtab_2 from '../assets/Images/img_04.jpg'

function Contactcenter() {
  return (
    <div>
      <div>
        <a href="/" className="homeafter">
          Home
        </a>
        <span className="text-[#FFB41B]">Contact</span>
      </div>
      <div className="flex">
        <div>
          <h3>Mail</h3>
          <p>dailyusergrocery@gmail.com</p>
        </div>
        <div>
          <h3>Office Location</h3>
          <p>Address: 1026, sector-9, Gurgaon-122001</p>
        </div>
        <div>
          <h3>Phone Number</h3>
          <p>+91-9888484005</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>dailyusergrocery@gmail.com</p>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src={imgtab_1} alt="img_tab_1" />
        </div>
        <form className="flex flex-col">
          <label htmlFor="">Your Name</label>
          <input type="text" />
          <label htmlFor="">Your Email</label>
          <input type="text" />
          <label htmlFor="">Subject</label>
          <input type="text" />
          <label htmlFor="">Your Message (optional)</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
      <div className="flex justify-end p-[10px]">
        <img src={imgtab_2} alt="img_tab_2" width={550} className="p-[10px]" />
      </div>
    </div>
  );
}

export default Contactcenter;
