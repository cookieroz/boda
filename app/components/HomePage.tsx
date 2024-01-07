export const HomePage = () => (
  <>
    <h4 className="text-4xl">
      The day has passed! Thank you all near and far.
    </h4>

    <div className="flex flex-col-reverse gap-8 py-8 md:flex-row">
      <div className="flex flex-col flex-1 items-center justify-center">
        <img
          alt="cartoon of 2 cats getting married on the beach"
          className="max-h-full max-w-full"
          src="/assets/negril-wedding.jpeg"
        />
      </div>

      <div className="flex-1">
        <div className="flex flex-col items-center justify-center">
          <img
            alt="wedding photo with cat"
            className="max-h-full max-w-full"
            src="/assets/la-boda.png"
          />
        </div>
      </div>
    </div>
  </>
);
