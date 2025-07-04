
const Projects = () => {
  const projects = [
    {
      title: "HealthAI Companion",
      description: "An intelligent health assistant that uses ML to analyze symptoms and provide personalized recommendations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Swift", "CoreML", "HealthKit"],
      badge: "AI"
    },
    {
      title: "FinSmart Predictor",
      description: "Financial forecasting app that uses predictive analytics to help users make better investment decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Kotlin", "TensorFlow Lite", "Firebase"],
      badge: "ML"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Explore my portfolio of AI-powered mobile applications that combine innovative design with intelligent functionality.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-slate-800/50 rounded-xl p-6 border border-slate-800 relative overflow-hidden transition-all duration-300 hover:border-primary/30">
            <div className="mb-4 relative">
              <img src={project.image} 
                   alt={project.title} 
                   className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute top-2 right-2 bg-primary/90 text-xs text-white px-2 py-1 rounded-full">{project.badge}</div>
            </div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <a href="#" className="text-primary font-medium inline-flex items-center hover:text-primary/80 transition-colors">
              View Case Study <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
          View All Projects <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects
