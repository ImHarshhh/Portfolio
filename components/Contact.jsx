
import photos from "../src/assets/usgs-hoS3dzgpHzw-unsplash.jpg"

function Contact() {
  return (
     <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto bg-gray-100 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
        
        <div className="hidden md:block w-1/2 bg-blue-50">
  <div className="h-full w-full">
    <img
      src={photos}
      alt="Contact Illustration"
      className="w-full h-full object-cover"
    />
  </div>
</div>



        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>

          <form
            action="https://formsubmit.co/jaiharsh43@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Contact;
