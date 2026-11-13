const LAST_UPDATED = "October 22, 2026";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="card p-6 sm:p-12">
      <h1 className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-tight text-ink">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm font-semibold text-brand-peach-deep">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 max-w-[68ch] space-y-8 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">Who we are</h2>
          <p className="mt-3">
            This website, coonfresh.com, is operated by TMJ Foods (India) Pvt
            Limited ("Coonfresh," "we," "us"), Kudapuram Road, Eramalloor PO,
            Cherthala, Alappuzha – 688537, Kerala, India.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Information we collect
          </h2>
          <p className="mt-3">
            <strong>Contact form.</strong> If you use the form on our Contact
            page, it asks for your name, email, and message (subject is
            optional). This information is never sent to or stored on our
            servers — submitting the form simply opens WhatsApp on your device
            with those details pre-filled as a message. Nothing is sent to us
            unless you then choose to hit send in WhatsApp.
          </p>
          <p className="mt-3">
            <strong>WhatsApp orders and enquiries.</strong> Every "Order on
            WhatsApp" or "Enquire on WhatsApp" button on this site takes you to
            WhatsApp to message us directly. We only see what you choose to
            send there. That conversation happens on WhatsApp's platform and
            is subject to{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="text-brand-blue-deep underline underline-offset-2"
            >
              WhatsApp's own Privacy Policy
            </a>
            , not this one.
          </p>
          <p className="mt-3">
            <strong>No payments, no accounts.</strong> This website does not
            process online orders or payments, so we never collect card
            numbers, billing addresses, or similar payment details through it.
            There's no account or login required to use the site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Cookies and tracking
          </h2>
          <p className="mt-3">
            This website does not set its own cookies and does not use
            browser storage to track visitors. Our hosting and security
            provider, Cloudflare, may set a small number of technical cookies
            needed to protect the site from abuse and keep it running
            reliably — these aren't used to track you elsewhere.
          </p>
          <p className="mt-3">
            To understand how visitors find and use the site, we count visits
            with Umami, privacy-friendly statistics software run for us by our
            web agency, Polaroid Dosa, on its own server. It uses no cookies,
            does not identify you or follow you to other sites, and records
            only the page, the site that sent you, your browser, device type,
            country and clicks on our WhatsApp buttons. We do not run
            advertising tracking on this site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            How we use information
          </h2>
          <p className="mt-3">
            Anything you send us via WhatsApp or the contact form is used only
            to respond to your enquiry or order — for fresh mushrooms, spawns,
            growing beds, Coonvita, training, or farm setup and consulting. We
            don't sell, rent, or share your information for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            External links
          </h2>
          <p className="mt-3">
            This site links out to a small number of external destinations —
            WhatsApp, YouTube (for a few blog posts with a linked video), and
            occasionally press coverage we're featured in. We aren't
            responsible for the privacy practices of those external sites;
            please check their own policies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Data retention
          </h2>
          <p className="mt-3">
            We don't store visitor data on our own servers or databases — the
            contact form and every order/enquiry button hand off directly to
            WhatsApp. Messages you send us there are retained according to
            WhatsApp's own settings and our use of WhatsApp as a messaging
            app.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Children's privacy
          </h2>
          <p className="mt-3">
            This website is intended for a general audience and isn't
            directed at children. We don't knowingly collect information from
            children.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Your rights
          </h2>
          <p className="mt-3">
            Since we don't hold personal data on our own systems, there's
            nothing on our end for us to access, correct, or delete beyond
            what you've sent us on WhatsApp — which you control directly
            within WhatsApp. If you have any questions, reach out using the
            details below.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this policy from time to time — for example, if we
            add analytics or new features to the site. The "last updated"
            date above will reflect the latest revision.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Contact us
          </h2>
          <p className="mt-3">
            TMJ Foods (India) Pvt Limited (Coonfresh)
            <br />
            Kudapuram Road, Eramalloor PO, Cherthala, Alappuzha – 688537,
            Kerala, India
            <br />
            coonfresh124@gmail.com
            <br />
            (+91) 98953 95021 · (+91) 80894 10299 · (+91) 88916 41090
          </p>
        </section>
      </div>
      </div>
    </div>
  );
}
