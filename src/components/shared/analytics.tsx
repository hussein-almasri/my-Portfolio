"use client";

import { useEffect } from "react";

/**
 * Analytics Placeholder
 *
 * Replace this with your actual analytics provider:
 * - Vercel Analytics: import { Analytics } from "@vercel/analytics/react"
 * - Google Analytics: Use gtag.js
 * - Plausible, Fathom, Umami, etc.
 *
 * Example with Vercel Analytics:
 *   import { Analytics } from "@vercel/analytics/react";
 *   export function AnalyticsProvider() {
 *     return <Analytics />;
 *   }
 *
 * Example with Google Analytics:
 *   import Script from "next/script";
 *   export function AnalyticsProvider() {
 *     return (
 *       <>
 *         <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" strategy="afterInteractive" />
 *         <Script id="google-analytics" strategy="afterInteractive">
 *           {`window.dataLayer = window.dataLayer || [];
 *             function gtag(){dataLayer.push(arguments);}
 *             gtag('js', new Date());
 *             gtag('config', 'G-XXXXXXX');`}
 *         </Script>
 *       </>
 *     );
 *   }
 */

export function AnalyticsProvider() {
  useEffect(() => {
    // Placeholder: Log page view in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Analytics] Page view:", window.location.pathname);
    }
  }, []);

  return null;
}
