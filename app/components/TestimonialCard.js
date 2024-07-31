// components/TestimonialCard.js
const TestimonialCard = ({ name, review }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <div className="flex items-center mb-2">
          <span className="text-orange-500">★★★★★</span> {/* Placeholder for rating stars */}
        </div>
        <p className="text-gray-600">{review}</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  