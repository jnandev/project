import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Palette, Users, TrendingUp, Eye, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const BrandDevelopmentPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Brand design workspace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Brand Development</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Brands That
                <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  People Love
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create powerful brand identities that resonate with your audience and drive emotional connections. 
                From logo design to brand strategy, we build brands that stand out and sell.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Build My Brand
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Brand Portfolio
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Brand Impact Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Brand Recognition Increase</span>
                    <span className="text-3xl font-bold text-pink-400">400%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Customer Loyalty</span>
                    <span className="text-3xl font-bold text-purple-400">89%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Premium Pricing Power</span>
                    <span className="text-3xl font-bold text-pink-400">35%</span>
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
              Why Most Brands Are Forgettable
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In a world of endless choices, generic brands get lost in the noise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Visual Identity</h3>
              <p className="text-gray-300">Generic logos and inconsistent design that fails to make an impression</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Emotional Connection</h3>
              <p className="text-gray-300">Brands that don't resonate with customers on a deeper level</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Unclear Positioning</h3>
              <p className="text-gray-300">Confused messaging that doesn't clearly communicate value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Brand Identity Blueprint
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive brand building strategy that creates memorable identities and emotional connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Brand design process"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Discovery</h3>
                  <p className="text-gray-300">Deep dive into your values, mission, and target audience to define your brand essence</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visual Identity Design</h3>
                  <p className="text-gray-300">Create stunning logos, color palettes, and visual elements that capture your brand's personality</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Guidelines</h3>
                  <p className="text-gray-300">Comprehensive style guides that ensure consistent brand application across all touchpoints</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Positioning</h3>
                  <p className="text-gray-300">Strategic positioning that differentiates you from competitors and resonates with your audience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Brand Launch</h3>
                  <p className="text-gray-300">Strategic rollout plan to introduce your new brand identity to the world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Brand Development
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build a powerful brand that stands out and drives results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Palette className="w-8 h-8" />, title: "Logo Design", desc: "Memorable logos that capture your essence" },
              { icon: <Eye className="w-8 h-8" />, title: "Visual Identity", desc: "Cohesive design systems across all platforms" },
              { icon: <Target className="w-8 h-8" />, title: "Brand Strategy", desc: "Clear positioning and messaging framework" },
              { icon: <Users className="w-8 h-8" />, title: "Audience Research", desc: "Deep insights into your target customers" },
              { icon: <Heart className="w-8 h-8" />, title: "Brand Voice", desc: "Authentic tone that resonates with your audience" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Brand Guidelines", desc: "Comprehensive style guides for consistency" }
            ].map((service, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-pink-400 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Transformations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Brand Transformations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how powerful branding has transformed businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">400%</div>
              <div className="text-gray-300 mb-4">Brand Recognition</div>
              <p className="text-sm text-gray-400">"Customers now instantly recognize our brand everywhere"</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">250%</div>
              <div className="text-gray-300 mb-4">Customer Engagement</div>
              <p className="text-sm text-gray-400">"Our social media engagement skyrocketed after the rebrand"</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-indigo-400">35%</div>
              <div className="text-gray-300 mb-4">Premium Pricing</div>
              <p className="text-sm text-gray-400">"We can now charge premium prices for our services"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build a Memorable Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free brand audit and discover how to create a brand identity that drives customer loyalty and premium pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Brand Audit
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Brand Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDevelopmentPage;