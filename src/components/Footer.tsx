import { Link } from "react-router-dom";

const phones = [
  { label: "(+91) 98953 95021", tel: "+919895395021" },
  { label: "(+91) 80894 10299", tel: "+918089410299" },
  { label: "(+91) 88916 41090", tel: "+918891641090" },
];

const footerLink =
  "inline-flex min-h-11 items-center underline decoration-transparent decoration-2 underline-offset-4 transition-[color,text-decoration-color] duration-150 hover:text-white hover:decoration-current";

export default function Footer() {
  return (
    <footer className="on-dark mt-20 rounded-t-panel bg-dark px-6 pb-10 pt-14 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-heading mb-3 text-xl font-semibold !text-brand-peach">Phone</h2>
          <ul>
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className={footerLink}>
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading mb-3 text-xl font-semibold !text-brand-peach">Email</h2>
          <a href="mailto:coonfresh124@gmail.com" className={footerLink}>
            coonfresh124@gmail.com
          </a>
        </div>
        <div>
          <h2 className="font-heading mb-3 text-xl font-semibold !text-brand-peach">Address</h2>
          <p className="font-semibold text-white">TMJ Foods (India) Pvt Limited</p>
          <p className="max-w-xs">
            Kudapuram Road, Eramalloor PO, Cherthala, Alappuzha- 688537, Kerala,
            India
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center gap-2 border-t border-white/15 pt-6 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Coonfresh — TMJ Foods (India) Pvt Limited
        </p>
        <div className="flex gap-6 text-sm">
          <Link to="/privacy-policy" className={footerLink}>
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className={footerLink}>
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
