import { Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const Footer = () => {
  const { t } = useLanguage();
  const navLinks = [
    { href: '#inicio', label: t('footer.nav.inicio') },
    { href: '#lineup', label: t('footer.nav.lineup') },
    { href: '#experiencias', label: t('footer.nav.experiencias') },
    { href: '#cultura', label: t('footer.nav.cultura') },
    { href: '#entradas', label: t('footer.nav.entradas') }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/champetaafrofest/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Music, href: '#', label: 'Spotify' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-testid="footer"
      className="py-12 md:py-16 relative overflow-hidden section-dark"
    >
      {/* Decorative top stripe */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)]" />

      <div className="container-festival relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Champeta AfroFest"
              className="h-14 w-auto object-contain bg-transparent"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                data-testid={`footer-nav-${link.label.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`footer-social-${social.label.toLowerCase()}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[var(--primary)] text-white hover:text-[var(--foreground)] transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
