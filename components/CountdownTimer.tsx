import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const timerStyling =
    'border-2 border-solid border-black w-16 p-1 h-16 mx-1 bg-[#f1cdcd] rounded-xl';

  return (
    <div className='flex justify-center py-5'>
      <div className={timerStyling}>
        <p>{timeLeft.days}</p>
        <p>days</p>
      </div>
      <div className={timerStyling}>
        <p>{timeLeft.hours}</p>
        <p>hr</p>
      </div>
      <div className={timerStyling}>
        <p>{timeLeft.minutes}</p>
        <p>min</p>
      </div>
      <div className={timerStyling}>
        <p>{timeLeft.seconds}</p>
        <p>sec</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
