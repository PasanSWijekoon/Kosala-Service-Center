import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'slick-carousel/slick/slick.css';
import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
// Custom styles
import './assets/css/style.css'
// Global Scripts
import AOS from 'aos';
import { HelmetProvider } from 'react-helmet-async';

AOS.init({
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)