import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  props?: { [key: string]: any };
}

export const StyledLink = ({
  children,
  className = '',
  href,
  target = '_blank',
  ...props
}: LinkProps) => {
  const styles =
    'font-bold ml-1 text-rose-400 underline hover:text-cyan-700 ' +
    (className.length > 0 ? className : '');

  return (
    <a className={styles} href={href} target={target} {...props}>
      {children}
    </a>
  );
};
