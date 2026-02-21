// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';
// import { Button } from './ui/button';

// const Navbar = () => {
//   const [contactOpen, setContactOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
       

//   <Link to="/" className="flex items-center space-x-2">
  
//   {/* Logo Image from Public Folder */}
//   <img 
//     src="/logo1.png" 
//     alt="logo" 
//     className="w-16 h-16 object-contain  scale-100"
//   />

//   {/* Updated Text */}
//   <div className="flex flex-col leading-tight">
//   <span className="text-xl font-bold text-[#D4AF37] tracking-wide">
//     VIGYAN HEALTHCARE LLP
//   </span>
//   <span className="text-xs text-[#1FB6C9] -mt-1">
//     Mfg. of Pharmaceutical API and Chemicals
//   </span>
// </div>

// </Link>
//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
//               Home
//             </Link>
//             <Link to="/about" className="text-gray-700 font-medium hover:text-emerald-600 transition-colors">
//               About Us
//             </Link>
//             <div className="relative">
//               <button
//                 onClick={() => setContactOpen(!contactOpen)}
//                 className="flex items-center space-x-1 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
//               >
//                 <span>Contact Us</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {contactOpen && (
//                 <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
//                   <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
//                     Contact Form
//                   </Link>
//                   <a href="tel:+919630935265" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
//                     Call Us
//                   </a>
//                 </div>
//               )}
//             </div>
          
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); // Product dropdown ke liye state
  const navigate = useNavigate();

  // Navigation function jo state pass karega
  const handleProductClick = (category) => {
    navigate('/quote', { state: { category } });
    setProductOpen(false); // Click hone ke baad dropdown band karne ke liye
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center space-x-2">
            {/* Logo Image */}
            <img 
              src="/logo1.png" 
              alt="logo" 
              className="w-16 h-16 object-contain scale-100"
            />

            {/* Logo Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-[#D4AF37] tracking-wide">
                VIGYAN HEALTHCARE LLP
              </span>
              <span className="text-xs text-[#1FB6C9] -mt-1">
                Mfg. of Pharmaceutical API and Chemicals
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
              Home
            </Link>

            {/* --- NEW PRODUCT DROPDOWN --- */}
            <div className="relative">
              <button
                onClick={() => {
                  setProductOpen(!productOpen);
                  setContactOpen(false); // Contact dropdown band karne ke liye
                }}
                className="flex items-center space-x-1 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
              >
                <span>Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
              </button>

              {productOpen && (
                <div className="absolute top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 overflow-hidden">
                  <button 
                    onClick={() => handleProductClick("Hormones")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                  >
                    Hormones
                  </button>
                  <button 
                    onClick={() => handleProductClick("Corticosteroids")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                  >
                    Corticosteroids
                  </button>
                  <button 
                    onClick={() => handleProductClick("Vitamins")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                  >
                    Vitamins
                  </button>
                  <button 
                    onClick={() => handleProductClick("Antibiotics")}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                  >
                    Antibiotics
                  </button>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 font-medium hover:text-emerald-600 transition-colors">
              About Us
            </Link>

            {/* Contact Us Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setContactOpen(!contactOpen);
                  setProductOpen(false); // Product dropdown band karne ke liye
                }}
                className="flex items-center space-x-1 text-gray-700 font-medium hover:text-emerald-600 transition-colors"
              >
                <span>Contact Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${contactOpen ? 'rotate-180' : ''}`} />
              </button>
              {contactOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Contact Form
                  </Link>
                  <a href="tel:+919630935265" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                    Call Us
                  </a>
                </div>
              )}
            </div>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;