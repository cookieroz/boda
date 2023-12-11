import { useState, useEffect, useRef } from 'react';

import {
  calculateTimeRemaining,
  getDateDifferenceRemaining,
} from '~/lib/dateUtils';

export const Countdown = ({ targetDate = '' }) => {
  const [isWeddingDay, setIsWeddingDay] = useState(false);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const intervalRef = useRef<undefined | void | unknown>();

  useEffect(() => {
    const hasExpired = getDateDifferenceRemaining(targetDate) <= 0;

    if (hasExpired) {
      // @ts-ignore
      clearInterval(intervalRef.current);
      setLoading(false);
    } else {
      const getTimeRemaining = () => {
        const { days, hours, minutes, seconds } =
          calculateTimeRemaining(targetDate);

        // timerRef.current = { days, hours, minutes, seconds };
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

        if (days === 0) {
          setIsWeddingDay(true);
        }

        if (loading) {
          setLoading(false);
        }
      };

      intervalRef.current = setInterval(getTimeRemaining, 1000);
    }

    return () => {
      // @ts-ignore
      clearInterval(intervalRef.current);
    };
  }, []);

  return loading ? null : (
    <div className="my-4">
      {isWeddingDay && <p>It's our wedding day!</p>}

      {minutes > 0 ? (
        <>
          <div className="flex gap-4 justify-center mt-2">
            <TimeBlock time={days} label="Days" />
            <TimeBlock time={hours} label="Hours" />
            <TimeBlock time={minutes} label="Minutes" />
            <TimeBlock time={seconds} label="Seconds" />
          </div>

          <p className="text-center text-rose-400">Until the wedding!</p>
        </>
      ) : (
        <p>The day has passed! thank you all near and far. </p>
      )}
    </div>
  );
};

// @ts-ignore
const TimeBlock = ({ time, label }) => (
  <div className="flex flex-col">
    <p className="font-bold text-center text-rose-400 text-xl md:text-2xl">
      {time}
    </p>
    <p>{label}</p>
  </div>
);
