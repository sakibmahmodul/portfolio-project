import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Reusable ContactInfo Component
const ContactInfo = ({ icon: Icon, title, detail }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-purple-500 p-4 rounded-full">
      <Icon className="text-white w-6 h-6" />
    </div>
    <div>
      <p className="text-lg font-medium text-purple-500">{title}</p>
      <p className="text-white">{detail}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div id='contact'>
      <div className="mx-w-7xl mx-auto px-4 sm:px-6 text-center py-12">
        <h2 className="text-4xl font-bold text-white">
          Let's Discuss Your <span className="text-purple-500">Project</span>
        </h2>
        <p className="text-slate-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque sint et voluptatem nemo. Quaerat.
        </p>
      </div>
      <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6 md:pl-12 lg:pl-16">
          <ContactInfo
            icon={FaPhone}
            title="Call Me"
            detail="+880 1540347261"
          />
          <ContactInfo
            icon={FaEnvelope}
            title="Email"
            detail="sakibuddessho89@gmail.com"
          />
          <ContactInfo
            icon={FaMapMarkerAlt}
            title="Address"
            detail="Adarsha Sadar, Cumilla"
          />
        </div>

        {/* Form Section */}
        <form className="space-y-6 text-white p-6 bg-gray-800 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Budget"
            />
          </div>
          <textarea
            className="border border-purple-500 bg-gray-900 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Message"
            rows="5"
          ></textarea>
          <button
            className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition duration-300 w-full md:w-auto"
            type="submit"
          >
            Submit Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-center py-6 mt-12 border-t border-purple-500">
        <p className="text-white">© 2025 Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.facebook.com/sakibmahmodul" className="text-purple-500 hover:text-purple-400">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-purple-500 hover:text-purple-400">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sakibmahmodul/" className="text-purple-500 hover:text-purple-400">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;