# Mustak Tahmid Jawad — Physics, Chemistry and Math tuition

Personal website for my private tuition: Class 8–12 and admission, one-on-one or group, offline and online.

It's a plain static site (HTML, CSS and a little JavaScript) hosted on GitHub Pages. There is no server, database or login.

## Files

- `index.html`: the page
- `assets/style.css`: styles
- `assets/script.js`: the enquiry form, which opens the visitor's email app with a pre-filled message
- `assets/img/`: photo and class slides
- `assets/fonts/`: self-hosted fonts (Unbounded and Hind Siliguri, SIL Open Font License, see the licence files)

## Editing

Edit `index.html` on GitHub and commit. GitHub Pages republishes in about a minute.

## Security notes

- A Content Security Policy only allows files from this site, with no inline scripts and no third-party scripts, fonts or trackers.
- The form never sends data anywhere. It builds a `mailto:` link, with every value URL-encoded and never inserted into the page.
- Photos are stripped of EXIF metadata (no location data).
- My phone number and email are public on this page, so expect some spam.
