import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.yourdomain.com";

const SEO = ({
  title,
  description,
  keywords = [],
  canonical,
  image = "/logo.png",
}) => {
  const canonicalUrl = `${SITE_URL}${canonical}`;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords.join(", ")} />

      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:url" content={canonicalUrl} />

      <meta
        property="og:site_name"
        content="Phoenix Institute of Aviation & Hospitality"
      />

      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={imageUrl} />

      {/* Language */}
      <meta httpEquiv="content-language" content="en-IN" />
    </Helmet>
  );
};

export default SEO;
