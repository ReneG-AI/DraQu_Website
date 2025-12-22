import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const TARGET_TIMESTAMP = Date.UTC(2026, 1, 2, 21, 0, 0);

const getTimeLeft = (targetTimestamp: number) => {
  const diff = Math.max(0, targetTimestamp - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

type CountdownTimerProps = {
  className?: string;
};

const CountdownTimer = ({ className = '' }: CountdownTimerProps) => {
  const { t } = useTranslation();
  const targetTimestamp = useMemo(() => TARGET_TIMESTAMP, []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetTimestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetTimestamp));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {[
        { label: t('timerDays'), value: timeLeft.days },
        { label: t('timerHours'), value: timeLeft.hours },
        { label: t('timerMinutes'), value: timeLeft.minutes },
      ].map((item) => (
        <div
          key={item.label}
          className="min-w-[90px] rounded-2xl border border-ancient-gold/25 bg-black/35 backdrop-blur-sm px-4 py-3 text-center shadow-card"
        >
          <div className="text-2xl font-semibold text-foreground tabular-nums drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-ancient-gold/70">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
