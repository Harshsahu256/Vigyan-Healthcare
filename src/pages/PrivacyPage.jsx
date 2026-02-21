import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { ShieldCheck } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0 mx-auto">
              <ShieldCheck className="w-4 h-4 mr-2 inline" />
              <span className="font-medium">Your Privacy Matters</span>
            </Badge>
            <h1 className="text-5xl font-bold">
              <span className="text-gray-900">Privacy </span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Vigyan Healthcare, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Company name and business details</li>
                <li>Order and transaction information</li>
                <li>Communication preferences</li>
                <li>Technical data from your device and browser</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about our products and services</li>
                <li>Improving our website and user experience</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">4. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through our Cookie Consent banner or your browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700"><strong>Email:</strong> vigyanhealthcare@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> +91 963 093 5265</p>
                <p className="text-gray-700"><strong>Address:</strong>  18/2/103/3, AB Road
Lasudiya Mori, Vijay Nagar
Indore, Pin Code – 452010
Madhya Pradesh, India </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
