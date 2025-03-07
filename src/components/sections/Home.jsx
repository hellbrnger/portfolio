import { FaTwitter, FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 container flex flex-col md:flex-row justify-around items-center pt-25 md:pt-[4rem] min-h-screen px-25">
        
        <div className="hero-pic w-xs md:w-[400px] md:h-[400px] h-80 rounded-full overflow-hidden border-4 md:border-[15px] border-solid border-gray-700 shadow-lg transition-transform duration-500 hover:scale-110">
          <img
            src="/image/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            className="w-full h-full transition-transform duration-500"
            alt="Profile Pic"
          />
        </div>

        <div className="hero-text max-w-[500px] flex flex-col text-white mb-3 px-2">
          <h5 className="text-gray-200 text-3xl font-bold mb-4 text-center md:text-left animate-[slideDown_3s_ease-in_backwards]">
            Hello, It's Me
          </h5>
          <h1 className="text-cyan-400 text-5xl font-extrabold animate-[slideRight_3s_ease-in_backwards]">
            Nishant Bharati
          </h1>
          <h3 className="text-gray-300 text-2xl">
            And I am a <span className="animate-back-forth text-purple-400">Web Developer</span>
          </h3>







          <p className="text-gray-300 text-lg mt-3 animate-[slideRight_3s_ease-in_backwards]">
            I am a passionate and dedicated software developer with expertise in
            crafting dynamic and responsive web applications. With a strong
            foundation in programming and a love for problem-solving, I strive to
            deliver innovative solutions that make a difference.
          </p>

          {/* Buttons */}
          <div className="btn-grp mt-10 flex gap-4 justify-evenly md:justify-start">
            <a
              href="/image/res.jpeg"
              download
              className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold hover:bg-transparent hover:text-cyan-400 border-cyan-400"
            >
              Download CV
            </a>

            <Link
                to="/contact"
                className="px-6 py-3 bg-purple-500 text-white font-semibold hover:bg-transparent hover:text-purple-400 border-purple-400"
              >
                Contact
            </Link>






          </div>

          
          
                    {/* Social Icons */}
          <div className="pt-7 md:pt-10 px-2 flex justify-between max-w-90 flex-row animate-[slideLeft_3s_ease-in_forwards]">
            <a
              href="https://www.facebook.com/baal.vir.3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-blue-400 border-2 hover:bg-blue-600 transition"
            >
              <FaFacebookF color="#ffffff" className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/nishant-bharati-675950284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-blue-400 border-2 hover:bg-blue-600 transition"
            >
              <FaLinkedinIn color="#ffffff" className="text-3xl" />
            </a>
            <a
              href="https://github.com/hellbrnger"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-blue-400 border-2 hover:bg-blue-600 transition"
            >
              <FaGithub color="#ffffff" className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/YOUR_TWITTER_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-blue-400 border-2 hover:bg-blue-600 transition"
            >
              <FaTwitter color="#ffffff" className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
