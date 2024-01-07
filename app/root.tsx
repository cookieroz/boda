import { type MetaFunction } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
} from '@remix-run/react';
import { useMemo, type PropsWithChildren } from 'react';

import { Footer } from '~/components/Layout/Footer';
import { Header } from '~/components/Layout/Header';

import { buildMetaTags } from '~/lib/metaUtils';
import globalStylesheetUrl from './styles/global.css';

export const meta: MetaFunction = () => {
  const description = "Roz & Simon's Jamaican Destination Wedding";

  return buildMetaTags({
    description,
    title: "Roz & Simon's Jamaican Wedding",
  });
};

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/negril-wedding.jpeg" />
        <meta
          name="keywords"
          content="jamaica,wedding,destination wedding,negril wedding"
        />
        <meta name="twitter:card" content="/assets/negril-wedding.jpeg" />
        <meta name="twitter:image" content="/assets/negril-wedding.jpeg" />
        <link rel="stylesheet" href={globalStylesheetUrl} as="style" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>

      <body
        className="bg-cover bg-no-repeat bg-right-bottom bg-[url('/assets/travel-background.jpeg')] min-h-screen transition-all"
        suppressHydrationWarning={true}
      >
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <div className="container mx-auto max-w-screen-xl pb-8 px-8">
        <Header />

        <section className="bg-[rgba(255,255,255,.75)] p-5 shadow-lg">
          <Outlet />
        </section>

        <Footer />

        <img
          alt="svg sprite of icons"
          className="hidden"
          src="/assets/svgs/sprite.svg"
        />
      </div>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  const { errorMessage, header, title } = useMemo(() => {
    const isRouteError = isRouteErrorResponse(error);
    const errorMessage = isRouteError
      ? null
      : error instanceof Error
        ? error.message
        : 'Unknown error';
    const title = isRouteError
      ? `${error.status} ${error.statusText}`
      : 'Uh-oh!';
    const header = isRouteError ? title : 'App Error';

    return { errorMessage, header, title };
  }, [error]);

  return (
    <Document title={title}>
      <div className="error-container">
        <h1>{header}</h1>
        {errorMessage && <pre>{errorMessage}</pre>}
      </div>
    </Document>
  );
}
