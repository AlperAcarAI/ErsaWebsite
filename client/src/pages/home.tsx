import { useEffect } from 'react';
import { LoadingScreen } from '../components/loading-screen';
import { Navigation } from '../components/navigation';
import { HeroSection } from '../components/hero-section';
import { StatsSection } from '../components/stats-section';
import { AboutSection } from '../components/about-section';
import { ServicesSection } from '../components/services-section';
import { ValuesSection } from '../components/values-section';
import { ContactSection } from '../components/contact-section';
import { Footer } from '../components/footer';

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => {
      observer.observe(el);
    });

    // Progress bar
    const updateProgressBar = () => {
      const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
