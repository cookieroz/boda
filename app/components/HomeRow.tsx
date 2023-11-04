export const HomeRow = ({ boldText = '', text = '' }) => (
  <p>
    <span className="font-bold underline">{boldText}</span> {text}
  </p>
);
