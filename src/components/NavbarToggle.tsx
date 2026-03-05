import { useState } from "react";

export default function NavbarToggle() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-muted hover:text-foreground"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 p-4">
            <a href="/services" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors">
              Services
            </a>
            <a href="/work" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors">
              Our Work
            </a>
            <a href="/for/restaurants" onClick={() => setOpen(false)} className="px-4 py-3 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors">
              Industries
            </a>
            <a href="/services" onClick={() => setOpen(false)} className="mt-2 text-center bg-accent hover:bg-accent-light text-background font-semibold px-5 py-3 rounded-lg transition-colors">
              Get Your Free Site
            </a>
          </div>
        </div>
      )}
    </>
  );
}
