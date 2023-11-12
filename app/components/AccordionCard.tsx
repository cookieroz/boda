import React from 'react';

import { Iframe } from '~/components/Iframe';
import { Accordion } from '~/components/Layout/Accordion';

interface TravelCardProps {
  children?: React.ReactNode;
  description?: string;
  googleMapsSrc?: string;
  title: string;
  youtubeSrc?: string;
}

export const AccordionCard = ({
  children,
  description,
  googleMapsSrc,
  title,
  youtubeSrc,
}: TravelCardProps) => (
  <Accordion title={title}>
    {description && <p>{description}</p>}

    {children}

    {youtubeSrc && (
      <div className="h-80 mb-6 relative">
        <Iframe src={youtubeSrc} />
      </div>
    )}

    {googleMapsSrc && (
      <div className="h-80 overflow-hidden relative">
        <Iframe src={googleMapsSrc} />
      </div>
    )}
  </Accordion>
);
