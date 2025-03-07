import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export const  Footer = () => {
  return (
    <footer className="md:opacity-0 text-gray-300 py-6 mt-16 px-25">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-white">Nishant Bharati</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

       

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
          <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};
