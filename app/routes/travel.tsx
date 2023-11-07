import { TravelCard } from '~/components/TravelCard';
import { Iframe } from '~/components/Iframe';
import React from 'react';

const TravelPage = () => (
  <>
    <h1 className="my-3">Travel</h1>

    <TravelCard
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
    </TravelCard>

    {TRAVEL_DETAILS.map(({ description, title }) => (
      <TravelCard key={title} description={description} title={title} />
    ))}
  </>
);

const TRAVEL_DETAILS = [
  {
    description:
      'We recommend flying into Montego Bay- Sangster International Airport. From there it is around a 1 hour drive south to Negril.',
    title: 'Getting In',
  },
  {
    description:
      'We recommend taking taxis to get around. You can also rent a car if you want to explore the island. They do drive on the left side of the road, like in UK.',
    title: 'Getting around',
  },
  {
    description:
      'Jamaica uses the same outlets as the UK. We read that they do follow the US tipping culture as well.',
    title: 'Tips',
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
