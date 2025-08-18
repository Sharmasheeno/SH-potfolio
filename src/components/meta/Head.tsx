import NextHead from 'next/head';

import useCurrentUrl from '@/hooks/useCurrentUrl';

interface HeadProps {
  title: string;
  description: string;
  ogImage: string;
  overrideTitle?: boolean;
  structuredData?: string;
}

function Head({
  title,
  description,
  ogImage,
  overrideTitle = false,
  structuredData = '',
}: HeadProps) {
  const currentUrl = useCurrentUrl();

  const htmlTitle = overrideTitle
    ? title
    : `${title} — Sharma dev · Front-End & Mobile Developer`;

  return (
    <NextHead>
      <title>{htmlTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Sharmake Hassan, Sharma dev, Front-End, Mobile, Developer" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%237733ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Plus Jakarta Sans, Arial, sans-serif' font-weight='800' font-size='34' fill='%23ffffff'%3ESH%3C/text%3E%3C/svg%3E"
      />
      
      {/* seo */}
      <link rel="canonical" href={currentUrl} />

      {/* og image */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`Image with "${title}" text.`} />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SharmakeHassan" />
      <meta name="twitter:creator" content="@SharmakeHassan" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`Image with "${title}" text.`} />

      {/* structured data */}
      {structuredData && (
        <script type="application/ld+json">{structuredData}</script>
      )}
    </NextHead>
  );
}

export default Head;
