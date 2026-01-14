import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import useEmailForm from '../hooks/useEmailForm';

const ContactUs = () => {
  const formRef = useRef();
  const { sendEmail, loading, success, error } = useEmailForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formRef.current);
  };

  return (
    <main>
      <SEO title="Contact Us" description="Get in touch with Kosala Service Center for appointments and inquiries." />
      {/* Banner */}
      <section className="section position-relative"
        style={{ backgroundImage: "url('/images/car-service-workers-disassembling-car-interior-VZ8SA3R.jpg')" }}>
        <div className="bg-overlay-4"></div>
        <div className="b-container h-100 position-relative z-2">
          <div className="d-flex flex-column justify-content-center align-items-center mx-auto text-center text-white gap-4"
            style={{ maxWidth: '895px' }}>
            <h1 className="heading fw-bold" data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000">
              CONTACT US
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1000">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* #banner */}

      {/* Contact Us */}
      <section className="section bg-color">
        <div className="b-container">
          <div className="row">
            <div className="col-12 col-xl-5 pe-xl-4 mb-5 mb-xl-0">
              <div className="bg-accent-color-2 p-5 rounded-4 d-flex flex-column gap-4">
                <h2 className="mb-1">Get in Touch with Auron</h2>
                <p className="mb-0">Whether you’re looking to schedule a detailing session.</p>
                <h5 className="mb-0">Kosala Service Center Garage</h5>
                <p className="mb-0">No. 566/89 A, Udaya Mawatha,Anuradhapura <br /> Monday – Saturday | 08.00 AM – 06.00 PM    
                </p>
                <h5 className="mb-0">Contact Information</h5>
                <ul className="p-0 m-0">
                  <li className="list-unstyled mb-3 d-flex align-items-center">
                    <i className="bi bi-telephone text-primary-color fs-5 me-2"></i>
                    +94 77 577 5353
                  </li>
                  <li className="list-unstyled mb-3 d-flex align-items-center">
                    <i className="bi bi-envelope text-primary-color fs-5 me-2"></i>
                    kosalaservicecenter@gmail.com
                  </li>
                  <li className="list-unstyled d-flex align-items-center">
                    <i className="bi bi-clock text-primary-color fs-5 me-2"></i>
                    Mon–Sat: 08.00 – 18.00
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-xl-7 ps-xl-4">
              <div className="bg-accent-color-2 p-5 rounded-4 d-flex flex-column gap-5">
                <h2 className="mb-0">Send us a Message</h2>
                
                {success && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <div>Message sent successfully! We will contact you soon.</div>
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <div>{error}</div>
                  </div>
                )}

                <form className="form needs-validation" ref={formRef} onSubmit={handleSubmit}>
                  <div className="row row-cols-1 row-cols-md-2 mb-2">
                    <div className="col">
                      <label htmlFor="fullname" className="form-label">Name</label>
                      <input type="text" name="user_name" id="fullname" className="form-control form-control-lg"
                        placeholder="Full Name" aria-label="Full Name" required />
                    </div>
                    <div className="col">
                      <label htmlFor="emailaddress" className="form-label">Email Address</label>
                      <input type="email" name="user_email" id="emailaddress"
                        className="form-control form-control-lg" placeholder="Email Address" aria-label="Email Address" required />
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-12 mb-4">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" name="user_phone" id="phone" className="form-control form-control-lg"
                        placeholder="Telephone" aria-label="Phone" required />
                    </div>
                    <div className="col-12 mb-4">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" name="subject" id="subject" className="form-control form-control-lg"
                        placeholder="Subject" aria-label="Subject" required />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control form-control-lg" name="message" id="message" rows="8"
                        placeholder="Message" required></textarea>
                    </div>
                  </div>
                  <button type="submit"
                    className="btn btn-cta-primary d-inline-flex py-3 d-flex align-items-center justify-content-center submit_form"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && (
                      <span className="btn-icon rounded-circle d-inline-flex align-items-center justify-content-center ms-2">        
                        <i className="bi bi-chevron-right text-white" style={{ fontSize: '10px' }}></i>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.4761144884273!2d80.39819271077633!3d8.32177813355292
7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcf55b2e81dee9%3A0x1083b8d7895ad5a0!2sKosala%20Service%20Center!5e0!3m2!1se
n!2ssg!4v1768410490636!5m2!1sen!2ssg"
                className="bg-grayscale rounded-4" allowFullScreen="" loading="lazy"></iframe>

            </div>
          </div>
        </div>
      </section>
      {/* #contact us */}
    </main>
  );
};

export default ContactUs;