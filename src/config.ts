/**
 * Ustawienia strony everhome.
 *
 * Każda wartość może zostać pusta – strona nadal zadziała:
 * - pusty CALENDLY_URL   → w kroku 2 zamiast kalendarza pojawi się żółta informacja [DO UZUPEŁNIENIA],
 * - pusty GHL_WEBHOOK_URL → formularz przejdzie dalej, ale dane nie trafią do CRM (ostrzeżenie w konsoli),
 * - pusty META_PIXEL_ID   → piksel Meta w ogóle się nie ładuje,
 * - pusty CONTACT_EMAIL   → w stopce pojawi się żółta informacja [DO UZUPEŁNIENIA].
 */

// TODO: link do wydarzenia w Calendly, np. 'https://calendly.com/twoja-nazwa/bezplatna-analiza'
export const CALENDLY_URL = 'https://calendly.com/turowski_piotr/30min';

// TODO: adres z wyzwalacza „Inbound Webhook” w GoHighLevel (Automation → Workflows)
export const GHL_WEBHOOK_URL = '';

// TODO: identyfikator piksela z Menedżera zdarzeń Meta (same cyfry), np. '123456789012345'
export const META_PIXEL_ID = '';

// TODO: adres e-mail widoczny w stopce i w danych strukturalnych
export const CONTACT_EMAIL = 'piotr@everweb.pl';
