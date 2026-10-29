# mibrahimzia.github.io

Personal site of Muhammad Ibrahim Zia: https://mibrahimzia.github.io/

## Pages

- `index.html`: intro, what I'm working on now, and projects (scroll)
- `about.html`: bio
- `contact.html`: working contact form

## Files

- `style.css`: the whole design (light, follows system dark mode)
- `script.js`: footer year and contact form
- `assets/`: favicon and the BitNet Runner screenshot

Plain static HTML, CSS and JavaScript. No build step; GitHub Pages serves `main` directly.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which emails the message to the address in `script.js`
(`CONTACT_EMAIL`). The first message sent triggers a one-time activation email to that address; click the
confirmation link once and every later message is delivered. If the request fails, the page offers a pre-filled
`mailto:` link instead.

## Local preview

```bash
python -m http.server 8000
```

## License

MIT, see [LICENSE](LICENSE).
