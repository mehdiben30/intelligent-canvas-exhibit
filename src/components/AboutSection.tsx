
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

        <div className="space-y-12">
          {/* Emobot Experience */}
          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-black">
                  Emobot, Paris — Intern
                </h3>
                <p className="text-gray-600 font-medium">June 2025 - September 2025</p>
                <p className="text-gray-700 font-medium mt-1">Research Paper Implementation & MLOps</p>
              </div>
              <ul className="space-y-2 text-black/80 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  Implementation of research papers.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  Fine-tuning and training of machine learning models.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  Support in the deployment and optimization of machine learning pipelines, focusing on MLOps practices to ensure model scalability and reliability.
                </li>
              </ul>
            </div>
          </div>

          {/* OCP Experience */}
          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full"></div>
            <div className="space-y-4">
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-black">
                  OCP (Office Chérifien des Phosphates), Casablanca — Intern at the Data Management team
                </h3>
                <p className="text-gray-600 font-medium">April 2024 - July 2024</p>
              </div>
              <ul className="space-y-2 text-black/80 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  <strong>Implementation of a Data Pipeline:</strong> Designed and developed robust data pipelines to streamline data flow and processing.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  <strong>Development of an API:</strong> Created and integrated APIs to facilitate seamless data access and application interoperability.
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3 mt-1">●</span>
                  <strong>Case Study on Food Safety Data:</strong> Conducted comprehensive analyses involving exploratory data analysis, data cleaning, supervised learning, and unsupervised learning to derive actionable insights on food security data provided by FAO (Food and Agriculture Organization of the United Nations).
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
