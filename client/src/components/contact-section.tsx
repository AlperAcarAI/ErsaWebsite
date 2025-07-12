import { useState } from 'react';
import { useLanguage } from '../hooks/use-language';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Form submitted successfully! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contactInfo')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ersa-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('address')}</h4>
                  <p className="text-gray-600">
                    İstiklal Mahallesi Halit Evin Caddesi<br />
                    No: 54 Serdivan - Sakarya / TÜRKİYE
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ersa-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('phone')}</h4>
                  <p className="text-gray-600">+90 (264) 123 45 67</p>
                  <p className="text-gray-600">+90 (264) 123 45 68</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ersa-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('email')}</h4>
                  <p className="text-gray-600">info@ersaulasim.com</p>
                  <p className="text-gray-600">iletisim@ersaulasim.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-ersa-blue rounded-lg flex items-center justify-center">
                  <i className="fas fa-globe text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{t('website')}</h4>
                  <p className="text-gray-600">www.ersaulasim.com</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('socialMedia')}</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-ersa-blue rounded-full flex items-center justify-center text-white hover:bg-ersa-light-blue transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contactForm')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('fullName')}</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-colors" 
                      placeholder={t('fullName')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('email')}</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-colors" 
                      placeholder={t('email')}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('phone')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-colors" 
                    placeholder={t('phone')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('subject')}</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-colors"
                    required
                  >
                    <option value="">{t('selectSubject')}</option>
                    <option value="electrical">{t('electricalWorks')}</option>
                    <option value="construction">{t('constructionContracting')}</option>
                    <option value="general">{t('contactInfo')}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('message')}</label>
                  <textarea 
                    rows={6} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-colors" 
                    placeholder={t('message')}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-ersa-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-ersa-light-blue transition-colors"
                >
                  {t('sendMessage')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
