import React from 'react';
import { Helmet } from 'react-helmet-async';
import { defaultMetadata } from '../utils/metadata';

const SEO = ({ title, description, keywords, ogImage, ogUrl }) => {
  const metaTitle = title ? `Kosala Service Center | ${title}` : defaultMetadata.title;
  const metaDescription = description || defaultMetadata.description;
  const metaKeywords = keywords || defaultMetadata.keywords;
  const metaImage = ogImage || defaultMetadata.ogImage;
  const metaUrl = ogUrl || defaultMetadata.ogUrl;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={defaultMetadata.author} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={defaultMetadata.ogType} />
      <meta property="og:site_name" content={defaultMetadata.siteName} />

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
