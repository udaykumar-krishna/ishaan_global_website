

import { Target, Eye, Heart, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'Connecting exceptional talent with visionary organizations to create transformative partnerships that drive global economic growth and individual prosperity.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        "To be the world's most trusted workforce ecosystem, setting industry standards for quality, innovation, and positive human impact across 100+ countries.",
    },
    {
      icon: Heart,
      title: 'Our Core Values',
      description:
        'Integrity, empowerment, inclusivity, and excellence define our culture. We champion worker dignity, celebrate diversity, and foster meaningful career growth.',
    },
    {
      icon: Award,
      title: 'Our Commitment',
      description:
        'Uncompromising quality standards, seamless deployment, regulatory excellence, and proactive partnership to ensure mutual success and sustainable growth.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#FF6600]">Ishaan Global</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering Workforce Excellence in India Since 2019
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Building Excellence Through People
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Established in 2019, Ishaan Global has evolved into a powerhouse in international workforce recruitment and staffing solutions. With over two decades of industry expertise, we've successfully built a reputation for delivering exceptional talent across diverse sectors and geographies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our holistic approach integrates cutting-edge recruitment technology, rigorous multi-tier screening protocols, comprehensive skills development programs, and dedicated relationship management to ensure every professional exceeds expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From specialized technical experts to operational support personnel, we engineer bespoke workforce solutions that drive organizational growth. Our strategic partnerships with industry leaders have positioned us as the go-to partner for Fortune 25 companies and emerging enterprises alike.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just fill positions—we build teams. Our commitment to cultural fit, skill alignment, and long-term success has earned us the trust of 25+ organizations, with a 98% client retention rate.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6600] to-[#FF8C42] border-4 border-white flex items-center justify-center text-white font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>

              <div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Team"
                className="w-full h-72 md:h-96 lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600]/30 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#FF6600]"> </div>
              
              <div className="text-sm text-gray-600"> </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
