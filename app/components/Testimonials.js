// components/Testimonials.js
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    { name: 'Archna Devi', review: 'I’m experiencing great results with Dr. Suhas’s treatment for my IBS. His methods are working well for my symptoms, and I feel much better now.' },
    { name: 'Sunita Devi', review: 'डॉ. सुहास का IBS के लिए उपचार एक गेम-चेंजर था। आयुर्वेद की समझ और व्यक्तिगत देखभाल ने मेरी स्थिति में बड़ा सुधार किया है।' },
    { name: 'Rahul Kumar', review: 'Dr. Suhas is an exceptional doctor with a deep understanding of Ayurveda. His expertise and compassionate approach have made a world of difference in my health. I am truly grateful for his care and highly recommend him for Ayurvedic Treatment of IBS.' },
    { name: 'Navdeep', review: 'Dr. Suhas’s professional expertise and personalised care at Yukti Herbs Hospital have greatly improved my health; he is an exemplary doctor.' },
    { name: 'Ravi Suri', review: 'After suffering from IBS for 12 years, I saw Dr. Suhas’s video on Instagram,  and came to Yukti Herbs Hospital for treatment—now I am fully recovered.' },

    { name: 'Sukhwinder Singh', review: 'Dr. Suhas’s way of educating me about IBS and the precautions to take has been amazing, and thanks to his treatment at Yukti Herbs Hospital, I am now fully recovered.' },
    { name: 'Vaibhav Gaur', review: 'I am taking Dr. Suhas’s treatment, medicines as well as Panchakarma and it is very effective for my IBS symptoms' },
    { name: 'Madhav Reddy', review: 'I had almost given up hope of finding relief from my IBS until I found Dr.Suhas. Ayurvedic treatment not only addressed my immediate symptoms but also helped me understand how to maintain long-term digestive health. The results have been amazing—less bloating, fewer stomach cramps, and an overall sense of well-being. I am grateful for his expertise and recommend him wholeheartedly.' },
    { name: 'Priya Mahajan', review: 'Dr. Suhas's expertise in Ayurveda transformed my approach to managing IBS. His detailed evaluation and treatment plan addressed not just my symptoms but the root causes of my digestive issues. The tailored diet and herbal supplements he recommended have made a huge difference in my quality of life. I am now able to enjoy foods that previously triggered my IBS and feel more balanced overall.' },
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
