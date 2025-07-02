
const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt",
      skills: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin", "iOS SDK", "Android SDK"]
    },
    {
      title: "AI/ML Frameworks",
      icon: "fas fa-robot",
      skills: ["TensorFlow", "PyTorch", "Core ML", "ML Kit", "OpenCV", "scikit-learn", "Keras"]
    },
    {
      title: "Cloud & Backend",
      icon: "fas fa-cloud",
      skills: ["AWS", "Firebase", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & <span className="gradient-text">Technologies</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My technical expertise spans across mobile development, AI/ML frameworks, and cloud technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <i className={`${category.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-pill bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-primary/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
