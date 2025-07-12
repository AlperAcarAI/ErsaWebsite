import { useLanguage } from '../hooks/use-language';
import ErsaLogo from '../Ersa-logo.svg';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={ErsaLogo} 
                alt="ERSA Logo" 
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold">ERSA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('heroDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('services')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('values')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('values')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('services')}</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-white transition-colors">{t('electricalWorks')}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t('constructionContracting')}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t('energyTransmissionLines')}</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors">{t('infrastructureWorks')}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
