export const ScheduleCard = ({
  attire,
  description,
  eventDate,
  eventTime,
  location,
  // url,
  title,
}: any) => (
  <div className="py-6">
    {eventDate && (
      <>
        <h4 className="my-3">{eventDate}</h4>
        <hr />
      </>
    )}

    {title && <h3 className="my-3">{title}</h3>}
    {eventTime && <small>{eventTime}</small>}

    {description && <p>{description}</p>}

    {attire && <p>{attire}</p>}

    {location && <p>{location}</p>}
  </div>
);
