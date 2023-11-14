import React from 'react';
import { type MetaFunction } from '@remix-run/node';

import { AccordionCard } from '~/components/AccordionCard';
import { Iframe } from '~/components/Iframe';
import { buildMetaTags } from '~/lib/metaUtils';

export const meta: MetaFunction = ({ location }) => {
  const description =
    'Tips on traveling to Jamaica & Negril. Consejos para viajar a Negril, Jamaica.';
  const title = 'Jamaica Travel Tips';

  return buildMetaTags({
    description,
    title,
    url: location.pathname,
  });
};

const TravelPage = () => (
  <>
    <h1 className="my-3">Travel</h1>

    <div className="flex flex-col flex-wrap gap-x-3 justify-between py-6 md:flex-row">
      {INTRO_VIDEOS.map((src) => (
        <div key={src} className="flex-1 h-80 relative">
          <Iframe src={src} />
        </div>
      ))}

      <hr className="basis-full border-rose-300 border-2 mt-12" />
    </div>

    <AccordionCard
      key="travel-tips"
      title="Forms to fill out before arriving to Jamaica"
    >
      <p className="mb-3">
        <span className="font-bold text-rose-400">ALL</span> international
        passengers to Jamaica are required to complete the digital{' '}
        <a
          className="font-bold text-rose-400 underline hover:text-cyan-700"
          href="https://enterjamaica.com/"
          target="_blank"
          title="C5 Immigration and Customs Form"
        >
          C5 Immigration and Customs Form
        </a>
        . Please go to the link and fill out the electronic form before taking
        your flight.
      </p>
    </AccordionCard>

    <AccordionCard key="travel-tips" title="Jamaica Travel Tips">
      <div className="flex flex-col gap-x-3 justify-between md:flex-row">
        <p className="flex flex-col flex-1">
          <span className="font-medium mb-4 text-xl">
            Jamaica uses the <strong className="underline">same</strong> plugs
            as the US, the voltage is 110v.
          </span>

          {TIP_LINKS.map(({ href, title }) => (
            <a
              key={title}
              className="mb-2 text-cyan-700 underline hover:text-rose-400"
              href={href}
              target="_blank"
              title={title}
            >
              {title}
            </a>
          ))}
        </p>

        <img
          alt="jamaica electric plug"
          className="flex-1 w-full h-auto md:w-3/12"
          src="https://world-power-plugs.com/img/plugs/es/jamaica-enchufes-el%C3%A9ctricos.png"
        />
      </div>
    </AccordionCard>

    {TRAVEL_DETAILS.map(({ description, title }) => (
      <AccordionCard key={title} description={description} title={title} />
    ))}

    <AccordionCard
      key="Accommodations"
      description='There are plenty of options on where to stay in Negril. There are lots of all inclusive hotels as well as budget options. Lots of affordable airbnb places as well. The wedding activities will be near the south, on the "west end" near the cliffs and no beach.'
      title="Accommodation"
    >
      <p>Some options we thought were nice:</p>

      <div className="flex flex-col flex-wrap md:flex-row gap-4 justify-between">
        {HOTEL_OPTIONS.map(({ googleMapsSrc, title }) => (
          <div key={title} className="basis-full md:basis-[48%]">
            <h4 className="my-3">{title}</h4>

            <div className="h-40 overflow-hidden relative">
              <Iframe src={googleMapsSrc} />
            </div>
          </div>
        ))}
      </div>
    </AccordionCard>
  </>
);

const INTRO_VIDEOS = [
  'https://www.youtube.com/embed/DL8cobA52Tk?si=A3Iuq64Y7w3nV-rc',
  'https://www.youtube.com/embed/_OjVPYxh6go?si=hNSh81n155YzLILj',
];

const TRAVEL_DETAILS = [
  {
    description:
      'We recommend taking taxis to get around. You can also rent a car if you want to explore the island. They do drive on the left side of the road, like in UK.',
    title: 'Getting around',
  },
  {
    description:
      'We recommend flying into Montego Bay- Sangster International Airport. From there it is around a 1 hour drive south to Negril.',
    title: 'Getting In',
  },
];

const TIP_LINKS = [
  {
    href: 'https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-jamaica',
    title: '21 things to know before traveling to Jamaica',
  },
  {
    href: 'https://www.elviajedesofi.com/viajar-jamaica/',
    title: 'Viajar a Jamaica en 20 tips',
  },
  {
    href: 'https://oceancliffhotel.com/vacation-guide/',
    title: 'Your Guide to Negril, Jamaica - [password to enter is "vacation"]',
  },
  {
    href: 'https://www.viajarjamaica.com/equipaje-que-llevar.php',
    title: '¿Qué llevar a un viaje a Jamaica?',
  },
];

const HOTEL_OPTIONS = [
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.0368376952015!2d-78.34067358931651!3d18.299923475805148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90d85f687d47f%3A0x29f4ce5a16528423!2sCharela%20Inn%20Hotel!5e0!3m2!1sen!2suk!4v1699312578092!5m2!1sen!2suk',
    title: 'Charela Inn Hotel',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15156.041234932729!2d-78.3642206!3d18.255349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed9120a520c808f%3A0xd0b3853ab7219305!2sCatcha%20Falling%20Star!5e0!3m2!1sen!2suk!4v1699312456854!5m2!1sen!2suk',
    title: 'Catcha Falling Star',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.6078287481973!2d-78.367849089317!3d18.27379097659418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90d24d65dcfe5%3A0xa52d68cf60b3bd51!2sBegona%20Cliff%20Hotel!5e0!3m2!1sen!2suk!4v1699312510051!5m2!1sen!2suk',
    title: 'Begona Cliff Hotel',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15147.285498548466!2d-78.3497441402212!3d18.355431815510315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90b7f791ff33b%3A0x2574b3176a6b0655!2sHotel%20Riu%20Negril!5e0!3m2!1sen!2suk!4v1699313586555!5m2!1sen!2suk',
    title: 'Rui All inclusive resort',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30308.146278382435!2d-78.38107831049186!3d18.277891512743903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90d70a7e8e7c3%3A0xd9df3272413323c5!2sOcean%20Cliff%20Hotel!5e0!3m2!1sen!2suk!4v1699313705426!5m2!1sen!2suk',
    title: 'Ocean Cliff Hotel',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5407.0777069059595!2d-78.36817405318882!3d18.2549866594076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed9120ba3b332f3%3A0x7a2a61cdecdaf6f6!2sTensing%20Pen%20Resort!5e0!3m2!1sen!2suk!4v1699314306087!5m2!1sen!2suk',
    title: 'Tensing Pen Resort',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15148.485792383704!2d-78.3348285!3d18.341742999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90c864bcdc8ed%3A0xe381fc0be00bb8cf!2sCouples%20Negril!5e0!3m2!1sen!2suk!4v1699314438089!5m2!1sen!2suk',
    title: 'Couples Negril',
  },
  {
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29984.348326039497!2d-78.35017566193238!3d18.33747144510689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90c89ff5fafb7%3A0xce180039b79986b0!2sSandals%20Negril!5e0!3m2!1sen!2suk!4v1699314493915!5m2!1sen!2suk',
    title: 'Sandals Negril',
  },
];

export default TravelPage;
