import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Globe, ArrowRight } from 'lucide-react';

const GlobalReachSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0">
              <span className="font-medium">45+ Countries • Global Reach</span>
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-gray-900">An Accord for a </span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Healthier World.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Where people live shouldn't impact healthcare quality.
            </p>
            <p className="text-gray-700 font-medium text-lg">
              We partner with governments, NGOs, and distributors worldwide.
            </p>

            <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
              Learn More About The Accord
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=800&q=80"
                alt="Global healthcare access map"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-6 h-6" />
                  <span className="text-2xl font-bold">45+ Countries</span>
                </div>
                <p className="text-blue-100">Serving healthcare needs globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
