import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy - Kosala Service Center"
        description="Read the Privacy Policy of Kosala Service Center."
      />
      <section className="section bg-secondary-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-4 fw-bold mb-4 text-primary-color">Privacy Policy</h1>
              <div className="text-color">
                <p>At Kosala Service Center, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Kosala Service Center and how we use it.</p>

                <h3 className="mt-4 mb-3 text-white">1. Information We Collect</h3>
                <p>We may collect personal information such as your name, phone number, and email address when you contact us or book an appointment. We also collect information about your vehicle to provide appropriate services.</p>

                <h3 className="mt-4 mb-3 text-white">2. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, operate, and maintain our website and services</li>
                  <li>Improve, personalize, and expand our website and services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                </ul>

                <h3 className="mt-4 mb-3 text-white">3. Log Files</h3>
                <p>Kosala Service Center follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

                <h3 className="mt-4 mb-3 text-white">4. Cookies and Web Beacons</h3>
                <p>Like any other website, Kosala Service Center uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>

                <h3 className="mt-4 mb-3 text-white">5. Third Party Privacy Policies</h3>
                <p>Kosala Service Center's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>

                <p className="mt-5">Last updated: January 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
