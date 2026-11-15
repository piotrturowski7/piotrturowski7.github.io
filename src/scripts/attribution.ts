/** Zapisuje parametry UTM i fbclid z adresu w sessionStorage, żeby dołączyć je do zgłoszenia. */
export const ATTRIBUTION_KEY = 'everhome-attribution';
export const ATTRIBUTION_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid'] as const;

export function captureAttribution() {
  try {
    const params = new URLSearchParams(location.search);
    const found: Record<string, string> = {};
    for (const key of ATTRIBUTION_PARAMS) {
      const v = params.get(key);
      if (v) found[key] = v.slice(0, 500);
    }
    if (Object.keys(found).length) {
      found.landing_page = location.origin + location.pathname;
      sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(found));
    }
  } catch {
    /* sessionStorage niedostępny – pomijamy */
  }
}

export function readAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? '{}');
  } catch {
    return {};
  }
}
