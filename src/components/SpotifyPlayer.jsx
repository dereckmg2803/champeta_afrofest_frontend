import { useState, useEffect } from 'react';
import { Music, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Spotify icon SVG
const SpotifyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/5n6yRHUY6b3wb9EdfiRBNT";
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/playlist/5n6yRHUY6b3wb9EdfiRBNT?utm_source=generator&theme=0";

export const SpotifyPlayer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const { t } = useLanguage();

  // Reset iframe state when opening
  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
      setIframeError(false);
      // Set a timeout to detect if iframe fails to load
      const timeout = setTimeout(() => {
        setIframeError(true);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={handleToggle}
        data-testid="spotify-player-btn"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all duration-300 
          ${isOpen 
            ? 'w-12 h-12 bg-[var(--foreground)] text-white rounded-full' 
            : 'px-4 py-3 bg-[#1DB954] text-white rounded-full pico-shadow-sm hover:scale-105'
          }`}
        aria-label={isOpen ? t('spotify.close') : t('spotify.listen')}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <SpotifyIcon className="w-6 h-6 mr-2" />
            <span className="font-bold text-sm hidden sm:inline">{t('spotify.listen')}</span>
            <Music className="w-5 h-5 sm:hidden" />
          </>
        )}
      </button>

      {/* Mini Player Panel */}
      <div
        data-testid="spotify-player-panel"
        className={`fixed bottom-24 right-6 z-40 transition-all duration-300 transform origin-bottom-right
          ${isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <div className="bg-white rounded-2xl border-3 border-[var(--foreground)] pico-shadow overflow-hidden">
          {/* Header */}
          <div className="bg-[#1DB954] px-4 py-3 flex items-center gap-3">
            <SpotifyIcon className="w-6 h-6 text-white" />
            <div className="text-white flex-1">
              <p className="font-bold text-sm">Champeta Afro Fest 2025</p>
              <p className="text-xs opacity-80">Playlist Oficial</p>
            </div>
            <a
              href={SPOTIFY_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="spotify-external-link"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              title="Abrir en Spotify"
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
          
          {/* Spotify Embed */}
          <div className="w-[320px] sm:w-[380px] relative">
            {/* Loading state */}
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#121212]">
                <div className="animate-pulse flex flex-col items-center gap-3">
                  <SpotifyIcon className="w-12 h-12 text-[#1DB954]" />
                  <p className="text-white/60 text-sm">Cargando playlist...</p>
                </div>
              </div>
            )}
            
            {/* Iframe */}
            <iframe
              data-testid="spotify-embed-iframe"
              style={{ borderRadius: '0', display: iframeError ? 'none' : 'block' }}
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Champeta Afro Fest Playlist"
              onLoad={() => setIframeLoaded(true)}
            />
            
            {/* Fallback when iframe fails */}
            {iframeError && (
              <div className="h-[352px] bg-[#121212] flex flex-col items-center justify-center p-6 text-center">
                <SpotifyIcon className="w-16 h-16 text-[#1DB954] mb-4" />
                <p className="text-white font-bold mb-2">Champeta Afro Fest 2025</p>
                <p className="text-white/60 text-sm mb-6">
                  {t('languages.es') === 'Español' 
                    ? 'Abre la playlist directamente en Spotify' 
                    : 'Open the playlist directly on Spotify'}
                </p>
                <a
                  href={SPOTIFY_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="spotify-fallback-link"
                  className="px-6 py-3 bg-[#1DB954] text-white font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <SpotifyIcon className="w-5 h-5" />
                  {t('languages.es') === 'Español' ? 'Abrir en Spotify' : 'Open in Spotify'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
          data-testid="spotify-backdrop"
        />
      )}
    </>
  );
};
