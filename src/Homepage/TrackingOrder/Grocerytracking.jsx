import React from "react";

function Grocerytracking() {
  return (
    <div>
      <ul>
        <a href="">
            <li>Home</li>
        </a>
        <a href="">
            <li className="text-[#ffB41b]">Order Tracking</li>
        </a>
      </ul>
      <p>
        To track your order please enter your Order ID in the box below and press the "track button". This was given to you on your receipt and in the confirmation email you should have recieved.
      </p>
      <form>
        <p>
          <label htmlFor="">Order Id</label>
          <input type="text" placeholder="Found in your Order Confirmation email."/>
        </p>
        <p>
          <label htmlFor="">Billing Email</label>
          <input type="text" placeholder="Email you used during checkout."/>
        </p>
      </form>
      <button>Track</button>
    </div>
  );
}

export default Grocerytracking;
