import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const logo = "/images/car-shop-logo-V49ANM.png";
  return (
    <footer className="footer">
      <div className="b-container">
        <div className="row g-4 g-xl-5 mt-0 mx-auto ptpb-120">

          <div className="col-12 col-md-6 col-xl-3 mt-0 px-auto px-xl-0">
            <div className="footer-logo-box">
              <img src={logo} alt="Footer Logo" className="h-100 object-fit-contain d-block" />
            </div>
            <p className="mt-4 text-center text-md-start">Driven by excellence in auto care, delivering expert detailing,
              quality repair, and lasting protection for every vehicle we serve.</p>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/p/Kosala-Service-Center-100087945498945/"><i className="bi bi-facebook icon-social"></i></a>
              <a href="https://www.instagram.com/kosalaservicecenter/"> <i className="bi bi-instagram icon-social"></i></a>
              <a href="https://www.tiktok.com/@kosalaservicecenter"><i className="bi bi-twitter icon-social"></i></a>
              <a href="https://www.youtube.com/@KosalaServiceCenter"><i className="bi bi-youtube icon-social"></i></a>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-2 mt-5 mt-xl-0">
            <h4 className="text-center text-md-start">QUICK LINKS</h4>
            <hr className="border-1 max-w-170 text-primary-color opacity-100 mx-auto mx-md-0" />
            <ul className="p-0 m-0 d-flex flex-column align-items-center align-items-md-start">
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Home</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/services"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Services</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/contact-us"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Contact Us</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/faq"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-xl-3 mt-5 mt-xl-0 pe-0">
            <h4 className="text-center text-md-start">SERVICES</h4>
            <div className="w-100">
              <hr className="border-1 max-w-170 text-primary-color opacity-100 mx-auto mx-md-0" />
            </div>
            <ul className="p-0 m-0 d-flex flex-column align-items-center align-items-md-start">
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/body-wash-vacuum-interior"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Body Wash</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/undercarriage-wash"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Undercarriage Wash</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/light-vehicle-full-service"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Light Vehicle Wash</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/heavy-vehicle-full-service"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Heavy Vehicle Wash</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/interior-detailing"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Interior Detailing</Link>
              </li>
              <li className="d-flex align-items-center list-unstyled mb-2">
                <Link to="/vehicle-accessories"><i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                  Accessories Sales</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-xl-4 mt-5 mt-xl-0 ps-0">
            <h4 className="text-center text-md-start">CONTACT INFO</h4>
            <hr className="border-1 max-w-170 text-primary-color opacity-100 mx-auto mx-md-0" />
            <div className="d-flex mb-4 flex-column flex-md-row align-items-center align-items-md-start">
              <a href="#" className="icon-contact me-0 me-md-3"><i className="bi bi-telephone fs-3"></i></a>
              <div className="d-flex flex-column text-center text-md-start">
                <p className="text-small text-color-3 mb-1">PHONE NUMBER</p>
                <h5 className="mb-0">+94 77 577 5353</h5>
              </div>
            </div>
            <div className="d-flex mb-4 flex-column flex-md-row align-items-center align-items-md-start">
              <a href="#" className="icon-contact me-0 me-md-3"><i className="bi bi-envelope fs-3"></i></a>
              <div className="d-flex flex-column text-center text-md-start">
                <p className="text-small text-color-3 mb-1">EMAIL ADDRESS</p>
                <h5 className="mb-0">kosalaservicecenter@gmail.com</h5>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
              <a href="#" className="icon-contact me-0 me-md-3"><i className="bi bi-geo-alt fs-3"></i></a>
              <div className="d-flex flex-column text-center text-md-start">
                <p className="text-small text-color-3 mb-1">GARAGE ADDRESS</p>
                <h5 className="mb-0">No. 566/89 A, Udaya Mawatha,Anuradhapura</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top-color">
        <div className="b-container border-start border-end border-1 border-primary-color p-3">
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center">
            <div className="text-color-3 text-center text-md-start mb-2 mb-md-0">
              &copy; 2026 Kosala Service Center. All Rights Reserved.
            </div>
            <ul className="m-0 p-0 d-flex gap-3 footer-terms">
              <li className="list-unstyled"><Link to="/terms-conditions" className="text-color-3 border-end border-1 border-primary-color pe-3">Terms & Conditions</Link></li>
              <li className="list-unstyled"><Link to="/privacy-policy" className="text-color-3">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
