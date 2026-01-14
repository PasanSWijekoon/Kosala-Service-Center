import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const FAQ = () => {
  return (
    <main>
      <SEO title="FAQ" description="Frequently Asked Questions about our services and processes." />
      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/worker-cleaning-modern-vehicle-alloy-wheels-using-C5557ZH.jpg')" }}>        
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">FAQ
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Faq</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* #banner */}

      {/* FAQ */}
      <section className="section bg-color">
        <div className="b-container d-flex flex-column gap-5">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay=
"300"
              data-aos-duration="1000">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                <span className="subtitle">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="my-4 text-center max-w-950">ANSWERS TO YOUR MOST COMMONS QUESTION</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4">
              <div className="faq-title">
                <h3 className="mb-0">General Question</h3>
              </div>
            </div>
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="d-flex gap-4">
                <div className="accordion w-100" id="accordionExample">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"   
                        aria-expanded="true" aria-controls="collapseOne">
                        01. What services does Kosala Service Center provide?
                      </button>
                    </h5>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body ps-0 pt-4">
                        <p className="m-0">Kosala Service Center offers a comprehensive range of services including Body Wash & Int
erior Cleaning, Undercarriage Wash & Wax, Vehicle Cut & Polish, and Full Service packages for both Light and Heavy Vehicles. We als
o sell vehicle accessories.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        02. Do I need an appointment for car detailing?
                      </button>
                    </h5>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body ps-0 pt-4">
                        <p>Yes, appointments are recommended to ensure service availability and prompt attention. You can easily bo
ok through our website or contact our support team.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        03. How long does a full car detailing take?
                      </button>
                    </h5>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body ps-0 pt-4">
                        <p>A full detailing service usually takes between 4–6 hours depending on the vehicle size, condition, and
 selected service package.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4">
              <div className="faq-title">
                <h3 className="mb-0">Pricing & Packages</h3>
              </div>
            </div>
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="d-flex gap-4">
                <div className="accordion w-100" id="accordionExample2">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"  
                        aria-expanded="true" aria-controls="collapseFour">
                        04. How much does car detailing cost?
                      </button>
                    </h5>
                    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample2">
                      <div className="accordion-body ps-0 pt-4">
                        <p className="m-0">Our service packages start from Rs. 1,500 for Body Wash & Interior Cleaning. Full servic
e packages range from Rs. 14,500 for Light Vehicles to Rs. 10,500 for Heavy Vehicles. Please refer to specific service pages for de
tailed pricing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        05. Are there any membership or loyalty programs?
                      </button>
                    </h5>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample2">
                      <div className="accordion-body ps-0 pt-4">
                        <p>Yes, we offer exclusive discounts and benefits for returning customers and fleet partners. Contact us to
 learn more about ongoing promotions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4">
              <div className="faq-title">
                <h3 className="mb-0">Technical & Repair</h3>
              </div>
            </div>
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="d-flex gap-4">
                <div className="accordion w-100" id="accordionExample3">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingSix">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"   
                        aria-expanded="true" aria-controls="collapseSix">
                        06. What kind of repairs do you handle?
                      </button>
                    </h5>
                    <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample3">
                      <div className="accordion-body ps-0 pt-4">
                        <p className="m-0">We handle a wide range of repairs, including brake systems, engine diagnostics, fluid ch
ecks, battery replacements, and more.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        07. Are your technicians certified?
                      </button>
                    </h5>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                      data-bs-parent="#accordionExample3">
                      <div className="accordion-body ps-0 pt-4">
                        <p>Absolutely. All our technicians are highly trained and certified with years of experience in car detaili
ng and mechanical repair.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4">
              <div className="faq-title">
                <h3 className="mb-0">Location & Booking</h3>
              </div>
            </div>
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="d-flex gap-4">
                <div className="accordion w-100" id="accordionExample4">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingEight">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" 
                        aria-expanded="true" aria-controls="collapseEight">
                        08. Where is Kosala Service Center located?
                      </button>
                    </h5>
                    <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight"
                      data-bs-parent="#accordionExample4">
                      <div className="accordion-body ps-0 pt-4">
                        <p className="m-0">We are conveniently located at No. 566/89 A, Udaya Mawatha, Anuradhapura. We serve custo
mers from Anuradhapura and surrounding areas.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        09. Can I cancel or reschedule my appointment?
                      </button>
                    </h5>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample4">
                      <div className="accordion-body ps-0 pt-4">
                        <p>Yes, you can cancel or reschedule with at least 24 hours’ notice. Use the link in your confirmation em
ail or reach out to our support team directly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4">
              <div className="faq-title">
                <h3 className="mb-0">Aftercare & Support</h3>
              </div>
            </div>
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="d-flex gap-4">
                <div className="accordion w-100" id="accordionExample5">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingTen">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen"
                        aria-expanded="true" aria-controls="collapseTen">
                        10. How long will the detailing results last?
                      </button>
                    </h5>
                    <div id="collapseTen" className="accordion-collapse collapse show" aria-labelledby="headingTen"
                      data-bs-parent="#accordionExample5">
                      <div className="accordion-body ps-0 pt-4">
                        <p className="m-0">With proper care, our premium detailing and coating services can last up to 6 months or 
more, depending on usage and storage conditions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingEleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        11. What should I do after a ceramic coating?
                      </button>
                    </h5>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven"
                      data-bs-parent="#accordionExample5">
                      <div className="accordion-body ps-0 pt-4">
                        <p>Avoid washing your car for the first 7 days. After that, only use pH-neutral car shampoos and soft micro
fiber towels for maintenance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* #faq */}
    </main>
  );
};

export default FAQ;