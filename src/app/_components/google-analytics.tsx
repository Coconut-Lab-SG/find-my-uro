// import Script from 'next/script'

export default function CustomGoogleAnalytics() {
  return process.env.NODE_ENV === 'development' ? (
    <>
      {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=${envVars.GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${envVars.GOOGLE_ANALYTICS_ID}');
        `}
      </Script> */}
      {/* <GoogleAnalytics gaId={envVars.GOOGLE_ANALYTICS_ID!} />
      <GoogleTagManager gtmId={envVars.GOOGLE_TAG_MANAGER_ID!} /> */}
    </>
  ) : null
}
