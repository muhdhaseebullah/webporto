import React from "react";
const Header = () => {
  return (
    <>
      <header>
        <img class="logo" src="logo.png" alt="" />
        <ul>
          <li>HOME</li>
          <li>ELEMENTS</li>
          <li>FEATURES</li>
          <li>PAGES</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>SHOP</li>
        </ul>
        <ul>
          <li>
            <img src="icons/facebook.svg" alt=""  />
          </li>
          <li>
            <img src="icons/twitter.svg" alt="" />
          </li>
          <li>
            <img src="icons/linkedin.svg" alt="" />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
