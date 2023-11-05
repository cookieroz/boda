import { HomeRow } from '~/components/HomeRow';

export default function IndexRoute() {
  return (
    <div className="flex flex-col-reverse gap-8 py-8 md:flex-row">
      <div className="flex flex-col flex-1 items-center justify-center">
        <img
          alt="cartoon of 2 cats getting married on the beach"
          className="max-h-full max-w-full"
          src="/assets/cartoon-wedding-cats-island.jpeg"
        />
      </div>

      <div className="flex-1">
        <h4 className="text-4xl">
          We would love to celebrate our wedding with you in Jamaica!
        </h4>

        <div className="flex flex-col items-center justify-center">
          <h2 className="my-4 text-4xl text-center">Wedding Details</h2>

          <div className="">
            <HomeRow boldText="Date" text=": December 16, 2023" />
            <HomeRow boldText="Time" text=": Time: 16:00h (TBC)" />
            <HomeRow boldText="Location" text=": Negril, Jamaica" />
            <HomeRow
              boldText="RSVP"
              text=": Contact Roz or Simon by December 8th, 2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
