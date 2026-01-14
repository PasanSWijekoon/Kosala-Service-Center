import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LightVehicleFullService = () => {
  return (
    <main>
      <SEO title="Luxury & Light Vehicle Full Service" description="Comprehensive maintenance and full service for luxury and light vehicles." />

      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/auto-mechanics-diagnosing-car-with-computer-FJ6CUVS.jpg')" }}>
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">LIGHT VEHICLE FULL SERVICE</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Light Vehicle Full Service</li>
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
                  <h3 className="mb-0">Service Pricing</h3>
                  <hr className="border-1 text-primary-color opacity-100" />
                  <div className="d-flex align-items-end">
                    <h4 className="mb-3">Starting From</h4>
                    <div className="d-flex align-items-center gap-2">
                      <h4 className="mb-5 text-primary-color ms-2">Rs.</h4>
                      <h2 className="mt-2 text-white">14,500</h2>
                    </div>
                  </div>
                  <h5 className="mb-0">Estimated Time: 4-6 Hours</h5>
                  <h5 className="mb-0">Available for: Cars, SUVs, Vans</h5>
                  <a href="https://wa.me/94775775353?text=Hi%20Kosala%20Service%20Center%2C%20I%20would%20like%20to%20book%20the%20Light%20Vehicle%20Full%20Service%20service." className="btn btn-cta-primary w-100 py-3 d-flex align-items-center justify-content-center">
                    BOOK NOW
                    <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center ms-2" style={{ width: '15px', height: '15px' }}>
                      <i className="bi bi-chevron-right text-primary-color" style={{ fontSize: '10px' }}></i>
                    </span>
                  </a>
                </div>
                <div className="px-4 pb-4 rounded-4 flex-fill position-relative img-background" style={{ backgroundImage: "url('/images/auto-mechanics-diagnosing-car-with-computer-FJ6CUVS.jpg')", paddingTop: '150px' }}>
                  <div className="bg-overlay-2 z-1 rounded-4"></div>
                  <div className="d-flex flex-column gap-4 z-1 position-relative">
                    <h3 className="mb-0 text-center">COMPLETE MECHANICAL CARE</h3>
                    <p className="mb-0 text-center">Genuine parts & expert diagnostics.</p>
                    <ul className="p-0 m-0">
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Oil Change
                      </li>
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        System Scanning
                      </li>
                      <li className="list-unstyled text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Full Inspection
                      </li>
                    </ul>
                    <Link to="/contact-us" className="btn btn-cta-primary w-100 py-3 d-flex align-items-center justify-content-center">
                      MAKE AN APPOINTMENT
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
                <img src="images/auto-mechanics-diagnosing-car-with-computer-FJ6CUVS.jpg" alt="Light Vehicle Full Service" className="w-100 rounded-4" style={{ maxHeight: '458px' }} />
                <h3 className="mb-0">Overview</h3>
                <p className="mb-0">
                  Keep your vehicle running at peak performance with our Luxury & Light Vehicle Full Service. This is a comprehensive, all-inclusive package designed for car owners who demand the best for their vehicles. We use only genuine parts and fluids to ensure longevity and reliability. Our certified mechanics conduct a thorough inspection of your engine, braking system, suspension, and electronics, identifying and resolving potential issues before they become costly repairs.
                </p>
                <p className="mb-0">
                  Regular servicing is crucial for maintaining your vehicle's value and safety. Whether it's a routine 5,000 KM check-up or a major 24,000 KM service, we strictly follow manufacturer guidelines. We also provide a free computerized system scan to detect any hidden fault codes, ensuring that your modern vehicle's electronic systems are functioning correctly. From oil changes to brake checks, we handle it all with precision and care.
                </p>

                <div className="d-flex flex-column bg-secondary-color p-4 rounded-4 mt-3 mb-3">
                  <h4 className="mb-3 text-white">Recommended Service Intervals</h4>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-2 text-color-3 d-flex align-items-center">
                      <i className="bi bi-caret-right-fill text-primary-color me-2"></i>
                      <strong className="text-white me-2">Basic Service:</strong> Every 5,000 KM
                    </li>
                    <li className="list-unstyled mb-2 text-color-3 d-flex align-items-center">
                      <i className="bi bi-caret-right-fill text-primary-color me-2"></i>
                      <strong className="text-white me-2">Mid Service:</strong> Every 10,000 KM
                    </li>
                    <li className="list-unstyled text-color-3 d-flex align-items-center">
                      <i className="bi bi-caret-right-fill text-primary-color me-2"></i>
                      <strong className="text-white me-2">Major Service:</strong> Every 24,000 KM
                    </li>
                  </ul>
                </div>

                <h3 className="mb-0">What's Included</h3>
                <p className="mb-0">
                  Our full service package covers essential maintenance tasks:
                </p>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Genuine engine oil & oil filter replacement
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Engine chemical wash
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Body wash & interior vacuum
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Under wash & wax
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Brake fluid, coolant & battery testing
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Free scanning & fault code report
                    </li>
                  </ul>
                </div>

                <h3 className="mb-0">Why Choose This Service?</h3>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row align-items-center w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Guaranteed genuine parts
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Comprehensive mechanical inspection
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Advanced computer diagnostics included
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Detailed service records maintained
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-column gap-3 bg-primary-color rounded-4 p-4 mt-5">
                  <div className="d-flex align-items-center justify-content-center icon-quote">
                    <i className="bi bi-quote fs-1"></i>
                  </div>
                  <p className="text-big mb-0">“The full service package is comprehensive and affordable. I love the detailed report they provide after the scan. Highly recommended!”</p>
                  <div className="d-flex flex-column">
                    <p className="text-big fw-bold mb-0">Dilshan Perera</p>
                    <p className="mb-0">Honda Vezel Owner</p>
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
        style={{ backgroundImage: "url('images/car-detailing-concept-L3H95Y5.jpg')", backgroundAttachment: 'fixed' }}>
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

export default LightVehicleFullService;
