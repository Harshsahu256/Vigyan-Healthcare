import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>   */}
              <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
  <img 
    src="/logo.png" 
    alt="Company Logo" 
    className="w-full h-full object-contain scale-125"
  />
</div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Vigyan Healthcare</span>
                <span className="text-xs -mt-1">Mfg. of Pharmaceutical API and Chemicals</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
             Your reliable partner in pharmaceutical excellence — delivering APIs and formulations with quality assurance, regulatory compliance, and global reach.
            </p>
           <div className="flex space-x-3">

  {/* Facebook */}
  <a 
    href="https://www.facebook.com/share/19vGCaFeBT/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
  >
    <Facebook className="w-4 h-4" />
  </a>

  {/* LinkedIn */}
  <a 
    href="https://www.linkedin.com/in/vigyan-healthcare-5b35043a9?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
  >
    <Linkedin className="w-4 h-4" />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/vigyan_healthcare?igsh=cHFya3dzNGd2bmpt" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300"
  >
    <Instagram className="w-4 h-4" />
  </a>

</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
                <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Product</h4>
              <ul className="space-y-2">
        {/* Styling wahi hai, bas onClick aur cursor-pointer add kiya hai */}
        <li 
          className="text-gray-400 text-sm cursor-pointer" 
          onClick={() => navigate('/quote', { state: { category: 'Hormones' } })}
        >
          Hormones
        </li>

        <li 
          className="text-gray-400 text-sm cursor-pointer" 
          onClick={() => navigate('/quote', { state: { category: 'Corticosteroids' } })}
        >
          Corticosteroids
        </li>

        <li 
          className="text-gray-400 text-sm cursor-pointer" 
          onClick={() => navigate('/quote', { state: { category: 'Vitamins' } })}
        >
          Vitamins
        </li>

        <li 
          className="text-gray-400 text-sm cursor-pointer" 
          onClick={() => navigate('/quote', { state: { category: 'Antibiotics' } })}
        >
          Antibiotics
        </li>
      </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919004049076" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 963 093 5265
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:vigyanhealthcare@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    vigyanhealthcare@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-gray-400 text-sm">
                     18/2/103/3, AB Road
Lasudiya Mori, Vijay Nagar
Indore, Pin Code – 452010
Madhya Pradesh, India 
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vigyan Healthcare. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-gray-500">WHO-GMP Certified</span>
              <span className="text-xs text-gray-500">ISO 9001:2015</span>
              <span className="text-xs text-gray-500">GDP Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
