import React from 'react';

const WebinarSection = () => {
  return (
    <div className="md:mt-[50px] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="md:text-5xl text-2xl font-regular text-[#47126B] text-center">About the Webinar</h2>
        <div className='mx-auto w-max place-content-center'><hr style={{ width: '350px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-gray-900">What will you learn?</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div className="bg-[#47126B]  text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">
                IBS क्या होता है। <br />
                IBS क्यों होता है। <br />
                IBS किसको होता है।
              </p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Why Ayurvedic Treatment of IBS is important?</p>
            </div>
            <div className="bg-[#47126B]  text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">IBS Diet & Lifestyle & Home Remedies</p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">How to Stop Recurrence?</p>
            </div>
            <div className="bg-[#47126B] text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Panchakarma for IBS Patients</p>
            </div>
            <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-medium">Doubt Clearing Sessions</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="md:text-7xl font-extrabold text-[#47126B]">Get a E-Book</h3>
          <p className="text-orange-600 text-5xl font-extrabold mt-2">FREE</p>
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
