// Formulario de contacto -> correo a ailin@bramund.com via FormSubmit (provisorio hasta que Soldar conecte Zoho).
// Antes el form hacia POST a /exito/ (pagina de Netlify Forms que ya no existe) y los mensajes se perdian.
(function () {
  const MAIL = "c7f6f7c23077425259a971b9a414c472"; // = ailin@bramund.com (codigo de FormSubmit, oculta el correo)
  const f = document.querySelector("form[name^='contact_form_']");
  if (!f) return;
  const lang = f.getAttribute("name").slice(-2); // es | en | pt
  const T = {
    es: { sending: "Enviando…", okH: "¡Gracias! Recibimos su mensaje", okP: "Le responderemos muy pronto.", err: "No se pudo enviar. Por favor escríbanos a " },
    en: { sending: "Sending…", okH: "Thank you! We received your message", okP: "We will get back to you very soon.", err: "Could not send. Please write to us at " },
    pt: { sending: "Enviando…", okH: "Obrigado! Recebemos sua mensagem", okP: "Responderemos muito em breve.", err: "Não foi possível enviar. Escreva para " },
  }[lang] || {};
  const txt = (s) => (s && s.selectedIndex > 0 ? s.options[s.selectedIndex].text.replace(/\s+/g, " ").trim() : "");
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(f));
    if (d["fake-field"]) return; // robot
    const b = f.querySelector("[type=submit]");
    const v0 = b.value;
    b.disabled = true; b.value = T.sending;
    try {
      const r = await fetch("https://formsubmit.co/ajax/" + MAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Contacto bramund.com [" + lang.toUpperCase() + "] · " + (d.company || d.name || ""),
          _template: "table", _captcha: "false", _replyto: d.email,
          Nombre: d.name, Empresa: d.company, Correo: d.email,
          "Quiere hablar con": txt(f.elements.recipient), Partner: txt(f.elements.partner), "Solución": txt(f.elements.solution),
          Mensaje: d.message, Origen: location.href,
        }),
      });
      if (!r.ok) throw new Error(r.status);
      f.innerHTML = '<div class="py-12 text-center"><h3 class="mb-2 text-2xl font-bold text-primary-400">' + T.okH + '</h3><p>' + T.okP + "</p></div>";
    } catch (err) {
      b.disabled = false; b.value = v0;
      alert(T.err + (d.recipient || "alexandre@bramund.com"));
    }
  });
})();
