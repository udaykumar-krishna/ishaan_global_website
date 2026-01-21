


// import { ArrowRight, CheckCircle2 } from 'lucide-react';

// const Hero = () => {
//   const scrollToContact = () => {
//     const element = document.getElementById("contact");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage:
//             "url(https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920)",
//         }}
//       >
//         {/* Stronger orange sunrise gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/80 via-[#FFB067]/60 to-[#FFF3E0]/50 backdrop-blur-[2px]"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
//         <div className="animate-fadeIn">

//           {/* Badge */}
//           <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#FF7A00] shadow-md">
//             <CheckCircle2 className="w-5 h-5 text-[#FF7A00]" />
//             <span className="text-[#B34700] font-semibold text-sm">
//               Partnering with 50+ Leading Organizations
//             </span>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slideUp">
//             <span className="block text-[#2B1B12] drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]">
//               Transform Your Workforce
//             </span>
//             <span className="block bg-gradient-to-r from-[#FF3300] via-[#FF7A00] to-[#FFC678] bg-clip-text text-transparent drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)]">
//               With Ishaan Global
//             </span>
//           </h1>

//           {/* Subtitle */}
//           <p
//             className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp text-[#3C2A21] font-medium"
//             style={{ animationDelay: "0.2s" }}
//           >
//             Global workforce solutions trusted by Fortune 500 companies. 
//             Delivering verified and skilled professionals across 50+ countries with reliability and excellence.
//           </p>

//           {/* Buttons */}
//           <div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp"
//             style={{ animationDelay: "0.4s" }}
//           >
//             <button
//               onClick={scrollToContact}
//               className="group bg-[#FF5500] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
//             >
//               <span>Get Started Today</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>

//             <button
//               onClick={() =>
//                 document.getElementById("services")?.scrollIntoView({
//                   behavior: "smooth",
//                 })
//               }
//               className="bg-white/70 backdrop-blur-lg text-[#2B1B12] border border-[#FF7A00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all"
//             >
//               Explore Services
//             </button>
//           </div>

//           {/* Stats */}
//           <div
//             className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp"
//             style={{ animationDelay: "0.6s" }}
//           >
//             {[ {value:"10+", label:"Years of Excellence"},
//                {value:"10K+", label:"Professionals Placed"},
//                {value:"5+", label:"States India"} ].map((item,index)=>(
//               <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#FFB067]">
//                 <div className="text-4xl font-extrabold text-[#FF5500] mb-2">
//                   {item.value}
//                 </div>
//                 <div className="text-[#3C2A21] font-medium">{item.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-8 h-12 border-2 border-[#FF7A00] rounded-full flex items-start justify-center p-2 bg-white/75 backdrop-blur-md">
//           <div className="w-1.5 h-3 bg-[#FF5500] rounded-full"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔄 Hero background slides
    const slides = [
    // Warehouse / logistics forklift
    "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Factory workers
    "https://images.pexels.com/photos/1206769/pexels-photo-1206769.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Logistics warehouse storage
    "https://images.pexels.com/photos/4484071/pexels-photo-4484071.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // IT office team
    "https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // IT coding team
    "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Retail store staff
    "https://images.pexels.com/photos/5699441/pexels-photo-5699441.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Retail sales team
    "https://images.pexels.com/photos/5632384/pexels-photo-5632384.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Construction workers
    "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Construction engineers
    "https://images.pexels.com/photos/1192462/pexels-photo-1192462.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Machine operators / assembly
    "https://images.pexels.com/photos/3735781/pexels-photo-3735781.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Hospitality hotel staff
    "https://images.pexels.com/photos/4098220/pexels-photo-4098220.jpeg?auto=compress&cs=tinysrgb&w=1920",

    // Oil & Gas / industrial
    "https://images.pexels.com/photos/3855963/pexels-photo-3855963.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      3000 // 3 seconds per slide
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔁 Background slideshow */}
      <div className="absolute inset-0">
        {slides.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${url})` }}
          >
            {/* Orange sunrise overlay on each slide */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/80 via-[#FFB067]/60 to-[#FFF3E0]/50 backdrop-blur-[2px]" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="animate-fadeIn">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#FF7A00] shadow-md">
            <CheckCircle2 className="w-5 h-5 text-[#FF7A00]" />
            <span className="text-[#B34700] font-semibold text-sm">
              Partnering with 50+ Leading Organizations
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slideUp">
            <span className="block text-[#2B1B12] drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]">
              Transform Your Workforce
            </span>
            <span className="block bg-gradient-to-r from-[#FF3300] via-[#FF7A00] to-[#FFC678] bg-clip-text text-transparent drop-shadow-[0_3px_4px_rgba(0,0,0,0.35)]">
              With Ishaan Global
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slideUp text-[#3C2A21] font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Ishaan Manpower and Compliance Solutions trusted by Fortune 50 companies. 
            Delivering verified and skilled professionals across 5+ States India with reliability and excellence.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={scrollToContact}
              className="group bg-[#FF5500] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-white/70 backdrop-blur-lg text-[#2B1B12] border border-[#FF7A00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white transition-all"
            >
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slideUp"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { value: "6+", label: "Years of Excellence" },
              { value: "2K+", label: "Professionals Placed" },
              { value: "5+", label: "States India" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-[#FFB067]"
              >
                <div className="text-4xl font-extrabold text-[#FF5500] mb-2">
                  {item.value}
                </div>
                <div className="text-[#3C2A21] font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-[#FF7A00] rounded-full flex items-start justify-center p-2 bg-white/75 backdrop-blur-md">
          <div className="w-1.5 h-3 bg-[#FF5500] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
