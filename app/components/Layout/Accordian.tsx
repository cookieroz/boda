import { type PropsWithChildren, useState } from 'react';

// @ts-ignore
export const Accordian = ({ children, title = '' }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleWrapperStyles =
    'animate-[' + (isOpen ? 'slideUp' : 'slideDown') + '_1s_ease-in-out]';

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
