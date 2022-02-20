import React from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CartMenu from "./CartMenu"
const Header = () => {
  return (
    <header>
      <div class="nav-light-line"></div>
      <nav class="navbar nav-header navbar-expand-lg navbar-light  ">
        <div class="container">
          <a class="navbar-brand nav-logo" href="#">
            <img src="img/logo.png" alt="xpress store image logo " />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item nav-search">
                <input
                  type="search"
                  name=""
                  class="form-control input-search-header"
                  id=""
                  placeholder="What are you looking for ?"
                  aria-label="Search"
                />
                <i class="fas fa-search"></i>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-download-google" href="#">
                  <img
                    src="img/googleplay.png"
                    alt="download app on google play Xpress"
                  />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-download-apple" href="#">
                  <img
                    src="img/applestore.png"
                    alt="download app on apple store xpress"
                  />
                </a>
              </li>
              <li class="nav-item nav-itemss  ">
                <a class="nav-link" href="#">
                  <i class="fas fa-caret-down"></i> 
                 {" Languages"}
                </a>
              </li>
              <li class="nav-item nav-itemss ">
                <a class="nav-link  " href="#">
                
                  <CartMenu />
                </a>
              </li>
              <li class="nav-item nav-itemss">
                <a class="nav-link " href="#">
                  <PersonOutlineIcon fontSize="medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="nav-dark-line"></div>
      <nav class="navbar navbar-light  nav-header nav-heads">
        <div class="container ">
          <ul class="navbar-nav navs-me flex-row">
            <li class="nav-item item-double-nav">
              <a class="nav-link " href="#">
                Cards
              </a>
            </li>
            <li class="nav-item item-double-nav">
              <a class="nav-link " href="#">
                Grocery
              </a>
            </li>
            <li class="nav-item item-double-nav">
              <a class="nav-link " href="#">
                Telecom
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
