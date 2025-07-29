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
      // Formspree entegrasyonu - formspree.io'da hesap açıp form ID'sini buraya yazın
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {t('formSubmittedTitle')}
          </h2>
          <p className="text-gray-600">
            {t('formSubmittedMessage')}
          </p>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-ersa-blue text-white px-6 py-3 rounded-lg hover:bg-ersa-light-blue transition-colors mr-4"
          >
            {t('submitAnother')}
          </button>
          <Link href="/" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-ersa-blue text-white p-8">
          <h1 className="text-3xl font-bold mb-2">{t('complaintFormTitle')}</h1>
          <p className="text-ersa-light-blue">{t('complaintFormDescription')}</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('fullName')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                {t('company')}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              />
            </div>

            {/* Form Type */}
            <div>
              <label htmlFor="formType" className="block text-sm font-medium text-gray-700 mb-2">
                {t('formType')} *
              </label>
              <select
                id="formType"
                name="formType"
                value={formData.formType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              >
                <option value="">{t('selectFormType')}</option>
                <option value="complaint">{t('complaint')}</option>
                <option value="application">{t('application')}</option>
                <option value="suggestion">{t('suggestion')}</option>
                <option value="other">{t('other')}</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                {t('priority')}
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
              >
                <option value="normal">{t('normalPriority')}</option>
                <option value="high">{t('highPriority')}</option>
                <option value="urgent">{t('urgentPriority')}</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              {t('subject')} *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ersa-blue focus:border-ersa-blue resize-vertical"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-ersa-blue text-white px-8 py-3 rounded-lg hover:bg-ersa-light-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting && <i className="fas fa-spinner fa-spin"></i>}
              <span>{isSubmitting ? t('submitting') : t('submitForm')}</span>
            </button>
            <Link href="/" className="bg-gray-500 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors">
              Ana Sayfaya Dön
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}