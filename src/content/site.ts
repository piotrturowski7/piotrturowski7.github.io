/**
 * Wszystkie teksty strony everhome.
 *
 * Zmieniasz treść tutaj – komponenty pobierają ją z tego pliku.
 * Tekst „[DO UZUPEŁNIENIA]” jest na stronie automatycznie wyświetlany na żółtym tle,
 * żeby nie dało się go przeoczyć przed publikacją. Każde takie miejsce ma obok komentarz TODO.
 * Pełną listę wypiszesz poleceniem: npm run todo
 */

export const TODO = '[DO UZUPEŁNIENIA]';

export const CTA_LABEL = 'Umów bezpłatną analizę';
export const BOOKING_ID = 'umow-rozmowe';

export const seo = {
  title: 'everhome | Meta Ads dla producentów domów modułowych',
  // maks. 155 znaków
  description:
    'Kampanie Meta Ads dla producentów i sprzedawców domów modułowych. Minimum 3 podpisane umowy w 90 dni albo zwrot pieniędzy. Umów bezpłatną analizę.',
  ogImageAlt: 'everhome – Meta Ads dla producentów domów modułowych',
};

export const company = {
  brand: 'everhome',
  legalName: 'Everweb.pl Piotr Turowski',
  brandNote: 'everhome to marka Everweb.pl Piotr Turowski',
  street: 'ul. Wojska Polskiego 5/5',
  postalCode: '64-100',
  city: 'Leszno',
  country: 'PL',
  nip: '6972383931',
  phoneDisplay: '+48 601 958 783',
  phoneHref: '+48601958783',
  copyright: '© 2026 everhome',
};

export const nav = {
  homeLabel: 'everhome – strona główna',
};

export const hero = {
  eyebrow: 'Meta Ads dla producentów domów modułowych',
  title: 'Podpisane umowy na domy modułowe. Z reklam na Facebooku i Instagramie.',
  lead: 'Tworzymy reklamy i prowadzimy kampanie, które przyprowadzają do Twojej firmy osoby realnie zainteresowane budową domu. Gwarantujemy minimum 3 umowy w 90 dni albo zwracamy pieniądze.',
  secondaryCta: 'Zobacz wyniki',
  stats: [
    { value: 'min. 200', label: 'zapytań w miesiąc' },
    { value: 'ok. 15 zł', label: 'za zapytanie' },
    { value: 'min. 3', label: 'podpisane umowy' },
  ],
  statsNote: 'Dane na podstawie średnich wyników przy budżecie reklamowym 3 000 pln / msc',
  // TODO: wklej link do wideo z YouTube lub Vimeo, np. 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
  videoUrl: '',
  videoTitle: 'Wideo: jak pozyskujemy klientów dla producentów domów modułowych',
  videoPlaceholder: 'Tu pojawi się wideo',
};

export const problem = {
  label: 'Problem',
  title: 'Dobre domy nie sprzedają się same',
  items: [
    {
      icon: 'tag',
      title: 'Zapytania tylko o cenę',
      text: 'Ktoś pyta „ile to kosztuje” i znika. Handlowiec traci czas, a umowy nie ma.',
    },
    {
      icon: 'handshake',
      title: 'Sprzedaż oparta na poleceniach i targach',
      text: 'Działa, dopóki działa. Gdy polecenia się kończą, w hali robi się pusto.',
    },
    {
      icon: 'factory',
      title: 'Wolne moce, które kosztują',
      text: 'Każdy miesiąc bez nowych zamówień to ludzie i maszyny, za które i tak płacisz.',
    },
    {
      icon: 'chart',
      title: 'Reklamy bez wyników',
      text: 'Płacisz za zasięgi i kliknięcia, a nie za rozmowy z ludźmi, którzy chcą budować.',
    },
  ],
};

export const whyMeta = {
  label: 'Dlaczego Meta Ads',
  title: 'Twój klient ogląda domy na długo, zanim zadzwoni',
  intro:
    'Decyzja o budowie dojrzewa miesiącami. W tym czasie przyszli klienci przeglądają projekty i realizacje na Facebooku i Instagramie. Właśnie tam do nich docieramy.',
  items: [
    {
      title: 'Obraz sprzedaje',
      text: 'Dom modułowy najlepiej pokazać na wideo i zdjęciach realizacji. Reklama wykonuje pierwszą część pracy handlowca.',
    },
    {
      title: 'Wcześniej niż konkurencja',
      text: 'Zanim klient zacznie porównywać oferty w wyszukiwarce, zna już Twoją firmę.',
    },
    {
      title: 'Formularz, który odsiewa',
      text: 'Pytania o działkę, budżet i termin budowy pokazują, z kim warto rozmawiać w pierwszej kolejności.',
    },
  ],
};

export const process = {
  label: 'Proces',
  title: 'Jak pracujemy',
  steps: [
    {
      title: 'Bezpłatna analiza',
      text: 'W 30 minut poznajemy Twoją ofertę, region i moce produkcyjne. Sprawdzamy, jak reklamuje się konkurencja.',
    },
    {
      title: 'Strategia i kreacje',
      text: 'Przygotowujemy reklamy na bazie Twoich realizacji: wideo, zdjęcia i teksty. Ustalamy budżet i grupy odbiorców.',
    },
    {
      title: 'Start kampanii',
      text: 'Uruchamiamy kampanie z formularzem kontaktowym na Facebooku i Instagramie. Zapytania od razu trafiają do Twojego zespołu.',
    },
    {
      title: 'Optymalizacja',
      text: 'Na bieżąco poprawiamy kampanie. Liczą się dla nas podpisane umowy, nie zasięgi.',
    },
  ],
};

export const caseStudy = {
  id: 'wyniki',
  label: 'Wyniki',
  title: 'Wyniki kampanii dla producenta domów modułowych',
  intro: 'Nazwa klienta pozostaje poufna.',
  stats: [
    { label: 'Budżet', value: '3 000 zł' },
    { label: 'Czas', value: '1 miesiąc' },
    { label: 'Zapytania', value: '216' },
    { label: 'Koszt zapytania', value: '13,83 zł' },
    { label: 'Podpisane umowy', value: '3' },
  ],
  highlight: {
    value: '1 000 zł',
    text: 'budżetu reklamowego na jedną podpisaną umowę.',
  },
  whatWeDidTitle: 'Co zrobiliśmy',
  whatWeDid:
    'Przygotowaliśmy kreacje reklamowe i uruchomiliśmy kampanie pozyskujące klientów przez formularz kontaktowy na Facebooku i Instagramie.',
  galleryResultsTitle: 'Zrzuty z Menedżera reklam',
  galleryAdsTitle: 'Przykładowe reklamy',
  results: [
    { file: 'case-wyniki-1', alt: 'Zrzut ekranu z Menedżera reklam Meta: wyniki kampanii dla producenta domów modułowych, część 1' },
  ],
  ads: [
    { file: 'reklama-1', video: '/reklama-1.mp4', alt: 'Przykładowa reklama domu modułowego na Facebooku i Instagramie, wariant 1' },
    { file: 'reklama-2', video: '/reklama-2.mp4', alt: 'Przykładowa reklama domu modułowego na Facebooku i Instagramie, wariant 2' },
    { file: 'reklama-3', video: '/reklama-3.mp4', alt: 'Przykładowa reklama domu modułowego na Facebooku i Instagramie, wariant 3' },
  ],
  zoomLabel: 'Powiększ',
  closeLabel: 'Zamknij',
  note: 'Wyniki zależą m.in. od regionu, oferty i budżetu.',
};

export const guarantee = {
  label: 'Gwarancja',
  title: 'Minimum 3 umowy w 90 dni. Albo zwracamy pieniądze.',
  text: 'Jeśli w ciągu 90 dni współpracy nie podpiszesz co najmniej 3 umów z klientami pozyskanymi z naszych kampanii, zwracamy wynagrodzenie za naszą usługę. Ryzyko jest po naszej stronie.',
};

export const about = {
  label: 'O mnie',
  title: 'Kto stoi za everhome',
  photoAlt: 'Piotr Turowski, założyciel everhome',
  paragraphs: [
    'Nazywam się Piotr Turowski. Od 3 lat prowadzę kampanie Meta Ads dla firm m.in. z branży tatuażu, budowlanej i edukacjnej.',
    'Dziś specjalizuję się w domach modułowych. To branża, która dynamicznie się rozwija, a producenci mają w niej ogromną szansę na wzrost. Moim zadaniem jest, żeby tę szansę wykorzystała Twoja firma.',
  ],
  signature: 'Piotr Turowski',
  role: 'Założyciel everhome',
};

export const forWhom = {
  label: 'Dla kogo',
  title: 'Czy to dla Ciebie?',
  yes: {
    title: 'To dla Ciebie, jeśli:',
    items: [
      'produkujesz lub sprzedajesz domy modułowe,',
      'masz wolne moce przerobowe i możesz realizować więcej zamówień,',
      'chcesz, żeby sprzedaż nie zależała wyłącznie od poleceń i targów.',
    ],
  },
  no: {
    title: 'To nie dla Ciebie, jeśli:',
    items: [
      'nie możesz wyprodukować więcej domów niż obecnie,',
      'masz zajęty kalendarz produkcji na pół roku do przodu.',
    ],
  },
};

export const faq = {
  label: 'FAQ',
  title: 'Najczęstsze pytania',
  items: [
    {
      q: 'Ile kosztuje współpraca?',
      a: 'Wycena zależy od regionu, skali i celów. Przedstawiamy ją podczas bezpłatnej analizy, bez zobowiązań.',
    },
    {
      q: 'Jaki budżet reklamowy jest potrzebny?',
      a: 'Ustalamy go indywidualnie. W opisanej kampanii było to 3 000 zł miesięcznie.',
    },
    {
      q: 'Kiedy pojawią się pierwsze zapytania?',
      a: 'Zwykle w pierwszych dniach po uruchomieniu kampanii.',
    },
    {
      q: 'Jak działa gwarancja?',
      // TODO: uzupełnij warunki gwarancji (te same co w sekcji Gwarancja)
      a: `Jeśli w 90 dni nie podpiszesz minimum 3 umów z klientami z naszych kampanii, zwracamy wynagrodzenie za usługę. Warunki: ${TODO}`,
    },
    {
      q: 'Czy zapytania będą wartościowe?',
      a: 'Formularz zawiera pytania kwalifikujące, a kampanie optymalizujemy pod jakość zapytań, nie tylko ich liczbę.',
    },
    {
      q: 'Na jak długo podpisujemy umowę?',
      // TODO: odpowiedź o długości umowy
      a: TODO,
    },
    {
      q: 'Co, jeśli nie mam dobrych zdjęć realizacji?',
      // TODO: odpowiedź o braku zdjęć realizacji
      a: TODO,
    },
  ],
};

export const booking = {
  label: 'Rozmowa',
  title: 'Sprawdź, ile umów możesz pozyskać z Meta Ads',
  lead: 'Bezpłatna analiza potencjału. 30 minut, bez zobowiązań.',
  text: 'Dowiesz się, ile zapytań i umów możesz realnie pozyskać w swoim regionie, jak reklamuje się Twoja konkurencja i jak mogłaby wyglądać Twoja pierwsza kampania.',
  step1Title: 'Twoje dane',
  submit: 'Wyślij zgłoszenie',
  sending: 'Wysyłanie…',
  requiredNote: 'Pola oznaczone * są wymagane.',
  optional: '(opcjonalnie)',
  fields: {
    name: { label: 'Imię i nazwisko', autocomplete: 'name' },
    email: { label: 'E-mail', autocomplete: 'email' },
    phone: { label: 'Telefon', autocomplete: 'tel' },
    company: { label: 'Nazwa firmy', autocomplete: 'organization' },
    website: { label: 'Strona internetowa', autocomplete: 'url', placeholder: 'np. www.twojafirma.pl' },
    business: {
      label: 'Czym się zajmujecie?',
      options: ['Produkujemy domy modułowe', 'Sprzedajemy domy modułowe', 'Jedno i drugie'],
    },
    volume: {
      label: 'Ile domów realizujecie rocznie?',
      options: ['do 10', '10–30', '30–60', 'ponad 60'],
    },
    capacity: {
      label: 'Czy macie wolne moce produkcyjne na nowe zamówienia?',
      options: [
        'Tak, od razu',
        'Tak, w ciągu 3 miesięcy',
        'Nie, kalendarz jest pełny na 6 miesięcy lub dłużej',
      ],
      // indeks odpowiedzi „Nie…”: po niej zamiast strony podziękowania pokazujemy komunikat noCapacityText
      noIndex: 2,
    },
  },
  // Zgody na kontakt: dobrowolne, domyślnie odznaczone. Ich treść trafia do CRM jako dowód zgody.
  consentsTitle: 'Zgody na kontakt (dobrowolne)',
  consents: [
    { id: 'phone', label: 'Wyrażam zgodę na kontakt telefoniczny w sprawie mojego zgłoszenia i usług everhome.' },
    { id: 'sms', label: 'Wyrażam zgodę na otrzymywanie wiadomości SMS w sprawie mojego zgłoszenia i usług everhome.' },
    { id: 'email', label: 'Wyrażam zgodę na otrzymywanie wiadomości e-mail w sprawie mojego zgłoszenia i usług everhome.' },
  ],
  consentsHint: 'Każdą zgodę możesz w dowolnym momencie wycofać. Najszybciej umówimy bezpłatną analizę telefonicznie.',
  errors: {
    required: 'To pole jest wymagane.',
    choose: 'Wybierz jedną z odpowiedzi.',
    name: 'Podaj imię i nazwisko.',
    email: 'Podaj poprawny adres e-mail, np. jan@firma.pl.',
    phone: 'Podaj poprawny numer telefonu (min. 9 cyfr).',
    website: 'Podaj poprawny adres strony, np. www.twojafirma.pl.',
    summary: 'Popraw zaznaczone pola, aby wysłać zgłoszenie.',
  },
  noCapacityText:
    'Dziękujemy za zgłoszenie. Najlepsze efekty osiągamy z firmami, które mają wolne moce produkcyjne. Gdy zwolni się miejsce w Twoim kalendarzu, zapraszamy do kontaktu.',
  privacy: {
    before:
      'Administratorem danych jest Everweb.pl Piotr Turowski, ul. Wojska Polskiego 5/5, 64-100 Leszno. Dane przetwarzamy w celu obsługi zgłoszenia i przeprowadzenia bezpłatnej analizy, a kontaktujemy się w sposób, na który wyrazisz zgodę. Szczegóły, w tym Twoje prawa, w ',
    link: 'Polityce prywatności',
    after: '.',
  },
};

export const footer = {
  privacy: 'Polityka prywatności',
  cookies: 'Ustawienia cookies',
  emailMissing: `${TODO} CONTACT_EMAIL`,
  phonePrefix: 'Tel.',
  emailPrefix: 'E-mail',
  nipPrefix: 'NIP',
};

export const stickyCta = CTA_LABEL;

export const cookies = {
  title: 'Pliki cookies',
  text: 'Za Twoją zgodą używamy plików cookies Meta (piksel), aby mierzyć skuteczność reklam. Bez zgody strona działa tak samo.',
  accept: 'Akceptuję',
  reject: 'Odrzucam',
  link: 'Polityka prywatności',
};

export const thanks = {
  title: 'Dziękujemy za zgłoszenie',
  text: 'Skontaktujemy się z Tobą, aby umówić termin bezpłatnej analizy.',
  prepareTitle: 'Jak się przygotować do rozmowy',
  prepareItems: [
    'aktualna oferta i ceny,',
    'wolne moce produkcyjne na najbliższe miesiące,',
    'zdjęcia lub wideo realizacji,',
    'dotychczasowe działania marketingowe.',
  ],
  // TODO: wklej link do wideo z YouTube lub Vimeo dla strony podziękowania
  videoUrl: '',
  videoTitle: 'Wideo: przed naszą rozmową',
  videoPlaceholder: 'Tu pojawi się wideo',
  back: 'Wróć na stronę główną',
  seoTitle: 'Dziękujemy | everhome',
};

export const privacyPage = {
  seoTitle: 'Polityka prywatności | everhome',
  title: 'Polityka prywatności',
};

export const notFound = {
  seoTitle: 'Nie znaleziono strony | everhome',
  code: '404',
  title: 'Tej strony tu nie ma',
  text: 'Adres mógł się zmienić albo zawierać literówkę.',
  back: 'Wróć na stronę główną',
};

export const media = {
  photoPlaceholder: 'Tu pojawi się zdjęcie',
  missingFile: 'Brak pliku',
};
