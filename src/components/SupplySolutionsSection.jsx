import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { supplySolutions, supplyChainStats } from '../mock/data';

const SupplySolutionsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        {/* <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-4 py-1 border-0 mx-auto">
            <span className="font-medium">Supply Chain</span>
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Tailored </span>
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Supply Solutions</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Whether you're a hospital network, a global distributor, or a digital pharmacy, our supply chain is optimized for your specific needs.
          </p>
        </div> */}

        {/* Stats Cards */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supplyChainStats.map((stat) => (
            <div key={stat.id} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Design Your Supply Plan
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div> */}

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {supplySolutions.map((solution) => (
            <Card key={solution.id} className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <span className="text-teal-600 font-medium hover:text-teal-700 cursor-pointer inline-flex items-center group">
                    3 features →
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplySolutionsSection;
