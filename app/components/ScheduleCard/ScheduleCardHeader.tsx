import { Icon } from '~/components/Icon';

export const ScheduleCardHeader = ({ eventDate = '', arrowStyles = '' }) =>
  eventDate.length > 0 ? (
    <>
      <div className="flex items-center justify-between">
        <h4 className="font-bold my-3 text-rose-400">{eventDate}</h4>

        {arrowStyles?.length > 0 && (
          <Icon
            id="arrow-circle"
            className={
              'duration-500 ease-linear h-8 w-8 transition-transform ' +
              arrowStyles
            }
          />
        )}
      </div>

      <hr className="border-rose-300" />
    </>
  ) : null;
