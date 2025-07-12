import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/use-language';

export function StatsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounter = (element: HTMLElement, target: number) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current).toString();
        if (current >= target) {
          element.textContent = target.toString();
          clearInterval(timer);
        }
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.counter-animation');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count') || '0');
            animateCounter(counter as HTMLElement, target);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-ersa-blue mb-2">
              <span className="counter-animation" data-count="15">0</span>+
            </div>
            <p className="text-gray-600 font-medium">{t('yearsExperience')}</p>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-ersa-blue mb-2">
              <span className="counter-animation" data-count="500">0</span>+
            </div>
            <p className="text-gray-600 font-medium">{t('completedProjects')}</p>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-ersa-blue mb-2">
              <span className="counter-animation" data-count="50">0</span>+
            </div>
            <p className="text-gray-600 font-medium">{t('expertTeam')}</p>
          </div>
          <div className="text-center animate-on-scroll">
            <div className="text-4xl md:text-5xl font-bold text-ersa-blue mb-2">
              <span className="counter-animation" data-count="100">0</span>%
            </div>
            <p className="text-gray-600 font-medium">{t('customerSatisfaction')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
