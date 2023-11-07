import React, { type PropsWithChildren, useState } from 'react';

interface AccordianProps {
  children?: React.ReactNode;
  title?: string;
}

export const Accordian = ({ children, title = '' }: AccordianProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleWrapperStyles = isOpen
    ? 'animate-slideDown visible translate-y-full h-auto'
    : 'animate-slideUp invisible translate-y-[-100%] h-0';

  return (
    <>
      <h3
        className="cursor-pointer my-3 hover:text-cyan-700"
        onClick={toggleOpen}
      >
        {title}
      </h3>

      <div className={toggleWrapperStyles}>{children}</div>

      <hr className="py-4" />
    </>
  );
};
