export const Iframe = ({ src = '', title }: any) =>
  src ? (
    <iframe
      className="absolute border-0 h-full left-0 top-0 w-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={src}
      title={title ?? 'iframe for ' + src}
    />
  ) : null;
