import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { 
  MdOutlineEmojiPeople, 
  MdGroups, 
  MdAccessTime, 
  MdLightbulb, 
  MdCheckCircle,
  MdAutorenew 
} from "react-icons/md";
import { Link } from "react-router-dom";

export const About = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-3xl" />, name: "HTML", percentage: 90 },
    { icon: <FaCss3Alt className="text-blue-500 text-3xl" />, name: "CSS", percentage: 80 },
    { icon: <FaJs className="text-yellow-500 text-3xl" />, name: "JavaScript", percentage: 70 },
    { icon: <FaPython className="text-purple-500 text-3xl" />, name: "Python", percentage: 80 },
    { icon: <FaReact className="text-cyan-500 text-3xl" />, name: "React", percentage: 50 },
    { icon: <SiCplusplus className="text-blue-400 text-3xl" />, name: "C++", percentage: 80 },
  ];

  const softSkills = [
    { icon: <MdOutlineEmojiPeople className="text-yellow-400 text-3xl" />, name: "Communication", percentage: 85 },
    { icon: <MdGroups className="text-green-500 text-3xl" />, name: "Leadership", percentage: 75 },
    { icon: <MdAccessTime className="text-yellow-400 text-3xl" />, name: "Time Management", percentage: 75 },
    { icon: <MdLightbulb className="text-red-500 text-3xl" />, name: "Brainstorming", percentage: 75 },
    { icon: <MdCheckCircle className="text-blue-500 text-3xl" />, name: "Teamwork", percentage: 75 },
    { icon: <MdAutorenew className="text-green-400 text-3xl" />, name: "Adaptability", percentage: 80 },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 pt-24 flex flex-col items-center min-h-screen px-6">
      
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold tracking-wide animate-slideRight">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 text-lg animate-slideLeft">
          Passionate about technology, coding, and problem-solving.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl space-y-12 md:space-y-0 md:space-x-16">
        
        <div className="relative w-72 h-72 flex-shrink-0 animate-slideUp">
          <img 
            src="/image/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            alt="Nishant Bharati"
            className="w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        
        <div className="max-w-2xl text-center md:text-left animate-slideLeft">
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Hi, I'm Nishant Bharati</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate and dedicated individual with a strong interest in technology and problem-solving. 
            With a focus on continuous learning, I enjoy exploring innovative solutions and transforming ideas into impactful projects.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <Link 
              to="/resume" 
              className="bg-transparent text-blue-400 border-2 border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition font-semibold"
            >
              My Resume
            </Link>
            <Link 
              to="/projects" 
              className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 font-semibold"
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mt-20 w-full animate-slideDown">
        
        <div className="bg-gray-800 p-10 rounded-2xl shadow-lg backdrop-blur-lg bg-opacity-60 border border-gray-700">
          <h2 className="text-3xl text-blue-400 mb-6 text-center font-semibold">Technical Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                {skill.icon}
                <p className="flex-1 text-gray-300 font-semibold">{skill.name}</p>
                <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden relative">
                  <div
                    className="bg-blue-500 h-full rounded-lg transition-all duration-700 ease-in-out animate-fillBar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <span className="absolute right-2 text-sm text-gray-200">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      
        <div className="bg-gray-800 p-10 rounded-2xl shadow-lg backdrop-blur-lg bg-opacity-60 border border-gray-700">
          <h2 className="text-3xl text-blue-400 mb-6 text-center font-semibold">Soft Skills</h2>
          <div className="space-y-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4">
                {skill.icon}
                <p className="flex-1 text-gray-300 font-semibold">{skill.name}</p>
                <div className="w-full bg-gray-700 h-4 rounded-lg overflow-hidden relative">
                  <div
                    className="bg-green-500 h-full rounded-lg transition-all duration-700 ease-in-out animate-fillBar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                  <span className="absolute right-2 text-sm text-gray-200">{skill.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
