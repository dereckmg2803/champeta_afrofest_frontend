import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Flag components
const FlagES = () => (
  <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480">
    <rect width="640" height="480" fill="#c60b1e"/>
    <rect y="120" width="640" height="240" fill="#ffc400"/>
  </svg>
);

const FlagEN = () => (
  <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480">
    <rect width="640" height="480" fill="#012169"/>
    <path d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#FFF"/>
    <path d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E"/>
    <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#FFF"/>
    <path d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z" fill="#C8102E"/>
  </svg>
);

const flags = {
  es: FlagES,
  en: FlagEN,
};

export const LanguageSelector = ({ isScrolled, isMobile = false }) => {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CurrentFlag = flags[language] || Globe;
  const testIdSuffix = isMobile ? '-mobile' : '';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-testid={`language-selector-btn${testIdSuffix}`}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 border-2 
          ${isScrolled 
            ? 'border-[var(--foreground)]/20 hover:border-[var(--foreground)]/40 text-[var(--foreground)]' 
            : 'border-white/30 hover:border-white/50 text-white'
          }
          hover:bg-white/10`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <CurrentFlag />
        <span className="text-sm font-medium uppercase">{language}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div 
          data-testid={`language-dropdown${testIdSuffix}`}
          className="absolute top-full right-0 mt-2 bg-white rounded-xl border-2 border-[var(--foreground)] pico-shadow-sm overflow-hidden min-w-[160px] z-50"
          role="listbox"
        >
          {availableLanguages.map((lang) => {
            const Flag = flags[lang] || Globe;
            return (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                data-testid={`language-option-${lang}${testIdSuffix}`}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors
                  ${language === lang 
                    ? 'bg-[var(--cartagena-yellow)]/20 text-[var(--foreground)]' 
                    : 'hover:bg-[var(--muted)] text-[var(--foreground)]'
                  }`}
                role="option"
                aria-selected={language === lang}
              >
                <Flag />
                <span className="font-medium">{t(`languages.${lang}`)}</span>
                {language === lang && (
                  <span className="ml-auto text-[var(--cartagena-green)]">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
