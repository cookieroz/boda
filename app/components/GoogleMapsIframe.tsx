export const GoogleMapsIframe = ({ src = '', title = 'Google Maps' }: any) =>
  src ? (
    <div className="overflow-hidden relative">
      <iframe
        className="absolute border-0 h-full left-0 top-0 w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
        title={title}
      />
    </div>
  ) : null;
