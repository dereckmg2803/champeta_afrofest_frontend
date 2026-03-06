import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

export const SubpageHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainNavLinks = [
    { href: '/', label: t('nav.inicio'), key: 'inicio' },
    { href: '/festival', label: t('nav.festival'), key: 'festival' },
    { href: '/champeta', label: t('nav.champeta'), key: 'champeta' },
    { href: '/experiencias', label: t('nav.experiencias'), key: 'experiencias' },
    { href: '/comunidad', label: t('nav.comunidad'), key: 'comunidad' },
  ];

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <header
      data-testid="subpage-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled
          ? 'glass border-b-2 border-[var(--foreground)]/10'
          : 'bg-[var(--dark-section)]'
        }`}
    >
      <div className="container-festival">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            data-testid="subpage-header-logo"
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Champeta AfroFest"
              className="h-12 md:h-14 w-auto object-contain bg-transparent"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                data-testid={`subpage-nav-${link.key}`}
                className={`text-sm font-bold uppercase tracking-wider transition-colors relative group ${isActive(link.href)
                    ? 'text-[var(--cartagena-yellow)]'
                    : isScrolled
                      ? 'text-[var(--foreground)] hover:text-[var(--cartagena-yellow)]'
                      : 'text-white hover:text-[var(--cartagena-yellow)]'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--cartagena-yellow)] transition-[width] duration-300 ${isActive(link.href)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">

            {/* Language Selector */}
            <LanguageSelector isScrolled={isScrolled} />

            <a
              href="https://www.instagram.com/champetaafrofest/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="subpage-header-instagram"
              className={`p-2 rounded-full transition-colors ${isScrolled
                  ? 'hover:bg-[var(--cartagena-yellow)]/20'
                  : 'hover:bg-white/20'
                }`}
            >
              <Instagram
                className={`w-5 h-5 ${isScrolled ? 'text-[var(--foreground)]' : 'text-white'
                  }`}
              />
            </a>

            <Link
              to="/#comunidad"
              data-testid="subpage-header-cta"
              className="px-5 py-2 bg-[var(--secondary)] text-[var(--foreground)] font-bold uppercase text-sm tracking-wider border-2 border-[var(--foreground)] pico-shadow-sm rounded-lg"
            >
              {t('nav.joinCommunityShort')}
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="subpage-mobile-menu-toggle"
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled
                ? 'hover:bg-[var(--cartagena-yellow)]/20'
                : 'hover:bg-white/20'
              }`}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${isScrolled ? 'text-[var(--foreground)]' : 'text-white'
                  }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${isScrolled ? 'text-[var(--foreground)]' : 'text-white'
                  }`}
              />
            )}
          </button>

        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        data-testid="subpage-mobile-menu"
        className={`md:hidden fixed inset-0 top-16 bg-[var(--dark-section)] z-40 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col p-6 gap-4">

          {mainNavLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid={`subpage-mobile-nav-${link.key}`}
              className={`text-xl font-['Titan_One'] uppercase transition-colors ${isActive(link.href)
                  ? 'text-[var(--cartagena-yellow)]'
                  : 'text-white hover:text-[var(--cartagena-yellow)]'
                }`}
            >
              {link.label}
            </Link>
          ))}

          <hr className="border-white/20 my-2" />

          {/* Language Selector Mobile */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">
              {t('languages.es') === 'Español' ? 'Idioma:' : 'Language:'}
            </span>
            <LanguageSelector isScrolled={true} isMobile={true} />
          </div>

          <a
            href="https://www.instagram.com/champetaafrofest/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-white text-lg font-bold"
          >
            <Instagram className="w-6 h-6" />
            @champetaafrofest
          </a>

          <Link
            to="/#comunidad"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-6 py-4 bg-[var(--secondary)] text-[var(--foreground)] font-bold uppercase text-center tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl"
          >
            {t('nav.joinCommunity')}
          </Link>

        </div>
      </div>
    </header>
  );
};