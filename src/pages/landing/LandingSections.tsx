import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  CREAM, TERRA, TEAL, TERRA_LIGHT, TEAL_LIGHT,
  DASHBOARD_IMG, NETWORK_IMG, SHOP_SCHEME_IMG, LOGO_IMG,
  features, integrations, plans, advantages,
  useInView,
} from "./constants";

type IconName = string;

interface SectionsProps {
  onTrial: () => void;
}

export default function LandingSections({ onTrial }: SectionsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const heroSection = useInView(0.1);
  const featuresSection = useInView(0.1);
  const demoSection = useInView(0.1);
  const advantagesSection = useInView(0.1);
  const plansSection = useInView(0.1);
  const contactSection = useInView(0.1);

  const demoTabs = [
    { label: "Магазины", icon: "Store" },
    { label: "Фаст Фуд", icon: "Sandwich" },
    { label: "Ресторан", icon: "UtensilsCrossed" },
  ];

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #c9603a, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4a9990, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5" style={{ background: "radial-gradient(circle, #1a3530, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: "linear-gradient(rgba(201,96,58,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,96,58,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
        </div>

        <div ref={heroSection.ref} className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`text-5xl lg:text-6xl font-black mb-2 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span style={{ color: CREAM }}>Latte</span><span className="gradient-text-terra">POS</span>
            </div>

            <h1 className={`text-3xl lg:text-4xl font-black leading-snug mb-6 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Кассовая программа,<br />
              <span className="gradient-text">которая работает быстро</span>
            </h1>

            <p className={`text-lg mb-8 leading-relaxed opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ color: "rgba(232,213,176,0.6)", animationDelay: "0.3s", animationFillMode: "forwards" }}>
              LattePOS — умная кассовая программа для автоматизации розницы с интеграцией с товаручетной программой 1С и системами: ЕГАИС, Честный знак, ОФД ФНС, с поддержкой оборудования ведущих производителей.
            </p>

            <div className={`flex flex-wrap gap-4 mb-12 opacity-0 ${heroSection.inView ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <button className="btn-primary flex items-center gap-2" onClick={onTrial}>
                Попробовать 30 дней бесплатно
                <Icon name="ArrowRight" size={18} />
              </button>

            </div>


          </div>

          <div className={`relative opacity-0 ${heroSection.inView ? "animate-scale-in" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-30" style={{ background: "linear-gradient(135deg, #c9603a, #4a9990)" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,96,58,0.25)" }}>
                <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/e57034e3-7469-4f09-a206-6e4c32d0089c.png" alt="LattePOS Terminal" className="w-full h-auto rounded-2xl" />
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-sm font-bold animate-pulse-glow"
                style={{ background: "linear-gradient(135deg, #c9603a, #d97a56)", color: CREAM }}>
                ⚡ 0.3с транзакция
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <div className="py-10 overflow-hidden" style={{ borderTop: "1px solid rgba(201,96,58,0.1)", borderBottom: "1px solid rgba(201,96,58,0.1)", background: "rgba(26,53,48,0.35)" }}>
        <div className="flex gap-12 items-center max-w-7xl mx-auto px-6">
          <p className="text-xs font-semibold whitespace-nowrap" style={{ color: "rgba(232,213,176,0.3)" }}>ИНТЕГРАЦИИ:</p>
          <div className="flex gap-8 items-center flex-wrap">
            {integrations.map((item) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                {item.logo}
              </a>
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
              style={{ background: "rgba(74,153,144,0.12)", border: "1px solid rgba(74,153,144,0.3)", color: TEAL_LIGHT }}>
              <Icon name="Sparkles" size={12} />
              Возможности
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Всё, что нужно<br /><span className="gradient-text">для вашего бизнеса</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={f.title}
                className={`gradient-border card-hover p-8 opacity-0 ${featuresSection.inView ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}>
                  <Icon name={f.icon as IconName} size={26} style={{ color: f.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: CREAM }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,213,176,0.55)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-24" style={{ background: "rgba(26,53,48,0.3)" }}>
        <div ref={demoSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 opacity-0 ${demoSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(201,96,58,0.12)", border: "1px solid rgba(201,96,58,0.3)", color: TERRA_LIGHT }}>
              <Icon name="GitBranch" size={12} />
              Схема работы
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Смотрите,<br /><span className="gradient-text">как это работает</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`opacity-0 ${demoSection.inView ? "animate-slide-in-left" : ""}`}
              style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
              <div className="flex gap-2 mb-8 p-1 rounded-xl" style={{ background: "rgba(15,36,32,0.8)", border: "1px solid rgba(201,96,58,0.15)" }}>
                {demoTabs.map((tab, i) => (
                  <button key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold transition-all"
                    style={{
                      background: activeTab === i ? "linear-gradient(135deg, rgba(201,96,58,0.18), rgba(217,122,86,0.1))" : "transparent",
                      color: activeTab === i ? TERRA_LIGHT : "rgba(232,213,176,0.4)",
                      border: activeTab === i ? `1px solid rgba(201,96,58,0.3)` : "1px solid transparent",
                    }}>
                    <Icon name={tab.icon as IconName} size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === 0 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" style={{ color: CREAM }}>Быстрые продажи</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(232,213,176,0.55)" }}>
                    Принимайте оплату любым способом: наличными, картой, QR-кодом или через NFC. Встроенный сканер штрихкодов ускоряет обслуживание в 3 раза.
                  </p>
                  <div className="space-y-3">
                    {["Поддержка 15+ способов оплаты", "Работа офлайн без интернета", "Фискализация ФФД 1.2"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,96,58,0.18)" }}>
                          <Icon name="Check" size={10} style={{ color: TERRA_LIGHT }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(232,213,176,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" style={{ color: CREAM }}>Умный склад</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(232,213,176,0.55)" }}>
                    Синхронизация с 1С, МойСклад и другими системами. Автоматические заказы у поставщиков при достижении минимального остатка.
                  </p>
                  <div className="space-y-3">
                    {["Синхронизация в реальном времени", "Автозаказ у поставщиков", "Серийный учёт и маркировка"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(74,153,144,0.18)" }}>
                          <Icon name="Check" size={10} style={{ color: TEAL_LIGHT }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(232,213,176,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold" style={{ color: CREAM }}>Аналитика и отчёты</h3>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(232,213,176,0.55)" }}>
                    Детальные отчёты по продажам, сотрудникам и товарам. Экспорт в Excel и Google Sheets. Дашборд с ключевыми метриками в реальном времени.
                  </p>
                  <div className="space-y-3">
                    {["30+ видов отчётов", "Прогнозирование спроса AI", "Экспорт в любой формат"].map(item => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(201,96,58,0.18)" }}>
                          <Icon name="Check" size={10} style={{ color: TERRA_LIGHT }} />
                        </div>
                        <span className="text-sm" style={{ color: "rgba(232,213,176,0.65)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={`relative opacity-0 ${demoSection.inView ? "animate-slide-in-right" : ""}`}
              style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}>
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-20" style={{ background: "linear-gradient(135deg, #4a9990, #c9603a)" }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(74,153,144,0.25)" }}>
                <img src={activeTab === 0 ? SHOP_SCHEME_IMG : NETWORK_IMG} alt="LattePOS" className="w-full h-auto" />
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
              style={{ background: "rgba(201,96,58,0.12)", border: "1px solid rgba(201,96,58,0.3)", color: TERRA_LIGHT }}>
              <Icon name="Trophy" size={12} />
              Преимущества
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Технологии дают надёжность<br /><span className="gradient-text">в каждом решении</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Cpu",
                color: TERRA,
                desc: (<>Быстрая работа кассиров на <span style={{ color: "#e8d5b0" }}>Latte</span><span style={{ color: "#cf6a45" }}>POS</span> даже на слабом железе: Intel Celeron N4020 1.1&nbsp;GHz, 4&nbsp;GB RAM, Windows&nbsp;7</>),
              },
              {
                icon: "WifiOff",
                color: TEAL,
                desc: (<>Работа <span style={{ color: "#e8d5b0" }}>Latte</span><span style={{ color: "#cf6a45" }}>POS</span> на кассе продолжится даже если пропадёт интернет</>),
              },
              {
                icon: "Server",
                color: TERRA_LIGHT,
                desc: (<>Сервер <span style={{ color: "#e8d5b0" }}>Latte</span><span style={{ color: "#cf6a45" }}>POS</span>.Server может размещаться как на железе клиента, так и в нашем облаке</>),
              },
              {
                icon: "Network",
                color: TEAL_LIGHT,
                desc: (<>Поддерживается кластеризация серверов, что позволяет строить сети из 10&nbsp;000+ магазинов</>),
              },
              {
                icon: "RefreshCw",
                color: TERRA,
                desc: (<>Обмен с&nbsp;1С любой типовой конфигурации в&nbsp;формате EnterpriseData уже настроен в&nbsp;основной поставке <span style={{ color: "#e8d5b0" }}>Latte</span><span style={{ color: "#cf6a45" }}>POS</span></>),
              },
              {
                icon: "ShieldCheck",
                color: TEAL,
                desc: (<>Интеграция с&nbsp;ЕГАИС и&nbsp;Честный Знак включена в&nbsp;стоимость основной поставки <span style={{ color: "#e8d5b0" }}>Latte</span><span style={{ color: "#cf6a45" }}>POS</span></>),
              },
            ].map((item, i) => (
              <div key={i}
                className={`flex gap-4 p-6 rounded-2xl card-hover opacity-0 ${advantagesSection.inView ? "animate-fade-in-up" : ""}`}
                style={{ background: "rgba(26,53,48,0.7)", border: `1px solid ${item.color}28`, animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}18` }}>
                  <Icon name={item.icon as IconName} size={22} style={{ color: item.color }} />
                </div>
                <p className="text-sm leading-relaxed self-center" style={{ color: "rgba(232,213,176,0.75)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-24" style={{ background: "rgba(26,53,48,0.3)" }}>
        <div ref={plansSection.ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 opacity-0 ${plansSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(74,153,144,0.12)", border: "1px solid rgba(74,153,144,0.3)", color: TEAL_LIGHT }}>
              <Icon name="Tag" size={12} />
              Тарифы
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Выберите свой <span className="gradient-text">тариф</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <div key={plan.name}
                className={`relative rounded-2xl p-8 card-hover opacity-0 flex flex-col ${plansSection.inView ? "animate-fade-in-up" : ""}`}
                style={{
                  background: "rgba(31,61,56,0.95)",
                  border: `1px solid ${plan.color}45`,
                  boxShadow: `0 0 40px ${plan.color}18`,
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                }}>
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-1">
                    <span style={{ color: CREAM }}>Latte</span><span style={{ color: "#cf6a45" }}>{plan.name.replace("Latte", "")}</span>
                  </h3>
                  <p className="text-sm mb-4 whitespace-pre-line" style={{ color: "#e8d5b0" }}>{plan.desc}</p>
                  <div className="flex items-end gap-1 flex-wrap">
                    <span className="text-2xl font-black" style={{ color: CREAM }}>₽{plan.price}</span>
                    <span className="text-xs mb-1" style={{ color: "rgba(232,213,176,0.4)" }}>{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${plan.color}18` }}>
                        <Icon name="Check" size={10} style={{ color: plan.color }} />
                      </div>
                      <span style={{ color: "rgba(232,213,176,0.65)", fontSize: "12px" }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-10 opacity-0 ${plansSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <button
              className="px-10 py-4 rounded-xl font-semibold text-sm transition-all"
              style={{ background: `linear-gradient(135deg, ${TERRA}, ${TERRA_LIGHT})`, color: CREAM }}
              onClick={onTrial}>
              Попробовать любой тариф бесплатно на 30 дней
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div ref={contactSection.ref} className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 opacity-0 ${contactSection.inView ? "animate-fade-in-up" : ""}`}
            style={{ animationFillMode: "forwards" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-4"
              style={{ background: "rgba(201,96,58,0.12)", border: "1px solid rgba(201,96,58,0.3)", color: TERRA_LIGHT }}>
              <Icon name="MessageCircle" size={12} />
              Контакты
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Готовы начать?<br /><span className="gradient-text">Свяжитесь с нами</span>
            </h2>
            <p className="text-lg" style={{ color: "rgba(232,213,176,0.5)" }}>
              Мы находимся в Йошкар-Оле и работаем по всей России
            </p>
          </div>

          <div className={`grid lg:grid-cols-2 gap-8 opacity-0 ${contactSection.inView ? "animate-scale-in" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>

            <div className="flex flex-col gap-6">
              <div className="gradient-border p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4" style={{ color: CREAM }}>Контакты</h3>
                <div className="space-y-4">
                  {[
                    { icon: "Phone", label: "8 800 250-46-05", sub: "Бесплатно по России", href: "tel:88002504605" },
                    { icon: "Mail", label: "info@lattesoft.ru", sub: "Ответим за 15 минут", href: "mailto:info@lattesoft.ru" },
                    { icon: "MapPin", label: "г. Йошкар-Ола, ул. Комсомольская 132, пом. 5", sub: "Республика Марий Эл", href: undefined },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,96,58,0.12)", border: "1px solid rgba(201,96,58,0.2)" }}>
                        <Icon name={item.icon as IconName} size={18} style={{ color: TERRA_LIGHT }} />
                      </div>
                      <div>
                        {item.href
                          ? <a href={item.href} className="text-sm font-semibold transition-colors" style={{ color: CREAM }}
                              onMouseEnter={e => (e.currentTarget.style.color = TERRA_LIGHT)}
                              onMouseLeave={e => (e.currentTarget.style.color = CREAM)}>{item.label}</a>
                          : <p className="text-sm font-semibold" style={{ color: CREAM }}>{item.label}</p>
                        }
                        <p className="text-xs mt-0.5" style={{ color: "rgba(232,213,176,0.4)" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gradient-border p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4" style={{ color: CREAM }}>Реквизиты</h3>
                <div className="space-y-2">
                  {[
                    ["Организация", 'ООО "Латте Софт"'],
                    ["ИНН", "1200021867"],
                  ].map(([key, val]) => (
                    <div key={key} className="flex justify-between gap-4">
                      <span className="text-sm" style={{ color: "rgba(232,213,176,0.45)" }}>{key}</span>
                      <span className="text-sm font-medium text-right" style={{ color: CREAM }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="gradient-border rounded-2xl overflow-hidden" style={{ minHeight: "380px" }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=%D0%99%D0%BE%D1%88%D0%BA%D0%B0%D1%80-%D0%9E%D0%BB%D0%B0%2C+%D1%83%D0%BB.+%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F+132&z=16&l=map&nointents=1"
                width="100%"
                height="100%"
                style={{ border: "none", minHeight: "380px", display: "block", filter: "invert(0.85) hue-rotate(165deg) saturate(0.7)" }}
                allowFullScreen
                title="Карта офиса"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(201,96,58,0.1)", background: "rgba(10,28,24,0.9)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Lattesoft" className="w-10 h-10 object-contain" />
            <span className="font-bold" style={{ color: CREAM }}>Latte<span className="gradient-text-terra">POS</span></span>
          </div>
          <p className="text-xs" style={{ color: "rgba(232,213,176,0.3)" }}>© 2026 ООО «Латте Софт». Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors" style={{ color: "rgba(232,213,176,0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = TERRA_LIGHT)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,213,176,0.3)")}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}