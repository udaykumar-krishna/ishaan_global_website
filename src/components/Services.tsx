
// import {
//   Wrench,
//   HardHat,
//   Users,
//   Globe2,
//   FileText,
//   Briefcase,
//   ShieldCheck,
//   Calculator,
// } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: Briefcase,
//       title: "Permanent Recruitment",
//       description:
//         "End-to-end recruitment services for permanent positions across all organizational levels.",
//       features: ["Executive Search", "Talent Acquisition", "Onboarding Support"],
//     },
//     // ✅ New: Statutory Compliance Management
//     {
//       icon: ShieldCheck,
//       title: "Statutory Compliance Management",
//       description:
//         "End-to-end statutory and regulatory compliance for your workforce across PF, ESI, PT, labor laws, and audits.",
//       features: ["PF, ESI, PT Compliance", "Labour Law Advisory", "Audit-Ready Documentation"],
//     },
//     // ✅ New: Payroll & HR Outsourcing
//     {
//       icon: Calculator,
//       title: "Payroll & HR Outsourcing",
//       description:
//         "Accurate, timely payroll processing with integrated HR administration and employee lifecycle support.",
//       features: ["Multi-Location Payroll", "Salary Structuring", "HR Ops Support"],
//     },
//     {
//       icon: Globe2,
//       title: "Overseas Recruitment",
//       description:
//         "Complete visa processing, documentation, and deployment services for international placements.",
//       features: ["Visa Processing", "Documentation", "Travel Arrangements"],
//     },
//     {
//       icon: FileText,
//       title: "Contract Staffing",
//       description:
//         "Flexible workforce solutions for project-based requirements with complete compliance management.",
//       features: ["Project-Based", "Scalable Teams", "Full Compliance"],
//     },
//     {
//       icon: Wrench,
//       title: "Skilled Manpower",
//       description:
//         "Certified technicians, engineers, IT professionals, and specialized tradesmen with proven expertise.",
//       features: ["Technical Experts", "Certified Professionals", "Industry Veterans"],
//     },
//     {
//       icon: HardHat,
//       title: "Semi-Skilled Workers",
//       description:
//         "Trained operators, supervisors, and support staff with practical experience and qualifications.",
//       features: ["Machine Operators", "Supervisors", "Skilled Assistants"],
//     },
//     {
//       icon: Users,
//       title: "Unskilled Labor",
//       description:
//         "Reliable general workers, helpers, and support staff for various operational requirements.",
//       features: ["General Workers", "Support Staff", "Manual Labor"],
//     },
    
    
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[#FF6600]">Services</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive workforce and compliance solutions tailored to your business needs
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
//             >
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6600]/10 to-[#FF8C42]/10 rounded-bl-full transform translate-x-8 -translate-y-8" />

//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
//                   <service.icon className="w-8 h-8 text-white" />
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6600] transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center space-x-2">
//                       <div className="w-1.5 h-1.5 bg-[#FF8C42] rounded-full" />
//                       <span className="text-sm text-gray-600">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="mt-6 pt-6 border-top border-t border-gray-200">
//                   <button className="text-[#FF6600] font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
//                     <span>Learn More</span>
//                     <span className="text-xl">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 bg-gradient-to-r from-[#FF6600] to-[#FF8C42] rounded-2xl p-12 text-center text-white">
//           <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
//           <p className="text-xl mb-8 opacity-90">
//             We create tailored workforce and compliance packages to meet your unique requirements
//           </p>
//           <button
//             onClick={() =>
//               document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="bg-white text-[#FF6600] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
//           >
//             Contact Our Team
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




import {
  Wrench,
  HardHat,
  Users,
  Globe2,
  FileText,
  Briefcase,
  ShieldCheck,
  Calculator,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Permanent Recruitment",
      description:
        "End-to-end recruitment services for permanent positions across all organizational levels.",
      features: ["Executive Search", "Talent Acquisition", "Onboarding Support"],
    },
    // ✅ New: Statutory Compliance Management
    {
      icon: ShieldCheck,
      title: "Statutory Compliance Management",
      description:
        "End-to-end statutory and regulatory compliance for your workforce across PF, ESI, PT, labor laws, and audits.",
      features: ["PF, ESI, PT Compliance", "Labour Law Advisory", "Audit-Ready Documentation"],
    },
    // ✅ New: Payroll & HR Outsourcing
    {
      icon: Calculator,
      title: "Payroll & HR Outsourcing",
      description:
        "Accurate, timely payroll processing with integrated HR administration and employee lifecycle support.",
      features: ["Multi-Location Payroll", "Salary Structuring", "HR Ops Support"],
    },
    // {
    //   icon: Globe2,
    //   title: "Overseas Recruitment",
    //   description:
    //     "Complete visa processing, documentation, and deployment services for international placements.",
    //   features: ["Visa Processing", "Documentation", "Travel Arrangements"],
    // },
    {
      icon: FileText,
      title: "Contract Staffing",
      description:
        "Flexible workforce solutions for project-based requirements with complete compliance management.",
      features: ["Project-Based", "Scalable Teams", "Full Compliance"],
    },
    {
      icon: Wrench,
      title: "Skilled Manpower",
      description:
        "Certified technicians, engineers, IT professionals, and specialized tradesmen with proven expertise.",
      features: ["Technical Experts", "Certified Professionals", "Industry Veterans"],
    },
    {
      icon: HardHat,
      title: "Semi-Skilled & Unskilled Labor",
      description:
        "Reliable workers, operators, supervisors, and support staff for operational needs..",
      features: ["Machine Operators", "General Workers", "Support Staff"],
    },
    // {
    //   icon: Users,
    //   title: "Unskilled Labor",
    //   description:
    //     "Reliable general workers, helpers, and support staff for various operational requirements.",
    //   features: ["General Workers", "Support Staff", "Manual Labor"],
    // },
    
    
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FF6600]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive workforce and compliance solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6600]/10 to-[#FF8C42]/10 rounded-bl-full transform translate-x-8 -translate-y-8" />

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF6600] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#FF8C42] rounded-full" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-top border-t border-gray-200">
                  <button className="text-[#FF6600] font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#FF6600] to-[#FF8C42] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-8 opacity-90">
            We create tailored workforce and compliance packages to meet your unique requirements
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-[#FF6600] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;



