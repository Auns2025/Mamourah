import { useEffect } from 'react';

export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    const defaultTitle = 'MAMOURAH | Today, We Built the Future | UAE Construction & Development';
    document.title = title ? `${title} | MAMOURAH` : defaultTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }

    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      }
    }
  }, [title, description, canonical]);

  return null;
}
