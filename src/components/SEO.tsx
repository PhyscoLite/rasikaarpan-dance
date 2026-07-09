import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  const defaultTitle = "Rasikaarpan Dance Academy | Bharatanatyam & Beyond";
  const defaultDescription = "Join Rasikaarpan Dance Academy to explore Bharatanatyam, Kathak, Contemporary, Folk, and more. Experience the joy of movement rooted in tradition.";
  
  const currentTitle = title ? `${title} | Rasikaarpan` : defaultTitle;
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
