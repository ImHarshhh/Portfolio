import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50"> {/* Use a light background for contrast */}
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a2b4d] mb-12">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-16">
          Hello! I'm Harsh Chaudhari, a passionate and driven individual with a strong foundation in software development. My journey has been marked by continuous learning, hands-on experience, and a commitment to building innovative solutions.
        </p>

        {/* Timeline Section */}
        <div className="relative wrap overflow-hidden p-8 h-full">
          {/* Vertical line connecting timeline events */}
          <div className="border-2-2 absolute border-opacity-20 border-blue-500 h-full border left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {/* Timeline Item 1: Schooling */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden md:block"></div> {/* Spacer for left side */}
            <div className="z-10 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">🎓</h1> {/* Icon */}
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">High School</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600">
                Completed my schooling at Global Indian Internation School, where I developed a strong foundation in Maths ,Science, Computer Science and fostered my problem-solving skills.
                With score of 89% in Class XII.
              </p>
              <p className="text-xs text-gray-500 mt-2">Year 2020 - Year 2022</p>
            </div>
          </div>

          {/* Timeline Item 2: College */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden md:block"></div> {/* Spacer for right side */}
            <div className="z-10 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">🏛️</h1> {/* Icon */}
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Bachelor's Degree in Computer Science with Specialisation in AIML</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600">
                Pursued my Bachelor's in Computer Science with Specialisation in AIML  at Manipal University Jaipur. Focused on Data Structures, Algorithms, Web Development, Machine Learning,NLP and completed several impactful projects.
              </p>
              <p className="text-xs text-gray-500 mt-2">Year 2022 - Ongoing</p>
            </div>
          </div>

          {/* Timeline Item 3: Internship 1 */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 hidden md:block"></div>
            <div className="z-10 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">💻</h1> {/* Icon */}
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Dell Hack to Hire</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600">
                Gained hands-on experience in technologies like Python, Flask, and SQL by developing and implementing features for our project 'Zero Trust Password,' a password strength detector and recommender system.
              </p>
              <p className="text-xs text-gray-500 mt-2">Oct 2023 - Jan 2024</p>
            </div>
          </div>

          {/* Timeline Item 4: Internship 2 (if applicable) */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12 hidden md:block"></div>
            <div className="z-10 flex items-center order-1 bg-blue-600 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">🚀</h1> {/* Icon */}
            </div>
            <div className="order-1 bg-white rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">ML Intern at Bharat Intern</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-600">
                Gained practical experience in Machine Learning during my internship at Bharat Intern by working on real-world datasets, developing predictive models, and optimizing them using Python, Scikit-learn, and Pandas—achieving up to a 15% improvement in model accuracy through hyperparameter tuning and feature engineering.
              </p>
              <p className="text-xs text-gray-500 mt-2">June 2024 - July 2024</p>
            </div>
          </div>

          {/* Add more timeline items as needed */}

        </div>
      </div>
    </section>
  );
};

export default About;