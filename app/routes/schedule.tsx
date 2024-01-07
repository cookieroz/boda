import { type MetaFunction } from '@remix-run/node';
import React from 'react';

import { ScheduleCardContent } from '~/components/ScheduleCard/ScheduleCardContent';
import { ScheduleCardDescription } from '~/components/ScheduleCard/ScheduleCardDescription';
import { ScheduleCardHeader } from '~/components/ScheduleCard/ScheduleCardHeader';
import { buildMetaTags } from '~/lib/metaUtils';

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

    <div className="py-6">
      <ScheduleCardHeader eventDate={BOTH_DETAILS.eventDate} />

      <ScheduleCardContent {...BOTH_DETAILS} />
      <hr className="border-rose-300 my-6" />

      <ScheduleCardDescription {...CEREMONY_DETAILS} />

      <ScheduleCardDescription {...RECEPTION_DETAILS} />
    </div>
  </>
);

const BOTH_DETAILS = {
  description:
    "We're getting married! We'd like to share a few words with everyone. Dinner, drinks, and dancing to follow!",
  eventDate: 'December 16, 2023',
  googleMapSrc:
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d947.2383961733098!2d-78.36613949087878!3d18.257949233157003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbeach!5e0!3m2!1sen!2suk!4v1699136697878!5m2!1sen!2suk',
  icon: 'wedding-location',
  location: 'Negril Cliffs',
  title: 'Ceremony & Reception',
};

const CEREMONY_DETAILS = {
  description: 'Ceremony',
  eventTime: 'afternoon around 3pm',
  icon: 'wedding-cake',
};

const RECEPTION_DETAILS = {
  description: 'Reception',
  eventTime: '6 - 10:30pm',
  icon: 'wedding-couple',
};

export default SchedulePage;
