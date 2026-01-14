import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const VehicleAccessories = () => {
  return (
    <main>
      <SEO title="Vehicle Accessories Sales" description="Wide range of high-quality vehicle accessories and car care products." />

      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/cleaning-and-preparing-car-for-sale-XY83R4C.jpg')" }}>
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">VEHICLE ACCESSORIES</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Vehicle Accessories</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* #banner */}

      {/* Service Content */}
      <section className="section bg-color">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4 order-2 order-xl-1">
              <div className="d-flex flex-column flex-xl-column flex-lg-row gap-4 mt-4 mt-xl-0">
                <div className="bg-accent-color-2 p-4 rounded-4 d-flex flex-column flex-fill gap-4">
                  <h3 className="mb-0">Best Prices</h3>
                  <hr className="border-1 text-primary-color opacity-100" />
                  <div className="d-flex align-items-end">
                    <h4 className="mb-3">Accessories From</h4>
                    <div className="d-flex align-items-center gap-2">
                      <h4 className="mb-5 text-primary-color ms-2">Rs.</h4>
                      <h2 className="mt-2 text-white">500+</h2>
                    </div>
                  </div>
                  <h5 className="mb-0">Visit our shop for full catalog</h5>
                  <h5 className="mb-0">Available for: All Vehicle Types</h5>
                  <Link to="/contact-us" className="btn btn-cta-primary w-100 py-3 d-flex align-items-center justify-content-center">
                    CONTACT US
                    <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center ms-2" style={{ width: '15px', height: '15px' }}>
                      <i className="bi bi-chevron-right text-primary-color" style={{ fontSize: '10px' }}></i>
                    </span>
                  </Link>
                </div>
                <div className="px-4 pb-4 rounded-4 flex-fill position-relative img-background" style={{ backgroundImage: "url('/images/cleaning-and-preparing-car-for-sale-XY83R4C.jpg')", paddingTop: '150px' }}>
                  <div className="bg-overlay-2 z-1 rounded-4"></div>
                  <div className="d-flex flex-column gap-4 z-1 position-relative">
                    <h3 className="mb-0 text-center">UPGRADE YOUR RIDE</h3>
                    <p className="mb-0 text-center">High quality parts & gadgets.</p>
                    <ul className="p-0 m-0">
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Interior Comfort
                      </li>
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Safety Gear
                      </li>
                      <li className="list-unstyled text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Car Care Products
                      </li>
                    </ul>
                    <Link to="/contact-us" className="btn btn-cta-primary w-100 py-3 d-flex align-items-center justify-content-center">
                      VISIT STORE
                      <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center ms-2" style={{ width: '15px', height: '15px' }}>
                        <i className="bi bi-chevron-right text-primary-color" style={{ fontSize: '10px' }}></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 ps-xl-4 order-1 order-xl-2">
              <div className="d-flex flex-column gap-4">
                <img src="images/cleaning-and-preparing-car-for-sale-XY83R4C.jpg" alt="Vehicle Accessories" className="w-100 rounded-4" style={{ maxHeight: '458px' }} />
                <h3 className="mb-0">Overview</h3>
                <p className="mb-0">
                  Enhance your driving experience with our wide range of high-quality vehicle accessories. At Kosala Service Center, we stock everything you need to improve the comfort, safety, and style of your car. From essential emergency gear to premium interior upgrades, our selection is curated to offer the best value for money in Anuradhapura.
                </p>
                <p className="mb-0">
                  Whether you are looking for durable floor mats to protect your carpets, ergonomic seat covers for added comfort, or the latest electronic gadgets for your dashboard, we have it all. We source our products from reputable manufacturers to ensure durability and performance. Visit our service center to browse our catalog and find the perfect additions for your vehicle.
                </p>

                <h3 className="mb-0">Product Categories</h3>
                <p className="mb-0">
                  Explore our diverse range of accessories:
                </p>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Safety & Emergency gear
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Seat covers & organizers
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Floor mats & sunshades
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Electronics & gadgets
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Exterior accessories
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Car care & cleaning products
                    </li>
                  </ul>
                </div>

                <h3 className="mb-0">Why Buy From Us?</h3>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row align-items-center w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Competitive market prices
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      High-quality, durable products
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Expert advice on compatibility
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Convenient one-stop shop
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-column gap-3 bg-primary-color rounded-4 p-4 mt-5">
                  <div className="d-flex align-items-center justify-content-center icon-quote">
                    <i className="bi bi-quote fs-1"></i>
                  </div>
                  <p className="text-big mb-0">“Found exactly the seat covers I was looking for. Great quality and much cheaper than ordering online!”</p>
                  <div className="d-flex flex-column">
                    <p className="text-big fw-bold mb-0">Nuwan Pradeep</p>
                    <p className="mb-0">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #service content */}

      {/* CTA */}
      <section className="section bg-color position-relative"
        style={{ backgroundImage: "url('/images/car-detailing-concept-L3H95Y5.jpg')", backgroundAttachment: 'fixed' }}>
        <div className="bg-overlay-3"></div>
        <div className="b-container position-relative z-2">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
              <span className="subtitle">OUR NEWSLETTERS</span>
            </div>
            <h2 className="my-4 text-center">GET EXCLUSIVE OFFERS AND CAR TIPS</h2>
            <p className="max-w-780 text-center">Join our newsletter to receive the latest updates, maintenance tips, and
              exclusive offers straight to your inbox. Stay ahead in car care and never miss a deal!</p>
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" className="toast success_msg_subscribe text-bg-light" role="alert" aria-live="assertive"
                aria-atomic="true">
                <div className="d-flex">
                  <div className="toast-body">
                    <i className="bi bi-check-circle-fill"></i> Your Subscribe Send Successfully.
                  </div>
                  <button type="button" className="btn me-2 m-auto" data-bs-dismiss="toast" aria-label="Close">
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            </div>
            <form className="form needs-validation mt-4 d-flex flex-column flex-md-row max-w-717" onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="action" value="subscribe" hidden readOnly />
              <input type="email" name="email" id="email" className="form-control form-control-lg"
                placeholder="Enter your email address" required />
              <div className="invalid-feedback text-white">
                Please provide a valid email format (e.g.,
                user@example.com).
              </div>
              <button type="submit"
                className="btn btn-cta-primary w-100 d-inline-flex py-3 d-flex align-items-center justify-content-center submit_subscribe no-bottom-left-radius max-w-200 mt-3 mt-md-0">
                Subscribe Now
                <span className="btn-icon rounded-circle d-inline-flex align-items-center justify-content-center ms-2">
                  <i className="bi bi-chevron-right text-white" style={{ fontSize: '10px' }}></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* #cta */}
    </main>
  );
};

export default VehicleAccessories;
