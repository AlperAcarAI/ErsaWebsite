import { useLanguage } from '../hooks/use-language';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1581094271043-d6c8e3b3b8d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Electrical control panels and equipment" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutDescription1')}
            </p>
            <p className="text-lg text-gray-600 mb-8">
              {t('aboutDescription2')}
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-ersa-blue mb-3">{t('mission')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('missionText')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-ersa-blue mb-3">{t('vision')}</h3>
                <p className="text-gray-600 text-sm">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
