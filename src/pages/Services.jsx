import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  return (
    <main>
      <SEO title="Services" description="Explore our range of car detailing and repair services." />
      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/car-detailing-concept-JMVPTUQ.jpg')" }}>
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"       
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">SERVICES</h1>       
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Services</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* #banner */}

      {/* Services List */}
      <section className="section bg-color">
        <div className="b-container">
          <div className="row g-4">

            {/* Service Card 1 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/car-wash-worker-removing-water-from-a-car-body-HKAUHY3.jpg" className="w-100 h-100 object-fit-c
over" alt="Body Wash, Vacuum & Interior Cleaning" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Body Wash, Vacuum & Interior Cleaning</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 1,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Complete exterior and interior detailing service that restores your ve
hicle's showroom appearance with professional-grade cleaning solutions.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Exterior foam wash & Underbody cleaning</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Full cabin vacuum & Mat cleaning</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Interior foaming & dashboard polishing</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Wax application included</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">Cars • Vans • Lorries • Buses</p>
                    <Link to="/body-wash-vacuum-interior" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/heavyvehicalwash.jpg" className="w-100 h-100 object-fit-cover" alt="Undercarriage Wash" />     
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Luxury & Heavy Vehicle Undercarriage Wash</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 2,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Specialized undercarriage protection service designed for luxury and h
eavy vehicles, preventing corrosion and extending lifespan.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Complete underbody mud removal</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Road salt & debris cleaning</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Corrosion prevention treatment</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Protective underbody wax coating</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">Luxury • Heavy • Lorries • Buses</p>
                    <Link to="/undercarriage-wash" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/auto-mechanics-diagnosing-car-with-computer-FJ6CUVS.jpg" className="w-100 h-100 object-fit-cove
r" alt="Luxury Light Full Service" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Luxury & Light Vehicle Full Service</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 14,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Comprehensive all-inclusive service package with genuine parts and com
plete mechanical inspection.</p>
                  <div className="mb-3 p-3 bg-secondary-color rounded-3">
                    <p className="text-small text-white mb-1 fw-bold">Service Intervals:</p>
                    <ul className="list-unstyled m-0 text-small text-color-3">
                      <li>• Basic Service (5,000 KM)</li>
                      <li>• Mid Service (10,000 KM)</li>
                      <li>• Major Service (24,000 KM)</li>
                    </ul>
                  </div>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Genuine engine oil & oil filter</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Engine chemical wash & Body wash</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Free scanning & fault code report</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">Cars • SUVs • Vans</p>
                    <Link to="/light-vehicle-full-service" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/mechanic-garage-auto-workshop-team-working-service-DK5FPBB.jpg" className="w-100 h-100 object-f
it-cover" alt="Heavy Vehicle Full Service" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Heavy Vehicle Full Service</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 10,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Specialized maintenance program for commercial vehicles ensuring maxim
um uptime and operational efficiency.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Heavy-duty engine oil & oil filter</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Engine chemical wash & Undercarriage wash</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Brake, coolant & battery inspection</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Chassis lubrication & Full inspection</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">Lorries • Buses • Commercial</p>
                    <Link to="/heavy-vehicle-full-service" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/car-detailer-cleaning-modern-vehicle-dashboard-LT5SH8K.jpg" className="w-100 h-100 object-fit-c
over" alt="Interior Detailing" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Ultimate Interior & Detailing Cleaning</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 3,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Premium interior restoration service that deep cleans every surface, e
liminates odors, and sanitizes your vehicle's cabin.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Dashboard & interior polishing</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Carpet, upholstery & seat shampooing</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> AC vent detailing & Odor elimination</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Interior sanitization</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">All Vehicle Types</p>
                    <Link to="/interior-detailing" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/automotive-worker-waxing-and-polishing-car-body-GNKN8XL.jpg" className="w-100 h-100 object-fit-
cover" alt="Cut & Polish" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Vehicle Cut & Polish (Paint Correction)</h4>
                    <span className="text-primary-color fw-bold">Starting From Rs. 4,500</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Professional paint correction service that removes imperfections and r
estores your vehicle's original shine.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Scratch & swirl mark removal</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Oxidation & dullness removal</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Machine polish & wax shine</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Paint preparation for ceramic coating</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">All Vehicle Types</p>
                    <Link to="/vehicle-cut-polish" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 7 */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
              <div className="card h-100 rounded-4 overflow-hidden">
                <div className="img-ratio-169">
                  <img src="/images/cleaning-and-preparing-car-for-sale-XY83R4C.jpg" className="w-100 h-100 object-fit-cover" alt="
Accessories" />
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <div className="mb-3 border-bottom border-secondary pb-3">
                    <h4 className="card-title text-white mb-2">Vehicle Accessories Sales</h4>
                    <span className="text-primary-color fw-bold">Lowest Prices</span>
                  </div>
                  <p className="card-text text-color-3 mb-4">Comprehensive range of quality vehicle accessories and enhancement pro
ducts at the most competitive prices.</p>
                  <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Safety & Emergency gear</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Seat covers & organizers</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Floor mats & sunshades</li>
                    <li className="d-flex mb-2 text-color-3"><i className="bi bi-check-circle text-primary-color me-2 flex-shrink-0
"></i> Electronics & gadgets</li>
                  </ul>
                  <div className="mt-auto">
                    <p className="text-small text-primary-color mb-3 fw-bold">All Vehicle Types</p>
                    <Link to="/vehicle-accessories" className="btn btn-cta-secondary w-100">View Details</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;