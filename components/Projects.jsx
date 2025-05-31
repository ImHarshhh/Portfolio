import React from 'react';


function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4"> 
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a2b4d] mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Card 1: Zero Trust Password */}
          <div className="flex flex-col items-center border border-gray-200 rounded-xl shadow-md p-6 gap-4
                      transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-600 bg-white"> 
          
            <div className="mb-2">
              
              <span className="text-4xl text-blue-600">🌐</span> 
            </div>

            <div className="text-center">
              <h3 className="text-xl text-gray-800 font-bold mb-1">
                Zero Trust Password
              </h3>
              <p className="text-sm text-gray-500">Web Application</p>
            </div>

            <div className="text-base text-gray-700 text-center flex-grow"> {/* flex-grow to ensure descriptions take equal space */}
              "<p className="inline"><b>Zero Trust Password</b> project is a smart password evaluation tool that analyzes password strength and recommends secure alternatives based on user-specific inputs, ensuring personalized and resilient authentication.</p>"
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Python</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Flask</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">MySQL</span>
            </div>

            {/* Call to Action */}
            <a
              href="https://github.com/ImHarshhh/Zero-Trust-Password"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-sm"
            >
              View GitHub
            </a>
          </div>

          {/* Card 2: UniVerse */}
          <div className="flex flex-col items-center border border-gray-200 rounded-xl shadow-md p-6 gap-4
                      transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-600 bg-white">
            {/* Visual Element */}
            <div className="mb-2">
              
              <span className="text-4xl text-blue-600">💬</span> 
            </div>

            <div className="text-center">
              <h3 className="text-xl text-gray-800 font-bold mb-1">
                UniVerse
              </h3>
              <p className="text-sm text-gray-500">Web Application</p>
            </div>

            <div className="text-base text-gray-700 text-center flex-grow">
              "<p className="inline"><b>UniVerse</b> is a dynamic social media platform that allows users to share content, connect with others, and post anonymously with a unique limit-based subscription feature—fostering expression while encouraging thoughtful engagement.</p>"
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">React</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Node.js</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">MongoDB</span>
            </div>

            {/* Call to Action */}
            <a
              href="https://github.com/ImHarshhh/UniVerse" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-sm"
            >
              View Github
            </a>
          </div>

          {/* Card 3: Dog Vision */}
          <div className="flex flex-col items-center border border-gray-200 rounded-xl shadow-md p-6 gap-4
                      transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-blue-600 bg-white">
            {/* Visual Element */}
            <div className="mb-2">
              {/* <FaPaw className="text-4xl text-blue-600" /> */}
              <span className="text-4xl text-blue-600">🐶</span> {/* Dog/ML Icon */}
            </div>

            <div className="text-center">
              <h3 className="text-xl text-gray-800 font-bold mb-1">
                Dog Vision
              </h3>
              <p className="text-sm text-gray-500">Machine Learning Project</p>
            </div>

            <div className="text-base text-gray-700 text-center flex-grow">
              "<p className="inline"><b>DogVision</b> is an image classification project that leverages deep learning to accurately identify and classify different dog breeds from images, using convolutional neural networks (CNNs) for high-precision visual recognition.</p>"
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Python</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">TensorFlow</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Keras</span>
            </div>

            {/* Call to Action */}
            <a
              href="https://github.com/ImHarshhh/Dog-Vision"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-sm"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
