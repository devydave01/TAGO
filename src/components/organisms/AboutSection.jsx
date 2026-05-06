import React from 'react';
import InfoCard from '../molecules/InfoCard';
import aboutImg from '../../assets/aboutimg.png';
import visionIcon from '../../assets/visionicon.png';
import missionIcon from '../../assets/missionicon.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About us</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-xl">
              Tago is a Nigerian-owned software engineering company focused on designing structured, scalable systems that grow with businesses. We specialize in building flexible, reliable technology foundations that support both immediate needs and long-term expansion.
            </p>
          </div>

          <div className="grid gap-6">
            <InfoCard 
              title="Our Vision"
              description="To design and engineer structured, scalable software systems that empower businesses to grow with confidence, stability, and long-term technical strength."
              icon={<img src={visionIcon} alt="Vision Icon" className="w-6 h-6 object-contain" />}
            />
            <InfoCard 
              title="Our Mission"
              description="To become a globally respected engineering company known for building resilient systems that stand the test of growth, change, and time."
              icon={<img src={missionIcon} alt="Mission Icon" className="w-6 h-6 object-contain" />}
            />
          </div>
        </div>

        {/* Right Image - Shadow Removed */}
        <div className="flex-1 w-full">
          <div className="relative rounded-[2rem] overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
            <img 
              src={aboutImg} 
              alt="Our Team at Work" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
