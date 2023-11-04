import { TravelCard } from '~/components/TravelCard';
import { Icon } from '~/components/Icon';

const TravelPage = () => (
  <>
    <h1 className="my-3">Travel</h1>

    <Icon id="suitcase" />

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
      'There are plenty of options on where to stay in Negril. There are lots of all inclusive hotels as well as budget options. Lots of affordable airbnb places as well. The wedding activities will be near the south, on the "west end" near the cliffs and no beach. Anywhere around Negril is a good option! We will be at the Riu if you want to be near us.',
    title: 'Accommodation',
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

export default TravelPage;
