import React from 'react';
import { ShieldCheck, Award, Thermometer, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { certifications } from '../mock/data';

const iconMap = {
  'shield-check': ShieldCheck,
  'award': Award,
  'thermometer': Thermometer,
  'globe': Globe
};

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon];
            return (
              <Card key={cert.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{cert.title}</h3>
                  <p className="text-blue-100 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
