import { type MetaFunction } from '@remix-run/node';

import { ScheduleCard } from '~/components/ScheduleCard';
import { buildMetaTags } from '~/lib/metaUtils';
import { Iframe } from '~/components/Iframe';
import React from 'react';

export const meta: MetaFunction = ({ location }) => {
  const description =
    "Wedding schedule for Roz & Simon's Negril, Jamaica wedding.";
  const title = "Roz & Simon's Negril, Jamaica Wedding Schedule";

  return buildMetaTags({
    description,
    title,
    url: location.pathname,
  });
};

const SchedulePage = () => (
  <>
    <h1 className="my-3">Schedule</h1>

    {SCHEDULE_DETAILS.map((scheduleDetail) => (
      <ScheduleCard key={scheduleDetail.title} {...scheduleDetail} />
    ))}

    <div className="h-24 overflow-hidden relative">
      <Iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/493344339&color=%23e0e5e7&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" />
    </div>
  </>
);

const SCHEDULE_DETAILS = [
  {
    attire: 'Going to the beach',
    description:
      'We want to have some fun today and take a nice boat trip to an island close by. We will have a nice lunch on the beach, with fresh grilled lobster and enjoy the sun.',
    eventDate: 'December 15, 2023',
    eventTime: 'around lunch time',
    googleMapSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15151.570110415427!2d-78.3396663!3d18.3065224!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90df96445bbd3%3A0x717702c7ebd87d0e!2sTiki%20Pon%20Da%20Sea%20Jamaica!5e0!3m2!1sen!2suk!4v1699136356010!5m2!1sen!2suk',
    icon: 'sailboat',
    location: 'Negril Beach, Tiki Pon Da Sea',
    link: 'https://www.tikipondasea.com/',
    title: 'Boat time with grilled lobster',
    youtubeSrc: 'https://www.youtube.com/embed/Kz4_jNXSvrM?si=Kt4zXOgD0RfWBf1D',
  },
  {
    attire: 'Ceremony & Reception',
    description:
      "We're getting married! We'd like to share a few words with everyone. Dinner, drinks, and dancing to follow!",
    eventDate: 'December 16, 2023',
    eventTime: 'afternoon around 4pm',
    googleMapSrc:
      'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d947.2383961733098!2d-78.36613949087878!3d18.257949233157003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbeach!5e0!3m2!1sen!2suk!4v1699136697878!5m2!1sen!2suk',
    icon: 'wedding-couple',
    location: 'Negril Cliffs',
    title: 'Ceremony & Reception',
    youtubeSrc: '',
  },
];

export default SchedulePage;
