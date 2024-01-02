import { describe, expect, test, vi } from 'vitest';

import { buildMetaTags } from '~/lib/metaUtils';

describe('buildMetaTags', () => {
  test('should build meta tags with default values', () => {
    const metaTags = buildMetaTags({});

    expect(metaTags).toHaveLength(5);

    expect(metaTags[0].title).toBe('');
    expect(metaTags[1].content).toBe('');
    expect(metaTags[1].name).toBe('description');
    expect(metaTags[2].content).toBe('');
    expect(metaTags[2].property).toBe('og:title');
    expect(metaTags[3].content).toBe('');
    expect(metaTags[3].property).toBe('twitter:title');
    expect(metaTags[4].content).toBe('');
    expect(metaTags[4].property).toBe('twitter:description');
  });

  test('should build meta tags with custom values', () => {
    const mockParams = {
      description: 'Custom Description',
      title: 'Custom Title',
      url: 'https://example.com',
    };
    const metaTags = buildMetaTags(mockParams);

    expect(metaTags).toHaveLength(7);

    expect(metaTags[0].title).toBe(mockParams.title);
    expect(metaTags[1].content).toBe(mockParams.description);
    expect(metaTags[1].name).toBe('description');
    expect(metaTags[2].content).toBe(mockParams.title);
    expect(metaTags[2].property).toBe('og:title');
    expect(metaTags[3].content).toBe(mockParams.title);
    expect(metaTags[3].property).toBe('twitter:title');
    expect(metaTags[4].content).toBe(mockParams.description);
    expect(metaTags[4].property).toBe('twitter:description');
    expect(metaTags[5].content).toBe(mockParams.url);
    expect(metaTags[5].property).toBe('og:url');
    expect(metaTags[6].content).toBe(mockParams.url);
    expect(metaTags[6].property).toBe('twitter:url');
  });
});
