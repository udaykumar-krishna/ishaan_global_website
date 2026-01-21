// import { useState } from 'react';
// import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: 'Michael Thompson',
//       position: 'Operations Director',
//       company: 'Global Construction Ltd',
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       text: 'Ishaan Global has been instrumental in helping us scale our operations across three continents. Their workforce is highly skilled, professional, and always ready to deliver. The deployment process was seamless and their support team is exceptional. We\'ve achieved 30% efficiency gains since partnering with them.',
//     },
//     {
//       name: 'Sarah Al-Rashid',
//       position: 'HR Manager',
//       company: 'Premier Hotels Group',
//       image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       text: 'Working with Ishaan Global transformed our hiring process completely. They provided us with top-tier hospitality staff who exceeded our expectations in every way. The quality of candidates, speed of deployment, and ongoing support are simply unmatched in the industry.',
//     },
//     {
//       name: 'David Chen',
//       position: 'Plant Manager',
//       company: 'Advanced Manufacturing Inc',
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       text: 'The technical expertise and reliability of the workforce provided by Ishaan Global have been truly outstanding. They understand our manufacturing requirements perfectly and consistently deliver highly qualified professionals ahead of schedule. Their commitment to quality is evident.',
//     },
//     {
//       name: 'Fatima Hassan',
//       position: 'Facilities Director',
//       company: 'Metro Properties',
//       image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
//       rating: 5,
//       text: 'Ishaan Global manages our entire facility staff across 15 properties seamlessly. Their comprehensive approach, from rigorous recruitment through ongoing performance management, has significantly improved our operational efficiency by 25%. Highly recommended for enterprise-scale operations!',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const next = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   return (
//     <section id="testimonials" className="py-20 bg-gradient-to-br from-[#0052CC] to-[#00A885] relative overflow-hidden">
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Client <span className="text-[#F8F9FC]">Testimonials</span>
//           </h2>
//           <p className="text-xl text-white/90 max-w-3xl mx-auto">
//             Hear from our satisfied clients around the world
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto">
//           <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
//             <div className="flex items-start space-x-6">
//               <Quote className="w-16 h-16 text-white/30 flex-shrink-0" />
//               <div className="flex-1">
//                 <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
//                   "{testimonials[currentIndex].text}"
//                 </p>

//                 <div className="flex items-center space-x-6">
//                   <img
//                     src={testimonials[currentIndex].image}
//                     alt={testimonials[currentIndex].name}
//                     className="w-20 h-20 rounded-full object-cover border-4 border-white/30"
//                   />
//                   <div className="flex-1">
//                     <h4 className="text-xl font-bold text-white mb-1">
//                       {testimonials[currentIndex].name}
//                     </h4>
//                     <p className="text-white/80 mb-2">
//                       {testimonials[currentIndex].position}
//                     </p>
//                     <p className="text-white/70 text-sm">
//                       {testimonials[currentIndex].company}
//                     </p>
//                     <div className="flex space-x-1 mt-2">
//                       {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
//                         <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/20">
//               <button
//                 onClick={prev}
//                 className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white" />
//               </button>

//               <div className="flex space-x-2">
//                 {testimonials.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`w-3 h-3 rounded-full transition-all ${
//                       index === currentIndex
//                         ? 'bg-white w-8'
//                         : 'bg-white/40 hover:bg-white/60'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={next}
//                 className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all hover:scale-110"
//               >
//                 <ChevronRight className="w-6 h-6 text-white" />
//               </button>
//             </div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6 mt-12">
//             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
//               <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
//               <div className="text-white/80">Average Rating</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
//               <div className="text-4xl font-bold text-white mb-2">500+</div>
//               <div className="text-white/80">Happy Clients</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center border border-white/20">
//               <div className="text-4xl font-bold text-white mb-2">98%</div>
//               <div className="text-white/80">Retention Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Thompson',
      position: 'Operations Director',
      company: 'Global Construction Ltd',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "Ishaan Global has been instrumental in helping us scale our operations across three continents. Their workforce is highly skilled, professional, and always ready to deliver. The deployment process was seamless and their support team is exceptional. We've achieved 30% efficiency gains since partnering with them.",
    },
    // {
    //   name: 'Sarah Al-Rashid',
    //   position: 'HR Manager',
    //   company: 'Premier Hotels Group',
    //   image:
    //     'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   rating: 5,
    //   text: 'Working with Ishaan Global transformed our hiring process completely. They provided us with top-tier hospitality staff who exceeded our expectations in every way. The quality of candidates, speed of deployment, and ongoing support are simply unmatched in the industry.',
    // },
    // {
    //   name: 'David Chen',
    //   position: 'Plant Manager',
    //   company: 'Advanced Manufacturing Inc',
    //   image:
    //     'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   rating: 5,
    //   text: 'The technical expertise and reliability of the workforce provided by Ishaan Global have been truly outstanding. They understand our manufacturing requirements perfectly and consistently deliver highly qualified professionals ahead of schedule. Their commitment to quality is evident.',
    // },
    // {
    //   name: 'Fatima Hassan',
    //   position: 'Facilities Director',
    //   company: 'Metro Properties',
    //   image:
    //     'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300',
    //   rating: 5,
    //   text: 'Ishaan Global manages our entire facility staff across 15 properties seamlessly. Their comprehensive approach, from rigorous recruitment through ongoing performance management, has significantly improved our operational efficiency by 25%. Highly recommended for enterprise-scale operations!',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-[#FFF7F0] relative overflow-hidden"
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#FFE1C4] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD1A6] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-[#FF6600]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients around the world
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-orange-100 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start md:space-x-6 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF0E0] flex items-center justify-center mb-4">
                  <Quote className="w-10 h-10 text-[#FF8C42]" />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center space-x-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#FFE1C4]"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 mb-1">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].company}
                    </p>

                    <div className="flex space-x-1 mt-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-[#FFB347] fill-[#FFB347]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-orange-100">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 border border-[#FF6600]/40 hover:border-[#FF6600] bg-white rounded-full flex items-center justify-center transition-all hover:shadow-md hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-[#FF6600]" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#FF6600] w-8'
                        : 'bg-[#FFB347]/50 w-2.5 hover:bg-[#FF6600]/70'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 border border-[#FF6600]/40 hover:border-[#FF6600] bg-white rounded-full flex items-center justify-center transition-all hover:shadow-md hover:scale-105"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-[#FF6600]" />
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white border border-orange-100 p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white border border-orange-100 p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white border border-orange-100 p-6 rounded-xl text-center shadow-sm">
              <div className="text-4xl font-bold text-[#FF6600] mb-2">98%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
