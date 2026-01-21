// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
//     setFormData({ name: '', email: '', phone: '', company: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-20 bg-[#F8F9FC]">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In <span className="text-[#0052CC]">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your workforce? Contact us today for a consultation
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           <div>
//             <div className="bg-gradient-to-br from-[#0052CC] to-[#00A885] rounded-2xl p-8 text-white mb-8">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Head Office</h4>
//                     <p className="text-white/90">
//                       Business Tower, 45th Floor<br />
//                       Sheikh Zayed Road, Dubai, UAE
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Phone</h4>
//                     <p className="text-white/90">+971 4 XXX XXXX</p>
//                     <p className="text-white/90">+971 50 XXX XXXX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Email</h4>
//                     <p className="text-white/90">info@ishaanglobal.com</p>
//                     <p className="text-white/90">recruitment@ishaanglobal.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Business Hours</h4>
//                     <p className="text-white/90">Monday - Friday: 8:00 AM - 6:00 PM</p>
//                     <p className="text-white/90">Saturday: 9:00 AM - 2:00 PM</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Globe className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Global Presence</h4>
//                     <p className="text-white/90">50+ Countries Worldwide</p>
//                     <p className="text-white/90">100,000+ Professionals Placed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0739154265244!2d55.27098931501252!3d25.11887598395114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cc5fef5e93%3A0x16e0ab376fa19a5c!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </div>

//           <div>
//             <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent outline-none transition-all"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent outline-none transition-all"
//                     placeholder="john@company.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent outline-none transition-all"
//                     placeholder="+971 XX XXX XXXX"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent outline-none transition-all"
//                     placeholder="Your Company"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Your Message *
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0052CC] focus:border-transparent outline-none transition-all resize-none"
//                     placeholder="Tell us about your workforce requirements..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-[#0052CC] to-[#00A885] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
//                 >
//                   <span>Send Message</span>
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// withoutfrom

// import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 bg-[#F8F9FC]">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In <span className="text-[#0052CC]">Touch</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to transform your workforce? Contact us today for a consultation
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-1 gap-12">
//           <div>
//             <div className="bg-gradient-to-br from-[#0052CC] to-[#00A885] rounded-2xl p-8 text-white mb-8">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Head Office</h4>
//                     <p className="text-white/90">
//                       Business Tower, 45th Floor<br />
//                       Sheikh Zayed Road, Dubai, UAE
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Phone</h4>
//                     <p className="text-white/90">+971 4 XXX XXXX</p>
//                     <p className="text-white/90">+971 50 XXX XXXX</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Email</h4>
//                     <p className="text-white/90">info@ishaanglobal.com</p>
//                     <p className="text-white/90">recruitment@ishaanglobal.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Business Hours</h4>
//                     <p className="text-white/90">Monday - Friday: 8:00 AM - 6:00 PM</p>
//                     <p className="text-white/90">Saturday: 9:00 AM - 2:00 PM</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Globe className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold mb-1">Global Presence</h4>
//                     <p className="text-white/90">50+ Countries Worldwide</p>
//                     <p className="text-white/90">100,000+ Professionals Placed</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0739154265244!2d55.27098931501252!3d25.11887598395114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cc5fef5e93%3A0x16e0ab376fa19a5c!2sSheikh%20Zayed%20Rd%20-%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
//                 width="100%"
//                 height="500"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 title="Office Location"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF7F0]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-[#FF6600]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your workforce? Contact us today for a consultation
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Card */}
          <div>
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-orange-100">
              <h3 className="text-2xl font-bold mb-6 text-[#FF6600]">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF0E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Regional Office</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Kokarya, Business Synergy Center,<br />
                      NO. 51, Old site No. 1,  Fifth Floor 5th Main ,<br />
                       5th Block, Jayanagar Bengaluru Urban, Karnataka - 560041
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF0E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Phone</h4>
                    <p className="text-gray-700 text-sm">+91 98867 70667</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF0E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Email</h4>
                    <p className="text-gray-700 text-sm">info@ishaanglobal.com</p>
                    <p className="text-gray-700 text-sm">recruitment@ishaanglobal.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF0E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Business Hours</h4>
                    <p className="text-gray-700 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>

                {/* Global Presence */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFF0E0] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Global Presence</h4>
                    <p className="text-gray-700 text-sm">5+ States India</p>
                    <p className="text-gray-700 text-sm">2,000+ Professionals Placed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
            <iframe
              src={
                'https://www.google.com/maps?q=' +
                encodeURIComponent(
                  'NO 56 (Old No - 136), Manchanahalli Mayasandra, Samudaya Bhavan, Manchanahalli, Bengaluru Urban, Karnataka 562107'
                ) +
                '&output=embed'
              }
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location - Manchanahalli, Bengaluru"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
