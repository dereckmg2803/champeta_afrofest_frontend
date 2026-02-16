import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';

export const SubpageFooter = () => {
  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/festival', label: 'Festival' },
    { href: '/champeta', label: 'Champeta' },
    { href: '/experiencias', label: 'Experiencias' },
    { href: '/comunidad', label: 'Comunidad' }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/champetaafrofest/', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Music, href: '#', label: 'Spotify' }
  ];

  return (
    <footer 
      data-testid="subpage-footer"
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ backgroundColor: 'var(--dark-section)' }}
    >
      {/* Decorative top stripe */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[var(--cartagena-red)]" />
      <div className="absolute top-1 left-0 w-full h-1 bg-[var(--cartagena-yellow)]" />
      <div className="absolute top-2 left-0 w-full h-1 bg-[var(--cartagena-green)]" />

      <div className="container-festival relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_fest-cartagena/artifacts/iboapxvi_Picture2.png"
              alt="Champeta AfroFest"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-testid={`subpage-footer-nav-${link.label.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-[var(--cartagena-yellow)] transition-colors"
              >
                {link.label}
              </Link>
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
                data-testid={`subpage-footer-social-${social.label.toLowerCase()}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[var(--cartagena-yellow)] text-white hover:text-[var(--foreground)] transition-colors"
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
          <p>© 2025 Champeta AfroFest. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
