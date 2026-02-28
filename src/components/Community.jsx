import { useState } from 'react';
import { MapPin, Instagram, Facebook, Youtube, Twitter, Music } from 'lucide-react';
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
export const Community = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    country: '',
    message: '',
    accepted_terms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = [
    { name: 'Colombia', x: '25%', y: '55%', main: true },
    { name: 'New York', x: '28%', y: '32%', main: false },
    { name: 'Madrid', x: '48%', y: '30%', main: false },
    { name: 'Bogotá', x: '24%', y: '50%', main: false }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/champetaafrofest/', color: '#E1306C' },
    { icon: Facebook, href: '#', color: '#1877F2' },
    { icon: Youtube, href: '#', color: '#FF0000' },
    { icon: Music, href: '#', color: '#1DB954' },
    { icon: Twitter, href: '#', color: '#1DA1F2' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono requerido';
    if (!formData.email.trim()) newErrors.email = 'Correo requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Correo inválido';

    if (!formData.city.trim()) newErrors.city = 'Ciudad requerida';
    if (!formData.country.trim()) newErrors.country = 'País requerido';
    if (!formData.accepted_terms)
      newErrors.accepted_terms = 'Debe autorizar el uso de datos';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post(`${API}/community-members`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        accepted_terms: formData.accepted_terms,
        message: formData.message
      });

      setSubmitted(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        country: '',
        message: '',
        accepted_terms: false
      });

    } catch (error) {
      console.error(error);
      alert('Error enviando el formulario');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      id="comunidad"
      data-testid="community-section"
      className="py-20 md:py-32 relative overflow-hidden section-dark"
    >
      {/* Background world map texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/ComunityForm.jpg') `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container-festival relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[var(--cartagena-green)] text-white font-bold uppercase text-sm tracking-widest rounded-lg mb-4 border-2 border-[var(--cartagena-yellow)]">
            Comunidad & Diáspora
          </span>
          <h2
            data-testid="community-title"
            className="font-['Titan_One'] text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-4"
          >
            Unimos <span className="text-[var(--cartagena-yellow)]">Cartagena</span> con el <span className="text-[var(--cartagena-green)]">Mundo</span>
          </h2>
        </div>


        <div
        /* Map Illustration 
         data-testid="community-map"
         className="relative w-full max-w-4xl mx-auto aspect-[2/1] mb-16 rounded-2xl overflow-hidden border-4 border-[var(--primary)]"
         style={{
           background: 'linear-gradient(135deg, #87CEEB 0%, #98D8C8 50%, #90EE90 100%)'
         }}*/
        >
          {/* Simplified world map SVG 
          <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0">

            <path d="M150,100 Q200,80 250,120 L280,200 Q270,280 250,350 L200,400 Q150,380 130,320 L100,250 Q90,180 150,100" fill="#2D5016" opacity="0.8" />
            <path d="M200,220 Q240,200 280,250 L300,350 Q280,420 230,450 L180,440 Q140,400 150,350 L170,280 Q180,240 200,220" fill="#3D6B22" opacity="0.8" />


            <path d="M450,80 Q520,70 560,100 L580,150 Q590,200 570,280 L520,350 Q470,380 430,340 L400,280 Q380,200 400,140 Q420,100 450,80" fill="#2D5016" opacity="0.8" />
            <path d="M460,200 Q500,180 540,220 L560,320 Q550,400 500,450 L440,440 Q400,400 410,350 L430,280 Q440,230 460,200" fill="#3D6B22" opacity="0.8" />


            <path d="M600,100 Q700,80 800,120 L850,200 Q860,280 820,340 L750,380 Q680,400 620,360 L580,280 Q570,180 600,100" fill="#2D5016" opacity="0.8" />
            <path d="M750,350 Q800,340 830,380 L840,420 Q830,460 790,470 L750,460 Q720,440 730,400 Q740,370 750,350" fill="#3D6B22" opacity="0.8" />
          </svg>
*/}
          {/* Location markers 
          {locations.map((loc, index) => (
            <div
              key={loc.name}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${loc.main ? 'animate-pulse-glow' : ''}`}
              style={{ left: loc.x, top: loc.y }}
            >
              <div className={`flex flex-col items-center ${loc.main ? 'scale-125' : ''}`}>
                <MapPin
                  className={`w-6 h-6 md:w-8 md:h-8 ${loc.main ? 'text-[var(--accent)]' : 'text-[var(--primary)]'}`}
                  fill={loc.main ? 'var(--accent)' : 'var(--primary)'}
                />
                <span className="text-xs md:text-sm font-bold text-white bg-[var(--foreground)]/80 px-2 py-0.5 rounded mt-1">
                  {loc.name}
                </span>
              </div>
              
              {!loc.main && (
                <svg className="absolute top-0 left-0 w-[300px] h-[200px] -z-10 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
                  <line
                    x1="150" y1="100"
                    x2="50" y2="50"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                </svg>
              )}
            </div>
          ))}
*/}
          {/* Decorative elements 
          <div className="absolute top-4 right-4 text-white/60 font-['Titan_One'] text-sm">
            ✦ Madrid
          </div>
          <div className="absolute bottom-4 right-4 text-white/60 font-['Titan_One'] text-sm">
            Bogotá ✦
          </div>
          */}
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3
              data-testid="form-title"
              className="font-['Titan_One'] text-2xl md:text-3xl uppercase text-white mb-2"
            >
              Sé Parte del <span className="text-[var(--secondary)]">Movimiento</span>
            </h3>
            <p className="text-white/70 text-sm md:text-base">
              ¿Quieres ser aliado de Champeta AfroFest? Llena este formulario.
            </p>
          </div>

          {submitted ? (
            <div
              data-testid="form-success"
              className="p-8 bg-[var(--secondary)] text-[var(--foreground)] rounded-2xl border-2 border-[var(--foreground)] pico-shadow text-center"
            >
              <h4 className="font-['Titan_One'] text-2xl uppercase mb-2">¡Gracias por unirte!</h4>
              <p>Te contactaremos pronto con más información sobre el festival.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              data-testid="community-form"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8 rounded-2xl"
              style={{
                background: 'rgba(248, 245, 242, 0.95)',
                border: '3px solid var(--foreground)'
              }}
            >
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    data-testid="input-nombre"
                    className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] ${errors.nombre ? 'border-[var(--accent)]' : 'border-[var(--foreground)]'}`}
                  />
                  {errors.nombre && <span className="text-xs text-[var(--accent)] mt-1">{errors.nombre}</span>}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    data-testid="input-telefono"
                    className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] ${errors.telefono ? 'border-[var(--accent)]' : 'border-[var(--foreground)]'}`}
                  />
                  {errors.telefono && <span className="text-xs text-[var(--accent)] mt-1">{errors.telefono}</span>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    data-testid="input-correo"
                    className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] ${errors.correo ? 'border-[var(--accent)]' : 'border-[var(--foreground)]'}`}
                  />
                  {errors.correo && <span className="text-xs text-[var(--accent)] mt-1">{errors.correo}</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={handleChange}
                      data-testid="input-ciudad"
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] ${errors.ciudad ? 'border-[var(--accent)]' : 'border-[var(--foreground)]'}`}
                    />
                    {errors.ciudad && <span className="text-xs text-[var(--accent)] mt-1">{errors.ciudad}</span>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="country"
                      placeholder="País"
                      value={formData.country}
                      onChange={handleChange}
                      data-testid="input-pais"
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] ${errors.pais ? 'border-[var(--accent)]' : 'border-[var(--foreground)]'}`}
                    />
                    {errors.pais && <span className="text-xs text-[var(--accent)] mt-1">{errors.pais}</span>}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="accepted_terms"
                    checked={formData.accepted_terms}
                    onChange={handleChange}
                    data-testid="input-autorizo"
                    className={`w-5 h-5 mt-0.5 accent-[var(--primary)] border-2 rounded
      ${errors.accepted_terms ? 'border-red-500 ring-2 ring-red-400' : 'border-[var(--foreground)]'}
    `}
                  />

                  <label
                    className={`text-sm ${errors.accepted_terms ? 'text-red-600 font-semibold' : 'text-[var(--foreground)]'
                      }`}
                  >
                    Autorizo el uso de mis datos para recibir información del festival.
                  </label>
                </div>
                {errors.accepted_terms && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.accepted_terms}
                  </span>
                )}
              </div>

              {/* Right Column - Social + Message */}
              <div className="space-y-4">
                {/* Social Icons */}
                <div className="flex justify-center gap-3 p-4 bg-[var(--foreground)] rounded-xl">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`social-link-${index}`}
                      className="w-10 h-10 flex items-center justify-center rounded-lg transition-transform hover:scale-110"
                      style={{ backgroundColor: social.color }}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Tu Mensaje (Opcional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    data-testid="input-mensaje"
                    className="w-full px-4 py-3 border-2 border-[var(--foreground)] rounded-xl bg-white text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:border-[var(--primary)] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-testid="form-submit"
                  className="w-full mt-6 px-8 py-4 bg-[var(--cartagena-green)] text-white font-bold uppercase tracking-wider border-2 border-[var(--foreground)] pico-shadow rounded-xl hover:bg-[var(--cartagena-green)]/90 transition-colors"
                >
                  Enviar
                </button>

                <p className="text-xs text-[var(--foreground)]/50 text-center">
                  Revisar políticas de privacidad
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
