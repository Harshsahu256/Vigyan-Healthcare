import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { ShieldCheck, Users, Globe, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0 mx-auto">
              <span className="font-medium">Est. 2005</span>
            </Badge>
            <h1 className="text-5xl font-bold">
              <span className="text-gray-900">About </span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Vigyan Healthcare</span>
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 space-y-6">
            {/* <p className="text-gray-700 text-lg leading-relaxed">
              Ambica Pharma has evolved from a humble startup into a leading force in pharmaceutical distribution. With over 19 years of expertise, we pride ourselves on quality, service, and client satisfaction.
            </p> */}
             <p className="text-gray-700 text-lg leading-relaxed">
              Vigyan Healthcare is a trusted name in the pharmaceutical industry, committed to delivering high-quality healthcare solutions with integrity, innovation, and reliability. With a strong foundation in pharmaceutical APIs, chemicals & formulations, we continuously strive to meet global healthcare standards
            </p>
            

            <p className="text-gray-700 leading-relaxed">
              Founded in 2025, we have grown to become one of India's most trusted pharmaceutical wholesalers, traders, and exporters. Our commitment to excellence and adherence to international quality standards have enabled us to serve healthcare partners across 45+ countries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We specialize in providing comprehensive pharmaceutical solutions, from single strips to container loads, ensuring that healthcare providers have access to quality medicines when they need them most.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-gray-600 text-sm">WHO-GMP and ISO 9001:2015 certified operations with rigorous quality control.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Global Presence</h3>
                  <p className="text-gray-600 text-sm">Serving healthcare needs in 45+ countries with reliable export services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Trusted Partners</h3>
                  <p className="text-gray-600 text-sm">Over 300,000 satisfied healthcare partners worldwide trust our services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Award Winning</h3>
                  <p className="text-gray-600 text-sm">Recognized with 35+ awards for excellence in pharmaceutical distribution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
