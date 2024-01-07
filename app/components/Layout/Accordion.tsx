import React, { useState } from 'react';

import { Icon } from '~/components/Icon';

interface AccordionProps {
  children?: React.ReactNode;
  icon?: string;
  title?: string;
}

export const Accordion = ({
  children,
  icon = '',
  title = '',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleWrapperStyles = isOpen ? 'max-h-[1000px]' : 'max-h-0';
  const arrowStyles = isOpen ? 'rotate-180' : 'rotate-0';

  return (
    <div className="my-6">
      <h3
        className="cursor-pointer flex items-center justify-between my-3 hover:fill-cyan-700 hover:text-cyan-700 z-10"
        onClick={toggleOpen}
      >
        {icon && title ? (
          <span className="flex gap-4 items-center">
            <Icon id={icon} className="h-8 w-8" />

            {title}
          </span>
        ) : (
          title
        )}

        <Icon
          id="arrow"
          className={
            'duration-500 ease-linear h-6 w-6 transition-transform ' +
            arrowStyles
          }
        />
      </h3>

      <div
        className={
          'duration-500 ease-linear overflow-hidden transition-[max-height] ' +
          toggleWrapperStyles
        }
      >
        {children}
      </div>

      <hr className="py-4" />
    </div>
  );
};
