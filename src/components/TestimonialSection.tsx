// components/TestimonialSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-20"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="relative text-center max-w-5xl mx-auto z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-primary mb-10 font-serif"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What our clients say
        </motion.h2>

        <motion.div
          className="text-7xl text-primary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          &ldquo;
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 px-4 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I had a lovely conversation with Mr. Eisenhart, and he couldn&apos;t say enough about how wonderful their trip was.
          He gave me some wonderful feedback that I&apos;d love to share with you. They were very pleased with their guide
          in Ireland, Bill. They said that he was absolutely wonderful. They said that their full-day Connemara music tour
          was outstanding. Highlight of the trip. Their guide for their walking tour in Dublin, Frankie, was very good –
          particularly with engaging the kids. They all really enjoyed the bike ride, falconry, and the surfing lesson.
          Thank you so much for your help in putting this trip together. Mr. Eisenhart really couldn&apos;t stop gushing about
          how this was a trip of a lifetime.
        </motion.p>

        <motion.div
          className="text-7xl text-primary mb-6 rotate-180"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          &ldquo;
        </motion.div>

        <motion.h4
          className="text-2xl font-semibold text-primary mb-12 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Agent Allison Parker
        </motion.h4>

        {/* Arrows */}
        <div className="flex justify-center space-x-8">
          <button className="border-2 border-primary text-primary rounded-full p-4 hover:bg-primary hover:text-white transition-all duration-300">
            &#8592;
          </button>
          <button className="border-2 border-primary text-primary rounded-full p-4 hover:bg-primary hover:text-white transition-all duration-300">
            &#8594;
          </button>
        </div>
      </div>

      {/* Chat with us - Vertical Button */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-left">
        <button className="bg-primary text-white px-5 py-2 rounded-b-xl tracking-widest shadow-lg hover:bg-primary-dark transition-all duration-300">
          CHAT WITH US
        </button>
      </div>

      {/* Scroll To Top */}
      <div className="fixed bottom-10 right-10">
        <button className="bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary-dark transition-all duration-300">
          <span className="text-2xl">↑</span>
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
