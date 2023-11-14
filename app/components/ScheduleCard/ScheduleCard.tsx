import { useState } from 'react';
import { ScheduleCardContent } from '~/components/ScheduleCard/ScheduleCardContent';
import { ScheduleCardHeader } from '~/components/ScheduleCard/ScheduleCardHeader';

export interface ScheduleCardProps {
  attire?: string;
  description?: string;
  eventDate?: string;
  eventTime?: string;
  googleMapSrc?: string;
  icon?: string;
  location?: string;
  link?: string;
  title: string;
  youtubeSrc?: string;
}

export const ScheduleCard = ({ eventDate, ...props }: ScheduleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleWrapperStyles = isOpen ? 'max-h-[1000px]' : 'max-h-0';
  const arrowStyles = isOpen ? 'rotate-180' : 'rotate-0';

  return (
    <div className="py-6">
      <div className="cursor-pointer" onClick={toggleOpen}>
        <ScheduleCardHeader arrowStyles={arrowStyles} eventDate={eventDate} />
      </div>

      <div
        className={
          'duration-500 ease-linear overflow-hidden transition-[max-height] ' +
          toggleWrapperStyles
        }
      >
        <ScheduleCardContent {...props} />
      </div>
    </div>
  );
};
