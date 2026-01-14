import { useState } from 'react';
import emailjs from '@emailjs/browser';

const useEmailForm = (serviceId, templateId, publicKey) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formElement) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formElement,
        publicKey
      );
      
      if (result.text === 'OK') {
        setSuccess(true);
        formElement.reset(); // Clear the form
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
      // Hide success message after 5 seconds
      if (!error) {
        setTimeout(() => setSuccess(false), 5000);
      }
    }
  };

  return { sendEmail, loading, success, error };
};

export default useEmailForm;
