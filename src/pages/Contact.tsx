import { useState, type FormEvent } from "react";
import { ButtonLink, PageHero } from "../components/ui";

// Rebuilt from scratch: the live site's own /contact/ page is currently
// broken (falls through to the blog archive — see wiki/infrastructure.md),
// so the original form markup/handler could not be ported. Contact details
// below (phone/email/address) are real, verified from the site footer.
// Submission goes to WhatsApp (click-to-chat, prefilled text) rather than a
// backend/form service — consistent with the rest of the site, which has no
// e-commerce or contact backend and routes everything through WhatsApp.
const WHATSAPP_NUMBER = "919895395021";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("subject") ? `Subject: ${data.get("subject")}` : null,
      `Message: ${data.get("message")}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
    form.reset();
    setSent(true);
  }

  return (
    <div>
      <PageHero title="Contact Us" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div className="card p-8">
          <h2 className="font-heading text-xl font-semibold text-brand-blue-deep">PHONE</h2>
          <ul className="mt-2">
            <li><a href="tel:+919895395021" className="inline-flex min-h-11 items-center hover:underline">(+91) 98953 95021</a></li>
            <li><a href="tel:+918089410299" className="inline-flex min-h-11 items-center hover:underline">(+91) 80894 10299</a></li>
            <li><a href="tel:+918891641090" className="inline-flex min-h-11 items-center hover:underline">(+91) 88916 41090</a></li>
          </ul>

          <h2 className="font-heading mt-6 text-xl font-semibold text-brand-blue-deep">EMAIL</h2>
          <p className="mt-2">
            <a href="mailto:coonfresh124@gmail.com" className="inline-flex min-h-11 items-center hover:underline">
              coonfresh124@gmail.com
            </a>
          </p>

          <h2 className="font-heading mt-6 text-xl font-semibold text-brand-blue-deep">ADDRESS</h2>
          <p className="mt-2 font-semibold text-ink">TMJ Foods (India) Pvt Limited</p>
          <p>
            Kudapuram Road, Eramalloor PO, Cherthala, Alappuzha- 688537, Kerala,
            India
          </p>

          <ButtonLink href="https://wa.me/919895395021" umami="WhatsApp click" className="mt-8">
            Place Your Order on WhatsApp
          </ButtonLink>
        </div>

        <form onSubmit={handleSubmit} className="card flex flex-col gap-5 bg-white p-8">
          <label className="flex flex-col gap-1.5 font-semibold text-ink">
            Your Name
            <input name="name" type="text" required autoComplete="name" className="field font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-ink">
            Your Email
            <input name="email" type="email" required autoComplete="email" className="field font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-ink">
            Subject
            <input name="subject" type="text" className="field font-normal" />
          </label>
          <label className="flex flex-col gap-1.5 font-semibold text-ink">
            Your Message
            <textarea name="message" required rows={5} className="field font-normal" />
          </label>
          <button type="submit" className="btn btn-primary">
            Send via WhatsApp
          </button>
          {sent && (
            <p role="status" className="font-semibold text-green-800">
              Opening WhatsApp — hit send there to reach us.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
