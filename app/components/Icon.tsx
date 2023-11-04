export const Icon = ({ id = '', ...props }) => (
  <svg {...props}>
    <use href={`/assets/svgs/sprite.svg#${id}`} />
  </svg>
);
