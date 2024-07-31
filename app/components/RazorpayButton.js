// components/RazorpayButton.js

import { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    // Create form element
    const form = document.createElement('form');

    // Create script element and set its attributes
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.dataset.payment_button_id = 'pl_KHgKgmzZUerVYK';
    script.async = true;

    // Append script to form
    form.appendChild(script);

    // Append form to the container div
    const container = document.getElementById('razorpay-button-container');
    container.appendChild(form);

    // Clean up the form and script when the component unmounts
    return () => {
      container.removeChild(form);
    };
  }, []);

  return <div id="razorpay-button-container"></div>;
};

export default RazorpayButton;
