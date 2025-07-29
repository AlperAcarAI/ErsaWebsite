import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/use-language';

export function ComplaintForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    formType: '',
    priority: 'normal',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree entegrasyonu - hazır endpoint
      const response = await fetch('https://formspree.io/f/mzzvgwwy', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          formType: formData.formType,
          priority: formData.priority,
          subject: formData.subject,
          message: formData.message,
          _subject: `ERSA - ${formData.formType}: ${formData.subject}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          formType: '',
          priority: 'normal',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center border border-green-200">
          {/* Success Animation */}
          <div className="mb-6">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 bg-green-100 rounded-full animate-ping"></div>
              <div className="relative flex items-center justify-center w-24 h-24 bg-green-500 rounded-full">
                <i className="fas fa-check text-white text-3xl"></i>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t('formSubmittedTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('formSubmittedMessage')}
            </p>
          </div>

          {/* Success Details */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-clock text-green-600 mr-2"></i>
              <span className="text-green-800 font-medium">Tahmini Yanıt Süresi: 1-2 İş Günü</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
              <div className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                E-posta ile bilgilendirileceksiniz
              </div>
              <div className="flex items-center">
                <i className="fas fa-shield-check mr-2"></i>
                Başvurunuz güvenle kaydedildi
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gradient-to-r from-ersa-blue to-ersa-light-blue text-white px-8 py-3 rounded-lg hover:from-ersa-light-blue hover:to-ersa-blue transition-all duration-300 font-medium transform hover:scale-105"
            >
              <i className="fas fa-plus mr-2"></i>
              {t('submitAnother')}
            </button>
            
            <Link href="/" className="block w-full bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
              <i className="fas fa-home mr-2"></i>
              Ana Sayfaya Dön
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Acil durumlar için:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a href="tel:+902122220646" className="flex items-center text-ersa-blue hover:text-ersa-light-blue">
                <i className="fas fa-phone mr-2"></i>
                +90 212 222 0646
              </a>
              <a href="mailto:info@ersaulasim.com.tr" className="flex items-center text-ersa-blue hover:text-ersa-light-blue">
                <i className="fas fa-envelope mr-2"></i>
                info@ersaulasim.com.tr
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-ersa-blue text-white rounded-full mb-4">
          <i className="fas fa-envelope text-2xl"></i>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('complaintFormTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('complaintFormDescription')}</p>
      </div>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
        {/* Progress Steps */}
        <div className="bg-gradient-to-r from-ersa-blue to-ersa-light-blue p-6">
          <div className="flex items-center justify-center space-x-4 text-white">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white text-ersa-blue rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <span className="ml-2 font-medium">Bilgilerinizi Girin</span>
            </div>
            <div className="w-8 h-0.5 bg-white opacity-50"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white opacity-50 text-ersa-blue rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <span className="ml-2 font-medium opacity-75">Gönder</span>
            </div>
            <div className="w-8 h-0.5 bg-white opacity-30"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white opacity-30 text-ersa-blue rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <span className="ml-2 font-medium opacity-50">Tamamlandı</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
              <i className="fas fa-user-circle text-ersa-blue mr-3"></i>
              Kişisel Bilgiler
            </h3>
            <p className="text-gray-600 text-sm mb-6">Sizinle iletişim kurabilmemiz için gerekli bilgiler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-user text-ersa-blue mr-2"></i>
                {t('fullName')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400"
                placeholder="Ad ve soyadınızı girin"
              />
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-user"></i>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-envelope text-ersa-blue mr-2"></i>
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400"
                placeholder="ornek@email.com"
              />
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-phone text-ersa-blue mr-2"></i>
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400"
                placeholder="+90 5XX XXX XX XX"
              />
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-phone"></i>
              </div>
            </div>

            {/* Company */}
            <div className="relative">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-building text-ersa-blue mr-2"></i>
                {t('company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400"
                placeholder="Şirket/Kurum adı (opsiyonel)"
              />
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-building"></i>
              </div>
            </div>
          </div>

          {/* Form Details Section */}
          <div className="mb-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
              <i className="fas fa-clipboard-list text-ersa-blue mr-3"></i>
              Başvuru Detayları
            </h3>
            <p className="text-gray-600 text-sm mb-6">Başvurunuzun türü ve öncelik seviyesi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* Form Type */}
            <div className="relative">
              <label htmlFor="formType" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-list-alt text-ersa-blue mr-2"></i>
                {t('formType')} *
              </label>
              <select
                id="formType"
                name="formType"
                value={formData.formType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400 appearance-none bg-white"
              >
                <option value="">{t('selectFormType')}</option>
                <option value="complaint">{t('complaint')}</option>
                <option value="application">{t('application')}</option>
                <option value="suggestion">{t('suggestion')}</option>
                <option value="other">{t('other')}</option>
              </select>
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-list-alt"></i>
              </div>
              <div className="absolute right-4 top-11 text-gray-400 pointer-events-none">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            {/* Priority */}
            <div className="relative">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <i className="fas fa-exclamation-circle text-ersa-blue mr-2"></i>
                {t('priority')}
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400 appearance-none bg-white"
              >
                <option value="normal">{t('normalPriority')}</option>
                <option value="high">{t('highPriority')}</option>
                <option value="urgent">{t('urgentPriority')}</option>
              </select>
              <div className="absolute left-4 top-11 text-gray-400">
                <i className="fas fa-exclamation-circle"></i>
              </div>
              <div className="absolute right-4 top-11 text-gray-400 pointer-events-none">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="mb-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
              <i className="fas fa-comment-alt text-ersa-blue mr-3"></i>
              Mesaj Detayları
            </h3>
            <p className="text-gray-600 text-sm mb-6">Başvurunuzun konusu ve detayları</p>
          </div>

          {/* Subject */}
          <div className="mb-6 relative">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <i className="fas fa-tag text-ersa-blue mr-2"></i>
              {t('subject')} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue transition-all duration-200 hover:border-gray-400"
              placeholder="Başvurunuzun konusunu kısaca belirtin"
            />
            <div className="absolute left-4 top-11 text-gray-400">
              <i className="fas fa-tag"></i>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8 relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <i className="fas fa-pen text-ersa-blue mr-2"></i>
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              placeholder={t('messagePlaceholder')}
              className="w-full px-4 py-3 pt-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue resize-vertical transition-all duration-200 hover:border-gray-400"
            />
            <div className="absolute left-4 top-11 text-gray-400">
              <i className="fas fa-pen"></i>
            </div>
            <div className="text-xs text-gray-500 mt-2 flex items-center">
              <i className="fas fa-info-circle mr-1"></i>
              Minimum 20 karakter gereklidir. Mevcut: <span className="ml-1 font-medium">{formData.message.length}</span>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <i className="fas fa-shield-alt text-blue-600 mt-0.5 mr-3"></i>
              <div>
                <h4 className="font-medium text-blue-900 mb-1">Gizlilik Bildirimi</h4>
                <p className="text-sm text-blue-700">
                  Formda paylaştığınız kişisel bilgiler sadece başvurunuzu değerlendirmek için kullanılacak ve üçüncü taraflarla paylaşılmayacaktır.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              disabled={isSubmitting || formData.message.length < 20}
              className="w-full bg-gradient-to-r from-ersa-blue to-ersa-light-blue text-white px-8 py-4 rounded-lg hover:from-ersa-light-blue hover:to-ersa-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>{t('submitting')}</span>
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  <span>{t('submitForm')}</span>
                </>
              )}
            </button>
            
            <div className="text-center">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <i className="fas fa-arrow-left mr-2"></i>
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}