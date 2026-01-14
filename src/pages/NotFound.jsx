import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <section className="d-flex justify-content-center align-items-center text-center overflow-hidden"
      style={{ backgroundImage: "url('/images/car-protection-with-special-films-8CFTV9D.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="bg-overlay-4"></div>
      <div className="b-container" style={{ padding: '0 15px' }}>
        <div className="row justify-content-center">
          <div className="col-12 position-relative z-1">
            <div className="bg-primary-color rounded-4 p-5">
              <div className="big-title-2">404</div>
            </div>
            <h1 className="mt-5 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="mb-5">The page you’re looking for doesn’t exist, has been moved, or might never have been here at all.</p>
            <Link to="/" className="btn btn-cta-primary d-inline-flex py-3 d-flex align-items-center justify-content-center">      
              Back To Home
              <span className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center ms-2"
                style={{ width: '15px', height: '15px' }}>
                <i className="bi bi-chevron-right text-primary-color" style={{ fontSize: '10px' }}></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;