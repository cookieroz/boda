import { MetaFunction } from '@remix-run/node';

import { AccordionCard } from '~/components/AccordionCard';
import { Iframe } from '~/components/Iframe';
import { TravelNotice } from '~/components/TravelNotice';
import { buildMetaTags } from '~/lib/metaUtils';

export const meta: MetaFunction = ({ location }) => {
  const description =
    'Negril is a place of extraordinary natural beauty, vibrant culture, and a laid-back atmosphere that makes it the perfect backdrop for our special day. From its famous Seven Mile Beach to the enchanting cliffs and lush tropical landscapes, Negril offers a picture-perfect setting for our wedding festivities.';
  const title = 'Negril, Jamaica Highlights';

  return buildMetaTags({
    description,
    title,
    url: location.pathname,
  });
};

const NegrilPage = () => (
  <>
    <h1>Negril Highlights</h1>

    <TravelNotice />

    <p>
      We are thrilled to invite you to join us in celebrating our love in the
      stunning paradise of Negril, Jamaica. As we exchange vows in this
      beautiful coastal town, we want to share with you why we chose this
      tropical haven for our destination wedding.
    </p>

    <p className="pb-8">
      Negril is a place of extraordinary natural beauty, vibrant culture, and a
      laid-back atmosphere that makes it the perfect backdrop for our special
      day. From its famous Seven Mile Beach to the enchanting cliffs and lush
      tropical landscapes, Negril offers a picture-perfect setting for our
      wedding festivities.
    </p>

    {NEGRIL_HIGHLIGHTS.map(
      ({ description, googleMapsSrc, title, youtubeSrc }) => (
        <AccordionCard
          key={title}
          description={description}
          googleMapsSrc={googleMapsSrc}
          youtubeSrc={youtubeSrc}
          title={title}
        />
      )
    )}

    <div className="h-28 overflow-hidden relative">
      <Iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1628828416&color=%23e0e5e7&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false" />
    </div>
  </>
);

const NEGRIL_HIGHLIGHTS = [
  {
    description:
      "This pristine stretch of white sand is the perfect place to soak in the sun and enjoy the crystal-clear waters. Dive into the mesmerizing underwater world with a snorkeling adventure or take a glass-bottom boat tour to explore Negril's coral reefs and marine life.",
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30306.508408409914!2d-78.36394746988081!3d18.287263663115105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90daa7ec917d5%3A0xf4e78a91c14901e5!2sNegril%20Seven%20Mile%20Beach!5e0!3m2!1sen!2suk!4v1699132030536!5m2!1sen!2suk',
    title: 'Seven Mile Beach',
    youtubeSrc: 'https://www.youtube.com/embed/8SAbBVdx2JQ?si=bdXCNkGQnGLSeKYL',
  },
  {
    description:
      "Make your way to Rick's Café, perched on the cliffs of Negril. Here, you can enjoy cliff diving shows, live reggae music, and breathtaking views of the Caribbean Sea.",
    googleMapsSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d947.2581703480386!2d-78.36352082161144!3d18.254323337682344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed9120b7e08c91d%3A0xd50aa55ffa3857cd!2sRick's+Cafe!5e0!3m2!1sen!2sus!4v1519413800021",
    title: "Rick's Café",
    youtubeSrc: 'https://www.youtube.com/embed/sJnM-NdJ9qg?si=Vsj6LsvQHNGJUG1B',
  },
  {
    description:
      'For some family fun, visit the Kool Runnings Water Park and enjoy thrilling water slides and lazy river rides.',
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66724.96429091746!2d-78.39425462704355!3d18.327457967584834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed90c8b20d448d5%3A0x9883393063ec7c59!2sKool%20Runnings%20Waterpark!5e0!3m2!1sen!2suk!4v1699131704895!5m2!1sen!2suk',
    title: 'Kool Runnings Waterpark',
  },
  {
    description:
      "Take a dip in the refreshing mineral spring water at Blue Hole, a hidden gem nestled in a cave. It's a unique experience you won't want to miss.",
    googleMapsSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.585509386387!2d-78.28809605525453!3d18.228961533847414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ed96d36e4e6d277%3A0x9a98045c5ca6a4c4!2sBlue%20Hole%20Mineral%20Spring%20%7C%20Jamaica!5e0!3m2!1sen!2suk!4v1699131969180!5m2!1sen!2suk',
    title: 'Blue Hole Mineral Spring',
  },
];

export default NegrilPage;
