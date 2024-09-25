interface GtagEventParams {
  [key: string]: string | number | boolean | undefined
}

type GAEventProps = {
  event_category: string
  event_value: GtagEventParams
}

export function sendAnalyticEvent({ event_category, event_value }: GAEventProps) {
  if (window.gtag !== 'function') return
  window.gtag('event', event_category, event_value)
}
