import { ScheduleCard } from '~/components/ScheduleCard';

const SchedulePage = () => (
  <>
    <h1 className="my-3">Schedule</h1>

    {SCHEDULE_DETAILS.map((scheduleDetail) => (
      <ScheduleCard key={scheduleDetail.title} {...scheduleDetail} />
    ))}
  </>
);

const SCHEDULE_DETAILS = [
  {
    attire: 'Going to the beach',
    description:
      'We want to have some fun today and take a nice boat trip to an island close by. We will have a nice lunch on the beach, with fresh grilled lobster and enjoy the sun.',
    eventDate: 'December 15, 2023',
    eventTime: 'daytime (tbd)',
    location: 'Negril Beach, Tiki Pon Da Sea',
    // url,
    title: 'Boat time with grilled lobster',
  },
  {
    attire: 'Ceremony & Reception',
    description:
      "We're getting married! We'd like to share a few words with everyone. Dinner, drinks, and dancing to follow!",
    eventDate: 'December 16, 2023',
    eventTime: 'afternoon (tbd)',
    location: 'Negril Cliffs',
    // url,
    title: 'Ceremony & Reception',
  },
];

export default SchedulePage;
