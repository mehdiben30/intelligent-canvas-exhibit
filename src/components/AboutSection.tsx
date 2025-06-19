
import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-black mb-6">
            Experience
          </h2>
          <div className="w-20 h-px bg-gray-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {/* Emobot Experience */}
          <div className="border-l-4 border-gray-300 pl-8 relative">
            <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-400 rounded-full"></div>
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-black mb-2">
                  Emobot, Paris — Intern
                </h3>
                <p className="text-gray-600 font-medium text-lg mb-1">June 2025 - September 2025</p>
                <p className="text-gray-700 font-semibold text-lg">Research Paper Implementation & MLOps</p>
              </div>
              <ul className="space-y-4 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <span className="text-base">Implementation of research papers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <span className="text-base">Fine-tuning and training of machine learning models.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <span className="text-base">Support in the deployment and optimization of machine learning pipelines, focusing on MLOps practices to ensure model scalability and reliability.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* OCP Experience */}
          <div className="border-l-4 border-gray-300 pl-8 relative">
            <div className="absolute -left-2.5 top-0 w-5 h-5 bg-gray-600 rounded-full"></div>
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-black mb-2 leading-tight">
                  OCP (Office Chérifien des Phosphates), Casablanca — Intern at the Data Management team
                </h3>
                <p className="text-gray-600 font-medium text-lg">April 2024 - July 2024</p>
              </div>
              <ul className="space-y-4 text-gray-800 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <div className="text-base">
                    <strong className="text-gray-900">Implementation of a Data Pipeline:</strong> Designed and developed robust data pipelines to streamline data flow and processing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <div className="text-base">
                    <strong className="text-gray-900">Development of an API:</strong> Created and integrated APIs to facilitate seamless data access and application interoperability.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-4 mt-1.5 text-lg">•</span>
                  <div className="text-base">
                    <strong className="text-gray-900">Case Study on Food Safety Data:</strong> Conducted comprehensive analyses involving exploratory data analysis, data cleaning, supervised learning, and unsupervised learning to derive actionable insights on food security data provided by FAO (Food and Agriculture Organization of the United Nations).
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
