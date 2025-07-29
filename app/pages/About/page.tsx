"use client";
import React from 'react';
import { ArrowRight, Mic, Palette, Zap, Clock, Target, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight tracking-tight">
                AI-Powered Rap.
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              VerseAI helps artists write complete rap lyrics in seconds — just drop your first bar, pick your vibe, and let the AI take over.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button onClick={ () => window.location.href = '/pages/verseAi' } className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-xl font-bold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  Start Freestyling
                  <Mic className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
              
              <button onClick={ () => window.location.href = '/pages/tuturial' } className="group px-12 py-5 border-2 border-gray-600 rounded-2xl text-xl font-bold hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-3">
                  See How It Works
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>v
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl rounded-full"></div>
              <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 leading-relaxed font-light max-w-5xl mx-auto">
              We believe every rapper deserves a creative partner — one that{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">never sleeps</span>,{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium">never blocks</span>, and{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-medium">always spits fire</span>.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Three simple steps to transform your ideas into fire verses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  step: "01",
                  title: "Drop Your First Bar",
                  description: "Start with any line, hook, or concept. Our AI understands your creative direction from the first word.",
                  icon: <Mic className="w-12 h-12" />,
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  step: "02", 
                  title: "Pick Your Style",
                  description: "Choose from trap, boom bap, drill, melodic rap, or describe your own unique vibe.",
                  icon: <Palette className="w-12 h-12" />,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  step: "03",
                  title: "Let AI Cook",
                  description: "Watch as VerseAI generates complete verses that match your flow, style, and energy perfectly.",
                  icon: <Zap className="w-12 h-12" />,
                  gradient: "from-cyan-500 to-purple-500"
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className={`text-6xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-4`}>
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Rappers Love VerseAI */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Rappers Love VerseAI
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built by artists, for artists. Here's what makes us different.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Write 10x Faster",
                  description: "Turn hours of writing into minutes. Generate complete verses, hooks, and bridges instantly while maintaining your authentic voice.",
                  icon: <Clock className="w-8 h-8" />,
                  gradient: "from-green-400 to-emerald-500"
                },
                {
                  title: "Custom Style",
                  description: "Every rapper has a unique sound. Our AI learns and adapts to your specific flow, vocabulary, and creative preferences.",
                  icon: <Target className="w-8 h-8" />,
                  gradient: "from-purple-400 to-pink-500"
                },
                {
                  title: "Stay in Control", 
                  description: "You're the artist. Edit, refine, and perfect every line. VerseAI is your creative partner, not your replacement.",
                  icon: <Shield className="w-8 h-8" />,
                  gradient: "from-blue-400 to-cyan-500"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl rounded-full"></div>
              <h2 className="relative text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                Ready to Drop Bars
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Smarter?
                </span>
              </h2>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <button onClick={()=> window.location.href = '/pages/verseAi'}  className="relative px-16 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl text-2xl font-bold shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-purple-500/50">
                <span className="flex items-center gap-4">
                  Start Writing Now
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>

            <p className="mt-8 text-gray-400 text-lg">
              Join thousands of artists already creating with VerseAI
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;