import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ShieldCheck, Building2, Truck, FileText } from 'lucide-react';
import { qualityFeatures } from '../mock/data';

const iconMap = {
  0: ShieldCheck,
  1: Building2,
  2: Truck,
  3: FileText
};

const QualitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 border-0 mx-auto">
            <span className="font-medium">WHO-GMP • ISO 9001 • GDP Certified</span>
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Quality You Can </span>
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Trust.</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
           International certification, rigorous quality checks, and traceable documentation ensure every API and pharmaceutical chemical meets global safety and performance standards.
          </p>
          <p className="text-gray-700 font-medium text-lg">
            Every product meets global safety standards.
          </p>

          <div className="pt-4">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              View Certifications
            </Button>
          </div>
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityFeatures.map((feature, index) => {
            const Icon = iconMap[index];
            return (
              <div key={feature.id} className="bg-white rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
