import React from 'react';

import { Icon } from '~/components/Icon';
import { StyledLink } from '~/components/StyledLink';

export const TravelNotice = () => (
  <p className="flex items-center mb-3">
    <span className="font-bold">NOTE:</span> <Icon className="h-8 w-8" id="passport" /> International passengers to Jamaica
    are required to complete the digital{'  '}
    <StyledLink
      className="font-bold ml-1 text-rose-400 underline hover:text-cyan-700"
      href="https://enterjamaica.com/"
      // @ts-ignore
      target="_blank"
      title="C5 Immigration and Customs Form"
    >
      C5 Immigration and Customs Form
    </StyledLink>
    .
  </p>
);
