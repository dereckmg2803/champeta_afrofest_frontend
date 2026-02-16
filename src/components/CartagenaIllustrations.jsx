// SVG decorative elements representing Cartagena culture
export const VinylDisc = ({ className = "", size = 60 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="none"
  >
    {/* Outer ring */}
    <circle cx="50" cy="50" r="48" fill="#1a1a1a" stroke="var(--cartagena-yellow)" strokeWidth="2"/>
    {/* Grooves */}
    <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="1"/>
    <circle cx="50" cy="50" r="35" fill="none" stroke="#333" strokeWidth="1"/>
    <circle cx="50" cy="50" r="30" fill="none" stroke="#333" strokeWidth="1"/>
    <circle cx="50" cy="50" r="25" fill="none" stroke="#333" strokeWidth="1"/>
    {/* Label */}
    <circle cx="50" cy="50" r="18" fill="var(--cartagena-red)"/>
    <circle cx="50" cy="50" r="15" fill="var(--cartagena-yellow)"/>
    <circle cx="50" cy="50" r="12" fill="var(--cartagena-green)"/>
    {/* Center hole */}
    <circle cx="50" cy="50" r="4" fill="#1a1a1a"/>
  </svg>
);

export const DancingCouple = ({ className = "", size = 80 }) => (
  <svg 
    width={size} 
    height={size * 1.2} 
    viewBox="0 0 100 120" 
    className={className}
    fill="none"
  >
    {/* Person 1 */}
    <circle cx="35" cy="20" r="10" fill="#8B4513"/>
    <path d="M35 30 L35 60 M25 45 L45 45 M35 60 L25 90 M35 60 L45 90" 
          stroke="#8B4513" strokeWidth="4" strokeLinecap="round"/>
    {/* Person 2 */}
    <circle cx="65" cy="25" r="10" fill="#654321"/>
    <path d="M65 35 L65 65 M55 50 L75 50 M65 65 L55 95 M65 65 L75 95" 
          stroke="#654321" strokeWidth="4" strokeLinecap="round"/>
    {/* Dress/skirt for person 1 */}
    <path d="M30 55 Q35 75 25 90 L45 90 Q35 75 40 55" fill="var(--cartagena-red)" opacity="0.9"/>
    {/* Shirt for person 2 */}
    <rect x="58" y="35" width="14" height="20" rx="2" fill="var(--cartagena-yellow)" opacity="0.9"/>
  </svg>
);

export const CartagenaFlag = ({ className = "", size = 60 }) => (
  <svg 
    width={size} 
    height={size * 0.6} 
    viewBox="0 0 100 60" 
    className={className}
  >
    <rect x="0" y="0" width="100" height="20" fill="var(--cartagena-green)"/>
    <rect x="0" y="20" width="100" height="20" fill="var(--cartagena-yellow)"/>
    <rect x="0" y="40" width="100" height="20" fill="var(--cartagena-red)"/>
    {/* Flag pole */}
    <rect x="-3" y="-5" width="4" height="70" fill="#8B4513"/>
  </svg>
);

export const Sparkle = ({ className = "", size = 20, color = "var(--cartagena-yellow)" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill={color}
  >
    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"/>
  </svg>
);

export const MusicNote = ({ className = "", size = 30, color = "var(--cartagena-green)" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    className={className}
    fill={color}
  >
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

export const WavePattern = ({ className = "" }) => (
  <svg 
    viewBox="0 0 1200 120" 
    className={className}
    preserveAspectRatio="none"
  >
    <path 
      d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
      fill="var(--caribbean-blue)" 
      opacity="0.3"
    />
    <path 
      d="M0,80 C200,140 400,20 600,80 C800,140 1000,20 1200,80 L1200,120 L0,120 Z" 
      fill="var(--caribbean-deep)" 
      opacity="0.2"
    />
  </svg>
);

export const PalmLeaf = ({ className = "", size = 100 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={className}
    fill="var(--cartagena-green)"
    opacity="0.6"
  >
    <path d="M50 90 Q30 70 10 50 Q30 55 50 50 Q70 55 90 50 Q70 70 50 90Z"/>
    <path d="M50 80 Q35 60 20 40 Q40 50 50 45 Q60 50 80 40 Q65 60 50 80Z"/>
    <path d="M50 70 Q40 55 30 35 Q45 45 50 40 Q55 45 70 35 Q60 55 50 70Z"/>
    <line x1="50" y1="40" x2="50" y2="95" stroke="#2D5016" strokeWidth="3"/>
  </svg>
);

export const BrushStroke = ({ className = "", color = "var(--cartagena-yellow)" }) => (
  <svg 
    viewBox="0 0 200 30" 
    className={className}
    preserveAspectRatio="none"
  >
    <path 
      d="M0,15 C20,5 40,25 60,15 C80,5 100,25 120,15 C140,5 160,25 180,15 C190,10 200,20 200,15" 
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
    />
  </svg>
);
