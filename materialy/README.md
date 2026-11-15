# Grafiki strony

Wrzuć tu pliki o dokładnie takich nazwach. Strona wykryje je sama przy następnym `npm run dev` lub `npm run build`.
Dopóki pliku nie ma, na stronie widać placeholder z jego nazwą.

| Plik | Gdzie | Zalecany format |
|---|---|---|
| `logo.svg` lub `logo.png` | nagłówek, stopka, obraz OG, favicona | SVG (najlepiej) albo PNG z przezroczystym tłem, min. 400 px wysokości |
| `favicon.svg` lub `favicon.png` (opcjonalnie) | favicona | kwadrat, min. 512×512 px; gdy go nie ma, favicona powstaje z logo |
| `piotr.jpg` | sekcja „O mnie” | pion 4:5, min. 1000×1250 px |
| `case-wyniki-1.png`, `case-wyniki-2.png` | case study | zrzut ekranu, poziomo (miniatura w proporcji 16:10, po kliknięciu pełny obraz) |
| `reklama-1.jpg`, `reklama-2.jpg`, `reklama-3.jpg` | case study | 4:5, np. 1080×1350 px |

Rozszerzenia `.jpg`, `.jpeg`, `.png` i `.webp` są zamienne. Strona sama zrobi z nich lekkie wersje AVIF i WebP.
