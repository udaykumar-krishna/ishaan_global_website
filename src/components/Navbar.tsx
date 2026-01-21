


// import { useState, useEffect } from 'react';
// import { Menu, X, Users } from 'lucide-react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const navLinks = [
//     { name: 'Home', id: 'home' },
//     { name: 'About', id: 'about' },
//     { name: 'Services', id: 'services' },
//     { name: 'Industries', id: 'industries' },
//     { name: 'Process', id: 'process' },
//     { name: 'Testimonials', id: 'testimonials' },
//     { name: 'Contact', id: 'contact' },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => scrollToSection('home')}
//           >
//             <div className="w-12 h-12 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-lg flex items-center justify-center">
//               <Users className={`w-7 h-7 text-white`} />
//             </div>
//             <div>
//               <h1
//                 className={`text-xl font-bold ${
//                   isScrolled ? 'text-gray-900' : 'text-white'
//                 }`}
//               >
//                 Ishaan Global
//               </h1>
//               <p
//                 className={`text-xs ${
//                   isScrolled ? 'text-gray-600' : 'text-gray-200'
//                 }`}
//               >
//                 CONNECTING TALENT & CREATING IMPACT
//               </p>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className={`font-medium transition-colors hover:text-[#FF6600] ${
//                   isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}
//               >
//                 {link.name}
//               </button>
//             ))}

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="bg-gradient-to-r from-[#FF6600] to-[#FF8C42] text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
//             >
//               Get Started
//             </button>
//           </div>

//           {/* Mobile menu toggle */}
//           <button
//             className="lg:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X
//                 className={`w-6 h-6 ${
//                   isScrolled ? 'text-gray-900' : 'text-white'
//                 }`}
//               />
//             ) : (
//               <Menu
//                 className={`w-6 h-6 ${
//                   isScrolled ? 'text-gray-900' : 'text-white'
//                 }`}
//               />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-6 space-y-4 animate-fadeIn">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6600] transition-colors py-2"
//               >
//                 {link.name}
//               </button>
//             ))}

//             <button
//               onClick={() => scrollToSection('contact')}
//               className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8C42] text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
//             >
//               Get Started
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Process', id: 'process' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/70 backdrop-blur-md border-b border-orange-100 py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
        <div
  className="flex items-center space-x-3 cursor-pointer"
  onClick={() => scrollToSection("home")}
>
  <img
    src="/Company Logo.png"
    alt="Ishaan Global Logo"
    className="w-12 h-12 object-contain cursor-pointer"
  />

  <div className="leading-tight">
    <h1 className="text-xl font-bold text-[#FF6600]">
      Ishaan Global
    </h1>

    <p className="text-[9px] tracking-widest text-gray-600 uppercase">
      Impact Through Talent
    </p>
  </div>
</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium text-sm tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#FF6600]'
                    : 'text-gray-800 hover:text-[#FF6600]'
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#FF6600] to-[#FF8C42] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-xl p-6 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6600] transition-colors py-2"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8C42] text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


