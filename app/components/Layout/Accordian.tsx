import { type PropsWithChildren, useState } from 'react';

// @ts-ignore
export const Accordian = ({ children, title = '' }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <h3 className="cursor-pointer my-3" onClick={toggleOpen}>
        {title}
      </h3>

      {isOpen && <>{children}</>}

      <hr />
    </>
  );
};
