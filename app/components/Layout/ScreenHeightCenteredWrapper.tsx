import { type PropsWithChildren } from 'react';

export const ScreenHeightCenteredWrapper = ({
  children,
}: PropsWithChildren) => (
  <section className="flex h-screen items-center justify-center w-full">
    {children}
  </section>
);
