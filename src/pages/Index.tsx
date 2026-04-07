import { useState } from "react";
import LandingNav from "./landing/LandingNav";
import LandingSections from "./landing/LandingSections";
import { LoginModal, LeadModal } from "./landing/Modals";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen mesh-gradient" style={{ fontFamily: "'Golos Text', sans-serif" }}>
      {showModal && <LeadModal onClose={() => setShowModal(false)} />}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <LandingNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onLogin={() => setShowLogin(true)}
        onTrial={() => setShowModal(true)}
      />

      <LandingSections onTrial={() => setShowModal(true)} />
    </div>
  );
}
