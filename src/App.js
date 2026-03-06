import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutFestival } from "./components/AboutFestival";
import { Lineup } from "./components/Lineup";
import { Experiences } from "./components/Experiences";
import { Culture } from "./components/Culture";
import { Tickets } from "./components/Tickets";
import { Community } from "./components/Community";
import { Allies } from "./components/Allies";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SpotifyPlayer } from "./components/SpotifyPlayer";
import { SubpageLayout } from "./components/SubpageLayout";
import FestivalPage from "./pages/FestivalPage";
import ChampetaPage from "./pages/ChampetaPage";
import ComunidadPage from "./pages/ComunidadPage";
import ExperienciasPage from "./pages/ExperienciasPage";

// Landing Page Component
const LandingPage = () => {
  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Header - Sticky Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Festival */}
        <AboutFestival />

        {/* Lineup 
        <Lineup />
        */}
        {/* Experiences */}
        <Experiences />

        {/* Culture - What is Champeta */}
        <Culture />

        {/* Tickets */}
        <Tickets />

        {/* Community & Diaspora */}
        <Community />

        {/* Allies */}
        <Allies />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>

            {/* Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Subpages with shared layout */}
            <Route element={<SubpageLayout />}>
              <Route path="/festival" element={<FestivalPage />} />
              <Route path="/champeta" element={<ChampetaPage />} />
              <Route path="/comunidad" element={<ComunidadPage />} />
              <Route path="/experiencias" element={<ExperienciasPage />} />
            </Route>
          </Routes>

          {/* Floating Spotify Player - available on all pages */}
          <SpotifyPlayer />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
