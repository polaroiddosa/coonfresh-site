const LAST_UPDATED = "September 16, 2026";

export default function TermsConditions() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="card p-6 sm:p-12">
      <h1 className="font-heading text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-tight text-ink">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm font-semibold text-brand-peach-deep">Last updated: {LAST_UPDATED}</p>

      <div className="mt-10 max-w-[68ch] space-y-8 leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            About these terms
          </h2>
          <p className="mt-3">
            These Terms &amp; Conditions govern your use of coonfresh.com,
            operated by TMJ Foods (India) Pvt Limited ("Coonfresh," "we,"
            "us"). By using this website, you agree to these terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Our products &amp; services
          </h2>
          <p className="mt-3">
            Coonfresh cultivates and sells fresh oyster mushrooms, mushroom
            spawns, and mushroom growing beds; produces Coonvita, a
            mushroom-based nutrition powder; and offers mushroom cultivation
            training and farm setup/consulting services (see our{" "}
            <a href="/farm-setting" className="text-brand-blue-deep underline underline-offset-2">
              Farm Setting
            </a>{" "}
            page).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Orders &amp; enquiries
          </h2>
          <p className="mt-3">
            This website does not process online payments or orders directly.
            Every "Order on WhatsApp" or "Enquire on WhatsApp" button opens a
            WhatsApp chat with us — pricing, availability, and delivery or
            pickup arrangements are all confirmed directly with you over
            WhatsApp or phone, not through this website.
          </p>
          <p className="mt-3">
            Since this site doesn't display live pricing or stock levels,
            nothing shown here is a binding offer — prices and availability
            are confirmed at the time of your enquiry.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Farm setup &amp; consulting services
          </h2>
          <p className="mt-3">
            Farm design, fan-and-pad system sizing, and subsidy assistance
            (for example, under the Mushroom Village Scheme or subsidised
            KSEB power) described on our Farm Setting page are based on a
            site-specific assessment. We don't guarantee approval or
            timelines for any government subsidy or scheme, as those are
            ultimately decided by the relevant authority, not by us.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Training
          </h2>
          <p className="mt-3">
            Our training is informational and based on our own farming
            experience. We don't guarantee specific yields, income, or
            outcomes for anyone who attends our training or sets up a farm
            with our guidance — cultivation results depend on many factors
            outside our control, including climate, maintenance, and local
            conditions.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Website content
          </h2>
          <p className="mt-3">
            We've made a genuine effort to keep the information on this site
            accurate, including our story, farm details, and blog content.
            Some blog posts reference press coverage from third-party outlets
            (credited where shown); we're not responsible for the accuracy of
            external publications we're featured in, only for representing
            them fairly here.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Intellectual property
          </h2>
          <p className="mt-3">
            The Coonfresh name, logo, and original photos and content on this
            site belong to TMJ Foods (India) Pvt Limited unless otherwise
            credited. Please contact us before reproducing them.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            External links
          </h2>
          <p className="mt-3">
            This site links to WhatsApp, YouTube, and occasionally external
            press articles. We don't control and aren't responsible for the
            content or availability of those external sites.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Limitation of liability
          </h2>
          <p className="mt-3">
            We provide this website and its content on an "as is" basis.
            While we try to keep it accurate and up to date, we don't
            guarantee it's error-free, and we're not liable for any loss
            arising from your use of, or reliance on, this website's content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Governing law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of India, and any disputes
            are subject to the jurisdiction of the courts in Alappuzha,
            Kerala.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Changes to these terms
          </h2>
          <p className="mt-3">
            We may update these terms from time to time as our services or
            this website change. Continued use of the site after changes are
            posted means you accept the updated terms.
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
