import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 px-3 py-1 flex items-center space-x-2 w-fit border-0">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-medium">Trusted Since 2005</span>
            </Badge> */}

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Vigyan </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Healthcare</span>
              <br />
              
            </h1>

            {/* <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Ambica Pharma has evolved from a humble startup into a leading force in pharmaceutical distribution. With over 19 years of expertise, we pride ourselves on quality, service, and client satisfaction.
            </p> */}
             <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
             Vigyan Healthcare is a trusted name in the pharmaceutical industry, committed to delivering high-quality healthcare solutions with integrity, innovation, and reliability. With a strong foundation in pharmaceutical APIs, chemicals & formulations, we continuously strive to meet global healthcare standards
            </p>


            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg font-medium transition-all duration-300 text-base">
                Contact Us
              </Button>
            </div> */}
            <div className="flex flex-wrap gap-4 pt-4">
  
  {/* Learn More Button */}
  <Button 
    onClick={() => navigate("/about")}
    className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-base"
  >
    Learn More
    <ArrowRight className="ml-2 w-5 h-5" />
  </Button>

  {/* Contact Us Button */}
  <Button 
    onClick={() => navigate("/contact")}
    variant="outline" 
    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-lg font-medium transition-all duration-300 text-base"
  >
    Contact Us
  </Button>

</div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">ISO-9001:2008 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">WHO-GMP Standards</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-gray-700">Quality Assured</span>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative hidden md:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100/50 to-teal-100/50 rounded-3xl backdrop-blur-sm border border-white/50 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="w-32 h-32 text-teal-400/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
