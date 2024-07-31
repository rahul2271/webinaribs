'use client'
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import Carousel from '../components/Carousel'; // Ensure you have Carousel component path
import Countdown from '../components/Countdown';
// import Marquee from "react-fast-marquee";
import Doctor from '../components/dr';
import WebinarSection from '../components/WebinarSection';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';
import Youtube from '../components/youtube';



 const eventDate = '2024-08-05T00:00:00'

const Form = () => {
  const [showTick, setShowTick] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    number: '',
    issueType: '',
    query: '',
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setShowTick(true);

    const sheetDBEndpoint = 'https://sheetdb.io/api/v1/jim20ot1ysl19';

    try {
      const response = await fetch(sheetDBEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        
        // Redirect to a thank-you page or somewhere else
      

      } 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <title>Contact Us - Yukti Herbs</title>
      <meta name="description" content="Contact us for inquiries, feedback, or any other questions you may have." />
      <meta name="keywords" content="contact, contact us, get in touch, inquiries, feedback, support, Yukti Herbs, Dr. Suhas" />

      <div className=' mt-[15px] md:mt-[50px] '><Carousel/></div>
      <Link href = '/#forem'>
      <div className='bg-[#47126B] text-center'>
        <p className='animate-pulse text-white text-[15px] md:text-[50px]'>Yes, I want to attend this Webinar ( Only 100 Seats ) Limited Seats Available</p>
      </div>
      </Link>

      <div className="md:mt-[50px]">
                  <Countdown eventDate={eventDate} />
          </div>
          <WebinarSection/>
      <div id='forem' className="mx-auto md:max-w-max md:px-4 ">
        <div className="mx-auto max-w-7xl py-2 md:py-24 ">
          <div className="shadow-2xl border-2 rounded-[25px] grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            <div className="rounded-[10px] shadow-black/50 p-6 flex items-center justify-center">
              <div  className="px-2 md:px-12">
                <p className="text-left text-2xl font-bold text-[#2C3753] md:text-xl">
                  Register now for <span className='text-[#F14A04] text-2xl'>Rs.99/-</span>  only !
                </p>
                {/* <p className="font-light text-left mt-4 text-lg md:text-sm text-[#2C3753]">
                  Submit Your Details Now, to Get a Call Back!!!
                </p> */}
                <form onSubmit={handleSubmit}  className="item-center mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full items-center gap-1.5">
                      <label className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Rajesh Kumar"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="gmail">
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="gmail"
                      name="gmail"
                      placeholder="example@gmail.com"
                      value={formData.gmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid w-full items-center gap-1.5">
                    <label className="text-sm font-medium leading-none text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="number">
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-[#2C3753]/50 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="8888XXXXXX"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="justify-item-center">
                    {/* <button
                      type="submit"
                      className="hover:bg-[#F14A04]/50 hover:text-[#2C3753] bg-[#F14A04] w-full rounded-[50px] px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#2C3753]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Submit
                    </button> */}
                    <div className="mt-4 flex mx-auto  place-content-center">
                      <script
                        dangerouslySetInnerHTML={{
                          __html: `
                            document.addEventListener("DOMContentLoaded", function() {
                              const script = document.createElement('script');
                              script.src = "https://checkout.razorpay.com/v1/payment-button.js";
                              script.dataset.payment_button_id = "pl_OelN9YKzpJJ6Rh";
                              script.async = true;
                              document.querySelector("form").appendChild(script);
                            });
                          `,
                        }}
                      />
                    </div>
                    {showTick && (
                      <div className="text-center text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p>Form submitted successfully!</p>
                      </div>
                    )}
                    
                    {/* <CallNowButton /> */}

                    {/* Razorpay Payment Button Script Directly Inside Form */}
  
                  </div>
                </form>
              </div>
            </div>
            
            <div className="mt-[10px] md:mt-[0px] relative pb-[60%] w-full lg:col-span-1">
              <iframe
                className='absolute top-0 left-0 w-full h-full rounded-b-[20px]'
                src="https://www.youtube.com/embed/qBm-4GsTjyg?si=Vbz_qmdDVoEWM_ZL?autoplay=1&controls=0&playsinline=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

          </div>


          <Doctor/>
          {/* <Youtube/> */}
          <Testimonials/>
        </div>
      </div>
    </>
  );
};

export default Form;
