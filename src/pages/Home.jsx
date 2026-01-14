import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Fancybox } from "@fancyapps/ui";

const CountUpAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const endInt = parseInt(end, 10);
    if (start === endInt) return;
    let totalFrames = Math.round(duration / (1000 / 60));
    let currentFrame = 0;
    const counter = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      setCount(Math.floor(endInt * progress));
      if (currentFrame === totalFrames) {
        clearInterval(counter);
        setCount(endInt);
      }
    }, 1000 / 60);
    return () => clearInterval(counter);
  }, [end, duration, hasStarted]);

  return <span ref={countRef} className="count-up">{count}+</span>;
};

const Home = () => {
  const [activeWhyBox, setActiveWhyBox] = useState(0);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Carousel: {
        Video: {
          autoplay: false,
        },
      },
    });
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const clientLogoSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2, centerPadding: '60px' } },
      { breakpoint: 520, settings: { slidesToShow: 1, centerPadding: '40px' } }
    ]
  };

  const testimonialSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    infinite: true,
    appendDots: dots => (
      <ul className="slick-dots" style={{ listStyle: 'none', padding: 0, margin: '35px 0 0 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {dots}
      </ul>
    ),
    customPaging: i => (
      <button style={{ fontSize: 0, color: 'transparent', border: 'none', outline: 'none' }}></button>
    ),
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const whyChooseUsData = [
    {
      icon: "bi-patch-check",
      title: "CERTIFIED TECHNICIANS",
      desc: "Certified technicians with proven skills and experience to handle every car with expert care and attention to detail.",
      delay: "0"
    },
    {
      icon: "bi-award",
      title: "MODERN EQUIPMENT",
      desc: "State-of-the-art tools and advanced technology ensure high-quality results for both detailing and repair services.",
      delay: "300"
    },
    {
      icon: "bi-rocket-takeoff",
      title: "FAST TURNAROUND TIME",
      desc: "Quick and efficient service process designed to get your vehicle back on the road in the shortest time possible.",
      delay: "600"
    },
    {
      icon: "bi-tag",
      title: "Affordable & Transparent",
      desc: "Competitive pricing with No hidden charges, Cash discounts up to 30%.",
      delay: "900"
    }
  ];

  const testimonialsData = [
    {
      img: "/images/Photo-4.jpg",
      name: "Sanduni Jayasinghe",
      role: "Managing Director",
      text: "“Outstanding detailing service! My car looks brand new again. The attention to detail was impressive, and the team was very professional. I'll definitely be coming back for future treatments.”"
    },
    {
      img: "/images/Photo-5.jpg",
      name: "Nimal Perera",
      role: "Operations Manager",
      text: "“Kosala Service Center has always been our go-to for fleet maintenance. They are reliable, fast, and easy to work with. Our company vehicles are always in top condition thanks to them.”"
    },
    {
      img: "/images/Photo-12.jpg",
      name: "Roshan Fernando",
      role: "Founder",
      text: "“The ceramic coating exceeded my expectations. My car’s finish is smooth, glossy, and durable. It’s been months, and it still looks amazing under the sun lorem ipsum dolor.”"
    },
    {
      img: "/images/Photo-3.jpg",
      name: "Mahesh Silva",
      role: "Marketing Executive",
      text: "“I needed quick repair service and Kosala Service Center delivered. Their team was communicative and efficient from start to finish. Everything was done ahead of schedule with zero hassle.”"
    },
    {
      img: "/images/Photo-6.jpg",
      name: "Kavindi Wickramasinghe",
      role: "Fleet Coordinator",
      text: "“We fully trust Kosala Service Center with our business fleet. They maintain high standards and provide consistent service. Their expertise has helped us reduce downtime and costs.”"
    },
    {
      img: "/images/Photo-13.jpg",
      name: "Tharindu Gunasekara",
      role: "Small Business Owner",
      text: "“The booking process was simple and smooth. Their team was super friendly and professional throughout the service. It's rare to find this level of quality and care.”"
    }
  ];

  return (
    <main>
      {/* Hero heading */}
      <section className="section">
        <div className="row position-relative z-1">
          <div className="b-container">
            <div className="row align-items-center">
              <div className="col-12 col-xl-7">
                <h1 className="text-center text-xl-start" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                  Your Vehicle's Health is <strong>Our Priority</strong> </h1>
              </div>
              <div className="col-12 col-xl-5 text-center text-xl-start" data-aos="fade-left" data-aos-delay="200"
                data-aos-duration="1000">
                <p>At Kosala Service Center, we deliver precision car repair and expert detailing services that make your
                  vehicle look and perform like new. From deep cleaning to complete auto care, we are trusted by drivers
                  and businesses across Anuradhapura.</p>
                <div
                  className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-xl-start gap-4">
                  <a href="#appoinmentsmake" className="btn btn-cta-primary">Book An Appointment</a>
                  <Link to="/services" className="btn btn-cta-secondary">View Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-n280 position-relative z-0">
          <h2 className="big-title text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">KOSALA</h2>
        </div>
      </section>

      {/* Hero image */}
      <section id="main-carousel">
        <div className="container-fluid">
          <div className="row">
            <div className="col px-0">
              <div className="carousel slide kb-carousel carousel-fade" id="carouselKenBurns" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/images/automotive-worker-waxing-and-polishing-car-body-GNKN8XL.jpg" className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/cleaning-and-preparing-car-for-sale-XY83R4C.jpg" className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="/images/modern-car-body-waxing-and-polishing-S6ULDJQ.jpg" className="d-block w-100" alt="Slide 3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why position-relative">
        <div className="b-container">
          <div className="row m-0 p-0 px-md-20">
            {whyChooseUsData.map((item, index) => (
              <div className="col-12 col-md-6 col-xl-3 p-0" key={index}>
                <div
                  className={`why-box ${activeWhyBox === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveWhyBox(index)}
                >
                  <div
                    className={`why-box-inner ${activeWhyBox === index ? 'bg-primary-color' : ''}`}
                    data-aos="fade-right"
                    data-aos-delay={item.delay}
                    data-aos-duration="0"
                  >
                    <i className={`bi ${item.icon} why-icon ${activeWhyBox === index ? 'text-white' : 'text-primary-color'} mb-3`}></i>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Kosala Service Center */}
      <section className="section">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-6 pe-xl-4">
              <div className="row h-100">
                <div className="col-12 col-xl-6 d-flex flex-column justify-content-end align-items-end">
                  <div className="d-flex flex-column align-items-center bg-accent-color-2 p-4 rounded-4 mb-4 col-9"
                    data-aos="fade-right" data-aos-delay="600" data-aos-duration="1000">
                    <h5>TOTAL AUDIENS</h5>
                    <h3 className="text-primary-color"><CountUpAnimation end={1000} /></h3>
                    <div className="d-flex">
                      <img src="/images/horizontal-shot-of-good-looking-funny-and-happy-ma-X5RMJTP.jpg" alt="testimonial-1"
                        className="rounded-circle border-color" width="55" height="55" />
                      <img src="/images/waist-up-shot-of-charming-female-freelance-journal-9QUQDSC.jpg" alt="testimonial-1"
                        className="rounded-circle border-color ms-n15" width="55" height="55" />
                      <img src="/images/pleased-to-meet-you-smart-attractive-redhead-man-w-G6AMV2J.jpg" alt="testimonial-1"
                        className="rounded-circle border-color ms-n15" width="55" height="55" />
                    </div>
                  </div>
                  <img src="/images/worker-disassembling-car-interior-2ECDQFR.jpg" alt="worker-disassembling-car-interior"
                    className="w-100 rounded-4 mb-4 mb-xl-0" height="300px" data-aos="fade-up" data-aos-delay="900"
                    data-aos-duration="1000" />
                </div>
                <div className="col-12 col-xl-6">
                  <img src="/images/auto-mechanic-portrait-5AUMJ8Z.jpg" alt="auto-mechanic-portrait"
                    className="w-100 rounded-4 mb-5 mb-xl-0" height="550px" data-aos="fade-down" data-aos-delay="300"
                    data-aos-duration="1000" />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 ps-xl-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex align-items-center">
                <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                <span className="subtitle">ABOUT KOSALA SERVICE CENTER</span>
              </div>
              <h2 className="my-4">DRIVEN BY PASSION POWERED BY PRECISION</h2>
              <p>Founded with a mission to elevate car care, <Link to="#">Kosala Service Center</Link> combines
                cutting-edge tools with
                skilled hands to deliver top-tier detailing and repair for both personal and business vehicles. We take
                pride in offering more than just a service — we provide peace of mind through quality, precision, and
                dedication.</p>
              <p>From restoring your car’s shine to ensuring mechanical reliability, every job is handled with the utmost
                care. Our team focuses on every detail, ensuring your vehicle leaves our shop looking and performing at
                its absolute best. With a customer-first approach and a passion for automotive excellence, Kosala Service
                Center is your
                trusted partner in maintaining your vehicle’s value and performance.</p>
              <div className="row">
                <div className="col-12 col-md-6 col-xl-7">
                  <div className="d-flex align-items-center justify-content-center bg-primary-color rounded-4 p-4 my-3 my-md-0">
                    <div className="d-flex heading-1">
                      <CountUpAnimation end={25} />
                    </div>
                    <h5 className="m-0 ps-3">Years of Experience</h5>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-5 d-flex align-items-center">
                  <ul className="p-0 m-0">
                    <li className="list-unstyled mb-3">
                      <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                      FUEL SYSTEM REPAIR
                    </li>
                    <li className="list-unstyled mb-3">
                      <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                      AIR CONDITIONING
                    </li>
                    <li className="list-unstyled">
                      <i className="bi bi-check-circle text-primary-color fs-5 me-2"></i>
                      WHEEL ALIGNMENT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="section" id="appoinmentsmake">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-8 pe-xl-4">
              <div className="row mb-0 mb-xl-5">
                <div className="col-12 col-md-6 col-xl-5 pe-xl-4">
                  <div className="bg-accent-color-2 p-4 rounded-4 mb-5 mb-md-0" data-aos="fade-right" data-aos-delay="600"
                    data-aos-duration="1000">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                      <span className="subtitle">ABOUT KOSALA SERVICE CENTER</span>
                    </div>
                    <h3 className="my-3">Schedule your visit in just a few clicks.</h3>
                    <p>Booking your car detailing or repair service has never been easier. Simply fill out our
                      user-friendly form to choose your preferred time, select your services, and confirm your
                      appointment—all in minutes.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-7 ps-xl-4">
                  <div className="w-100 h-100 position-relative" data-aos="fade-down" data-aos-delay="300"
                    data-aos-duration="1000">
                    <video className="w-100 h-100 object-fit-cover rounded-4" autoPlay muted loop>
                      <source src="/videos/videoplayback.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="bg-overlay"></div>
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <a href="https://youtu.be/0i764CNCKwo?si=kti8PalSJtPZMZRm" data-fancybox="video-gallery">
                        <i className="bi bi-play-circle-fill fs-80 text-primary-color"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5 my-xl-0">
                <div className="col">
                  <div className="position-relative p-0 py-4 border-general rounded-4 bg-accent-color-2" data-aos="fade-up"
                    data-aos-delay="900" data-aos-duration="1000">
                    <Slider {...clientLogoSettings} className="client-logos">
                      <div><img src="/images/Client-1.png" alt="client 1" className="opacity-75" /></div>
                      <div><img src="/images/Client-2.png" alt="client 2" className="opacity-75" /></div>
                      <div><img src="/images/Client-3.png" alt="client 3" className="opacity-75" /></div>
                      <div><img src="/images/Client-4.png" alt="client 4" className="opacity-75" /></div>
                      <div><img src="/images/Client-5.png" alt="client 5" className="opacity-75" /></div>
                      <div><img src="/images/Client-6.png" alt="client 6" className="opacity-75" /></div>
                      <div><img src="/images/Client-7.png" alt="client 7" className="opacity-75" /></div>
                      <div><img src="/images/Client-8.png" alt="client 8" className="opacity-75" /></div>
                    </Slider>
                    <div className="bg-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 ps-xl-4">
              <div className="bg-accent-color-2 rounded-4 p-4" data-aos="fade-left" data-aos-delay="200"
                data-aos-duration="1000">
                <h4 className="text-center">Book Your Car Detailing or Repair Appointment Today</h4>
                <form className="form needs-validation" onSubmit={(e) => e.preventDefault()}>
                  <div className="row mb-2">
                    <div className="col-12 mb-4">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" name="name" id="name" className="form-control form-control-lg"
                        placeholder="Enter your full name" aria-label="Name" />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="email" id="email" className="form-control form-control-lg"
                        placeholder="Enter your mail" aria-label="Email" />
                    </div>
                    <div className="col-12 mb-4">
                      <select className="form-select form-control-lg" name="service" aria-label="Default select">
                        <option defaultValue>Select a service</option>
                        <option value="1">Car Wash</option>
                        <option value="2">Interior Detailing</option>
                        <option value="3">Engine Repair</option>
                        <option value="4">Body Polishing</option>
                        <option value="5">Full Services</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control form-control-lg" name="message" id="message" rows="8"
                        placeholder="Describe your issue or request"></textarea>
                    </div>
                  </div>
                  <button type="submit"
                    className="btn btn-cta-primary w-100 d-inline-flex py-3 d-flex align-items-center justify-content-center submit_form">
                    Book Appointment Now
                    <span className="btn-icon rounded-circle d-inline-flex align-items-center justify-content-center ms-2">
                      <i className="bi bi-chevron-right text-white" style={{ fontSize: '10px' }}></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section full">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div className="service-box">
              <div className="bg-overlay-2"></div>
              <img src="/images/cropped-view-of-workman-in-hazmat-suit-cleaning-ca-SXZNV5Q.jpg"
                alt="workman-in-hazmat-suit-cleaning" className="w-100 h-100" />
              <div className="service-content">
                <div className="service-info">
                  <div className="service-wrap">
                    <h4 className="mb-3">FULL CAR DETAILING</h4>
                    <p>Complete exterior and interior treatment to restore your vehicle’s shine, cleanliness, and
                      showroom-quality finish.</p>
                    <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                      className="bi bi-arrow-right-circle ms-3"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div className="service-box">
              <div className="bg-overlay-2"></div>
              <img src="/images/car-detailer-cleaning-modern-vehicle-dashboard-LT5SH8K.jpg"
                alt="workman-in-hazmat-suit-cleaning" className="w-100 h-100" />
              <div className="service-content">
                <div className="service-info">
                  <div className="service-wrap">
                    <h4 className="mb-3">INTERIOR CLEANING</h4>
                    <p>Deep cleaning of seats, carpets, dashboard, and panels to ensure a fresh, sanitized, and
                      comfortable cabin environment.</p>
                    <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                      className="bi bi-arrow-right-circle ms-3"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div className="service-box">
              <div className="bg-overlay-2"></div>
              <img src="/images/car-protection-with-special-films-8CFTV9D.jpg" alt="workman-in-hazmat-suit-cleaning"
                className="w-100 h-100" />
              <div className="service-content">
                <div className="service-info">
                  <div className="service-wrap">
                    <h4 className="mb-3">ROUTINE CAR MAINTENANCE</h4>
                    <p>Regular inspections and minor services to keep your vehicle running smoothly, safely, and
                      efficiently every day.</p>
                    <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                      className="bi bi-arrow-right-circle ms-3"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3 p-0">
            <div className="service-box">
              <div className="bg-overlay-2"></div>
              <img src="/images/worker-repairs-a-car-in-a-car-repair-center-ZMDKVCJ.jpg"
                alt="workman-in-hazmat-suit-cleaning" className="w-100 h-100" />
              <div className="service-content">
                <div className="service-info">
                  <div className="service-wrap">
                    <h4 className="mb-3">ENGINE BAY CLEANING</h4>
                    <p>Thorough engine compartment cleaning to remove dirt and debris, improve appearance, and support
                      easier maintenance.</p>
                    <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                      className="bi bi-arrow-right-circle ms-3"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="section project position-relative">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-4 pe-xl-4 order-2 order-xl-1" data-aos="fade-right" data-aos-delay="200"
              data-aos-duration="1000">
              <p className="text-xl-end">Take a closer look at how we bring vehicles back to life. From deep detailing to full
                repairs and Heavy Vehicle Services, our projects showcase the precision, care.</p>
            </div>
            <div className="col-12 col-xl-8 ps-xl-4 order-1 order-xl-2" data-aos="fade-left" data-aos-delay="200"
              data-aos-duration="1000">
              <div className="d-flex align-items-center">
                <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                <span className="subtitle">PROJECT SHOWCASE</span>
              </div>
              <h2 className="my-4">EXPLORE OUR AUTO REPAIR SERVICE PROJECT</h2>
            </div>
          </div>
          <div className="row position-relative z-1">
            <div className="col-12 col-xl-4 pe-xl-4">
              <ul
                className="nav nav-pills flex-column nav-pills align-items-start align-items-xl-end position-relative z-1 mb-3 mb-xl-0"
                id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active position-relative" id="pills-detailing-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-detailing" type="button" role="tab" aria-controls="pills-detailing"
                    aria-selected="true">Vehicle Detailing Services</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link position-relative" id="pills-car-wash-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-car-wash" type="button" role="tab" aria-controls="pills-car-wash"
                    aria-selected="false">Car Wash Services</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link position-relative" id="pills-heavy-vehicle-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-heavy-vehicle" type="button" role="tab" aria-controls="pills-heavy-vehicle"
                    aria-selected="false">Heavy Vehicle Services</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link position-relative" id="pills-maintenance-repair-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-maintenance-repair" type="button" role="tab"
                    aria-controls="pills-maintenance-repair" aria-selected="false">Maintenance & Repair Services</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link position-relative" id="pills-interior-care-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-interior-care" type="button" role="tab" aria-controls="pills-interior-care"
                    aria-selected="false">Interior Care & Sanitization</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link position-relative" id="pills-additional-services-tab" data-bs-toggle="pill"
                    data-bs-target="#pills-additional-services" type="button" role="tab"
                    aria-controls="pills-additional-services" aria-selected="false">Additional Services</button>
                </li>
              </ul>
            </div>
            <div className="col-12 col-xl-8 ps-xl-4">
              <div className="tab-content rounded-4 w-100 h-100" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-detailing" role="tabpanel"
                  aria-labelledby="pills-detailing-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/detailed-car-cleaning-XD6PGNJ.jpg" alt="detailed-car-cleaning"
                      className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Detailing</Link>
                            <Link to="/services" className="btn btn-cta-secondary">Deep Clean</Link>
                          </div>
                          <h3 className="mb-3">RESTORE ULTIMATE SHINE AND GLOSS</h3>
                          <p>Professional polishing and detailing to bring back your car’s deep shine, smooth finish, and
                            head-turning gloss.</p>
                          <Link to="/services" className="links-primary text-primary-color">MORE DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-car-wash" role="tabpanel" aria-labelledby="pills-car-wash-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/car-wash-worker-removing-water-from-a-car-body-HKAUHY3.jpg"
                      alt="car-wash-worker-removing-water-from-a-car-body" className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Car Wash</Link>
                            <Link to="/services" className="btn btn-cta-secondary">Exterior Cleaning</Link>
                          </div>
                          <h3 className="mb-3">PROFESSIONAL CAR WASH SERVICES</h3>
                          <p>Our thorough car wash services leave your vehicle sparkling clean, removing dirt, grime, and
                            road contaminants.</p>
                          <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-heavy-vehicle" role="tabpanel"
                  aria-labelledby="pills-heavy-vehicle-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/heavyvehicalwash.jpg" alt="mechanic-garage-auto-workshop-team-working-service"
                      className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Heavy Vehicles</Link>
                          </div>
                          <h3 className="mb-3">HEAVY VEHICLE SERVICES</h3>
                          <p>We provide comprehensive services for heavy vehicles, including maintenance, repair, and
                            detailing.</p>
                          <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-maintenance-repair" role="tabpanel"
                  aria-labelledby="pills-maintenance-repair-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/workingondamagecar.jpg" alt="mechanics-working-on-damaged-car"
                      className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Maintenance</Link>
                            <Link to="/services" className="btn btn-cta-secondary">Repair</Link>
                          </div>
                          <h3 className="mb-3">MAINTENANCE & REPAIR SERVICES</h3>
                          <p>From routine maintenance to complex repairs, our expert technicians ensure your vehicle runs
                            smoothly and safely.</p>
                          <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-interior-care" role="tabpanel"
                  aria-labelledby="pills-interior-care-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/car-detailer-cleaning-modern-vehicle-dashboard-LT5SH8K.jpg"
                      alt="car-detailer-cleaning-modern-vehicle-dashboard" className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Interior Care</Link>
                            <Link to="/services" className="btn btn-cta-secondary">Sanitization</Link>
                          </div>
                          <h3 className="mb-3">INTERIOR CARE & SANITIZATION</h3>
                          <p>Our interior care services include deep cleaning, detailing, and sanitization to provide a
                            clean and healthy cabin environment.</p>
                          <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-additional-services" role="tabpanel"
                  aria-labelledby="pills-additional-services-tab">
                  <div className="service-box">
                    <div className="bg-overlay-2"></div>
                    <img src="/images/car-mechanic-working-in-an-auto.jpg"
                      alt="car-mechanic-working-in-an-auto-repair-shop-explai" className="w-100 h-100 rounded-4" />
                    <div className="service-content">
                      <div className="service-info">
                        <div className="service-wrap">
                          <div className="d-flex flex-row flex-wrap gap-2 mb-3">
                            <Link to="/services" className="btn btn-cta-secondary">Additional</Link>
                            <Link to="/services" className="btn btn-cta-secondary">Custom</Link>
                          </div>
                          <h3 className="mb-3">ADDITIONAL SERVICES</h3>
                          <p>We offer a variety of additional services to meet your specific needs. Contact us for custom
                            requests and specialized care.</p>
                          <Link to="/services" className="links-primary text-primary-color">VIEW DETAILS<i
                            className="bi bi-arrow-right-circle ms-3"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="big-title text-center mt-n220 position-relative z-0" data-aos="fade-up" data-aos-delay="200"
          data-aos-duration="1000">PROJECT</h2>
      </section>

      {/* Testimonials */}
      <section className="section bg-accent-color-2 bg-color">
        <div className="b-container">
          <div className="row d-flex align-items-end mb-5">
            <div className="col-12 col-xl-8 pe-xl-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex align-items-center">
                <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                <span className="subtitle">CLIENT FEEDBACK</span>
              </div>
              <h2 className="my-4">TRUSTED BY BUSINESESS WHO PRIORITIZE QUALITY AUTO CARE SERVICES</h2>
            </div>
            <div className="col-12 col-xl-4 ps-xl-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex mb-3">
                <div className="d-flex flex-row flex-wrap">
                  <img src="/images/horizontal-shot-of-good-looking-funny-and-happy-ma-X5RMJTP.jpg" alt="testimonial-1"
                    className="rounded-circle border-color" width="55" height="55" />
                  <img src="/images/waist-up-shot-of-charming-female-freelance-journal-9QUQDSC.jpg" alt="testimonial-1"
                    className="rounded-circle border-color ms-n15" width="55" height="55" />
                  <img src="/images/pleased-to-meet-you-smart-attractive-redhead-man-w-G6AMV2J.jpg" alt="testimonial-1"
                    className="rounded-circle border-color ms-n15" width="55" height="55" />
                  <div
                    className="bg-primary-color rounded-circle border-color ms-n15 size-55 d-flex justify-content-center align-items-center">
                    <i className="bi bi-plus fs-2 text-white"></i>
                  </div>
                </div>
                <h5 className="m-0 ps-3" style={{ maxWidth: '180px' }}>4.6k Best Reviews For Kosala Service Center</h5>
              </div>
              <p>We proudly serve companies that demand reliable, high-standard detailing and repair services to keep
                their fleet looking sharp and running smoothly.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <Slider {...testimonialSettings} className="testimonial-slide">
                {testimonialsData.map((item, index) => (
                  <div key={index} className="px-3">
                    <div className="testimonial-box m-0">
                      <div className="d-flex gap-2 mb-4">
                        <i className="bi bi-star-fill text-primary-color"></i>
                        <i className="bi bi-star-fill text-primary-color"></i>
                        <i className="bi bi-star-fill text-primary-color"></i>
                        <i className="bi bi-star-fill text-primary-color"></i>
                        <i className="bi bi-star-fill text-primary-color"></i>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex justify-content-center align-items-center">
                          <img src={item.img} alt={item.name} />
                          <div className="profile-info d-flex flex-column ms-3">
                            <h5 className="mb-0">{item.name}</h5>
                            <span className="text-small">{item.role}</span>
                          </div>
                        </div>
                        <i className="bi bi-quote fs-1 text-primary-color"></i>
                      </div>
                      <p className="mb-0">{item.text}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

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

      {/* How It Work */}
      <section className="section bg-color">
        <div className="b-container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-xl-6 pe-xl-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
              <img src="/images/worker-cleaning-modern-vehicle-alloy-wheels-using-C5557ZH.jpg"
                alt="worker-cleaning-modern-vehicle-alloy-wheels" className="w-100 rounded-4 mb-5 mb-xl-0" height="700px" />
            </div>
            <div className="col-12 col-xl-6 ps-xl-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
              <div className="d-flex align-items-center">
                <i className="bi bi-car-front-fill fs-4 me-3 text-primary-color"></i>
                <span className="subtitle">OUR PROCESS</span>
              </div>
              <h2 className="my-4">SIMPLE PROCESS FOR MAXIMUM SATISFACTION</h2>
              <p>From booking to completion, we make car care easy, transparent, and efficient. Here's how Kosala Service
                Center
                delivers top-tier service every time.</p>
              <div className="accordion mt-4" id="accordionExample">
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                      aria-expanded="true" aria-controls="collapseOne">
                      01. Book Your Appointment
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body ps-0 pt-4">
                      <p className="m-0">Schedule your service online or via phone at your convenience. Choose your preferred
                        date, time, and service package easily.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      02. Vehicle Inspection & Consultation
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body ps-0 pt-4">
                      <p>Our experts will inspect your vehicle and recommend the best treatments. We ensure clarity on
                        pricing and procedures before we begin.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      03. Service in Action
                    </button>
                  </h5>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body ps-0 pt-4">
                      <p>Our certified team performs the service with precision and care. Whether it's detailing, coating,
                        or repair—quality is guaranteed.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      04. Final Review & Delivery
                    </button>
                  </h5>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body ps-0 pt-4">
                      <p>Before handover, we conduct a final check to ensure everything's perfect. You drive away with a
                        spotless, rejuvenated vehicle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section no-bg-color mb-n90">
        <div className="b-container">
          <div className="row">
            <div className="col-12">
              <div className="row bg-primary-color m-0 rounded-4 border-big">
                <div className="col-6 col-md-6 col-xl-3">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-4 my-1 my-xl-4">
                    <div className="d-flex heading-2">
                      <CountUpAnimation end={1000} />
                    </div>
                    <h5 className="m-0 ps-0 ps-md-3 text-center text-md-start">VEHICLES SERVICED</h5>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-3">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-4 my-1 my-xl-4">
                    <div className="d-flex heading-2">
                      <CountUpAnimation end={50} />
                    </div>
                    <h5 className="m-0 ps-0 ps-md-3 text-center text-md-start">COSTUMER RATING</h5>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-3">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-4 my-1 my-xl-4">
                    <div className="d-flex heading-2">
                      <CountUpAnimation end={250} />
                    </div>
                    <h5 className="m-0 ps-0 ps-md-3 text-center text-md-start">CORPORATE CLIENTS</h5>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-xl-3">
                  <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-4 my-1 my-xl-4">
                    <div className="d-flex heading-2">
                      <CountUpAnimation end={98} />
                    </div>
                    <h5 className="m-0 ps-0 ps-md-3 text-center text-md-start">CLIENT RETENTION</h5>
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

export default Home;