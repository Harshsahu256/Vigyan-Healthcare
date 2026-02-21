// // import React, { useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // // --- SABHI IMAGES KA COMPLETE DATA YAHAN HAI ---
// // const productsData = {
// //   "HORMONES": [
// //     { id: 1, name: "Dydrogesterone", grade: "IP/USP/BP", cas: "152-62-5", dmf: ["USDMF", "CEP", "WC", "CDMF"] },
// //     { id: 2, name: "Estrone", grade: "IP/USP/BP", cas: "53-16-7", dmf: ["WC"] },
// //     { id: 3, name: "Ethinyl Estradiol", grade: "IP/USP/BP", cas: "57-63-6", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 4, name: "Estradiol", grade: "IP/USP/BP", cas: "50-28-2", dmf: ["WC"] },
// //     { id: 5, name: "Estradiol Hemihydrate", grade: "IP/USP/BP", cas: "35380-71-3", dmf: ["CEP", "WC"] },
// //     { id: 6, name: "Estradiol Benzoate", grade: "IP/USP/BP", cas: "50-50-0", dmf: ["USDMF"] },
// //     { id: 7, name: "Estradiol Cypionate", grade: "IP/USP/BP", cas: "313-06-4", dmf: [] },
// //     { id: 8, name: "Estradiol Enantate", grade: "IP/USP/BP", cas: "4956-37-0", dmf: [] },
// //     { id: 9, name: "Estradiol Valerate", grade: "IP/USP/BP", cas: "979-32-8", dmf: ["CEP", "WC"] },
// //     { id: 10, name: "Hydroxyprogesterone Caproate", grade: "IP/USP/BP", cas: "630-56-8", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 11, name: "Medroxyprogesterone Acetate", grade: "IP/USP/BP", cas: "71-58-9", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 12, name: "Mifepristone", grade: "IP/USP/BP", cas: "84371-65-3", dmf: ["CEP", "WC"] },
// //     { id: 13, name: "Norethisterone", grade: "IP/USP/BP", cas: "68-22-4", dmf: ["USDMF", "CEP"] },
// //     { id: 14, name: "Norethisterone Acetate", grade: "IP/USP/BP", cas: "51-98-9", dmf: ["USDMF", "CEP"] },
// //     { id: 15, name: "Norethisterone Enanthate", grade: "IP/USP/BP", cas: "3836-23-5", dmf: ["WC"] },
// //     { id: 16, name: "Nandrolone", grade: "IP/USP/BP", cas: "434-22-0", dmf: ["USDMF"] },
// //     { id: 17, name: "Nandrolone Decanoate", grade: "IP/USP/BP", cas: "360-70-3", dmf: ["USDMF", "CEP"] },
// //     { id: 18, name: "Nandrolone Phenyl Propionate", grade: "IP/USP/BP", cas: "62-90-8", dmf: ["USDMF"] },
// //     { id: 19, name: "Testosterone", grade: "IP/USP/BP", cas: "58-22-0", dmf: ["USDMF", "CEP", "WC", "CDMF"] },
// //     { id: 20, name: "Testosterone Propionate", grade: "IP/USP/BP", cas: "57-85-2", dmf: ["USDMF"] },
// //     { id: 21, name: "Testosterone Cypionate", grade: "IP/USP/BP", cas: "58-20-8", dmf: ["USDMF"] },
// //     { id: 22, name: "Testosterone Enanthate", grade: "IP/USP/BP", cas: "315-37-7", dmf: ["USDMF", "CEP"] },
// //     { id: 23, name: "Testosterone Undecanoate", grade: "IP/USP/BP", cas: "5949-44-0", dmf: ["USDMF", "WC"] },
// //     { id: 24, name: "Testosterone Decanoate", grade: "IP/USP/BP", cas: "5721-91-5", dmf: ["USDMF"] },
// //     { id: 25, name: "Testosterone Tridecanoate", grade: "IP/USP/BP", cas: "488836-58-4", dmf: [] },
// //   ],
// //   "CORTICOSTEROIDS": [
// //     { id: 1, name: "Betamethasone Valerate", grade: "IP/USP/BP", cas: "2152-44-5", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 2, name: "Betamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "151-73-5", dmf: ["USDMF", "WC"] },
// //     { id: 3, name: "Dutasteride", grade: "IP/USP/BP", cas: "164656-23-9", dmf: ["CEP", "WC", "CDMF"] },
// //     { id: 4, name: "Deflazacort", grade: "IP/USP/BP", cas: "14484-47-0", dmf: ["CEP", "WC"] },
// //     { id: 5, name: "Dexamethasone", grade: "IP/USP/BP", cas: "50-02-2", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 6, name: "Dexamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "2392-39-4", dmf: ["USDMF", "WC"] },
// //     { id: 7, name: "Finasteride", grade: "IP/USP/BP", cas: "98319-26-7", dmf: ["USDMF", "CEP", "CDMF"] },
// //     { id: 8, name: "Methylprednisolone", grade: "IP/USP/BP", cas: "83-43-2", dmf: ["CEP", "WC"] },
// //     { id: 9, name: "Methylprednisolone Acetate", grade: "IP/USP/BP", cas: "53-36-1", dmf: ["WC"] },
// //     { id: 10, name: "Mometasone Furoate", grade: "IP/USP/BP", cas: "83919-23-7", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 11, name: "Triamcinolone", grade: "IP/USP/BP", cas: "124-94-7", dmf: ["CEP", "WC"] },
// //     { id: 12, name: "Triamcinolone Acetonide", grade: "IP/USP/BP", cas: "76-25-5", dmf: ["WC"] },
// //   ],
// //   "VITAMINS": [
// //     { id: 1, name: "Cynocobalamin", grade: "IP/USP/BP", cas: "68-19-9", dmf: ["USDMF", "CEP", "WC", "COPP", "CDMF"] },
// //     { id: 2, name: "Methyl Cobalamine", grade: "IP/USP/BP", cas: "13422-55-4", dmf: ["USDMF", "CEP", "WC"] },
// //     { id: 3, name: "Folic Acid", grade: "IP/USP/BP", cas: "59-30-3", dmf: ["CEP", "WC", "CDMF"] },
// //     { id: 4, name: "Vitamin B12 1% Feed Grade", grade: "", cas: "68-19-9", dmf: [] }, // Image के मुताबिक Grade खाली
// //     { id: 5, name: "Vitamin B12 1% Food Grade", grade: "Food Grade", cas: "68-19-9", dmf: ["WC"] }, // Image के मुताबिक Food Grade
// //     { id: 6, name: "Vitamin B2 (Riboflavin) 98%", grade: "IP/USP/BP", cas: "83-88-5", dmf: ["USDMF", "WC", "CEP"] },
// //     { id: 7, name: "Vitamin D3", grade: "IP/USP/BP", cas: "67-97-0", dmf: ["USDMF", "CEP", "WC", "COPP", "CDMF"] },
// //     { id: 8, name: "Vitamin D3 1Miu Oil Feed Grade", grade: "", cas: "67-97-0", dmf: [] }, // Image के मुताबिक Grade खाली
// //     { id: 9, name: "Vitamin D3 5Miu Oil Feed Grade", grade: "", cas: "67-97-0", dmf: [] }, // Image के मुताबिक Grade खाली
// //   ],
// // };

// // const QuotePage = () => {
// //   const location = useLocation();
  
// //   // ProductsSection se button text catch karo, example: "Hormones"
// //   const rawCategory = location.state?.category || "VITAMINS";
// //   const selectedCategoryKey = rawCategory.toUpperCase();

// //   // Match data based on key, fallback to Vitamins
// //   const currentList = productsData[selectedCategoryKey] || productsData["VITAMINS"];

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [selectedCategoryKey]);

// //   return (
// //     <div className="min-h-screen bg-gray-50 pb-20">
// //       <Navbar />
      
// //       {/* Dynamic Header */}
// //       <div className="bg-white py-16 px-6 border-b border-gray-200 shadow-sm">
// //         <div className="max-w-7xl mx-auto">
// //           <span className="text-blue-600 font-bold tracking-widest text-xs uppercase bg-blue-50 px-3 py-1 rounded-md">Product Portfolio</span>
// //           <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 uppercase">
// //             {selectedCategoryKey} RANGE
// //           </h1>
// //           <p className="text-gray-500 mt-4 max-w-2xl text-lg leading-relaxed">
// //             Premium quality APIs compliant with global pharmacopeia standards (IP, USP, BP). Complete regulatory documentation available on request.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        
// //         {/* BOXED TABLE CONTAINER */}
// //         <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          
// //           {/* Table Header Section */}
// //           <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-6 border-b border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest">
// //             <div className="col-span-1">SR. NO.</div>
// //             <div className="col-span-5">APIs / PRODUCT NAME</div>
// //             <div className="col-span-2 text-center">CAS NO.</div>
// //             <div className="col-span-2 text-center">GRADE</div>
// //             <div className="col-span-2 text-right">DMF STATUS</div>
// //           </div>

// //           {/* Table Rows Section */}
// //           <div className="divide-y divide-gray-100">
// //             {currentList.map((item, index) => (
// //               <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 items-center group hover:bg-blue-50/30 transition-all">
                
// //                 {/* ID */}
// //                 <div className="col-span-1 text-gray-300 font-bold text-base">
// //                   {String(index + 1).padStart(2, '0')}
// //                 </div>

// //                 {/* Name */}
// //                 <div className="col-span-5">
// //                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight">
// //                     {item.name}
// //                   </h3>
// //                 </div>

// //                 {/* CAS No Badge */}
// //                 <div className="col-span-2 flex justify-start md:justify-center">
// //                   <span className="bg-cyan-50 text-cyan-700 text-[11px] font-black px-4 py-2 rounded-lg border border-cyan-100 shadow-sm font-mono">
// //                     {item.cas}
// //                   </span>
// //                 </div>

// //                 {/* Grade */}
// //                 <div className="col-span-2 text-gray-600 text-sm font-bold text-center">
// //                   <span className="md:hidden font-bold text-gray-400 mr-2 uppercase text-[10px]">Grade:</span>
// //                   {item.grade}
// //                 </div>

// //                 {/* DMF Badges */}
// //                 <div className="col-span-2 flex flex-wrap gap-1.5 justify-start md:justify-end">
// //                   {item.dmf.length > 0 ? (
// //                     item.dmf.map((badge, idx) => (
// //                       <span key={idx} className="bg-white text-gray-700 text-[9px] font-extrabold px-2 py-1 rounded border border-gray-200 uppercase shadow-sm">
// //                         {badge}
// //                       </span>
// //                     ))
// //                   ) : (
// //                     <span className="text-gray-300 text-[10px] uppercase font-bold tracking-widest italic">—</span>
// //                   )}
// //                 </div>

// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default QuotePage;


// // import React, { useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import Navbar from '../components/Navbar';
// // import Footer from '../components/Footer';

// // const productsData = {
// //   "HORMONES": [
// //     { id: 1, name: "Dydrogesterone", grade: "IP/USP/BP", cas: "152-62-5" },
// //     { id: 2, name: "Estrone", grade: "IP/USP/BP", cas: "53-16-7" },
// //     { id: 3, name: "Ethinyl Estradiol", grade: "IP/USP/BP", cas: "57-63-6" },
// //     { id: 4, name: "Estradiol", grade: "IP/USP/BP", cas: "50-28-2" },
// //     { id: 5, name: "Estradiol Hemihydrate", grade: "IP/USP/BP", cas: "35380-71-3" },
// //     { id: 6, name: "Estradiol Benzoate", grade: "IP/USP/BP", cas: "50-50-0" },
// //     { id: 7, name: "Estradiol Cypionate", grade: "IP/USP/BP", cas: "313-06-4" },
// //     { id: 8, name: "Estradiol Enantate", grade: "IP/USP/BP", cas: "4956-37-0" },
// //     { id: 9, name: "Estradiol Valerate", grade: "IP/USP/BP", cas: "979-32-8" },
// //     { id: 10, name: "Hydroxyprogesterone Caproate", grade: "IP/USP/BP", cas: "630-56-8" },
// //     { id: 11, name: "Medroxyprogesterone Acetate", grade: "IP/USP/BP", cas: "71-58-9" },
// //     { id: 12, name: "Mifepristone", grade: "IP/USP/BP", cas: "84371-65-3" },
// //     { id: 13, name: "Norethisterone", grade: "IP/USP/BP", cas: "68-22-4" },
// //     { id: 14, name: "Norethisterone Acetate", grade: "IP/USP/BP", cas: "51-98-9" },
// //     { id: 15, name: "Norethisterone Enanthate", grade: "IP/USP/BP", cas: "3836-23-5" },
// //     { id: 16, name: "Nandrolone", grade: "IP/USP/BP", cas: "434-22-0" },
// //     { id: 17, name: "Nandrolone Decanoate", grade: "IP/USP/BP", cas: "360-70-3" },
// //     { id: 18, name: "Nandrolone Phenyl Propionate", grade: "IP/USP/BP", cas: "62-90-8" },
// //     { id: 19, name: "Testosterone", grade: "IP/USP/BP", cas: "58-22-0" },
// //     { id: 20, name: "Testosterone Propionate", grade: "IP/USP/BP", cas: "57-85-2" },
// //     { id: 21, name: "Testosterone Cypionate", grade: "IP/USP/BP", cas: "58-20-8" },
// //     { id: 22, name: "Testosterone Enanthate", grade: "IP/USP/BP", cas: "315-37-7" },
// //     { id: 23, name: "Testosterone Undecanoate", grade: "IP/USP/BP", cas: "5949-44-0" },
// //     { id: 24, name: "Testosterone Decanoate", grade: "IP/USP/BP", cas: "5721-91-5" },
// //     { id: 25, name: "Testosterone Tridecanoate", grade: "IP/USP/BP", cas: "488836-58-4" },
// //   ],
// //   "CORTICOSTEROIDS": [
// //     { id: 1, name: "Betamethasone Valerate", grade: "IP/USP/BP", cas: "2152-44-5" },
// //     { id: 2, name: "Betamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "151-73-5" },
// //     { id: 3, name: "Dutasteride", grade: "IP/USP/BP", cas: "164656-23-9" },
// //     { id: 4, name: "Deflazacort", grade: "IP/USP/BP", cas: "14484-47-0" },
// //     { id: 5, name: "Dexamethasone", grade: "IP/USP/BP", cas: "50-02-2" },
// //     { id: 6, name: "Dexamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "2392-39-4" },
// //     { id: 7, name: "Finasteride", grade: "IP/USP/BP", cas: "98319-26-7" },
// //     { id: 8, name: "Methylprednisolone", grade: "IP/USP/BP", cas: "83-43-2" },
// //     { id: 9, name: "Methylprednisolone Acetate", grade: "IP/USP/BP", cas: "53-36-1" },
// //     { id: 10, name: "Mometasone Furoate", grade: "IP/USP/BP", cas: "83919-23-7" },
// //     { id: 11, name: "Triamcinolone", grade: "IP/USP/BP", cas: "124-94-7" },
// //     { id: 12, name: "Triamcinolone Acetonide", grade: "IP/USP/BP", cas: "76-25-5" },
// //   ],
// //   "VITAMINS": [
// //     { id: 1, name: "Cynocobalamin", grade: "IP/USP/BP", cas: "68-19-9" },
// //     { id: 2, name: "Methyl Cobalamine", grade: "IP/USP/BP", cas: "13422-55-4" },
// //     { id: 3, name: "Folic Acid", grade: "IP/USP/BP", cas: "59-30-3" },
// //     { id: 4, name: "Vitamin B12 1% Feed Grade", grade: "—", cas: "68-19-9" },
// //     { id: 5, name: "Vitamin B12 1% Food Grade", grade: "Food Grade", cas: "68-19-9" },
// //     { id: 6, name: "Vitamin B2 (Riboflavin) 98%", grade: "IP/USP/BP", cas: "83-88-5" },
// //     { id: 7, name: "Vitamin D3", grade: "IP/USP/BP", cas: "67-97-0" },
// //     { id: 8, name: "Vitamin D3 1Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
// //     { id: 9, name: "Vitamin D3 5Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
// //   ],
// // };

// // const QuotePage = () => {
// //   const location = useLocation();
// //   const rawCategory = location.state?.category || "VITAMINS";
// //   const selectedCategoryKey = rawCategory.toUpperCase();
// //   const currentList = productsData[selectedCategoryKey] || productsData["VITAMINS"];

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [selectedCategoryKey]);

// //   return (
// //     <div className="min-h-screen bg-[#F8FAFC] pb-20">
// //       <Navbar />
      
// //       {/* Header Section */}
// //       <div className="bg-white py-16 px-6 border-b border-slate-200">
// //         <div className="max-w-7xl mx-auto">
// //           <div className="flex items-center gap-2 mb-4">
// //             <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
// //             <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Premium APIs</span>
// //           </div>
// //           <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
// //             {selectedCategoryKey} <span className="text-blue-600">RANGE</span>
// //           </h1>
// //           <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed font-medium">
// //             High-purity chemical compounds manufactured under stringent quality controls with complete technical documentation.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        
// //         {/* BOXED TABLE CONTAINER */}
// //         <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          
// //           {/* Adjusted Grid: 1 (SR) + 5 (Name) + 3 (CAS) + 3 (Grade) = 12 columns */}
// //           <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 p-6 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-widest">
// //             <div className="col-span-1">SR. NO.</div>
// //             <div className="col-span-5">APIs / PRODUCT NAME</div>
// //             <div className="col-span-3 text-center">CAS NO.</div> {/* Widened and centered */}
// //             <div className="col-span-3 text-center">GRADE</div>
// //           </div>

// //           {/* Table Rows Section */}
// //           <div className="divide-y divide-slate-100">
// //             {currentList.map((item, index) => (
// //               <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 items-center group hover:bg-blue-50/40 transition-all duration-300">
                
// //                 {/* 1. SR NO */}
// //                 <div className="col-span-1 text-slate-300 font-bold text-base group-hover:text-blue-200 transition-colors">
// //                   {String(index + 1).padStart(2, '0')}
// //                 </div>

// //                 {/* 2. Product Name */}
// //                 <div className="col-span-5">
// //                   <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors tracking-tight">
// //                     {item.name}
// //                   </h3>
// //                 </div>

// //                 {/* 3. CAS No Badge (Ab thoda center ki taraf shifted hai) */}
// //                 <div className="col-span-3 flex justify-center">
// //                   <span className="bg-white text-blue-700 text-[12px] font-bold px-5 py-2 rounded-full border border-blue-100 shadow-sm font-mono tracking-tight group-hover:border-blue-300 group-hover:bg-blue-50 transition-all">
// //                     {item.cas}
// //                   </span>
// //                 </div>

// //                 {/* 4. Grade */}
// //                 <div className="col-span-3 text-slate-600 text-sm font-bold text-center tracking-wide">
// //                   <span className="md:hidden font-bold text-slate-400 mr-2 uppercase text-[10px]">Grade:</span>
// //                   {item.grade}
// //                 </div>

// //               </div>
// //             ))}
// //           </div>

// //         </div>

// //         {/* Footer Note */}
// //         <div className="mt-8 text-center">
// //            <p className="text-slate-400 text-sm font-medium italic">
// //              * All products are compliant with IP/USP/BP pharmacopeia standards.
// //            </p>
// //         </div>
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // };

// // export default QuotePage;

// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom'; // useNavigate add kiya
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { ArrowLeft } from 'lucide-react'; // Ek back arrow icon ke liye

// const productsData = {
//   "HORMONES": [
//     { id: 1, name: "Dydrogesterone", grade: "IP/USP/BP", cas: "152-62-5" },
//     { id: 2, name: "Estrone", grade: "IP/USP/BP", cas: "53-16-7" },
//     { id: 3, name: "Ethinyl Estradiol", grade: "IP/USP/BP", cas: "57-63-6" },
//     { id: 4, name: "Estradiol", grade: "IP/USP/BP", cas: "50-28-2" },
//     { id: 5, name: "Estradiol Hemihydrate", grade: "IP/USP/BP", cas: "35380-71-3" },
//     { id: 6, name: "Estradiol Benzoate", grade: "IP/USP/BP", cas: "50-50-0" },
//     { id: 7, name: "Estradiol Cypionate", grade: "IP/USP/BP", cas: "313-06-4" },
//     { id: 8, name: "Estradiol Enantate", grade: "IP/USP/BP", cas: "4956-37-0" },
//     { id: 9, name: "Estradiol Valerate", grade: "IP/USP/BP", cas: "979-32-8" },
//     { id: 10, name: "Hydroxyprogesterone Caproate", grade: "IP/USP/BP", cas: "630-56-8" },
//     { id: 11, name: "Medroxyprogesterone Acetate", grade: "IP/USP/BP", cas: "71-58-9" },
//     { id: 12, name: "Mifepristone", grade: "IP/USP/BP", cas: "84371-65-3" },
//     { id: 13, name: "Norethisterone", grade: "IP/USP/BP", cas: "68-22-4" },
//     { id: 14, name: "Norethisterone Acetate", grade: "IP/USP/BP", cas: "51-98-9" },
//     { id: 15, name: "Norethisterone Enanthate", grade: "IP/USP/BP", cas: "3836-23-5" },
//     { id: 16, name: "Nandrolone", grade: "IP/USP/BP", cas: "434-22-0" },
//     { id: 17, name: "Nandrolone Decanoate", grade: "IP/USP/BP", cas: "360-70-3" },
//     { id: 18, name: "Nandrolone Phenyl Propionate", grade: "IP/USP/BP", cas: "62-90-8" },
//     { id: 19, name: "Testosterone", grade: "IP/USP/BP", cas: "58-22-0" },
//     { id: 20, name: "Testosterone Propionate", grade: "IP/USP/BP", cas: "57-85-2" },
//     { id: 21, name: "Testosterone Cypionate", grade: "IP/USP/BP", cas: "58-20-8" },
//     { id: 22, name: "Testosterone Enanthate", grade: "IP/USP/BP", cas: "315-37-7" },
//     { id: 23, name: "Testosterone Undecanoate", grade: "IP/USP/BP", cas: "5949-44-0" },
//     { id: 24, name: "Testosterone Decanoate", grade: "IP/USP/BP", cas: "5721-91-5" },
//     { id: 25, name: "Testosterone Tridecanoate", grade: "IP/USP/BP", cas: "488836-58-4" },
//   ],
//   "CORTICOSTEROIDS": [
//     { id: 1, name: "Betamethasone Valerate", grade: "IP/USP/BP", cas: "2152-44-5" },
//     { id: 2, name: "Betamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "151-73-5" },
//     { id: 3, name: "Dutasteride", grade: "IP/USP/BP", cas: "164656-23-9" },
//     { id: 4, name: "Deflazacort", grade: "IP/USP/BP", cas: "14484-47-0" },
//     { id: 5, name: "Dexamethasone", grade: "IP/USP/BP", cas: "50-02-2" },
//     { id: 6, name: "Dexamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "2392-39-4" },
//     { id: 7, name: "Finasteride", grade: "IP/USP/BP", cas: "98319-26-7" },
//     { id: 8, name: "Methylprednisolone", grade: "IP/USP/BP", cas: "83-43-2" },
//     { id: 9, name: "Methylprednisolone Acetate", grade: "IP/USP/BP", cas: "53-36-1" },
//     { id: 10, name: "Mometasone Furoate", grade: "IP/USP/BP", cas: "83919-23-7" },
//     { id: 11, name: "Triamcinolone", grade: "IP/USP/BP", cas: "124-94-7" },
//     { id: 12, name: "Triamcinolone Acetonide", grade: "IP/USP/BP", cas: "76-25-5" },
//   ],
//   "VITAMINS": [
//     { id: 1, name: "Cynocobalamin", grade: "IP/USP/BP", cas: "68-19-9" },
//     { id: 2, name: "Methyl Cobalamine", grade: "IP/USP/BP", cas: "13422-55-4" },
//     { id: 3, name: "Folic Acid", grade: "IP/USP/BP", cas: "59-30-3" },
//     { id: 4, name: "Vitamin B12 1% Feed Grade", grade: "—", cas: "68-19-9" },
//     { id: 5, name: "Vitamin B12 1% Food Grade", grade: "Food Grade", cas: "68-19-9" },
//     { id: 6, name: "Vitamin B2 (Riboflavin) 98%", grade: "IP/USP/BP", cas: "83-88-5" },
//     { id: 7, name: "Vitamin D3", grade: "IP/USP/BP", cas: "67-97-0" },
//     { id: 8, name: "Vitamin D3 1Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
//     { id: 9, name: "Vitamin D3 5Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
//   ],
// };

// const QuotePage = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // navigate initialize kiya
  
//   const rawCategory = location.state?.category || "VITAMINS";
//   const selectedCategoryKey = rawCategory.toUpperCase();
//   const currentList = productsData[selectedCategoryKey] || productsData["VITAMINS"];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [selectedCategoryKey]);

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] pb-20">
//       <Navbar />
      
//       {/* Header Section */}
//       <div className="bg-white py-16 px-6 border-b border-slate-200">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
//             <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase">Premium APIs</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
//             {selectedCategoryKey} <span className="text-blue-600">RANGE</span>
//           </h1>
//           <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed font-medium">
//             High-purity chemical compounds manufactured under stringent quality controls with complete technical documentation.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        
//         {/* BOXED TABLE CONTAINER */}
//         <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          
//           <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 p-6 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-widest">
//             <div className="col-span-1">SR. NO.</div>
//             <div className="col-span-5">APIs / PRODUCT NAME</div>
//             <div className="col-span-3 text-center">CAS NO.</div> 
//             <div className="col-span-3 text-center">GRADE</div>
//           </div>

//           <div className="divide-y divide-slate-100">
//             {currentList.map((item, index) => (
//               <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 items-center group hover:bg-blue-50/40 transition-all duration-300">
//                 <div className="col-span-1 text-slate-300 font-bold text-base group-hover:text-blue-200 transition-colors">
//                   {String(index + 1).padStart(2, '0')}
//                 </div>
//                 <div className="col-span-5">
//                   <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors tracking-tight">
//                     {item.name}
//                   </h3>
//                 </div>
//                 <div className="col-span-3 flex justify-center">
//                   <span className="bg-white text-blue-700 text-[12px] font-bold px-5 py-2 rounded-full border border-blue-100 shadow-sm font-mono tracking-tight group-hover:border-blue-300 group-hover:bg-blue-50 transition-all">
//                     {item.cas}
//                   </span>
//                 </div>
//                 <div className="col-span-3 text-slate-600 text-sm font-bold text-center tracking-wide">
//                   <span className="md:hidden font-bold text-slate-400 mr-2 uppercase text-[10px]">Grade:</span>
//                   {item.grade}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ✅ BACK BUTTON / OTHER APIs NAVIGATION */}
//         <div className="mt-12 flex flex-col items-center justify-center space-y-6">
//             <p className="text-slate-400 text-sm font-medium italic text-center">
//              * All products are compliant with IP/USP/BP pharmacopeia standards.
//             </p>
            
//             <button 
//                 onClick={() => navigate(-1)} // Isse user wapas pichle page par chala jayega
//                 className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm group"
//             >
//                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
//                 View Other API Categories
//             </button>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default QuotePage;


import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const productsData = {
  "HORMONES": [
    { id: 1, name: "Dydrogesterone", grade: "IP/USP/BP", cas: "152-62-5" },
    { id: 2, name: "Estrone", grade: "IP/USP/BP", cas: "53-16-7" },
    { id: 3, name: "Ethinyl Estradiol", grade: "IP/USP/BP", cas: "57-63-6" },
    { id: 4, name: "Estradiol", grade: "IP/USP/BP", cas: "50-28-2" },
    { id: 5, name: "Estradiol Hemihydrate", grade: "IP/USP/BP", cas: "35380-71-3" },
    { id: 6, name: "Estradiol Benzoate", grade: "IP/USP/BP", cas: "50-50-0" },
    { id: 7, name: "Estradiol Cypionate", grade: "IP/USP/BP", cas: "313-06-4" },
    { id: 8, name: "Estradiol Enantate", grade: "IP/USP/BP", cas: "4956-37-0" },
    { id: 9, name: "Estradiol Valerate", grade: "IP/USP/BP", cas: "979-32-8" },
    { id: 10, name: "Hydroxyprogesterone Caproate", grade: "IP/USP/BP", cas: "630-56-8" },
    { id: 11, name: "Medroxyprogesterone Acetate", grade: "IP/USP/BP", cas: "71-58-9" },
    { id: 12, name: "Mifepristone", grade: "IP/USP/BP", cas: "84371-65-3" },
    { id: 13, name: "Norethisterone", grade: "IP/USP/BP", cas: "68-22-4" },
    { id: 14, name: "Norethisterone Acetate", grade: "IP/USP/BP", cas: "51-98-9" },
    { id: 15, name: "Norethisterone Enanthate", grade: "IP/USP/BP", cas: "3836-23-5" },
    { id: 16, name: "Nandrolone", grade: "IP/USP/BP", cas: "434-22-0" },
    { id: 17, name: "Nandrolone Decanoate", grade: "IP/USP/BP", cas: "360-70-3" },
    { id: 18, name: "Nandrolone Phenyl Propionate", grade: "IP/USP/BP", cas: "62-90-8" },
    { id: 19, name: "Testosterone", grade: "IP/USP/BP", cas: "58-22-0" },
    { id: 20, name: "Testosterone Propionate", grade: "IP/USP/BP", cas: "57-85-2" },
    { id: 21, name: "Testosterone Cypionate", grade: "IP/USP/BP", cas: "58-20-8" },
    { id: 22, name: "Testosterone Enanthate", grade: "IP/USP/BP", cas: "315-37-7" },
    { id: 23, name: "Testosterone Undecanoate", grade: "IP/USP/BP", cas: "5949-44-0" },
    { id: 24, name: "Testosterone Decanoate", grade: "IP/USP/BP", cas: "5721-91-5" },
    { id: 25, name: "Testosterone Tridecanoate", grade: "IP/USP/BP", cas: "488836-58-4" },
  ],
  "CORTICOSTEROIDS": [
    { id: 1, name: "Betamethasone Valerate", grade: "IP/USP/BP", cas: "2152-44-5" },
    { id: 2, name: "Betamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "151-73-5" },
    { id: 3, name: "Dutasteride", grade: "IP/USP/BP", cas: "164656-23-9" },
    { id: 4, name: "Deflazacort", grade: "IP/USP/BP", cas: "14484-47-0" },
    { id: 5, name: "Dexamethasone", grade: "IP/USP/BP", cas: "50-02-2" },
    { id: 6, name: "Dexamethasone Sodium Phosphate", grade: "IP/USP/BP", cas: "2392-39-4" },
    { id: 7, name: "Finasteride", grade: "IP/USP/BP", cas: "98319-26-7" },
    { id: 8, name: "Methylprednisolone", grade: "IP/USP/BP", cas: "83-43-2" },
    { id: 9, name: "Methylprednisolone Acetate", grade: "IP/USP/BP", cas: "53-36-1" },
    { id: 10, name: "Mometasone Furoate", grade: "IP/USP/BP", cas: "83919-23-7" },
    { id: 11, name: "Triamcinolone", grade: "IP/USP/BP", cas: "124-94-7" },
    { id: 12, name: "Triamcinolone Acetonide", grade: "IP/USP/BP", cas: "76-25-5" },
  ],
  "VITAMINS": [
    { id: 1, name: "Cynocobalamin", grade: "IP/USP/BP", cas: "68-19-9" },
    { id: 2, name: "Methyl Cobalamine", grade: "IP/USP/BP", cas: "13422-55-4" },
    { id: 3, name: "Folic Acid", grade: "IP/USP/BP", cas: "59-30-3" },
    { id: 4, name: "Vitamin B12 1% Feed Grade", grade: "—", cas: "68-19-9" },
    { id: 5, name: "Vitamin B12 1% Food Grade", grade: "Food Grade", cas: "68-19-9" },
    { id: 6, name: "Vitamin B2 (Riboflavin) 98%", grade: "IP/USP/BP", cas: "83-88-5" },
    { id: 7, name: "Vitamin D3", grade: "IP/USP/BP", cas: "67-97-0" },
    { id: 8, name: "Vitamin D3 1Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
    { id: 9, name: "Vitamin D3 5Miu Oil Feed Grade", grade: "—", cas: "67-97-0" },
  ],
  "ANTIBIOTICS": [
    { id: 1, name: "Azithromycin", grade: "IP/USP/BP", cas: "83905-01-5" },
    { id: 2, name: "Silver Sulfadiazine", grade: "IP/USP/BP", cas: "22199-08-2" },
  ],
};

const QuotePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const rawCategory = location.state?.category || "VITAMINS";
  const selectedCategoryKey = rawCategory.toUpperCase();
  const currentList = productsData[selectedCategoryKey] || productsData["VITAMINS"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategoryKey]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <Navbar />
      
      {/* Dynamic Header */}
      <div className="bg-white py-16 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
        
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            {selectedCategoryKey} <span className="text-blue-600">APIs</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg leading-relaxed font-medium">
            High-purity technical grade compounds manufactured under stringent quality controls.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        
        {/* BOXED TABLE CONTAINER */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          
          <div className="hidden md:grid grid-cols-12 gap-4 bg-slate-50 p-6 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-widest">
            <div className="col-span-1">SR. NO.</div>
            <div className="col-span-5">APIs / PRODUCT NAME</div>
            <div className="col-span-3 text-center">CAS NO.</div> 
            <div className="col-span-3 text-center">GRADE</div>
          </div>

          <div className="divide-y divide-slate-100">
            {currentList.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-8 items-center group hover:bg-blue-50/40 transition-all duration-300">
                <div className="col-span-1 text-slate-300 font-bold text-base group-hover:text-blue-200 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="col-span-5">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <div className="col-span-3 flex justify-center">
                  <span className="bg-white text-blue-700 text-[12px] font-bold px-5 py-2 rounded-full border border-blue-100 shadow-sm font-mono tracking-tight group-hover:border-blue-300 group-hover:bg-blue-50 transition-all">
                    {item.cas}
                  </span>
                </div>
                <div className="col-span-3 text-slate-600 text-sm font-bold text-center tracking-wide">
                  <span className="md:hidden font-bold text-slate-400 mr-2 uppercase text-[10px]">Grade:</span>
                  {item.grade}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION BUTTON */}
        <div className="mt-12 flex flex-col items-center justify-center space-y-6">
            <p className="text-slate-400 text-sm font-medium italic text-center">
             * All products are compliant with IP/USP/BP standards.
            </p>
            
            <button 
                onClick={() => navigate(-1)} 
                className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full hover:bg-slate-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Explore Other Categories
            </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuotePage;