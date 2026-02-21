import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ShieldCheck, Truck, Headphones, MessageCircle } from 'lucide-react';
import { operationalStats } from '../mock/data';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-900">Numbers That </span>
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Inspire Confidence.</span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
           Global buyers evaluate partners on operational experience, supply reliability, and product portfolio strength.
          </p>
          <p className="text-gray-700 font-medium">
           At Vijayam Healthcare, we present our capabilities with complete transparency and professional integrity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900">WHO-GMP Compliant Supply</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every batch is manufactured and supplied under WHO-GMP aligned systems, supported by validated SOPs, stability data, and complete audit trails to ensure consistent quality and compliance.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-bold text-gray-900">Pan-India & Global Dispatch Capability</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
               Robust distribution infrastructure enabling seamless pan-India supply along with export dispatches for pharmaceuticals company, institutions, tenders & international partners through dedicated fulfillment windows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-bold text-gray-900">Clinical-Grade Responsiveness</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dedicated account management with defined service timelines ensuring quick resolution of technical, regulatory and commercial queries without delays.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {operationalStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div> */}
              <div className="flex justify-center mb-3">
  <div className="bg-blue-100 p-4 rounded-full">
    <stat.icon className="w-8 h-8 text-blue-600" />
  </div>
</div>
              <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Content */}
            {/* <div className="p-12 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Built for healthcare operators
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From rapid fulfillment to multi-format formulations, every workflow is tuned for clinicians, pharmacists, and global distributors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Fast-tracked dispatch across India & exports</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">GMP-documented QC snapshots on demand</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Extensive SKU mix across therapies</span>
                </li>
              </ul>
            </div> */}

            {/* Right Image */}
            {/* <div className="relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80"
                alt="Ambica Pharma quality operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30">
                  QUALITY DESK
                </Badge>
                <p className="text-lg font-medium">
                  Live oversight on packaging, serialization, and cold-chain prep.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat with us
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
