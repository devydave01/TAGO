import React from 'react';
import ServiceCard from '../molecules/ServiceCard';
import archIcon from '../../assets/Archicon.png';

const ServicesSection = () => {
  const services = [
    {
      title: "Product Engineering",
      description: "We design and develop digital products from concept to launch, combining technical precision with scalable architecture. Whether building an MVP or refining an existing product, we focus on performance, stability, and long-term.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "System Architecture",
      description: "We engineer strong technical foundations that support growth. By designing clean, modular architectures, we ensure systems remain stable, adaptable, and easy to evolve as business needs change.",
      icon: <img src={archIcon} alt="System Architecture" className="w-6 h-6 object-contain invert brightness-0" />
    },
    {
      title: "Platform Development",
      description: "We build robust platforms capable of handling complexity at scale. Our layered approach ensures clarity in structure, seamless integrations, and reliable system performance.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Infrastructure & Optimization",
      description: "We design infrastructure that supports performance and scalability. From system optimization to performance tuning, we ensure technology runs efficiently under increasing demand.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "System Modernization",
      description: "We build robust platforms capable of handling complexity at scale. Our layered approach ensures clarity in structure, seamless integrations, and reliable system performance.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Modern cloud-native solutions with AWS, Azure, and GCP. DevOps, CI/CD, and infrastructure as code.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0047ff]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What we do</h2>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            We design, build, and optimize structured software systems that support business growth at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
