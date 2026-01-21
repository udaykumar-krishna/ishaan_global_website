



import { useState, useEffect } from 'react';

import { MessageSquare, Search, FileCheck, Users, Plane, HeadphonesIcon } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Requirement Analysis',
      description: 'We understand your specific workforce needs, job roles, and expectations in detail.',
    },
    {
      icon: Search,
      title: 'Talent Sourcing',
      description: 'Our recruiters identify and source qualified candidates from our extensive database.',
    },
    {
      icon: FileCheck,
      title: 'Screening & Verification',
      description: 'Rigorous background checks, skill assessments, and documentation verification.',
    },
    {
      icon: Users,
      title: 'Training & Orientation',
      description: 'Comprehensive training programs to ensure workforce readiness and compliance.',
    },
    {
      icon: Plane,
      title: 'Deployment',
      description: 'Complete mobilization support including visa, travel, and onboarding assistance.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Long-Term Support',
      description: 'Continuous monitoring, performance management, and 24/7 client support.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#FF6600]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to deliver the right workforce at the right time
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6600] via-[#FF8C42] to-[#FF6600] transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#FF6600] to-[#FF8C42] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#FF6600]">
                        <span className="text-lg font-bold text-[#FF6600]">{index + 1}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#FF8C42]">
                      <span className="text-[#FF6600] text-lg">→</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#FF6600] to-[#FF8C42] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us help you build a world-class workforce. Contact us today to discuss your requirements.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#FF6600] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
