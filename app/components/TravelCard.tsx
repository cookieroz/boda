import React from 'react';

import { Iframe } from '~/components/Iframe';

interface TravelCardProps {
  children?: React.ReactNode;
  description?: string;
  googleMapsSrc?: string;
  title?: string;
  youtubeSrc?: string;
}

export const TravelCard = ({
  children,
  description,
  googleMapsSrc,
  title,
  youtubeSrc,
}: TravelCardProps) => (
  <>
    <div className="mb-6">
      {title && <h3 className="my-3">{title}</h3>}

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
    </div>

    <hr className="py-3" />
  </>
);
