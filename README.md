# Mama Wanjiku's Bakery Website

A small static bakery website made with HTML, CSS and JavaScript.

## Project structure

- `index.html` — homepage with hero, popular items
- `menu.html` — menu page with product cards and WhatsApp order CTA
- `about.html` — about page with story/stats
- `contact.html` — contact page with form, location and map
- `css/style.css` — shared styles (responsive, navbar, hero, cards, forms)
- `js/script.js` — shared interactivity (mobile menu, smooth scroll, form submission)

## Initial state

Originally the site existed as partial pages and had inconsistent components:

- `navbar.html` empty placeholder created, but not used
- `about.html` and `contact.html` were page fragments
- `js/script.js` had two `validateForm()` definitions and unstable selector usage
- navigation and responsive behavior was buggy

## Changes applied

1. Converted each page to a complete standalone HTML file with consistent `<head>` and layout.
2. Standardized navigation bar:
   - fixed top position
   - hamburger menu for mobile with `aria-expanded` and toggle animation
   - active link color/hover states
3. Designed and implemented modern responsive UI in `css/style.css`:
   - CSS variables, reset, typography
   - hero sections with overlay and responsive typography
   - card components for menu previews
   - fixed bottom button (`Order via WhatsApp`) in menu
   - forms and contact sections with signposting and hover states
4. Sanity-fixed menus and sections so all pages share same nav and footer format.
5. Reworked `js/script.js`:
   - one stable function `submitOrder()` for contact form
   - mobile nav toggle, auto close, `aria` attributes update
   - anchor smooth scrolling
   - robust DOM queries with null guards
6. Corrected all image URLs with accessible `alt` tags and `loading='lazy'`.

## Validation

- Verified no errors in:
  - `index.html`, `menu.html`, `about.html`, `contact.html`
  - `css/style.css`
  - `js/script.js`
- Full static site is responsive and UI-ready.

## Usage

1. Open `index.html` in browser.
2. Navigate between pages with menu links.
3. On mobile, use hamburger menu.
4. On contact page, submit order form to open WhatsApp prefilled message.

## Future enhancements

- Add a build tooling (webpack/Vite) for templates and optimization
- Use a small JSON menu data source + dynamic template render
- Add Service Worker for offline and caching
- Add metadata, SEO tags, OG tags and performance improvements
