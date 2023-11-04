import { Link } from '@remix-run/react';

export const TopNav = () => (
  <nav className="flex items-center justify-between mb-6 px-4">
    <div className="md:flex md:items-center">
      {NAV_LINKS.map((link, index) => (
        <Link
          aria-label={`wedding ${link}`}
          className="cursor-pointer font-bold mr-2 text-xl hover:text-cyan-700 hover:underline sm:mr-5 sm:text-2xl"
          key={`nav-${link}-${index}`}
          title={`wedding ${link}`}
          to={link === 'home' ? '/' : `/${link}`}
        >
          {link}
        </Link>
      ))}
    </div>
  </nav>
);

const NAV_LINKS = ['home', 'travel', 'schedule', 'negril', 'faq'];
