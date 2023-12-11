import { Icon } from '~/components/Icon';

interface ScheduleCardTitleProps {
  icon?: string;
  title: string;
}

export const ScheduleCardTitle = ({ icon, title }: ScheduleCardTitleProps) => (
  <>
    {icon && title && (
      <div className="flex gap-4 items-center">
        <Icon id={icon} className="h-8 w-8" />

        <h3 className="my-3">{title}</h3>
      </div>
    )}

    {title && !icon && <h3 className="my-3">{title}</h3>}

    {icon && !title && <Icon id={icon} className="h-8 w-8" />}
  </>
);
