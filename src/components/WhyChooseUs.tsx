


import { Shield, CheckCircle2, Zap, Award, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Consistent quality and dependable service delivery',
      percentage: 98,
    },
    {
      icon: CheckCircle2,
      title: 'Verified Workforce',
      description: 'Thoroughly screened and background-checked professionals',
      percentage: 100,
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Fast turnaround times to meet urgent requirements',
      percentage: 95,
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: '6+ years of proven track record',
      percentage: 92,
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and problem resolution',
      percentage: 100,
    },
  ];

  return (
    <section className="py-20 bg-[#FFF7F0]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#FF6600]">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excellence, reliability, and commitment that sets us apart
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Standards"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/40 to-transparent"></div>
            </div>

            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-xs border border-orange-100">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <span className="text-2xl font-bold text-[#FF6600]">
                        {feature.percentage}%
                      </span>
                    </div>

                    <p className="text-gray-600 mb-3">{feature.description}</p>

                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF6600] to-[#FF8C42] rounded-full transition-all duration-1000"
                        style={{ width: `${feature.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FF6600] mb-2">6+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FF6600] mb-2">2K+</div>
            <div className="text-gray-600">Workers Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FF6600] mb-2">5+</div>
            <div className="text-gray-600">States</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#FF6600] mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
