const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const MINUTE_IN_MILLISECONDS = 1000 * 60 * 60;
const SECOND_IN_MILLISECONDS = 1000 * 60;

export const getDateDifferenceRemaining = (targetDate = '') => {
  const now = new Date();
  // const date = new Date('December 31, 2023 23:59:59');
  const date = new Date(targetDate);
  // @ts-ignore
  return date - now;
};

export const calculateTimeRemaining = (targetDate = '') => {
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (targetDate?.length > 0) {
    const difference = getDateDifferenceRemaining(targetDate);

    if (difference > 0) {
      days = Math.floor(difference / DAY_IN_MILLISECONDS);
      hours = Math.floor(
        (difference % DAY_IN_MILLISECONDS) / MINUTE_IN_MILLISECONDS
      );
      minutes = Math.floor(
        (difference % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
      );
      seconds = Math.floor((difference % SECOND_IN_MILLISECONDS) / 1000);
    }
  }

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};
