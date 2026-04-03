import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
type IconName = string;

const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/files/fa914c70-7f07-444d-990f-d97dc0f968ff.jpg";
const NETWORK_IMG = "https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/files/4cc67a46-d331-470c-a1c3-470728560af2.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { ref, inView };
}

const features = [
  { icon: "CreditCard", title: "Платёжные шлюзы", desc: "Интеграция с YooKassa, Сбербанк, Тинькофф, CloudPayments и другими популярными шлюзами", color: "#00ff88" },
  { icon: "BarChart3", title: "Аналитика в реальном времени", desc: "Мгновенный доступ к статистике продаж, остаткам и финансовым отчётам", color: "#a855f7" },
  { icon: "Package", title: "Управление складом", desc: "Автоматический учёт товаров, уведомления о низких остатках и инвентаризация", color: "#3b82f6" },
  { icon: "Users", title: "Программа лояльности", desc: "Бонусные карты, скидки, персонализированные предложения для постоянных клиентов", color: "#f59e0b" },
  { icon: "Zap", title: "Молниеносные расчёты", desc: "Скорость обработки транзакций менее 0.3 секунды даже при нестабильном интернете", color: "#00ff88" },
  { icon: "Shield", title: "Безопасность данных", desc: "Шифрование PCI DSS, двухфакторная аутентификация и автоматическое резервное копирование", color: "#a855f7" },
];

const integrations = [
  { name: "1С", icon: "Database" },
  { name: "МойСклад", icon: "Package" },
  { name: "Контур", icon: "FileText" },
  { name: "АТОЛ", icon: "Printer" },
  { name: "Эвотор", icon: "Monitor" },
  { name: "СБИС", icon: "Building" },
  { name: "Сбербанк", icon: "CreditCard" },
  { name: "Тинькофф", icon: "Landmark" },
];

const plans = [
  {
    name: "Старт",
    price: "990",
    period: "/мес",
    desc: "Для малого бизнеса и ИП",
    features: ["1 кассовое место", "Базовая аналитика", "Email поддержка", "Облачные отчёты", "2 интеграции"],
    cta: "Начать бесплатно",
    highlight: false,
    color: "#3b82f6",
  },
  {
    name: "Бизнес",
    price: "2 490",
    period: "/мес",
    desc: "Для растущих компаний",
    features: ["5 кассовых мест", "Расширенная аналитика", "Приоритетная поддержка", "Программа лояльности", "Все интеграции", "API доступ"],
    cta: "Попробовать 14 дней",
    highlight: true,
    color: "#00ff88",
    badge: "Популярный",
  },
  {
    name: "Про",
    price: "5 990",
    period: "/мес",
    desc: "Для крупных сетей",
    features: ["Неограниченно касс", "BI аналитика", "Персональный менеджер", "White-label решение", "Все интеграции", "SLA 99.9%", "Кастомные отчёты"],
    cta: "Связаться с нами",
    highlight: false,
    color: "#a855f7",
  },
];

const advantages = [
  { number: "0.3с", label: "Скорость транзакции", icon: "Zap" },
  { number: "99.9%", label: "Аптайм системы", icon: "Shield" },
  { number: "50+", label: "Интеграций", icon: "Link" },
  { number: "10 000+", label: "Клиентов", icon: "Users" },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const heroSection = useInView(0.1);
  const featuresSection = useInView(0.1);
  const demoSection = useInView(0.1);
  const advantagesSection = useInView(0.1);
  const plansSection = useInView(0.1);
  const contactSection = useInView(0.1);

  const demoTabs = [
    { label: "Продажи", icon: "ShoppingCart" },
    { label: "Склад", icon: "Package" },
    { label: "Отчёты", icon: "BarChart3" },
  ];

  return (
    <div className="min-h-screen mesh-gradient" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(6,11,24,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,255,136,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00ff88, #00d4aa)" }}>
              <span className="text-[#060b18] font-black text-sm">LP</span>
            </div>
            <span className="font-bold text-xl text-white">Latte<span className="gradient-text-green">POS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["Возможности", "#features"], ["Демо", "#demo"], ["Преимущества", "#advantages"], ["Тарифы", "#plans"], ["Контакты", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium transition-colors" style={{ color: "rgba(240,244,255,0.65)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00ff88")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.65)")}
              >{label}</a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="btn-outline text-sm py-2.5 px-5">Войти</button>
            <button className="btn-primary text-sm py-2.5 px-5">Попробовать</button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "rgba(6,11,24,0.97)" }}>
            {[["Возможности", "#features"], ["Демо", "#demo"], ["Преимущества", "#advantages"], ["Тарифы", "#plans"], ["Контакты", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium py-2" style={{ color: "rgba(240,244,255,0.7)" }} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <button className="btn-primary text-sm">Попробовать бесплатно</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #00ff88, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(0,255,136,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div ref={heroSection.ref} className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", color: "#00ff88", animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
              Новое поколение кассовых систем
            </div>

            <h1 className={`text-5xl lg:text-6xl font-black leading-tight mb-6 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Касса, которая<br />
              <span className="gradient-text">работает за вас</span>
            </h1>

            <p className={`text-lg mb-8 leading-relaxed opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ color: "rgba(240,244,255,0.6)", animationDelay: "0.3s", animationFillMode: "forwards" }}>
              LattePOS — умная POS-система с интеграцией ведущих платёжных шлюзов и систем учёта.
              Автоматизируйте бизнес и сосредоточьтесь на росте.
            </p>

            <div className={`flex flex-wrap gap-4 mb-12 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <button className="btn-primary flex items-center gap-2">
                Попробовать 14 дней бесплатно
                <Icon name="ArrowRight" size={18} />
              </button>
              <button className="btn-outline flex items-center gap-2">
                <Icon name="Play" size={16} />
                Смотреть демо
              </button>
            </div>

            <div className={`flex items-center gap-6 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="flex -space-x-2">
                {["#00ff88", "#a855f7", "#3b82f6", "#f59e0b"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{ background: c, borderColor: "#060b18", color: "#060b18" }}>
                    {["А", "И", "С", "К"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={12} style={{ color: "#f59e0b" }} />)}
                </div>
                <span className="text-xs" style={{ color: "rgba(240,244,255,0.5)" }}>10 000+ довольных клиентов</span>
              </div>
            </div>
          </div>

          <div className={`relative opacity-0 ${heroSection.inView ? "animate-scale-in" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ background: "linear-gradient(135deg, #00ff88, #a855f7)" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,255,136,0.2)" }}>
                <img src={DASHBOARD_IMG} alt="LattePOS Dashboard" className="w-full h-auto rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(6,11,24,0.8) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-sm font-bold animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #00ff88, #00d4aa)", color: "#060b18" }}>
                ⚡ 0.3с транзакция
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl"
                style={{ background: "rgba(13,21,38,0.95)", border: "1px solid rgba(168,85,247,0.3)" }}>
                <div className="text-xs mb-0.5" style={{ color: "rgba(240,244,255,0.5)" }}>Продажи сегодня</div>
                <div className="text-xl font-black" style={{ color: "#a855f7" }}>₽ 284 590</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <div className="py-10 overflow-hidden" style={{ borderTop: "1px solid rgba(0,255,136,0.06)", borderBottom: "1px solid rgba(0,255,136,0.06)", background: "rgba(13,21,38,0.5)" }}>
        <div className="flex gap-12 items-center max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold whitespace-nowrap" style={{ color: "rgba(240,244,255,0.3)" }}>ИНТЕГРАЦИИ:</p>
          <div className="flex gap-10 items-center flex-wrap">
            {integrations.map((item) => (
              <div key={item.name} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-default">
                <Icon name={item.icon as IconName} size={16} style={{ color: "#00ff88" }} />
                <span className="text-sm font-semibold text-white whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div ref={featuresSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 opacity-0 ${featuresSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.2)", color: "#a855f7" }}>
              <Icon name="Sparkles" size={12} />
              Возможности
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Всё, что нужно<br /><span className="gradient-text">для вашего бизнеса</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(240,244,255,0.5)" }}>
              Полный набор инструментов для автоматизации продаж и управления бизнесом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title}
                className={`gradient-border card-hover p-6 opacity-0 ${featuresSection.inView ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}>
                  <Icon name={f.icon as IconName} size={22} style={{ color: f.color }} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-24" style={{ background: "rgba(13,21,38,0.4)" }}>
        <div ref={demoSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 opacity-0 ${demoSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
              <Icon name="Monitor" size={12} />
              Демонстрация
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Смотрите,<br /><span className="gradient-text">как это работает</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`opacity-0 ${demoSection.inView ? "animate-slide-in-left" : ""}`}
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
              <div className="flex gap-2 mb-8 p-1 rounded-xl" style={{ background: "rgba(13,21,38,0.8)", border: "1px solid rgba(0,255,136,0.1)" }}>
                {demoTabs.map((tab, i) => (
                  <button key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all"
                    style={{
                      background: activeTab === i ? "linear-gradient(135deg, rgba(0,255,136,0.15), rgba(0,212,170,0.1))" : "transparent",
                      color: activeTab === i ? "#00ff88" : "rgba(240,244,255,0.4)",
                      border: activeTab === i ? "1px solid rgba(0,255,136,0.25)" : "1px solid transparent",
                    }}>
                    <Icon name={tab.icon as IconName} size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Быстрые продажи</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,244,255,0.55)" }}>
                    Принимайте оплату любым способом: наличными, картой, QR-кодом или через NFC. Встроенный сканер штрихкодов ускоряет обслуживание в 3 раза.
                  </p>
                  <div className="space-y-3">
                    {["Поддержка 15+ способов оплаты", "Работа офлайн без интернета", "Фискализация ФФД 1.2"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,255,136,0.15)" }}>
                          <Icon name="Check" size={10} style={{ color: "#00ff88" }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Умный склад</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,244,255,0.55)" }}>
                    Синхронизация с 1С, МойСклад и другими системами. Автоматические заказы у поставщиков при достижении минимального остатка.
                  </p>
                  <div className="space-y-3">
                    {["Синхронизация в реальном времени", "Автозаказ у поставщиков", "Серийный учёт и маркировка"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(168,85,247,0.15)" }}>
                          <Icon name="Check" size={10} style={{ color: "#a855f7" }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Аналитика и отчёты</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(240,244,255,0.55)" }}>
                    Детальные отчёты по продажам, сотрудникам и товарам. Экспорт в Excel и Google Sheets. Дашборд с ключевыми метриками в реальном времени.
                  </p>
                  <div className="space-y-3">
                    {["30+ видов отчётов", "Прогнозирование спроса AI", "Экспорт в любой формат"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(59,130,246,0.15)" }}>
                          <Icon name="Check" size={10} style={{ color: "#3b82f6" }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`relative opacity-0 ${demoSection.inView ? "animate-slide-in-right" : ""}`}
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}>
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-20" style={{ background: "linear-gradient(135deg, #3b82f6, #a855f7)" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(59,130,246,0.2)" }}>
                <img src={NETWORK_IMG} alt="LattePOS Integrations" className="w-full h-auto" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,11,24,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#00ff88" }}>50+ интеграций</p>
                  <p className="text-xs" style={{ color: "rgba(240,244,255,0.5)" }}>Подключайтесь к любым системам учёта и платёжным шлюзам</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24">
        <div ref={advantagesSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 opacity-0 ${advantagesSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", color: "#00ff88" }}>
              <Icon name="Trophy" size={12} />
              Преимущества
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Цифры,<br /><span className="gradient-text">которые говорят сами</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {advantages.map((adv, i) => (
              <div key={adv.label}
                className={`text-center gradient-border p-8 card-hover opacity-0 ${advantagesSection.inView ? "animate-scale-in" : ""}`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}>
                  <Icon name={adv.icon as IconName} size={24} style={{ color: "#00ff88" }} />
                </div>
                <div className="text-4xl font-black mb-2 glow-text-green" style={{ color: "#00ff88" }}>{adv.number}</div>
                <div className="text-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{adv.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: "Wifi", title: "Работа без интернета", desc: "Полный функционал даже при отключении сети. Синхронизация автоматически при восстановлении соединения.", color: "#00ff88" },
              { icon: "Layers", title: "Единая платформа", desc: "Одна система для кассы, склада, CRM и аналитики. Больше не нужно переключаться между программами.", color: "#a855f7" },
              { icon: "Headphones", title: "Поддержка 24/7", desc: "Техническая поддержка в любое время суток. Среднее время ответа — 3 минуты.", color: "#3b82f6" },
            ].map((item, i) => (
              <div key={item.title}
                className={`flex gap-4 p-6 rounded-2xl card-hover opacity-0 ${advantagesSection.inView ? "animate-fade-in-up" : ""}`}
                style={{ background: "rgba(13,21,38,0.8)", border: `1px solid ${item.color}20`, animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "forwards" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                  <Icon name={item.icon as IconName} size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-24" style={{ background: "rgba(13,21,38,0.4)" }}>
        <div ref={plansSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 opacity-0 ${plansSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b" }}>
              <Icon name="Tag" size={12} />
              Тарифы
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Выберите<br /><span className="gradient-text">свой план</span>
            </h2>
            <p className="text-lg" style={{ color: "rgba(240,244,255,0.5)" }}>14 дней бесплатно для всех тарифов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, i) => (
              <div key={plan.name}
                className={`relative rounded-2xl p-8 card-hover opacity-0 ${plansSection.inView ? "animate-fade-in-up" : ""}`}
                style={{
                  background: plan.highlight ? "rgba(13,21,38,0.9)" : "rgba(13,21,38,0.6)",
                  border: plan.highlight ? `1px solid ${plan.color}40` : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: plan.highlight ? `0 0 40px ${plan.color}15` : "none",
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                }}>
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{ background: plan.color, color: "#060b18" }}>
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(240,244,255,0.45)" }}>{plan.desc}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">₽{plan.price}</span>
                    <span className="text-sm mb-1" style={{ color: "rgba(240,244,255,0.4)" }}>{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${plan.color}18` }}>
                        <Icon name="Check" size={10} style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{feat}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all"
                  style={plan.highlight
                    ? { background: `linear-gradient(135deg, ${plan.color}, #00d4aa)`, color: "#060b18" }
                    : { background: `${plan.color}15`, color: plan.color, border: `1px solid ${plan.color}30` }
                  }>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div ref={contactSection.ref} className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 opacity-0 ${contactSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)", color: "#00ff88" }}>
              <Icon name="MessageCircle" size={12} />
              Контакты
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Готовы начать?<br /><span className="gradient-text">Свяжитесь с нами</span>
            </h2>
            <p className="text-lg" style={{ color: "rgba(240,244,255,0.5)" }}>
              Оставьте заявку и мы свяжемся с вами в течение 15 минут
            </p>
          </div>

          <div className={`gradient-border p-8 lg:p-12 opacity-0 ${contactSection.inView ? "animate-scale-in" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "rgba(240,244,255,0.65)" }}>Ваше имя</label>
                <input type="text" placeholder="Иван Петров"
                  className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
                  style={{ background: "rgba(6,11,24,0.8)", border: "1px solid rgba(0,255,136,0.15)", fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(0,255,136,0.15)")}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "rgba(240,244,255,0.65)" }}>Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
                  style={{ background: "rgba(6,11,24,0.8)", border: "1px solid rgba(0,255,136,0.15)", fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(0,255,136,0.15)")}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: "rgba(240,244,255,0.65)" }}>Название компании</label>
              <input type="text" placeholder="ООО «Название»"
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
                style={{ background: "rgba(6,11,24,0.8)", border: "1px solid rgba(0,255,136,0.15)", fontFamily: "'Golos Text', sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                onBlur={e => (e.target.style.borderColor = "rgba(0,255,136,0.15)")}
              />
            </div>
            <div className="mb-8">
              <label className="block text-sm font-semibent mb-2" style={{ color: "rgba(240,244,255,0.65)" }}>Сообщение (необязательно)</label>
              <textarea rows={4} placeholder="Расскажите о вашем бизнесе..."
                className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all resize-none"
                style={{ background: "rgba(6,11,24,0.8)", border: "1px solid rgba(0,255,136,0.15)", fontFamily: "'Golos Text', sans-serif" }}
                onFocus={e => (e.target.style.borderColor = "rgba(0,255,136,0.5)")}
                onBlur={e => (e.target.style.borderColor = "rgba(0,255,136,0.15)")}
              />
            </div>
            <button className="btn-primary w-full flex items-center justify-center gap-2 text-base">
              Отправить заявку
              <Icon name="Send" size={18} />
            </button>
          </div>

          <div className={`flex flex-wrap justify-center gap-8 mt-12 opacity-0 ${contactSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            {[
              { icon: "Phone", label: "+7 (800) 555-35-35", sub: "Бесплатно по России" },
              { icon: "Mail", label: "hello@lattepos.ru", sub: "Ответим за 15 минут" },
              { icon: "MapPin", label: "Москва, Россия", sub: "Работаем по всей России" },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.15)" }}>
                  <Icon name={item.icon as IconName} size={18} style={{ color: "#00ff88" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs" style={{ color: "rgba(240,244,255,0.4)" }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(0,255,136,0.06)", background: "rgba(6,11,24,0.8)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00ff88, #00d4aa)" }}>
              <span className="text-[#060b18] font-black text-xs">LP</span>
            </div>
            <span className="font-bold text-white">Latte<span className="gradient-text-green">POS</span></span>
          </div>
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.3)" }}>© 2026 LattePOS. Все права защищены.</p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Оферта"].map(link => (
              <a key={link} href="#" className="text-xs transition-colors" style={{ color: "rgba(240,244,255,0.3)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00ff88")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,244,255,0.3)")}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}