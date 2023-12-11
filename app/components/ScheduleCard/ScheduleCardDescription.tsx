import { Icon } from '~/components/Icon';
import React from 'react';

interface ScheduleCardTitleProps {
  description: string;
  eventTime?: string;
  icon?: string;
}

export const ScheduleCardDescription = ({
  description,
  eventTime,
  icon,
}: ScheduleCardTitleProps) => (
  <>
    <div className="flex gap-x-4 items-center">
      {icon && description ? (
        <div className="flex gap-4 items-center">
          <Icon id={icon} className="h-8 w-8" />

          <h3 className="my-3">{description}</h3>
        </div>
      ) : (
        <h3 className="my-3">{description}</h3>
      )}

      {eventTime && (
        <small className="font-bold pb-2 text-rose-400 self-end">{eventTime}</small>
      )}
    </div>

    <hr className="border-rose-300 my-6" />
  </>
);
