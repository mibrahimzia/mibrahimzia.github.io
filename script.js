// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form: posts to FormSubmit, which forwards the message to my inbox.
// If the request fails, it falls back to opening a pre-filled email draft.
const CONTACT_EMAIL = 'ibrahim.mzia@gmail.com';
const form = document.getElementById('contactForm');

if (form) {
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('sendBtn');

  const setStatus = (text, cls) => { status.textContent = text; status.className = cls || ''; };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus('Please fill in your name, email and message.', 'err');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('That email address does not look right.', 'err');
      return;
    }
    // Honeypot filled in: pretend success, send nothing.
    if (form._honey.value) {
      setStatus('Thanks, your message was sent.', 'ok');
      form.reset();
      return;
    }

    btn.disabled = true;
    setStatus('Sending...');

    try {
      const res = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name, email, message,
          _subject: 'Portfolio message from ' + name,
          _replyto: email,
          _template: 'table',
          _captcha: 'false'
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error('send failed');

      setStatus('Thanks, your message was sent. I will reply by email.', 'ok');
      form.reset();
    } catch (err) {
      const body = encodeURIComponent(message + '\n\n' + name + ' <' + email + '>');
      const subject = encodeURIComponent('Portfolio message from ' + name);
      status.className = 'err';
      status.innerHTML = 'Could not send from the page. ' +
        '<a href="mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body + '">Open it as an email instead</a>.';
    } finally {
      btn.disabled = false;
    }
  });
}
