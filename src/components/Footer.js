import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-dark-line "></div>
      <div className="container ">
        <div className="row mt-5 mb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 flex-col">
            <div className="footer-logo ">
              <a href="#">
                {" "}
                <img src="img/logo.png" alt="xpress shoping grocery" />
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 flex-col">
            <ul className=" ">
              <h5>Navigate</h5>
              <li>
                <a href="">Cards</a>
              </li>
              <li>
                <a href="">Grocery</a>
              </li>
              <li>
                <a href="">Telecom</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 flex-col">
            <ul>
              <h5>Information</h5>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms & Condition</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12  flex-col">
            <ul className="follow-us">
              <h5>Follow Us</h5>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="app-down flex-r">
              <li className="app-download">
                <a className=" " href="#">
                  <img
                    src="img/googleplay.png"
                    alt="download app on google play Xpress"
                  />
                </a>
              </li>
              <li className="app-download">
                <a className="" href="#">
                  <img
                    src="img/applestore.png"
                    alt="download app on apple store xpress"
                    className="ww"
                  />
                </a>
              </li>
            </ul>

            <ul className="payment-method">
              <h5>payment methods</h5>
              <li>
                <img src="img/visa.png" alt="visa payment xpress" />
              </li>
              <li>
                <img
                  src="img/mastercard.png"
                  alt="master card payment xpress"
                />
              </li>
              <li>
                <img
                  src="img/americanexpress.png"
                  alt="american express payment xpress"
                />
              </li>
              <li>
                <img src="img/paypal.png" alt="paypall payment xpress" />
              </li>
              <li>
                <img src="img/dinersclub.png" alt="diner club payment xpress" />
              </li>
              <li>
                <img src="img/discover.png" alt="discover payment xpress" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-dark-lines">
        <p>All Rights Reserved © 2022 </p>
      </div>
    </footer>
  );
};
export default Footer;
