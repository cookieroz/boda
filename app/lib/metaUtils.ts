interface MetaTag {
  content?: string;
  name?: string;
  property?: string;
  title?: string;
}

interface BuildMetaTagsOptions {
  description?: string;
  title?: string;
  url?: string;
}

const buildTag = (content = '', property = '', name = ''): MetaTag => ({
  content,
  ...(name?.length > 0 && { name }),
  ...(property?.length > 0 && { property }),
});

export const buildMetaTags = ({
  description = '',
  title = '',
  url = '',
}: BuildMetaTagsOptions): MetaTag[] => {
  let metaTags: MetaTag[] = [
    { title },
    buildTag(description, '', 'description'),
    buildTag(title, 'og:title'),
    buildTag(title, 'twitter:title'),
    buildTag(description, 'twitter:description'),
  ];

  if (url.length > 0) {
    metaTags = [
      ...metaTags,
      buildTag(url, 'og:url'),
      buildTag(url, 'twitter:url'),
    ];
  }

  return metaTags;
};
