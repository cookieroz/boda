export default function IndexRoute() {
  return (
    <div className="flex gap-4 py-8">
      <div className="flex flex-col flex-1 items-center justify-center">
        <img
          alt="cartoon of 2 cats getting married on the beach"
          className="max-h-full max-w-full"
          src="/assets/cartoon-wedding-cats-island.jpeg"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-4xl">
          We would love to celebrate our wedding with you in Jamaica!
        </h2>

        <div className="flex flex-col h-full items-center justify-center max-h-full -mt-8">
          <h2 className="text-4xl mb-3">wedding details</h2>

          <p>Date: December 16, 2023</p>
          <p>Time: (TBC)</p>
          <p>Location: Negril, Jamaica</p>
          {/*<p>Attire: Resort</p>*/}
        </div>
      </div>
    </div>
  );
}
