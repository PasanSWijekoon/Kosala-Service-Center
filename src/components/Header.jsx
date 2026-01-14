import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const logo = "/images/car-shop-logo-V49ANM.png";
  return (
    <header className="header border-bottom-color">
      <div className="border-bottom-color top-header d-none d-lg-block">
        <div className="b-container">
          <div className="d-flex justify-content-between align-items-center p-3 border-1 border-start border-end border-primary-color">
            <ul className="p-0 m-0 d-flex gap-3 gap-lg-5">
              <li className="list-unstyled">
                <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                +94 77 577 5353
              </li>
              <li className="list-unstyled">
                <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                kosalaservicecenter@gmail.com
              </li>
              <li className="list-unstyled">
                <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                Mon-Sat: 08.00 - 18.00
              </li>
            </ul>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <a href="https://www.facebook.com/p/Kosala-Service-Center-100087945498945/"><i className="bi bi-facebook icon-social"></i></a>
              <a href="https://www.instagram.com/kosalaservicecenter/"> <i className="bi bi-instagram icon-social"></i></a>
              <a href="https://www.tiktok.com/@kosalaservicecenter"><i className="bi bi-tiktok icon-social"></i></a>
              <a href="https://www.youtube.com/@KosalaServiceCenter"><i className="bi bi-youtube icon-social"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="b-container">
        <nav className="navbar navbar-expand-lg border-1 border-start border-end border-primary-color py-3 py-lg-1" aria-label="Offcanvas navbar large">
          <div className="container-fluid">
            <div className="logo-box">
              <Link className="navbar-brand" to="/"><img src={logo} alt="Main Logo" className="img-fluid" /></Link>
            </div>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start bg-accent-color-2" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header" id="offcanvasNavbarLabel">
                <div className="logo-box">
                  <Link className="navbar-brand" to="/"><img src={logo} alt="Drawer Logo" className="img-fluid" /></Link>
                </div>
                <button type="button" className="btn-close bg-accent-color-2 p-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body d-flex flex-row justify-content-start justify-content-lg-end">
                <ul className="navbar-nav my-lg-4 gap-lg-2 gap-xl-4">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact-us">Contact Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/faq">FAQ</NavLink>
                  </li>
                </ul>
                <div className="mt-3">
                  <a href="https://wa.me/94775775353" className="btn btn-lg btn-cta-primary d-none d-lg-block ms-4"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
