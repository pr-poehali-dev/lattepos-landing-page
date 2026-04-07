import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CREAM, TERRA_LIGHT, TEAL_LIGHT, LOGO_IMG, SEND_LEAD_URL } from "./constants";

export function LoginModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,28,24,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}>
      <div className="gradient-border w-full max-w-sm p-8 rounded-2xl relative animate-scale-in"
        style={{ background: 'var(--dark-card)' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
          style={{ color: CREAM }}>
          <Icon name="X" size={20} />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <img src={LOGO_IMG} alt="Lattesoft" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-xl font-bold" style={{ color: CREAM }}>Войти в систему</h3>
            <p className="text-xs" style={{ color: 'rgba(232,213,176,0.45)' }}>LattePOS</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Email</label>
            <input type="email" required placeholder="you@company.ru" value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl outline-none transition-all"
              style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
              onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Пароль</label>
            <input type="password" required placeholder="••••••••" value={form.password}
              onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl outline-none transition-all"
              style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
              onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
              onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
            />
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base">
            Войти <Icon name="LogIn" size={16} />
          </button>
          <p className="text-center text-xs" style={{ color: 'rgba(232,213,176,0.35)' }}>
            Нет аккаунта?{' '}
            <button type="button" onClick={onClose} className="underline transition-colors"
              style={{ color: TERRA_LIGHT }}
              onMouseEnter={e => (e.currentTarget.style.color = CREAM)}
              onMouseLeave={e => (e.currentTarget.style.color = TERRA_LIGHT)}>
              Попробовать бесплатно
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export function LeadModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(10,28,24,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}>
      <div className="gradient-border w-full max-w-md p-8 rounded-2xl relative animate-scale-in"
        style={{ background: 'var(--dark-card)' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
          style={{ color: CREAM }}>
          <Icon name="X" size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(74,153,144,0.2)' }}>
              <Icon name="CheckCircle" size={36} style={{ color: TEAL_LIGHT }} />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: CREAM }}>Заявка отправлена!</h3>
            <p className="text-sm" style={{ color: 'rgba(232,213,176,0.55)' }}>Мы свяжемся с вами в течение 15 минут</p>
            <button onClick={onClose} className="btn-primary mt-6">Закрыть</button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <img src={LOGO_IMG} alt="Lattesoft" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-xl font-bold" style={{ color: CREAM }}>Попробовать LattePOS</h3>
                <p className="text-xs" style={{ color: 'rgba(232,213,176,0.45)' }}>30 дней бесплатно</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Ваше имя *</label>
                <input type="text" required placeholder="Иван Петров" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Телефон *</label>
                <input type="tel" required placeholder="+7 (___) ___-__-__" value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Компания</label>
                <input type="text" placeholder="ООО «Название»" value={form.company}
                  onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                  style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: 'rgba(232,213,176,0.65)' }}>Сообщение</label>
                <textarea rows={3} placeholder="Расскажите о вашем бизнесе..." value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl outline-none transition-all resize-none"
                  style={{ background: 'rgba(15,36,32,0.8)', border: '1px solid rgba(201,96,58,0.2)', color: CREAM, fontFamily: "'Golos Text', sans-serif" }}
                  onFocus={e => (e.target.style.borderColor = 'rgba(201,96,58,0.55)')}
                  onBlur={e => (e.target.style.borderColor = 'rgba(201,96,58,0.2)')}
                />
              </div>
              {status === 'error' && (
                <p className="text-sm" style={{ color: '#e06060' }}>Ошибка отправки. Попробуйте позже или позвоните нам.</p>
              )}
              <button type="submit" disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 text-base">
                {status === 'loading' ? 'Отправляем...' : <>Отправить заявку <Icon name="Send" size={16} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
