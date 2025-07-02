
const Experience = () => {
  const experiences = [
    {
      title: "Lead AI Engineer",
      company: "TechForward Inc.",
      period: "2021-Present",
      color: "secondary",
      description: "Leading a team of 8 engineers in developing cutting-edge AI solutions for mobile platforms, focusing on computer vision and NLP applications."
    },
    {
      title: "Senior Mobile Developer",
      company: "Digital Solutions Co.",
      period: "2018-2021",
      color: "secondary",
      description: "Developed cross-platform mobile applications with integrated ML features, implemented CI/CD pipelines, and mentored junior developers."
    },
    {
      title: "Mobile Developer",
      company: "StartUp Ventures",
      period: "2015-2018",
      color: "primary",
      description: "Built native iOS and Android applications, integrated third-party APIs, and implemented basic ML models for user behavior analysis."
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="gradient-text">Experience</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My journey in mobile development and AI, from startup environments to leading enterprise solutions.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item relative pl-8">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{exp.title}</h4>
                    <span className={`text-sm bg-${exp.color}/10 text-${exp.color} px-2 py-1 rounded-full`}>{exp.period}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
