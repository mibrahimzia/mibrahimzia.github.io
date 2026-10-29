# mibrahimzia.github.io

Personal portfolio of Muhammad Ibrahim Zia, an Electrical Engineering student at NED UET (Karachi) and independent AI builder.

Live site: https://mibrahimzia.github.io/

## Structure

- `index.html`, `about.html`, `projects.html`, `contact.html`: the four pages
- `css/`: `variables.css` (theme tokens), `base.css`, `components.css`, `responsive.css`
- `js/main.js`: theme toggle, mobile menu, project filters, contact form (opens a pre-filled email draft)
- `assets/`: logo, favicon and project images

Plain static HTML, CSS and JavaScript with no build step. GitHub Pages serves it directly from `main`.

## Local preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## License

MIT, see [LICENSE](LICENSE).
