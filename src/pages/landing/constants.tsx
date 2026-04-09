import { useEffect, useRef, useState } from "react";

export const DASHBOARD_IMG = "https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/files/fa914c70-7f07-444d-990f-d97dc0f968ff.jpg";
export const NETWORK_IMG = "https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/files/4cc67a46-d331-470c-a1c3-470728560af2.jpg";
export const LOGO_IMG = "https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/a4d2dcda-1aa7-4e4d-bc54-31c3b81c1079.png";
export const SEND_LEAD_URL = "https://functions.poehali.dev/86f9b595-8683-4fcd-affa-b06cc4697af5";

export const TERRA = "#c9603a";
export const TEAL = "#4a9990";
export const CREAM = "#e8d5b0";
export const TERRA_LIGHT = "#d97a56";
export const TEAL_LIGHT = "#65b0a8";

export function useInView(threshold = 0.15) {
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

export const features = [
  { icon: "CreditCard", title: "Платёжные шлюзы", desc: "Интеграция с YooKassa, Сбербанк, Тинькофф, CloudPayments и другими популярными шлюзами", color: TERRA },
  { icon: "BarChart3", title: "Аналитика в реальном времени", desc: "Мгновенный доступ к статистике продаж, остаткам и финансовым отчётам", color: TEAL },
  { icon: "Package", title: "Управление складом", desc: "Автоматический учёт товаров, уведомления о низких остатках и инвентаризация", color: TERRA_LIGHT },
  { icon: "Users", title: "Программа лояльности", desc: "Бонусные карты, скидки, персонализированные предложения для постоянных клиентов", color: TEAL_LIGHT },
  { icon: "Zap", title: "Молниеносные расчёты", desc: "Скорость обработки транзакций менее 0.3 секунды даже при нестабильном интернете", color: TERRA },
  { icon: "Shield", title: "Безопасность данных", desc: "Шифрование PCI DSS, двухфакторная аутентификация и автоматическое резервное копирование", color: TEAL },
];

export const integrations = [
  {
    name: "1С",
    url: "https://v8.1c.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/741ef0d3-21ea-4674-b846-d5942a6091ad.png" alt="1С" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "АТОЛ",
    url: "https://www.atol.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/d00120f5-0390-4fae-85f7-71715933b70a.png" alt="АТОЛ" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "Дримкас",
    url: "https://dreamkas.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/61dc81fd-fc32-4c9c-8f90-f7846290ae21.png" alt="Дримкас" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "CAS",
    url: "https://cas-russia.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/d7a2ed22-5896-401e-9d66-bbde55f0db24.png" alt="CAS" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "Масса-К",
    url: "https://massa.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/8b41fc04-e98c-4919-96ca-596a6766c76a.png" alt="Масса-К" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "ЕГАИС",
    url: "https://egais.ru/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/dd668ce0-0e1e-48d6-92de-de8e70c7122a.png" alt="ЕГАИС" style={{ height: "36px", width: "auto" }} />
    ),
  },
  {
    name: "Честный знак",
    url: "https://xn--80ajghhoc2aj1c8b.xn--p1ai/",
    logo: (
      <img src="https://cdn.poehali.dev/projects/bde23adf-c387-489c-b4cf-4fca86eafada/bucket/b0ef05f3-6877-456b-b199-bd3a89c7ee8b.png" alt="Честный знак" style={{ height: "36px", width: "auto" }} />
    ),
  },
];

export const plans = [
  {
    name: "LattePOS",
    price: "6 000",
    period: "/год",
    desc: "Для магазинов, супермаркетов, сетей магазинов",
    features: [
      "Поддержка интеграция с ЕГАИС и Честный Знак",
      "Контроль продажи алкогольной продукции по времени и календарю",
      "Подойдет как для одиночного магазина, так и для сети магазинов",
      "Поддерживает интеграцию со всем торговым оборудованием",
      "Обеспечивает высокую скорость обслуживания клиентов",
    ],
    cta: "Попробовать 30 дней",
    highlight: false,
    color: TEAL,
    badge: undefined as string | undefined,
  },
  {
    name: "LattePOS.SCO",
    price: "20 000",
    period: "/год",
    desc: "Касса самообслуживания для любых магазинов",
    features: [
      "Поддержка интеграция с ЕГАИС и Честный Знак",
      "Позволяет сократить количество персонала в магазине",
      "Повышает скорость обслуживания покупателей",
      "Имеет дружественный и удобный интерфейс",
      "Обеспечивает высокую скорость обслуживания клиентов",
    ],
    cta: "Попробовать 30 дней",
    highlight: true,
    color: TERRA,
    badge: undefined as string | undefined,
  },
  {
    name: "LattePOS.Fastfood",
    price: "9 000",
    period: "/год",
    desc: "Для предприятий быстрого питания, Шаверма, Булочная",
    features: [
      "Поддержка интеграция с ЕГАИС и Честный Знак",
      "Электронная очередь для посетителей с выводом на экран",
      "Интеграция с агрегаторами заказов и доставки",
      "Использование модификаторов блюд",
      "Продажа разливных напитков",
      "Система отложенных заказов",
      "Поддержка кухонных принтеров с очередью на приготовление",
    ],
    cta: "Попробовать 30 дней",
    highlight: false,
    color: TERRA_LIGHT,
    badge: undefined as string | undefined,
  },
  {
    name: "LattePOS.Restaurant",
    price: "20 000",
    period: "/год",
    desc: "Для Ресторанов,\nБаров,\nКафе",
    features: [
      "Поддержка интеграция с ЕГАИС и Честный Знак",
      "Заказ и бронирование столиков",
      "Работа с заказами: разделение, объединение, закрытие",
      "Использование модификаторов блюд",
      "Интеграция с агрегаторами заказов и доставки",
      "Поддержка кухонных принтеров с очередью на приготовление",
      "Поддержка мониторов повара",
      "Контроль за работой персонала",
    ],
    cta: "Попробовать 30 дней",
    highlight: false,
    color: TEAL_LIGHT,
    badge: undefined as string | undefined,
  },
];

export const advantages = [
  { number: "0.3с", label: "Скорость транзакции", icon: "Zap" },
  { number: "99.9%", label: "Аптайм системы", icon: "Shield" },
  { number: "50+", label: "Интеграций", icon: "Link" },
  { number: "10 000+", label: "Клиентов", icon: "Users" },
];