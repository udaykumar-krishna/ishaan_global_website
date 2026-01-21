


import {
  Building2,
  UtensilsCrossed,
  Home,
  Shield,
  Factory,
  Truck,
  MonitorSmartphone,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

const Industries = () => {
  const industries = [

       // NEW: Banking & Financial Services
    {
      icon: CreditCard,
      title: "Banking & Financial Services",
      description:
        "Retail banking staff, operations teams, finance professionals, and compliance experts for BFSI organizations.",
      image:
        "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
  icon: MonitorSmartphone, // telecom icon
  title: "Telecom Industry",
  description:
    "Network engineers, fiber technicians, tower riggers, and field service teams for telecom expansion projects.",
  image:
    "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=1200", // fallback if needed
},
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Production workers, quality controllers, machine operators, and technical staff for manufacturing units.",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },

    // NEW: IT / Technology
    {
      icon: MonitorSmartphone,
      title: "IT & Technology",
      description:
        "Software engineers, IT support, network specialists, and digital teams for modern tech-driven businesses.",
      image:
        "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
        // NEW: Retail & E-Commerce
    {
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      description:
        "Store associates, cashiers, warehouse pickers, delivery staff, and customer support for omni-channel retail.",
      image:
        "https://images.pexels.com/photos/6238035/pexels-photo-6238035.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
        {
      icon: Truck,
      title: "Logistics",
      description:
        "Drivers, warehouse staff, logistics coordinators, and supply chain professionals for seamless operations.",
      image:
        "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },


  {
    icon: Shield,
    title: "Healthcare & Pharma",
    description:
      "Nurses, medical staff, paramedics, lab technicians, and pharma workforce for hospitals and research centers.",
    image:
      "https://images.pexels.com/photos/6129042/pexels-photo-6129042.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },


    {
      icon: UtensilsCrossed,
      title: "Hospitality",
      description:
        "Hotel staff, chefs, waiters, housekeeping, and front office professionals for the hospitality sector.",
      image:
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: Home,
      title: "Facility Management",
      description:
        "Maintenance staff, cleaning crews, technicians, and facility operators for commercial properties.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    
   
    {
      icon: Shield,
      title: "Security Services",
      description:
        "Trained security guards, supervisors, and surveillance personnel for comprehensive security solutions.",
      image:
        "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
   

    {
      icon: Building2,
      title: "Construction",
      description:
        "Civil engineers, architects, masons, electricians, plumbers, and skilled laborers for construction projects.",
      image:
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },

    {
    icon: Factory,
    title: "Other Emerging Sectors",
    description:
      "Workforce support for education, BPO, aviation, agriculture, renewable energy, and fast-growing industries.",
    image:
      "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
    
  ];

  return (
    <section id="industries" className="py-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries <span className="text-[#FF6600]">We Serve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized workforce solutions across diverse sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <industry.icon className="w-7 h-7 text-[#FF6600]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6600] transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-xs font-semibold text-[#FF6600]">
                  Specialized
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Don't see your industry? We work across{" "}
              <strong className="text-[#FF6600]">25+ sectors</strong> worldwide.
            </p>

            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-gradient-to-r from-[#FF6600] to-[#FF8C42] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Discuss Your Requirements
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
