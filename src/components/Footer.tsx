// import { Users, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'About Us', id: 'about' },
//     { name: 'Our Services', id: 'services' },
//     { name: 'Industries', id: 'industries' },
//     { name: 'Our Process', id: 'process' },
//   ];

//   const services = [
//     'Skilled Manpower',
//     'Semi-Skilled Workers',
//     'Unskilled Labor',
//     'Overseas Recruitment',
//     'Contract Staffing',
//     'Permanent Recruitment',
//   ];

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           <div>
//             <div className="flex items-center space-x-3 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-br from-[#0052CC] to-[#00A885] rounded-lg flex items-center justify-center">
//                 <Users className="w-7 h-7 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Ishaan Global</h3>
//                 <p className="text-sm text-gray-400">Workforce Solutions</p>
//               </div>
//             </div>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Global workforce excellence since 2004. Trusted by 750+ organizations across 50+ countries for transformative talent solutions.
//             </p>
//             <div className="flex space-x-3">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#0052CC] rounded-lg flex items-center justify-center transition-all"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#0052CC] rounded-lg flex items-center justify-center transition-all"
//               >
//                 <Twitter className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#0052CC] rounded-lg flex items-center justify-center transition-all"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-white/10 hover:bg-[#0052CC] rounded-lg flex items-center justify-center transition-all"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-6">Quick Links</h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {link.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-6">Our Services</h4>
//             <ul className="space-y-3">
//               {services.map((service, index) => (
//                 <li key={index} className="text-gray-400">
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-bold mb-6">Contact Info</h4>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 text-[#00A885] flex-shrink-0 mt-1" />
//                 <p className="text-gray-400 text-sm">
//                   Business Tower, 45th Floor<br />
//                   Sheikh Zayed Road, Dubai, UAE
//                 </p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-[#00A885]" />
//                 <p className="text-gray-400 text-sm">+971 4 XXX XXXX</p>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-[#00A885]" />
//                 <p className="text-gray-400 text-sm">info@elitepower.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm text-center md:text-left">
//               © {currentYear} Ishaan Global. All rights reserved. | Transforming Workforces Worldwide
//             </p>
//             <div className="flex items-center space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 Cookie Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Users, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', id: 'about' },
    { name: 'Our Services', id: 'services' },
    { name: 'Industries', id: 'industries' },
    { name: 'Our Process', id: 'process' },
  ];

  const services = [
    'Skilled Manpower',
    'Semi-Skilled Workers',
    'Unskilled Labor',
    'Overseas Recruitment',
    'Contract Staffing',
    'Permanent Recruitment',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
               src="/CompanyLogo.png"
               alt="Ishaan Global "
               className="w-12 h-12 object-contain cursor-pointer"
                />
              <div>
             <h3 className="text-xl font-bold text-[#FF6600]">Ishaan Global</h3>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest">
             Impact Through Talent
             </p>
           </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Global workforce excellence since 2019. Trusted by 25+ organizations across 5+ States India for transformative talent solutions.
            </p>

            {/* <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
           
                <div className="flex space-x-3">
  <a
    href="https://in.linkedin.com/company/ishaanglobal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
  >
    <Facebook className="w-5 h-5" />
  </a>

  <a
    href="https://in.linkedin.com/company/ishaanglobal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
  >
    <Twitter className="w-5 h-5" />
  </a>

  <a
    href="https://in.linkedin.com/company/ishaanglobal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
  >
    <Linkedin className="w-5 h-5" />
  </a>

  <a
    href="https://in.linkedin.com/company/ishaanglobal"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-white/10 hover:bg-[#FF6600] rounded-lg flex items-center justify-center transition-all"
  >
    <Instagram className="w-5 h-5" />
  </a>
</div>


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#FF6600] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-[#FF6600] transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">
                  Kokarya, Business Synergy Center<br />
                  NO. 51, Old site No. 1,  Fifth Floor 5th Main,
                  5th Block, Jayanagar , Bengaluru Urban, Karnataka - 560041
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6600]" />
                <p className="text-gray-400 text-sm">+91 98867 70667</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6600]" />
                <p className="text-gray-400 text-sm">info@ishaanglobal.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ishaan Global. All rights reserved.
            </p>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6600] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
