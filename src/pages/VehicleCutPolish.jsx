import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const VehicleCutPolish = () => {
  return (
    <main>
      <SEO title="Vehicle Cut & Polish (Paint Correction)" description="Expert paint correction, cut, and polish services to restore your vehicle's shine." />

      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/automotive-worker-waxing-and-polishing-car-body-GNKN8XL.jpg')" }}>
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">VEHICLE CUT & POLISH</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/services">Services</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Cut & Polish</li>
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
                      <h2 className="mt-2 text-white">4,500</h2>
                    </div>
                  </div>
                  <h5 className="mb-0">Estimated Time: 4-6 Hours</h5>
                  <h5 className="mb-0">Available for: All Vehicle Types</h5>
                  <a href="https://wa.me/94775775353?text=Hi%20Kosala%20Service%20Center%2C%20I%20would%20like%20to%20book%20the%20Vehicle%20Cut%20%26%20Polish%20service." className="btn btn-cta-primary w-100 py-3 d-flex align-items-center justify-content-center">
                    BOOK NOW
                    <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center ms-2" style={{ width: '15px', height: '15px' }}>
                      <i className="bi bi-chevron-right text-primary-color" style={{ fontSize: '10px' }}></i>
                    </span>
                  </a>
                </div>
                <div className="px-4 pb-4 rounded-4 flex-fill position-relative img-background" style={{ backgroundImage: "url('/images/automotive-worker-waxing-and-polishing-car-body-GNKN8XL.jpg')", paddingTop: '150px' }}>
                  <div className="bg-overlay-2 z-1 rounded-4"></div>
                  <div className="d-flex flex-column gap-4 z-1 position-relative">
                    <h3 className="mb-0 text-center">RESTORE YOUR SHINE</h3>
                    <p className="mb-0 text-center">Remove scratches and oxidation for a flawless finish.</p>
                    <ul className="p-0 m-0">
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Paint Correction
                      </li>
                      <li className="list-unstyled mb-2 text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Scratch Removal
                      </li>
                      <li className="list-unstyled text-center">
                        <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                        Mirror Finish
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
                <img src="images/automotive-worker-waxing-and-polishing-car-body-GNKN8XL.jpg" alt="Cut and Polish Service" className="w-100 rounded-4" style={{ maxHeight: '458px' }} />
                <h3 className="mb-0">Overview</h3>
                <p className="mb-0">
                  Over time, your vehicle's paintwork can become dull due to sun exposure, environmental pollutants, and daily wear and tear. Our Vehicle Cut & Polish (Paint Correction) service is the ultimate solution to restore your car's original luster. We use advanced machine polishing techniques and high-quality compounds to carefully remove microscopic layers of damaged clear coat, effectively eliminating surface imperfections.
                </p>
                <p className="mb-0">
                  This process targets common issues like swirl marks from improper washing, light scratches, oxidation, and water spots. Once the imperfections are corrected, we apply a premium wax or sealant to protect the freshly polished surface, leaving behind a deep, mirror-like gloss. Whether you are preparing your car for a show, looking to increase its resale value, or simply want it to look brand new again, our paint correction experts deliver stunning results.
                </p>

                <h3 className="mb-0">What's Included</h3>
                <p className="mb-0">
                  A multi-stage process for a perfect finish:
                </p>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Scratch & swirl mark removal
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Oxidation & dullness removal
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Machine polish for deep gloss
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Paint decontamination (Clay bar)
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Premium wax application
                    </li>
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex align-items-center">
                      <i className="bi bi-circle-fill text-primary-color me-4"></i>
                      Paint preparation for ceramic coating
                    </li>
                  </ul>
                </div>

                <h3 className="mb-0">Why Choose This Service?</h3>
                <div className="col-12 col-md-6 col-xl-8 d-flex flex-column flex-md-row align-items-center w-100 gap-3 gap-md-5">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Removes years of paint aging
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Significantly enhances vehicle appearance
                    </li>
                  </ul>
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3 text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Protects paint from future damage
                    </li>
                    <li className="list-unstyled text-big fw-bold d-flex flex-column flex-md-row align-items-center text-center text-md-start">
                      <i className="bi bi-check-circle text-primary-color me-0 me-md-4 fs-1"></i>
                      Boosts resale value instantly
                    </li>
                  </ul>
                </div>

                <div className="d-flex flex-column gap-3 bg-primary-color rounded-4 p-4 mt-5">
                  <div className="d-flex align-items-center justify-content-center icon-quote">
                    <i className="bi bi-quote fs-1"></i>
                  </div>
                  <p className="text-big mb-0">“The paint correction was unbelievable. The swirl marks are gone, and the paint looks like liquid glass. Amazing job!”</p>
                  <div className="d-flex flex-column">
                    <p className="text-big fw-bold mb-0">Chathura Liyanage</p>
                    <p className="mb-0">Toyota Premio Owner</p>
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

export default VehicleCutPolish;
