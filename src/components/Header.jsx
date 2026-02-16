import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio', isAnchor: true },
    { href: '/festival', label: 'Festival', isAnchor: false },
    { href: '/champeta', label: 'Champeta', isAnchor: false },
    { href: '/experiencias', label: 'Experiencias', isAnchor: false },
    { href: '#entradas', label: 'Entradas', isAnchor: true },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'glass border-b-2 border-[var(--foreground)]/10' : 'bg-transparent'
        }`}
    >
      <div className="container-festival">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, '#inicio')}
            data-testid="header-logo"
            className="flex items-center gap-2 bg-transparent"
          >
            <img
              src="/logo.png"
              alt="Champeta AfroFest"
              className="h-12 md:h-14 w-auto object-contain bg-transparent"
            />
          </a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors relative group
  ${isScrolled ? "text-black" : "text-white"}
  hover:text-[var(--cartagena-yellow)]`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--cartagena-yellow)] group-hover:w-full transition-[width] duration-300" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors relative group
  ${isScrolled ? "text-black" : "text-white"}
  hover:text-[var(--cartagena-yellow)]`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--cartagena-yellow)] group-hover:w-full transition-[width] duration-300" />
                </Link>
              )
            ))}
          </div>

          {/* Right side: Instagram + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/champetaafrofest/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-instagram"
              className="p-2 rounded-full hover:bg-[var(--primary)]/20 transition-colors"
            >
              <Instagram
                className={`w-5 h-5 transition-colors ${isScrolled ? "text-black" : "text-white"
                  }`}
              />
            </a>

            <a
              href="#comunidad"
              onClick={(e) => scrollToSection(e, '#comunidad')}
              data-testid="header-cta"
              className="px-6 py-2.5 bg-[var(--secondary)] text-[var(--foreground)] font-bold uppercase text-sm tracking-wider border-2 border-[var(--foreground)] pico-shadow-sm rounded-lg"
            >
              Únete a la Comunidad
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-[var(--primary)]/20 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden fixed inset-0 top-16 bg-[var(--background)] z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link, index) => (
            link.isAnchor ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className="text-2xl font-['Titan_One'] uppercase text-[var(--foreground)] hover:text-[var(--cartagena-yellow)] transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className="text-2xl font-['Titan_One'] uppercase text-[var(--foreground)] hover:text-[var(--cartagena-yellow)] transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            )
          ))}
          <hr className="border-[var(--foreground)]/20" />
          <a
            href="https://www.instagram.com/champetaafrofest/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-instagram"
            className="flex items-center gap-3 text-lg font-bold"
          >
            <Instagram className="w-6 h-6" />
            @champetaafrofest
          </a>
          <a
            href="#comunidad"
            onClick={(e) => scrollToSection(e, '#comunidad')}
            data-testid="mobile-cta"
            className="mt-4 px-6 py-4 bg-[var(--secondary)] text-[var(--foreground)] font-bold uppercase text-center tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl"
          >
            Únete a la Comunidad
          </a>
        </div>
      </div>
    </header>
  );
};
