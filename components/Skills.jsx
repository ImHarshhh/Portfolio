function Skills() {
  return (
    <div className="bg-gray-100 mt-8 py-10 text-center">
  <div className="max-w-[768px] mx-auto px-8">
    <div className="flex flex-col gap-4">
      <h2 className="text-[2.2rem] font-bold">Tech Stack</h2>
      <p className="text-gray-500 text-base">
        There are many technologies I have worked with and here are a few.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      {/* Card 1 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#4a90e3] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#3978c0]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">React</div>
          <div className="text-white">
            A powerful JavaScript library for building dynamic, component-based user interfaces.
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#77b05d] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#5c9446]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">Node.js</div>
          <div className="text-white">
            A fast, event-driven runtime for building scalable server-side applications with JavaScript.
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#19570c] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#154b09]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="MongoDB"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">MongoDB</div>
          <div className="text-white">
            A flexible NoSQL database that stores data in JSON-like documents, ideal for modern apps.
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#44bfc3] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#3ba4a7]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            alt="SQL"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">SQL</div>
          <div className="text-white">
            A structured query language used for managing relational databases with precision and efficiency.
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#da9328] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#c67c1d]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
            alt="Scikit-Learn"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">Scikit-Learn</div>
          <div className="text-white">
            A robust Python library for classical machine learning, offering easy-to-use tools for data mining and analysis.
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="flex flex-col items-center justify-center p-8 rounded-xl gap-4 text-[#f0f0f0] bg-[#e34444] transition-transform transition-shadow transition-colors duration-300 hover:scale-105 hover:shadow-md hover:bg-[#c33636]">
        <div className="bg-white h-20 w-20 rounded-full flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg"
            alt="Keras"
            className="w-12 h-12"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">Keras</div>
          <div className="text-white">
            A high-level neural networks API in Python that enables fast experimentation with deep learning models.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Skills;
