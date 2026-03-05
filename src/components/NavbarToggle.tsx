import { useState } from "react";

interface Props {
  links: Array<{ href: string; label: string }>;
}

export default function NavbarToggle({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative z-[60] w-10 h-10 flex items-center justify-center md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <div className="w-6 flex flex-col gap-1.5">
          <span
            className={`block h-[1.5px] transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[4.5px] bg-white" : "bg-white"
            }`}
          />
          <span
            className={`block h-[1.5px] transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[4.5px] bg-white" : "bg-white"
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-semibold text-white hover:text-[#f97316] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
