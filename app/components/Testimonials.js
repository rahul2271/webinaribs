// components/Testimonials.js
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'Archna Devi', review: 'Lorem Ipsum has been the industry...' },
    { name: 'Sunita Devi', review: 'Lorem Ipsum has been the industry...' },
    { name: 'Rahul Kumar', review: 'Lorem Ipsum has been the industry...' },
    { name: 'Navdeep', review: 'Lorem Ipsum has been the industry...' },
    { name: 'Navdeep', review: 'Lorem Ipsum has been the industry...' },

    { name: 'Navdeep', review: 'Lorem Ipsum has been the industry...' },

    // Add more testimonials as needed
  ];

  return (
    <div id='testimonials' className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-5xl font-regular text-center text-[#47126B] mb-8">Customer Testimonials</h2>
        <div className='md:mt-[5px] mx-auto w-max place-content-center'><hr style={{ width: '250px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} name={testimonial.name} review={testimonial.review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
