import { useMemo, type PropsWithChildren } from 'react';
// import type { LinksFunction, MetaFunction } from '@remix-run/node';
// import type { LinksFunction } from '@remix-run/node';
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
} from '@remix-run/react';

import globalStylesheetUrl from './styles/global.css';
import { Header } from '~/components/Layout/Header';

// export const links: LinksFunction = () => {
//   return [
//     { rel: 'stylesheet', href: globalStylesheetUrl, as: 'style' },
//     // { rel: 'preload', href: globalStylesheetUrl, as: 'style' },
//   ];
// };

// export const meta: MetaFunction = () => {
//   const description =
//     "Roz & Simon's Jamaican destination wedding, RSVP & details";
//
//   return [
//     { name: 'description', content: description },
//     { name: 'twitter:description', content: description },
//     { title: "Roz & Simon's Jamaican Wedding" },
//   ];
// };

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="jamaica,wedding,destination wedding" />
        <link rel="stylesheet" href={globalStylesheetUrl} as="style" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>

      <body
        className="bg-cover bg-no-repeat bg-right-bottom bg-[url('/assets/travel-background.jpeg')] min-h-screen"
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
