import { META_PIXEL_ID } from '../config';

const KEY = 'everhome-cookie-consent';
export type Consent = 'granted' | 'denied' | null;

declare global {
  interface Window {
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: unknown;
  }
}

export function getConsent(): Consent {
  try {
    const v = localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Exclude<Consent, null>) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* np. tryb prywatny – wybór obowiązuje do końca wizyty */
  }
}

const pixelId = META_PIXEL_ID.trim();

/** Ładuje piksel Meta tylko przy zgodzie i uzupełnionym META_PIXEL_ID. Wysyła PageView. */
export function loadPixel(): boolean {
  if (!pixelId || getConsent() !== 'granted') return false;
  if (window.fbq) return true;
  /* Oficjalny fragment kodu Meta Pixel */
  const n: any = (window.fbq = function (...args: unknown[]) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
  } as any);
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(s);
  n('init', pixelId);
  n('track', 'PageView');
  return true;
}

/** Wysyła zdarzenie standardowe (Lead, Schedule) – tylko po zgodzie. */
export function track(event: 'Lead' | 'Schedule', params?: Record<string, unknown>) {
  if (!loadPixel()) return;
  window.fbq?.('track', event, params ?? {});
}

/** Usuwa ciasteczka piksela po wycofaniu zgody. */
export function clearPixelCookies() {
  const host = location.hostname.replace(/^www\./, '');
  for (const name of ['_fbp', '_fbc']) {
    for (const domain of ['', `; domain=.${host}`, `; domain=${location.hostname}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
    }
  }
}
