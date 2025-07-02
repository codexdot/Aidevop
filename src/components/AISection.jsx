
const AISection = () => {
  return (
    <section id="ai" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-800/30 rounded-3xl my-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & <span className="gradient-text">Machine Learning</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          My research and implementations in artificial intelligence, from computer vision to natural language processing.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Research & Models</h3>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-800">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className="fas fa-brain text-primary text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Neural Health Predictor</h4>
                  <p className="text-slate-400 mb-4">
                    Deep learning model for early detection of health anomalies using wearable device data.
                  </p>
                  <div className="flex space-x-2">
                    <span className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">PyTorch</span>
                    <span className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">LSTM</span>
                    <span className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">Core ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6">Open Source Contributions</h3>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-800">
              <div className="flex items-center mb-4">
                <img src="https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black-2.png" className="w-10 h-10 mr-4 rounded-full bg-white p-1" alt="OpenCV"/>
                <div>
                  <h4 className="font-bold">OpenCV Android</h4>
                  <p className="text-slate-400 text-sm">GitHub · 2.1k stars</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Added GPU acceleration support for real-time image segmentation models.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">Java</span>
                  <span className="text-xs bg-slate-700 text-primary px-2 py-1 rounded">NDK</span>
                </div>
                <a href="#" className="text-primary text-sm font-medium">View Issue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection
