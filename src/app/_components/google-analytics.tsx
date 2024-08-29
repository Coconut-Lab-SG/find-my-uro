import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { envVars } from '../_lib/constants/env-vars'

export default function CustomGoogleAnalytics() {
  // return process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? (
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${envVars.GOOGLE_ANALYTICS_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${envVars.GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
      <GoogleTagManager gtmId={envVars.GOOGLE_TAG_MANAGER_ID!} />
    </>
  )
  // ) : null;
}
