import { Iframe } from '~/components/Iframe';

export const TravelCard = ({ description, googleMapsSrc, title }: any) => (
  <>
    <div className="mb-6">
      {title && <h3 className="my-3">{title}</h3>}

      {description && <p>{description}</p>}

      {googleMapsSrc && (
        <div className="h-80 overflow-hidden relative">
          <Iframe src={googleMapsSrc} />
        </div>
      )}
    </div>

    <hr className="py-3" />
  </>
);
