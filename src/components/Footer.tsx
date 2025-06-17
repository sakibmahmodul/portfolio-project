import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
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
  )
}

export default Footer
