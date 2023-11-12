import { useScript } from '~/hooks/useScript';

export const Footer = () => {
  useScript({
    defer: true,
    id: 'weatherwidget-io-js',
    src: 'https://weatherwidget.io/js/widget.min.js',
  });

  return (
    <footer className="h-28 mt-6 relative">
      <a
        className="weatherwidget-io"
        data-days="7"
        data-icons="Climacons Animated"
        data-label_1="NEGRIL"
        data-label_2="WEATHER"
        data-theme="beige"
        href="https://forecast7.com/en/18d27n78d35/negril/?unit=us"
      >
        NEGRIL WEATHER
      </a>
    </footer>
  );
};
