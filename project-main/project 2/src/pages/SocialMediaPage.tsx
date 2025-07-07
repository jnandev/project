import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Users, Heart, MessageCircle, Share, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

const SocialMediaPage = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white pt-20">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Social media content creation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="w-8 h-8 text-white" />
                <span className="text-sm uppercase tracking-wider text-gray-300">Social Media Management</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Build Communities That
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Drive Sales
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your social media from a time sink into a profit center. 
                We create engaging content and build communities that convert followers into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Grow My Following
                </button>
                <Link 
                  to="/"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
                >
                  View Social Success
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Social Media Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Follower Growth Rate</span>
                    <span className="text-3xl font-bold text-cyan-400">450%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Engagement Rate</span>
                    <span className="text-3xl font-bold text-purple-400">8.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Social Commerce Revenue</span>
                    <span className="text-3xl font-bold text-cyan-400">$125K</span>
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
              Why Social Media Fails Most Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Posting without strategy is like shouting into the void
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No Engagement</h3>
              <p className="text-gray-300">Posts that get ignored because they don't resonate with your audience</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Wrong Audience</h3>
              <p className="text-gray-300">Attracting followers who will never become customers</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">No ROI</h3>
              <p className="text-gray-300">Time and money spent on social media with no measurable business results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Social Commerce Engine
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic framework that builds communities, drives engagement, and converts followers into customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img 
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Social media strategy session"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Audience Research</h3>
                  <p className="text-gray-300">Deep dive into your ideal customers' social media behaviors and preferences</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
                  <p className="text-gray-300">Engaging content that educates, entertains, and drives action</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Building</h3>
                  <p className="text-gray-300">Foster genuine connections and build a loyal community around your brand</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Influencer Partnerships</h3>
                  <p className="text-gray-300">Strategic collaborations that expand your reach and credibility</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Social Commerce</h3>
                  <p className="text-gray-300">Turn social media interactions into direct sales and revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Dominate */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platforms We Dominate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert management across all major social media platforms for maximum reach and engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Heart className="w-8 h-8" />, title: "Instagram", desc: "Visual storytelling that drives engagement" },
              { icon: <Users className="w-8 h-8" />, title: "Facebook", desc: "Community building and targeted advertising" },
              { icon: <MessageCircle className="w-8 h-8" />, title: "TikTok", desc: "Viral content for younger demographics" },
              { icon: <Share className="w-8 h-8" />, title: "LinkedIn", desc: "Professional networking and B2B content" },
              { icon: <Smartphone className="w-8 h-8" />, title: "YouTube", desc: "Long-form content and video marketing" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Twitter/X", desc: "Real-time engagement and thought leadership" }
            ].map((platform, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300">
                <div className="text-cyan-400 mb-4">{platform.icon}</div>
                <h3 className="text-lg font-bold mb-2">{platform.title}</h3>
                <p className="text-gray-300 text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Social Media Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how strategic social media management has transformed businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-cyan-400">2.5M</div>
              <div className="text-gray-300 mb-4">Followers Gained</div>
              <p className="text-sm text-gray-400">"From 10K to 2.5M followers in 18 months"</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-purple-400">850%</div>
              <div className="text-gray-300 mb-4">Engagement Increase</div>
              <p className="text-sm text-gray-400">"Engagement rates that outperform industry standards"</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-500/30 rounded-3xl p-8 text-center">
              <div className="text-4xl font-black mb-2 text-pink-400">$500K</div>
              <div className="text-gray-300 mb-4">Social Commerce Revenue</div>
              <p className="text-sm text-gray-400">"Direct sales generated through social media"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Social Empire?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free social media audit and discover how to turn your followers into customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Social Audit
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              View Our Content
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;