import React from 'react';
import { ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { stats } from '../mock/data';
import { useNavigate } from "react-router-dom";

const GlobalSupplySection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 px-3 py-1 flex items-center space-x-2 w-fit border-0">
              <Globe className="w-4 h-4" />
              <span className="font-medium">19+ years of excellence</span>
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-gray-900">Global Pharma</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Supply Chain</span>
            </h2>

            {/* <p className="text-gray-600 text-lg leading-relaxed">
              We bridge the gap between premium Indian manufacturing and global healthcare demands. Your trusted partner for hospital tenders, distribution networks, and private label expansion.
            </p> */}
           <ul className="text-gray-600 text-lg leading-relaxed list-disc pl-5 space-y-3">
  <li>
    <strong>Vigyan Healthcare</strong><br />
    Reliable Pharmaceutical Solutions for a Healthier World
  </li>

  <li>
    5+ Years of Excellence in Pharmaceutical Manufacturing & Supply
  </li>

  <li>
    Vigyan Healthcare bridges the gap between quality Indian pharmaceutical manufacturing and global healthcare demand. 
    We are a trusted partner for APIs, pharmaceutical chemicals, hormones, and finished formulations—serving domestic 
    and international markets with consistency, compliance, and care.
  </li>
</ul>

            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Start Partnership
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-lg font-medium transition-all duration-300">
                Our Story
              </Button>
            </div> */}
            <div className="flex flex-wrap gap-4 pt-4">

  {/* Start Partnership */}
  <Button 
    onClick={() => navigate("/contact")}
    className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
  >
    Start Partnership
    <ArrowRight className="ml-2 w-5 h-5" />
  </Button>

  {/* Our Story */}
  <Button 
    onClick={() => navigate("/about")}
    variant="outline" 
    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 rounded-lg font-medium transition-all duration-300"
  >
    Our Story
  </Button>

</div>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Regulatory Ready</h4>
                  <p className="text-sm text-gray-600">WHO-GMP & ISO certified operations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-600">Exporting to countries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          {/* <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GlobalSupplySection;
