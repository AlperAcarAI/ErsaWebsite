import { useLanguage } from '../hooks/use-language';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ersa-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('address')}</h4>
                <p className="text-gray-600 text-sm">
                  İstiklal Mahallesi Halit Evin Caddesi<br />
                  No: 54 Serdivan - Sakarya / TÜRKİYE
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ersa-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('phone')}</h4>
                <p className="text-gray-600 text-sm">+90 (264) 123 45 67</p>
                <p className="text-gray-600 text-sm">+90 (264) 123 45 68</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ersa-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('email')}</h4>
                <p className="text-gray-600 text-sm">info@ersaulasim.com</p>
                <p className="text-gray-600 text-sm">iletisim@ersaulasim.com</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-ersa-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-globe text-white text-2xl"></i>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('website')}</h4>
                <p className="text-gray-600 text-sm">www.ersaulasim.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12 text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">{t('socialMedia')}</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-12 h-12 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
