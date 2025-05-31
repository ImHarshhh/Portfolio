import photo from '../src/assets/harsh-image.jpg';

function Hero() {
  return (
    <section id="home" className="w-full py-10 md:py-20 bg-white"> {/* Changed to section and added id="home", adjusted padding */}
      <div className="max-w-[1280px] flex flex-col md:flex-row gap-8 px-4 mx-auto items-center justify-between"> {/* Changed p-2 to px-4 for consistent side padding */}

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[1.15rem] font-semibold text-blue-600 mb-2">I am</p> {/* Added mb-2 for spacing */}
          <h1 className="text-[2.3rem] md:text-[3.6rem] py-2 md:py-0 font-bold text-[#1a2b4d] leading-tight"> {/* Changed h2 to h1 for semantic HTML, adjusted py, added text-[#1a2b4d] and leading-tight */}
            Harsh Chaudhari
          </h1>
          <p className="text-gray-600 text-[1.13rem] md:w-[78%] leading-relaxed mb-8"> {/* Added leading-relaxed and mb-8 */}
            a dedicated and enthusiastic software developer with a passion for creating efficient and user-friendly applications. I have experience working with modern web technologies and enjoy learning new skills that help me solve real-world problems. Whether it's building websites or exploring machine learning, I strive to continuously improve and deliver quality work.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-6 py-4 mt-4"> {/* Adjusted gap to 6 */}
            <a
              href="https://drive.google.com/file/d/1X-9zCO_tmFCvarFzfH4NbvmQPKLHvLpG/view?usp=drivesdk"
              target="_blank" // Opens in new tab
              rel="noopener noreferrer" // Security best practice
              className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300" // Adjusted px, hover color
            >
              Resume
            </a>
            <a
              href="#projects" // Linked to projects section via ID
              className="px-7 py-3 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300" // Adjusted px, hover color
            >
              Projects
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 py-6">
          <div className="rounded-[1.225rem] overflow-hidden shadow-xl md:h-[67vh] w-full max-w-[500px] flex items-center justify-center"> {/* Added shadow-xl, flex properties for centering image within its container */}
            <img
              src={photo}
              alt="Harsh Chaudhari"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center top' }} // <-- **THIS IS THE CRITICAL CHANGE**
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;