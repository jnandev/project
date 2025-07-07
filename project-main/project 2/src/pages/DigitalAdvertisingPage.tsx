import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, BarChart, DollarSign, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DigitalAdvertisingPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Digital advertising dashboard"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Digital Advertising</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Turn Ad Spend Into
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Profit Machines
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stop wasting money on ads that don't work. Our data-driven advertising campaigns 
                deliver measurable results and maximum ROI across all digital platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Scale My Ads
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Ad Results
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Advertising Performance</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average ROAS</span>
                    <span className="text-3xl font-bold text-green-400">8.5x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Per Acquisition</span>
                    <span className="text-3xl font-bold text-blue-400">-65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Conversion Rate</span>
                    <span className="text-3xl font-bold text-green-400">12.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Most Ad Campaigns Fail
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Throwing money at ads without strategy is like burning cash
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor Targeting</h3>
              <p className="text-gray-300">Showing ads to the wrong people at the wrong time with the wrong message</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <BarChart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Optimization</h3>
              <p className="text-gray-300">Set-and-forget campaigns that waste budget on underperforming ads</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Poor ROI</h3>
              <p className="text-gray-300">Spending more on ads than you're making in sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Performance Marketing System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our data-driven approach that turns advertising spend into predictable profit
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Digital advertising analytics"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audience Research</h3>
                  <p className="text-gray-300">Deep analysis to identify your highest-value customers and their behaviors</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Campaign Strategy</h3>
                  <p className="text-gray-300">Multi-platform approach that reaches customers at every stage of their journey</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Creative Development</h3>
                  <p className="text-gray-300">High-converting ad creatives that stop the scroll and drive action</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                  <p className="text-gray-300">Daily monitoring and optimization to maximize performance and ROI</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Reporting</h3>
                  <p className="text-gray-300">Transparent reporting that shows exactly how your ad spend drives revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Master */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platforms We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert management across all major advertising platforms for maximum reach and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Google Ads", desc: "Search, Display, Shopping, and YouTube campaigns" },
              { icon: <Users className="w-8 h-8" />, title: "Facebook & Instagram", desc: "Social media advertising that converts" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "LinkedIn Ads", desc: "B2B targeting for professional audiences" },
              { icon: <Zap className="w-8 h-8" />, title: "TikTok Ads", desc: "Reach younger demographics with viral content" },
              { icon: <BarChart className="w-8 h-8" />, title: "Amazon Advertising", desc: "Dominate e-commerce search results" },
              { icon: <DollarSign className="w-8 h-8" />, title: "Retargeting", desc: "Re-engage visitors across all platforms" }
            ].map((platform, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-green-400 mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold mb-2">{platform.title}</h3>
                <p className="text-gray-300 text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results, Real ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our advertising campaigns have transformed businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-green-400">12.5x</div>
              <div className="text-gray-300 mb-4">Return on Ad Spend</div>
              <p className="text-sm text-gray-400">"Every $1 spent returns $12.50 in revenue"</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-blue-400">-78%</div>
              <div className="text-gray-300 mb-4">Cost Per Customer</div>
              <p className="text-sm text-gray-400">"Reduced customer acquisition costs by 78%"</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">500%</div>
              <div className="text-gray-300 mb-4">Revenue Growth</div>
              <p className="text-sm text-gray-400">"5x revenue growth in just 6 months"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Advertising?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free advertising audit and discover how to turn your ad spend into predictable profit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Ad Audit
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalAdvertisingPage;