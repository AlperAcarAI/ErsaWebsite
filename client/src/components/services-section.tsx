import { useLanguage } from '../hooks/use-language';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('electricalWorks'),
      icon: 'fas fa-bolt',
      image: '/images/electrical-work-1.png',
      items: [
        t('mvLvNetworks'),
        t('transformerInstallation'),
        t('electricalEquipment'),
        t('lightingSystems'),
        t('structuredCabling'),
        t('groundingLightning'),
        t('securitySystems'),
        t('specialLightProjection'),
        t('lowCurrentSystems'),
        t('internalInstallations')
      ]
    },
    {
      title: t('infrastructureWorks'),
      icon: 'fas fa-hard-hat',
      image: '/images/infrastructure-work.png',
      items: [
        t('fiberOpticInfrastructure'),
        t('excavationWorks'),
        t('boredPiles'),
        t('earthworks'),
        t('transmissionLines'),
        t('wastewaterDrainage')
      ]
    },
    {
      title: t('constructionContracting'),
      icon: 'fas fa-building',
      image: '/images/construction-work.png',
      items: [
        t('strengthening'),
        t('outdoorLighting'),
        t('publicBuildings'),
        t('parksGardens'),
        t('lightSteelStructures'),
        t('restoration')
      ]
    },
    {
      title: t('energyTransmissionLines'),
      icon: 'fas fa-cogs',
      image: '/images/electrical-work-2.png',
      items: [
        t('kvLines'),
        t('overheadUnderground')
      ]
    },
    {
      title: t('mechanicalWorks'),
      icon: 'fas fa-tools',
      image: '/images/electrical-work-3.png',
      items: [
        t('factoryInstallations'),
        t('mechanical')
      ]
    },
    {
      title: t('urbanProjects'),
      icon: 'fas fa-city',
      image: '/images/urban-projects.png',
      items: [
        t('energyTransmissionLinesArea'),
        t('enhUndergroundConstruction'),
        t('lightingInstallations'),
        t('industrialFacilities'),
        t('stadiumsSportsHalls'),
        t('highways'),
        t('highSpeedRail')
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
