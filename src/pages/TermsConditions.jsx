import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Terms & Conditions - Kosala Service Center"
        description="Read the Terms and Conditions of Kosala Service Center."
      />
      <section className="section bg-secondary-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-4 fw-bold mb-4 text-primary-color">Terms & Conditions</h1>
              <div className="text-color">
                <p>Welcome to Kosala Service Center. These terms and conditions outline the rules and regulations for the use of our website and services.</p>
                
                <h3 className="mt-4 mb-3 text-white">1. Introduction</h3>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Kosala Service Center if you do not agree to take all of the terms and conditions stated on this page.</p>

                <h3 className="mt-4 mb-3 text-white">2. Service Provision</h3>
                <p>We provide automotive repair, maintenance, and detailing services. All services are subject to availability and scheduling.</p>

                <h3 className="mt-4 mb-3 text-white">3. Appointments</h3>
                <p>Appointments can be booked via phone or through our website. We reserve the right to reschedule appointments due to unforeseen circumstances.</p>

                <h3 className="mt-4 mb-3 text-white">4. Payment Terms</h3>
                <p>Payment is due upon completion of services. We accept cash and major credit cards. Prices are subject to change without notice.</p>

                <h3 className="mt-4 mb-3 text-white">5. Warranty</h3>
                <p>We stand by our work. Specific warranties may apply to certain parts or services, which will be detailed at the time of service.</p>

                <h3 className="mt-4 mb-3 text-white">6. Limitation of Liability</h3>
                <p>Kosala Service Center shall not be held responsible for any incidental or consequential damages resulting from the use of our services.</p>

                <p className="mt-5">Last updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
