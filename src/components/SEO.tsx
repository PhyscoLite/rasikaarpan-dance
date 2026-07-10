import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const defaultTitle = "Astrologer Shrikant & Rasikaarpan Dance Academy";
  const defaultDescription = "Unlock the Guidance Written in Your Stars with Astrologer Shrikant. Also join Rasikaarpan Dance Academy to explore Bharatanatyam, Kathak, Contemporary, Folk, and more.";
  
  const currentTitle = title ? `${title} | Shrikant & Rasikaarpan` : defaultTitle;
  const currentDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
    </Helmet>
  );
};

export default SEO;
