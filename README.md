# everhome – landing page

Statyczna strona [www.everhome.com.pl](https://www.everhome.com.pl). Jej jedynym celem jest umówienie bezpłatnej analizy.
Zbudowana w Astro + Tailwind CSS i hostowana na GitHub Pages. Nie ma backendu.

---

## 1. Uruchomienie lokalne

Wymagany Node.js w wersji 22 lub nowszej.

```bash
npm install
```

```bash
npm run dev
```

Strona będzie pod adresem http://localhost:4321. Zmiany widać od razu po zapisaniu pliku.

Inne polecenia:

| Polecenie | Co robi |
|---|---|
| `npm run build` | buduje gotową stronę do folderu `dist/` |
| `npm run preview` | uruchamia podgląd zbudowanej strony |
| `npm run todo` | wypisuje wszystko, co trzeba uzupełnić przed publikacją |
| `npm run assets` | ponownie generuje faviconę i obraz OG (robi się to też samo przy `dev` i `build`) |

---

## 2. Edycja treści

**Wszystkie teksty są w jednym pliku: `src/content/site.ts`.** Komponentów nie trzeba dotykać.

- Plik jest podzielony na sekcje w kolejności strony: `hero`, `problem`, `whyMeta`, `process`, `caseStudy`, `guarantee`, `about`, `forWhom`, `faq`, `booking`, `footer`, `cookies`, `thanks`, `notFound`.
- Zmieniaj tylko tekst w cudzysłowach. Zostaw przecinki, nawiasy i nazwy pól.
- Elementy listy (np. pytania w FAQ) możesz dodawać i usuwać. Skopiuj cały blok `{ ... },`.
- **`[DO UZUPEŁNIENIA]`** – takie miejsca mają obok komentarz `// TODO`. Na stronie wyświetlają się na żółtym tle z przerywaną ramką, żeby nie dało się ich przeoczyć. Wpisz w ich miejsce właściwy tekst (usuń `TODO` lub `${TODO}`).
- Przy budowaniu strona sama wstawia twarde spacje po jednoliterowych słowach („w”, „z”, „i”…) i w liczbach („3 000 zł”), żeby nie rozdzielały się między wierszami.

**Wideo** (hero i strona `/dziekujemy`): wklej zwykły link z YouTube lub Vimeo w polu `videoUrl` w `hero` lub `thanks`, np.:

```ts
videoUrl: 'https://www.youtube.com/watch?v=XXXXXXXXXXX',
```

Odtwarzacz ładuje się dopiero po kliknięciu, więc nie spowalnia strony. Bez linku widać placeholder z ikoną odtwarzania.

**Polityka prywatności:** wklej treść do `src/content/polityka-prywatnosci.md` (Markdown). Tytuł strony dodaje się sam, więc nagłówki w treści zaczynaj od `##`.

---

## 3. Podmiana grafik

Wrzuć pliki do folderu **`materialy/`** z dokładnie takimi nazwami:

| Plik | Gdzie się pojawia |
|---|---|
| `logo.svg` (lub `logo.png`) | nagłówek, stopka, obraz OG, favicona |
| `favicon.svg` / `favicon.png` (opcjonalnie) | kwadratowa favicona. Bez tego pliku favicona powstaje z logo |
| `piotr.jpg` | sekcja „O mnie” (pion 4:5) |
| `case-wyniki-1.png`, `case-wyniki-2.png` | zrzuty z Menedżera reklam w case study |
| `reklama-1.jpg`, `reklama-2.jpg`, `reklama-3.jpg` | przykładowe reklamy (4:5) |

Potem uruchom `npm run dev` lub `npm run build`. Strona sama:

- zamieni placeholdery na zdjęcia,
- zrobi lekkie wersje AVIF i WebP z lazy loadingiem,
- wygeneruje faviconę (`public/favicon.*`, `apple-touch-icon.png`) i obraz OG `public/og.png` (1200×630, logo i nagłówek na białym tle).

Teksty alternatywne (alt) zmienisz w `src/content/site.ts` (`caseStudy.results`, `caseStudy.ads`, `about.photoAlt`).

> Logo jest wstawiane jako SVG bez zmian kolorów. Dopóki go nie ma, w nagłówku jest zastępczy znak słowny „everhome” z niebieskim kwadratem.

---

## 4. Konfiguracja: `src/config.ts`

| Ustawienie | Skąd je wziąć | Co się dzieje, gdy jest puste |
|---|---|---|
| `CALENDLY_URL` | Calendly → wydarzenie → *Copy link*, np. `https://calendly.com/twoja-nazwa/analiza` | w kroku 2 zamiast kalendarza żółta informacja `[DO UZUPEŁNIENIA]` |
| `GHL_WEBHOOK_URL` | adres z wyzwalacza *Inbound Webhook* w GoHighLevel (patrz pkt 6) | formularz działa, ale dane nie trafiają do CRM (ostrzeżenie w konsoli przeglądarki) |
| `META_PIXEL_ID` | Meta → Menedżer zdarzeń → źródło danych → identyfikator (same cyfry) | piksel w ogóle się nie ładuje |
| `CONTACT_EMAIL` | Twój adres e-mail | w stopce żółta informacja `[DO UZUPEŁNIENIA]` |

Jak działają te elementy:

- **Formularz** wysyła dane metodą `POST` w formacie `application/x-www-form-urlencoded` w trybie `no-cors`. To „proste” zapytanie bez sprawdzania CORS, więc działa ze strony statycznej. Wysyłka ma limit 6 s. Błąd nie blokuje użytkownika, tylko trafia do konsoli.
- **Wysyłane pola:** `full_name`, `first_name`, `last_name`, `email`, `phone`, `company_name`, `website`, `business_type`, `houses_per_year`, `production_capacity`, `has_capacity` (`tak`/`nie`), `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `fbclid`, `landing_page`, `page_url`, `submitted_at`, `source`.
- **UTM i fbclid** są zapisywane w `sessionStorage` przy wejściu na stronę. Działa to także wtedy, gdy ktoś przejdzie na politykę prywatności i wróci.
- **Odpowiedź „Nie, kalendarz jest pełny…”**: dane idą do CRM, ale kalendarz się nie wyświetla. Zamiast niego pojawia się komunikat.
- **Calendly**: skrypt ładuje się dopiero w kroku 2. Imię, e-mail i UTM są przekazywane do kalendarza. Po umówieniu spotkania (`calendly.event_scheduled`) strona przekierowuje na `/dziekujemy`.
- **Meta Pixel** ładuje się wyłącznie po kliknięciu „Akceptuję” w banerze cookies. Wysyła `PageView` na każdej stronie, `Lead` po wysłaniu formularza i `Schedule` po umówieniu spotkania. Wybór jest zapamiętany w przeglądarce. Link „Ustawienia cookies” w stopce pozwala go zmienić, a odrzucenie usuwa ciasteczka `_fbp`/`_fbc`.

---

## 5. Wdrożenie na GitHub Pages

### 5.1. Repozytorium

1. Utwórz repozytorium na GitHubie (może być prywatne, jeśli Twój plan GitHub obsługuje Pages dla prywatnych repozytoriów).
2. Wypchnij kod na gałąź `main`:

```bash
git init -b main
```

```bash
git add .
```

```bash
git commit -m "Strona everhome"
```

```bash
git remote add origin https://github.com/TWOJA-NAZWA/everhome.git
```

```bash
git push -u origin main
```

3. W repozytorium: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Każdy push na `main` uruchamia workflow `.github/workflows/deploy.yml`. Postęp sprawdzisz w zakładce **Actions**. W logu widać też wynik `npm run todo`.

### 5.2. Domena www.everhome.com.pl

Plik `public/CNAME` z domeną `www.everhome.com.pl` jest już w projekcie, a `site` w `astro.config.mjs` jest ustawione.

1. **Settings → Pages → Custom domain:** wpisz `www.everhome.com.pl` i zapisz.
2. U rejestratora domeny (w panelu DNS) dodaj rekordy:

| Typ | Nazwa (host) | Wartość |
|---|---|---|
| `CNAME` | `www` | `TWOJA-NAZWA.github.io` (nazwa użytkownika lub organizacji GitHub, bez nazwy repozytorium) |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |

   Rekordy `A`/`AAAA` dla domeny głównej sprawiają, że `everhome.com.pl` przekierowuje na `www.everhome.com.pl`. Usuń stare rekordy `A` i `CNAME` dla `@` i `www`, jeśli wskazują gdzie indziej.
3. Poczekaj na propagację DNS (zwykle od kilku minut do kilku godzin). Potem zaznacz **Enforce HTTPS** w Settings → Pages.
4. Zalecane: zweryfikuj domenę w ustawieniach konta GitHub (**Settings → Pages → Add a domain**). Chroni to przed przejęciem domeny.

---

## 6. GoHighLevel: workflow z wyzwalaczem Inbound Webhook

1. W GoHighLevel otwórz **Automation → Workflows → Create Workflow → Start from scratch**.
2. Kliknij **Add New Trigger** i wybierz **Inbound Webhook**.
3. Skopiuj wyświetlony adres URL i wklej go do `GHL_WEBHOOK_URL` w `src/config.ts`. Zbuduj i wdroż stronę (albo uruchom `npm run dev` lokalnie).
4. Wyślij formularz testowy na stronie.
5. Wróć do wyzwalacza, kliknij **Fetch Sample Requests**, wybierz testowe zgłoszenie i zapisz wyzwalacz. Od teraz pola z formularza (`email`, `phone`, `first_name`…) są dostępne w kolejnych krokach.
6. (Raz) utwórz pola własne kontaktu: **Settings → Custom Fields**, np. *Rodzaj działalności*, *Domy rocznie*, *Wolne moce*, *UTM source*, *UTM campaign*, *fbclid*.
7. Dodaj akcję **Create Contact** (w nowszych wersjach może się nazywać **Create/Update Contact**). Zmapuj pola z webhooka:
   - First Name ← `first_name`
   - Last Name ← `last_name`
   - Email ← `email`
   - Phone ← `phone`
   - Company Name ← `company_name`
   - Website ← `website`
   - pola własne ← `business_type`, `houses_per_year`, `production_capacity`, `utm_source`, `utm_campaign`, `fbclid` itd.

   Gdy kontakt o tym e-mailu lub telefonie już istnieje, GHL go zaktualizuje zamiast tworzyć duplikat. Zależy to od ustawienia **Settings → Business Profile → Allow Duplicate Contact**, które powinno być wyłączone.
8. Opcjonalnie dodaj tag (**Add Contact Tag**, np. `everhome-lead`) i warunek **If/Else** na polu `has_capacity` (`tak`/`nie`), żeby inaczej obsłużyć firmy bez wolnych mocy.
9. Zapisz i przełącz workflow na **Publish**.

> Strona wysyła zapytanie w trybie `no-cors`, więc przeglądarka nie widzi odpowiedzi GHL. Czy zgłoszenie dotarło, sprawdzisz w GHL: **Workflow → Execution Logs** oraz na liście kontaktów.

---

## 7. Lista kontrolna przed publikacją

Uruchom:

```bash
npm run todo
```

Polecenie wypisze wszystkie miejsca `[DO UZUPEŁNIENIA]`, puste ustawienia w `src/config.ts`, brakujące grafiki i linki do wideo. Na stronie żółte pola pokazują to samo.

---

## 8. Struktura projektu

```
materialy/                  grafiki źródłowe (logo, zdjęcia, zrzuty, reklamy)
public/                     CNAME, robots.txt, favicona, og.png (generowane)
scripts/generate-assets.mjs generowanie favicony i obrazu OG
scripts/list-todo.mjs       lista rzeczy do uzupełnienia
integrations/               polska typografia (twarde spacje) przy budowaniu
src/config.ts               ustawienia: Calendly, GHL, Meta Pixel, e-mail
src/content/site.ts         wszystkie teksty
src/content/polityka-prywatnosci.md
src/components/             komponenty i sekcje strony
src/layouts/Base.astro      SEO, Open Graph, JSON-LD, fonty, baner cookies
src/pages/                  /, /dziekujemy, /polityka-prywatnosci, 404
src/scripts/                zgoda na cookies + piksel, zapis UTM
.github/workflows/deploy.yml automatyczne wdrożenie z gałęzi main
```

Font Manrope (z polskimi znakami) jest hostowany lokalnie przez `@fontsource-variable/manrope`, bez łączenia z Google Fonts. Strona generuje też `sitemap-index.xml` (bez `/dziekujemy`) i `robots.txt`.
