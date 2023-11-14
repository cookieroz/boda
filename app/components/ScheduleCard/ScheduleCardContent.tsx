import { Icon } from '~/components/Icon';
import { Iframe } from '~/components/Iframe';

interface ScheduleCardContentProps {
  attire?: string;
  description?: string;
  eventTime?: string;
  googleMapSrc?: string;
  icon?: string;
  location?: string;
  link?: string;
  title: string;
  youtubeSrc?: string;
}

export const ScheduleCardContent = ({
  attire,
  description,
  eventTime,
  googleMapSrc,
  icon,
  location,
  link,
  title,
  youtubeSrc,
}: ScheduleCardContentProps) => (
  <>
    {icon && title && (
      <div className="flex gap-4 items-center">
        <Icon id={icon} className="h-8 w-8" />

        <h3 className="my-3">{title}</h3>
      </div>
    )}

    {title && !icon && <h3 className="my-3">{title}</h3>}

    {icon && !title && <Icon id={icon} className="h-8 w-8" />}

    {eventTime && (
      <small className="font-bold pb-2 text-rose-400">{eventTime}</small>
    )}

    {description && <p>{description}</p>}

    {attire && <p>{attire}</p>}

    {location && (
      <p className="font-bold">
        {link ? (
          <a
            aria-label={`${location} link`}
            className="cursor-pointer font-bold mr-2 text-cyan-700 hover:underline"
            title={`${location} link`}
            href={link === 'home' ? '/' : `/${link}`}
          >
            {location}
          </a>
        ) : (
          location
        )}
      </p>
    )}

    {youtubeSrc && (
      <div className="h-80 mb-6 relative">
        <Iframe src={youtubeSrc} />
      </div>
    )}

    {googleMapSrc && (
      <div className="h-60 mb-3 relative">
        <Iframe src={googleMapSrc} />
      </div>
    )}
  </>
);
