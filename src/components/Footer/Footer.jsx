import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem unde
            facere nihil maxime repellat quod quisquam vero quis, soluta quos
            hic nisi culpa quidem incidunt, itaque eos atque dolorum cupiditate.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOPPING.</span>
          <span className="copyright">
            © 2021 All Rights Reserved. Design By <span>Shopping.</span>
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
