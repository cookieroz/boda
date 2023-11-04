import { Link } from '@remix-run/react';

export const TopNav = () => (
  <nav className="flex items-center justify-between mb-6 px-4">
    <div className="md:flex md:items-center">
      {NAV_LINKS.map((link, index) => (
        <Link
          aria-label={`wedding ${link}`}
          className="mr-4"
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

// const NAV_LINKS = ['home', 'rsvp', 'travel', 'schedule', 'negril', 'faq'];
const NAV_LINKS = ['home', 'travel', 'schedule', 'negril', 'faq'];
