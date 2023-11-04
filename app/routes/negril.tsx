import { TravelCard } from '~/components/TravelCard';

const NegrilPage = () => (
  <>
    <h1>Negril Highlights</h1>

    <p>
      We are thrilled to invite you to join us in celebrating our love in the
      stunning paradise of Negril, Jamaica. As we exchange vows in this
      beautiful coastal town, we want to share with you why we chose this
      tropical haven for our destination wedding.
    </p>

    <p>
      Negril is a place of extraordinary natural beauty, vibrant culture, and a
      laid-back atmosphere that makes it the perfect backdrop for our special
      day. From its famous Seven Mile Beach to the enchanting cliffs and lush
      tropical landscapes, Negril offers a picture-perfect setting for our
      wedding festivities.
    </p>

    {NEGRIL_HIGHLIGHTS.map(({ description, title }) => (
      <TravelCard key={title} description={description} title={title} />
    ))}
  </>
);

const NEGRIL_HIGHLIGHTS = [
  {
    description:
      "Make your way to Rick's Café, perched on the cliffs of Negril. Here, you can enjoy cliff diving shows, live reggae music, and breathtaking views of the Caribbean Sea.",
    title: "Rick's Café",
  },
  {
    description:
      'Visit the historic Negril Lighthouse and climb to the top for panoramic views of the coast.',
    title: 'Negril Lighthouse',
  },
  {
    description:
      "Take a dip in the refreshing mineral spring water at Blue Hole, a hidden gem nestled in a cave. It's a unique experience you won't want to miss.",
    title: 'Blue Hole Mineral Spring',
  },
  {
    description:
      "This pristine stretch of white sand is the perfect place to soak in the sun and enjoy the crystal-clear waters. Dive into the mesmerizing underwater world with a snorkeling adventure or take a glass-bottom boat tour to explore Negril's coral reefs and marine life.",
    title: 'Seven Mile Beach',
  },
];

export default NegrilPage;
