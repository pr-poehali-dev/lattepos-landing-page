import Icon from "@/components/ui/icon";
import { CREAM, TERRA_LIGHT, LOGO_IMG } from "./constants";

interface LandingNavProps {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  onLogin: () => void;
  onTrial: () => void;
}

export default function LandingNav({ menuOpen, setMenuOpen, onLogin, onTrial }: LandingNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(15,36,32,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,96,58,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={LOGO_IMG} alt="Lattesoft" className="w-11 h-11 object-contain" />
          <span className="font-bold text-xl" style={{ color: CREAM }}>Latte<span className="gradient-text-terra">POS</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[["Возможности", "#features"], ["Демо", "#demo"], ["Преимущества", "#advantages"], ["Тарифы", "#plans"], ["Контакты", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium transition-colors" style={{ color: "rgba(232,213,176,0.55)" }}
              onMouseEnter={e => (e.currentTarget.style.color = TERRA_LIGHT)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,213,176,0.55)")}
            >{label}</a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-sm py-2.5 px-5" onClick={onLogin}>Войти</button>
          <button className="btn-primary text-sm py-2.5 px-5" onClick={onTrial}>Попробовать</button>
        </div>

        <button className="md:hidden" style={{ color: CREAM }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(15,36,32,0.98)" }}>
          {[["Возможности", "#features"], ["Демо", "#demo"], ["Преимущества", "#advantages"], ["Тарифы", "#plans"], ["Контакты", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium py-2" style={{ color: "rgba(232,213,176,0.7)" }} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <button className="btn-primary text-sm" onClick={() => { setMenuOpen(false); onTrial(); }}>Попробовать 30 дней</button>
        </div>
      )}
    </nav>
  );
}
