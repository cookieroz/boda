export const TravelCard = ({ description, title }: any) => (
  <div className="my-6">
    {title && <h3 className="my-3">{title}</h3>}

    {description && <p>{description}</p>}
  </div>
);
