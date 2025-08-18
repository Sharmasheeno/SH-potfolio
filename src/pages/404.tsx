import Head from 'next/head';

import Error404Contents from '@/contents/404';

import type { ReactElement } from 'react';

function Error404() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%237733ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Plus Jakarta Sans, Arial, sans-serif' font-weight='800' font-size='34' fill='%23ffffff'%3ESH%3C/text%3E%3C/svg%3E"
        />
                <meta name="robots" content="noindex" />
      </Head>
      <Error404Contents />
    </>
  );
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error404;
