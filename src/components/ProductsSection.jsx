// import React from 'react';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { Card, CardContent } from './ui/card';
// import { ArrowRight } from 'lucide-react';
// import { productCategories } from '../mock/data';

// const ProductsSection = () => {
//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0 mx-auto">
//             <span className="font-medium">MANUFACTURING • TRADE • EXPORT</span>
//           </Badge>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-gray-900">Any Pharmaceutical APIs. </span>
//             <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Any Quantity.</span>
//           </h2>

//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//           From small trial orders to bulk container loads, Vigyan Healthcare sources, manufactures, and delivers a wide range of pharmaceutical APIs with assured quality and reliability.
//           </p>
//           <p className="text-gray-700 font-medium text-lg">
//             We support 50+ chemicals & formulation materials across major categories — ready when you need them.
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {productCategories.map((product) => (
//             <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0">
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 flex gap-2">
//                   {product.tags.map((tag, idx) => (
//                     <Badge key={idx} className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//               <CardContent className="p-6 space-y-4">
//                 <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{product.description}</p>
//                 <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-lg font-medium shadow-md transition-all duration-300 w-full group">
//                   Request Quote
//                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;

// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';
// import { Card, CardContent } from './ui/card';
// import { ArrowRight } from 'lucide-react';
// import { productCategories } from '../mock/data';

// const ProductsSection = () => {
//   const navigate = useNavigate(); // 2. Hook initialize karein

//   return (
//     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center space-y-4 mb-16">
//           <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0 mx-auto">
//             <span className="font-medium">MANUFACTURING • TRADE • EXPORT</span>
//           </Badge>

//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className="text-gray-900">Any Pharmaceutical APIs. </span>
//             <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Any Quantity.</span>
//           </h2>

//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             From small trial orders to bulk container loads, Vigyan Healthcare sources, manufactures, and delivers a wide range of pharmaceutical APIs with assured quality and reliability.
//           </p>
//           <p className="text-gray-700 font-medium text-lg">
//             We support 50+ chemicals & formulation materials across major categories — ready when you need them.
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {productCategories.map((product) => (
//             <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0">
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 flex gap-2">
//                   {product.tags.map((tag, idx) => (
//                     <Badge key={idx} className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//               <CardContent className="p-6 space-y-4">
//                 <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{product.description}</p>
                
//                 {/* 3. Button par onClick navigate function add karein */}
//                 <Button 
//                   onClick={() => navigate('/quote', { state: { category: product.title } })}
//                   className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-lg font-medium shadow-md transition-all duration-300 w-full group"
//                 >
//                   Request Quote
//                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '../mock/data';

const ProductsSection = () => {
  const navigate = useNavigate();

  // Helper function handles navigation smoothly
  const handleQuoteRequest = (categoryTitle) => {
    // Ye 'categoryTitle' QuotePage mein location.state.category ban kar jayega
    navigate('/quote', { state: { category: categoryTitle } });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 px-4 py-1 border-0 mx-auto">
            <span className="font-bold tracking-wider">MANUFACTURING • TRADE • EXPORT</span>
          </Badge>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Any Pharmaceutical APIs. <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Any Quantity.
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From small trial orders to bulk container loads, Vigyan Healthcare sources, manufactures, and delivers a wide range of pharmaceutical APIs with assured quality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {productCategories.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 group border-0 bg-white"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80"></div>
                
                {/* Category Badge on Image */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {product.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 px-3 py-1 text-[10px] uppercase font-bold tracking-widest"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-8 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {product.description}
                  </p>
                </div>
                
                <Button 
                  onClick={() => handleQuoteRequest(product.title)}
                  className="bg-slate-900 hover:bg-blue-600 text-white rounded-full px-8 py-6 font-bold shadow-lg transition-all duration-300 w-full md:w-auto group/btn"
                >
                  Explore {product.title} List
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;