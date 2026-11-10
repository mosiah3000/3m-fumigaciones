import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../data/siteData';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function useSEO({ title, description, canonicalPath }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    const fullUrl = `${COMPANY_INFO.siteUrl}${canonicalPath ?? location.pathname}`;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }
  }, [title, description, canonicalPath, location.pathname]);
}
