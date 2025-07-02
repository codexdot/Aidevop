
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="hero-content flex flex-col md:flex-row items-center justify-between">
          <div className="hero-text md:w-1/2 mb-12 md:mb-0">
            <div className="animate-on-scroll">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Building the Future with <span className="gradient-text">AI-Powered</span> Mobile Apps
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl">
                Transforming ideas into intelligent mobile experiences that learn, adapt, and evolve with your users.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#projects" className="bg-gradient-to-r from-primary to-secondary text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center">
                  View My Work
                </a>
                <a href="#contact" className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 text-center">
                  Get In Touch
                </a>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-slate-400">Available for projects</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
                  <span className="text-slate-400">Open to collaborations</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-image md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <img src="/profile.jpg" 
                     alt="Developer Portrait" 
                     className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-slate-800 shadow-xl animate-float"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
