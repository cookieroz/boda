import { type MetaFunction } from '@remix-run/node';
import React from 'react';

import { AccordionCard } from '~/components/AccordionCard';
import { Iframe } from '~/components/Iframe';
import { StyledLink } from '~/components/StyledLink';
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

    <AccordionCard key="getting-in-jamaica" icon="airplane" title="Getting In">
      <p className="mb-3 mt-6">
        We recommend flying into Montego Bay- Sangster International Airport.
        Expect around <span className="font-bold">2 hours</span> to get through
        the airport & customs. From there it is around a 2 hour drive south to
        Negril.
      </p>

      <p className="mb-3">
        <StyledLink
          href="https://www.rome2rio.com/s/Montego-Bay-Airport-MBJ/Negril"
          // @ts-ignore
          title="How to get from Montego Bay Airport (MBJ) to Negril"
        >
          How to get from Montego Bay Airport (MBJ) to Negril.
        </StyledLink>
      </p>

      <p className="mb-3">
        <StyledLink
          href="https://www.exploringcaribbean.com/montego-bay-to-negril/"
          // @ts-ignore
          title="Detailed article on traveling to Negril from Montego Bay Airport (MBJ)"
        >
          Detailed article on traveling to Negril from Montego Bay Airport
          (MBJ).
        </StyledLink>
      </p>
    </AccordionCard>

    <AccordionCard
      key="forms-to-fill-jamaica"
      icon="ticket"
      title="Forms to fill out before arriving to Jamaica"
    >
      <p className="mb-3 mt-6">
        <span className="font-bold text-rose-400">ALL</span> international
        passengers to Jamaica are required to complete the digital{' '}
        <StyledLink
          href="https://enterjamaica.com/"
          // @ts-ignore
          title="C5 Immigration and Customs Form"
        >
          C5 Immigration and Customs Form
        </StyledLink>
        . Please go to the link and fill out the electronic form before taking
        your flight.
      </p>
    </AccordionCard>

    <AccordionCard
      key="getting-around-jamaica"
      icon="map"
      title="Getting around"
    >
      <p className="mb-3 mt-6">
        It is recommended to take taxis to get around.{' '}
        <strong>There is no Uber in Negril.</strong> You can also rent a car if
        you want to explore the island. They do drive on the left side of the
        road, like in UK.
      </p>

      <p className="mb-3">
        <StyledLink
          href="https://www.frommers.com/destinations/negril/planning-a-trip/getting-around"
          // @ts-ignore
          title="How to get around Negril"
        >
          Frommer's take on getting around Negril:
        </StyledLink>{' '}
        You can also rent a scooter or pedal bicycle from local shops there. The
        scooter is recommended over the bicycle, just because you are more
        visible to cars and can go faster to keep up with traffic. A bike helmet
        is included in the rental fee which is roughly $40/day but can be
        negotiated.
      </p>
    </AccordionCard>

    <AccordionCard
      key="cell-service-jamaica"
      icon="wallet"
      title="Mobile & Money"
    >
      <p className="mb-3 mt-6">
        Check with your cell / mobile provider for prices on data usage /
        roaming in Jamaica. If you have an eSIM compatible phone, you can buy a
        local eSIM in Jamaica.{' '}
        <StyledLink
          href="https://esimdb.com/jamaica"
          // @ts-ignore
          title="eSIM in Jamaica"
        >
          eSIM / Mobile / Cell options (with prices) in Jamaica
        </StyledLink>
      </p>

      <p className="mb-3">
        <StyledLink
          href="https://www.frommers.com/destinations/jamaica/planning-a-trip/money"
          // @ts-ignore
          title="Money in Jamaica"
        >
          Frommer's take on money in Jamaica:
        </StyledLink>{' '}
        All the major resorts and first-class restaurants quote prices in U.S.
        dollars, so many visitors can go through their entire trip without the
        bother of converting their currency into Jamaican dollars. But it's
        still prudent to carry some Jamaican dollars: For some transactions,
        such as a drink of coconut water from a roadside vendor, prices are only
        quoted in Jamaican dollars.
      </p>
    </AccordionCard>

    <AccordionCard key="travel-tips" icon="jamaica" title="Jamaica Travel Tips">
      <div className="flex flex-col gap-x-3 justify-between md:flex-row">
        <p className="flex flex-col flex-1">
          <span className="font-medium mb-4 text-xl">
            Jamaica uses the <strong className="underline">same</strong> plugs
            as the US, the voltage is 110v.
          </span>

          {TIP_LINKS.map(({ href, title }) => (
            <StyledLink
              key={title}
              className="mb-2"
              href={href}
              // @ts-ignore
              title={title}
            >
              {title}
            </StyledLink>
          ))}
        </p>

        <img
          alt="jamaica electric plug"
          className="flex-1 w-full h-auto md:w-3/12"
          src="https://world-power-plugs.com/img/plugs/es/jamaica-enchufes-el%C3%A9ctricos.png"
        />
      </div>
    </AccordionCard>

    <AccordionCard
      key="Accommodations"
      description='There are plenty of options on where to stay in Negril. We are staying at the Riu Negril. There is a 10% discount and free transportation if you sign up to be a "Riu Class" member before you make the reservation. There are lots of all inclusive hotels as well as budget options. Lots of affordable airbnb places as well. The wedding activities will be near the south, on the "west end" near the cliffs and no beach.'
      icon="suitcase"
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

    <div className="flex flex-col flex-wrap gap-x-3 justify-between py-6 md:flex-row">
      {INTRO_VIDEOS.map((src) => (
        <div key={src} className="flex-1 h-80 relative">
          <Iframe src={src} />
        </div>
      ))}
    </div>
  </>
);

const INTRO_VIDEOS = [
  'https://www.youtube.com/embed/DL8cobA52Tk?si=A3Iuq64Y7w3nV-rc',
  'https://www.youtube.com/embed/_OjVPYxh6go?si=hNSh81n155YzLILj',
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
