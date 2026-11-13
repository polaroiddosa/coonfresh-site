import { useEffect, useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";

/* ---------- Icons (one inline set, decorative: hidden from assistive tech) ---------- */

type IconProps = { className?: string };

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function ChevronIcon({ dir, className = "h-6 w-6" }: IconProps & { dir: "left" | "right" }) {
  return (
    <svg {...iconBase} className={className}>
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg {...iconBase} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function PlayIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function PauseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
    </svg>
  );
}

/* ---------- Buttons ---------- */

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  umami?: string;
};

/** Internal link (`to`) or external link opened in a new tab (`href`). */
export function ButtonLink({ children, to, href, variant = "primary", className = "", umami }: ButtonProps) {
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        {...(umami ? { "data-umami-event": umami } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={classes}>
      {children}
    </Link>
  );
}

/* ---------- Layout helpers ---------- */

/** Page title block: one h1, optional subtitle, soft sand panel. */
export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="panel relative overflow-hidden bg-sand px-6 py-14 text-center sm:py-20">
        <span aria-hidden="true" className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-brand-peach/45" />
        <span aria-hidden="true" className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-brand-blue/20" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-brand-blue-deep">{subtitle}</p>
          )}
          {children}
        </div>
      </div>
    </header>
  );
}

export function SectionHeading({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: "ink" | "light";
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold leading-tight tracking-tight ${
        tone === "light" ? "!text-white" : ""
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ---------- Lightbox (shared by Gallery and Farm Setting) ---------- */

type LightboxProps = {
  images: { src: string; alt: string }[];
  index: number;
  onIndexChange: (next: number) => void;
  onClose: () => void;
};

export function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const count = images.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusTo = useRef<Element | null>(null);

  // Keyboard: Esc closes, arrows move. Focus moves in on open and returns on close.
  useEffect(() => {
    returnFocusTo.current = document.activeElement;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (returnFocusTo.current instanceof HTMLElement) returnFocusTo.current.focus();
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (count > 1 && e.key === "ArrowRight") onIndexChange((index + 1) % count);
      if (count > 1 && e.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (e.key === "Tab") {
        // Keep focus inside the dialog.
        const focusable = document.querySelectorAll<HTMLElement>("[data-lightbox-control]");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onClose, onIndexChange]);

  const roundControl =
    "on-dark flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-float transition-[background-color,transform] duration-150 hover:bg-sand active:scale-95";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="on-dark fixed inset-0 z-[100] flex items-center justify-center bg-dark/92 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        data-lightbox-control
        type="button"
        onClick={onClose}
        className={`${roundControl} absolute right-4 top-4`}
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {count > 1 && (
        <button
          data-lightbox-control
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onIndexChange((index - 1 + count) % count);
          }}
          className={`${roundControl} absolute left-3 sm:left-6`}
          aria-label="Previous image"
        >
          <ChevronIcon dir="left" />
        </button>
      )}

      <img
        src={images[index].src}
        alt={images[index].alt}
        className="max-h-[80vh] max-w-full rounded-card object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {count > 1 && (
        <button
          data-lightbox-control
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onIndexChange((index + 1) % count);
          }}
          className={`${roundControl} absolute right-3 sm:right-6`}
          aria-label="Next image"
        >
          <ChevronIcon dir="right" />
        </button>
      )}

      {count > 1 && (
        <p
          aria-live="polite"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold tabular-nums text-ink"
        >
          {index + 1} / {count}
        </p>
      )}
    </div>
  );
}
