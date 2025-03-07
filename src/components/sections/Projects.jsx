export const Projects = () => {
  const projects = [
    {
      title: "Diabetes Prediction",
      description: "Machine learning model to predict diabetes in pregnant women using Pandas, NumPy, and sklearn.",
      image: "/image/Diabetes-Prediction-Using-Machine-Learning (1).webp",
      link: "https://github.com/hellbrnger/diabetes_pred",
    },
    {
      title: "Heart Disease Prediction",
      description: "A predictive model for heart disease diagnosis using logistic regression in Python.",
      image: "/image/1_UIOup_6QtddueH9VjaT8HQ copy.jpg",
      link: "https://github.com/hellbrnger/Heart_disease-prediction", 
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive portfolio website using React, Tailwind CSS, and modern UI principles.",
      image: "/image/hq720.jpg",
      link: "https://github.com/hellbrnger/portfolio", 
    },
    {
      title: "Movie Recommendation System",
      description: "A recommendation system suggesting movies based on user preferences using collaborative filtering.",
      image: "/image/images.jpeg",
      link: "https://github.com/hellbrnger/movie_recommend_final", 
    },
    {
      title: "E-commerce Recommendation System",
      description: "An AI-driven recommendation engine for e-commerce platforms to personalize user shopping experience.",
      image: "/image/photo-1536440136628-849c177e76a1.jpeg",
      link: "https://github.com/hellbrnger/ecomm_recomm", 
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-24 px-6">
 
      <div className="text-center mb-16">
        <h2 className="text-5xl text-blue-400 font-extrabold tracking-wide animate-slideRight">
          Latest Projects
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto animate-slideRight">
          Explore some of my recent projects that demonstrate my skills in machine learning, web development, and design.
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 flex flex-col items-center animate-slideUp"
          >
          
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>

          
            <h3 className="text-2xl font-semibold text-white text-center mt-4">{project.title}</h3>
            <p className="text-gray-400 text-lg text-center mt-3 px-4 flex-grow">
              {project.description}
            </p>

          
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-medium tracking-wide transition-all duration-300 hover:bg-blue-600 hover:shadow-md animate-slideLeft"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
