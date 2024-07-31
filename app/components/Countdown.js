

// Countdown.js
import { useState, useEffect } from 'react';

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <div className="text-center">
      <h2 className="md:text-5xl text-2xl text-[#47126B] font-regular mt-[25px] mb-4">Webinar Starts In:</h2>
      <div className='mx-auto w-max place-content-center'><hr style={{ width: '350px', borderColor: '#F14A04', borderWidth: '1px', borderStyle: 'solid' }} /></div>
      <div className="flex mt-[20px] justify-center md:gap-[50px] gap-[25px] text-lg">
        {Object.keys(timeLeft).map((interval) => (
          <div key={interval} className="text-center">
            <div className="border-2 md:p-[20px] p-[5px] border-[#47126B] text-3xl md:text-7xl font-light text-[#F14A04]">
              {timeLeft[interval]}
            </div>
            <div className="md:text-[25px] text-[#47126B]">{interval}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
