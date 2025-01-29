import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to transform ideas into reality through innovation and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver exceptional value through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading force in digital transformation, setting new standards in innovation.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, and excellence guide everything we do as we strive for perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;