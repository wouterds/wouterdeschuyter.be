import { useAmp } from 'next/amp';
import Head from 'next/head';
import React from 'react';

const GoogleAnalyticsSDK = () => {
  const isAmp = useAmp();

  if (isAmp) {
    return (
      <>
        <Head>
          <script
            async
            custom-element="amp-analytics"
            src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
          />
        </Head>
        <amp-analytics type="gtag" data-credentials="include">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                vars: {
                  gtag_id: `${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`,
                  config: {
                    [`${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`]: {
                      groups: 'default',
                    },
                  },
                },
              }),
            }}
          />
        </amp-analytics>
      </>
    );
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');`,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsSDK;