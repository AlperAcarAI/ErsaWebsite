import { useLanguage } from '../hooks/use-language';

export function ValuesSection() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('reliability'),
      icon: 'fas fa-shield-alt',
      description: t('reliabilityText')
    },
    {
      title: t('quality'),
      icon: 'fas fa-award',
      description: t('qualityText')
    },
    {
      title: t('teamwork'),
      icon: 'fas fa-users',
      description: t('teamworkText')
    },
    {
      title: t('technology'),
      icon: 'fas fa-microchip',
      description: t('technologyText')
    },
    {
      title: t('consistency'),
      icon: 'fas fa-balance-scale',
      description: t('consistencyText')
    },
    {
      title: t('environmentalResponsibility'),
      icon: 'fas fa-leaf',
      description: t('environmentalResponsibilityText')
    }
  ];

  return (
    <section id="values" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Industrial electrical equipment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ersa-blue/90 via-ersa-blue/80 to-ersa-light-blue/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('coreValuesTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('coreValuesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="value-card bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <i className={`${value.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white/80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
