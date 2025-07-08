import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';

const workItems = [
  {
    id: 1,
    title: "Bloom Boutique Transformation",
    category: "Retail Marketing",
    description: "Transformed a struggling boutique into the neighborhood's most popular destination",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: "400% increase in foot traffic",
    metrics: {
      before: "12 customers/day",
      after: "48 customers/day",
      timeframe: "6 months"
    }
  },
  {
    id: 2,
    title: "TechGear Pro E-commerce Empire",
    category: "E-commerce",
    description: "Built a multi-million dollar online business from zero to market leader",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: "15K monthly orders in 18 months",
    metrics: {
      before: "0 orders/month",
      after: "15K orders/month",
      timeframe: "18 months"
    }
  },
  {
    id: 3,
    title: "Premium Properties Sales Acceleration",
    category: "Real Estate",
    description: "Revolutionized property marketing to sell luxury homes 75% faster",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: "75% faster sales",
    metrics: {
      before: "120 days average",
      after: "30 days average",
      timeframe: "12 months"
    }
  },
  {
    id: 4,
    title: "Urban Eats Restaurant Revival",
    category: "Restaurant Marketing",
    description: "Turned an empty restaurant into the most booked spot in town",
    image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: "Fully booked every night",
    metrics: {
      before: "30% capacity",
      after: "100% capacity",
      timeframe: "8 months"
    }
  },
  {
    id: 5,
    title: "FitLife Studio Membership Explosion",
    category: "Fitness Marketing",
    description: "Grew a small fitness studio into the area's premier fitness destination",
    image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: "10x membership growth",
    metrics: {
      before: "50 members",
      after: "500 members",
      timeframe: "10 months"
    }
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % workItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + workItems.length) % workItems.length);
  };

  const currentWork = workItems[currentIndex];

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            OUR WORK
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real transformations. Real results. See how we've helped businesses across industries achieve extraordinary growth.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={currentWork.image}
                  alt={currentWork.title}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentWork.category}
                  </span>
                </div>
              </div>
              
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {currentWork.title}
                </h3>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentWork.description}
                </p>
                
                <div className="bg-gray-700/50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-2xl font-bold text-white">{currentWork.results}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Before</div>
                      <div className="text-white font-semibold">{currentWork.metrics.before}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">After</div>
                      <div className="text-white font-semibold">{currentWork.metrics.after}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Timeframe</div>
                      <div className="text-white font-semibold">{currentWork.metrics.timeframe}</div>
                    </div>
                  </div>
                </div>
                
                <button className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300">
                  <span className="font-medium">View Full Case Study</span>
                  <ExternalLink className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workItems.map((work, index) => (
            <div
              key={work.id}
              className={`group cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 transition-all duration-300">
                <div className="relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {work.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {work.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">{work.description}</p>
                  <div className="text-white font-semibold text-sm">{work.results}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;