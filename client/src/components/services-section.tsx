import { useLanguage } from '../hooks/use-language';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('electricalWorks'),
      icon: 'fas fa-bolt',
      image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('mvLvNetworks'),
        t('transformerInstallation'),
        t('lightingSystems'),
        t('lowCurrentSystems')
      ]
    },
    {
      title: t('infrastructureWorks'),
      icon: 'fas fa-hard-hat',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('fiberOpticInfrastructure'),
        t('excavationWorks'),
        t('boredPiles'),
        t('earthworks')
      ]
    },
    {
      title: t('constructionContracting'),
      icon: 'fas fa-building',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('industrialFacilities'),
        t('stadiumsSportsHalls'),
        t('highways'),
        t('highSpeedRail')
      ]
    },
    {
      title: t('energyTransmissionLines'),
      icon: 'fas fa-cogs',
      image: 'https://images.unsplash.com/photo-1621905252472-e8592afb5111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('kvLines'),
        t('overheadUnderground'),
        t('securitySystems'),
        t('specialLightProjection')
      ]
    },
    {
      title: t('mechanicalWorks'),
      icon: 'fas fa-tools',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('factoryInstallations'),
        t('structuredCabling'),
        t('groundingSystems'),
        t('lightningProtection')
      ]
    },
    {
      title: t('urbanProjects'),
      icon: 'fas fa-city',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400',
      items: [
        t('parksGardens'),
        t('urbanSquares'),
        t('lightingInstallations'),
        t('smartCitySystems')
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`${service.icon} text-ersa-blue text-2xl mr-3`}></i>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <i className="fas fa-check-circle text-ersa-green text-sm mr-2 mt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
