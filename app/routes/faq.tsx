import { MetaFunction } from '@remix-run/node';

import { AccordionCard } from '~/components/AccordionCard';
import { buildMetaTags } from '~/lib/metaUtils';

export const meta: MetaFunction = ({ location }) => {
  const description =
    "Frequency Asked Questions about Roz & Simon's Negril, Jamaica Wedding";
  const title = "FAQ about Roz & Simon's Negril, Jamaica Wedding";

  return buildMetaTags({
    description,
    title,
    url: location.pathname,
  });
};

const DetailsPage = () => (
  <>
    <h1>FAQ</h1>

    {FAQ.map(({ answer, question }) => (
      <AccordionCard description={answer} key={question} title={question} />
    ))}
  </>
);

const FAQ = [
  {
    answer: 'Please RSVP by December 8th, 2023',
    question: 'When is the RSVP deadline?',
  },
  {
    answer: 'Yes! Just let us know the final total number of people coming.',
    question: 'Can I bring a date?',
  },
  { answer: 'Yes!', question: 'Are kids welcome?' },
  {
    answer:
      'The daytime temperatures hover around 84 degrees, while nighttime temperatures are between 72-75 degrees.',
    question: 'What will the weather be like?',
  },
  {
    answer:
      'Linen is always good, but we are just happy for your to come and celebrate and wear whatever you feel happy in. The venue is a hotel that is clothes optional so if you want to wear nothing, that works too!',
    question: 'What should I wear?',
  },
  {
    answer: 'It will be outdoors, on a beautiful cliff.',
    question: 'Is the wedding indoors or outdoors?',
  },
  {
    answer: 'Contact Roz or Simon with any questions you may have!',
    question: 'Whom should I call with questions?',
  },
  {
    answer:
      'December 16, 2019 is when Simon proposed to Roz. We never wanted a masked wedding or a wedding with any covid issues since we have so many friends and family living all over the globe. We saw that this date was available, it is a special date for us and Roz did not want to wait longer. Four years is long enough! We completely understand the short notice and that most people will not be able to make it.',
    question: 'Why is there such short notice?',
  },
  {
    answer:
      'Why not?! It was something that we were thinking of before covid and things worked out for us to celebrate in Jamaica this year. YOLO.',
    question: 'Why Jamaica?',
  },
  // { answer: '', question: '' },
];

export default DetailsPage;
