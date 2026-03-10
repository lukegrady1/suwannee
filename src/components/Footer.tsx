const footerLinks = ['Camping', 'Events', 'Weddings', 'Activities', 'Contact'] as const;

export default function Footer() {
  return (
    <footer className="bg-bark">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <span className="font-display text-cream text-xl italic">
            Spirit of the Suwannee
          </span>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6 text-cream/70 font-body text-sm tracking-wide uppercase">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-cream transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <a
            href="#camping"
            className="bg-amber text-bark font-body font-bold px-6 py-3 rounded-sm tracking-wide hover:bg-amber/90 transition-colors uppercase text-sm"
          >
            Book Your Adventure
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="font-body text-cream/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Spirit of the Suwannee Music Park. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
