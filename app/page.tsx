"use client"

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView , Variants } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const BarsGeniusLanding: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [customTopic, setCustomTopic] = useState('');

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Custom hook for scroll animations
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const styleAnimation = useScrollAnimation();
  const howItWorksAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#000108] text-white overflow-hidden">
      {/* Navigation */}
    <motion.nav 
        className={`absolute top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-[#0b0b0f]/90 backdrop-blur-lg border-b border-purple-500/20' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-9xl mx-auto px-12 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center justify-center gap-1 text-2xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            <img src="/favicon.png" alt="Logo" className="w-28 h-28" />
            Barsgenius
          </motion.div>
          
   <div className="hidden md:flex space-x-30">
  {[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/pages/About' },
    { label: 'F&Q', href: '/pages/FAQ' }
  ].map((item) => (
    <motion.div key={item.label} whileHover={{ scale: 1.05 }}>
      <Link
        href={item.href}
        className="text-gray-300 hover:text-white transition-colors relative group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </motion.div>
  ))}
</div>
          
          <Link href="/pages/verseAi">
              <motion.button
            className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start for Free
          </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[1500px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Replace /public/hero-bg.jpg with your image */}
        <div className="absolute inset-0 bg-cover bg-center  bg-no-repeat" style={{backgroundImage: 'url(/hero-bg.png)'}}>
          <div className="absolute inset-0 "></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <motion.div 
          ref={heroAnimation.ref}
          initial="hidden"
          animate={heroAnimation.controls}
          variants={staggerContainer}
          className="relative z-10 text-center max-w-6xl mx-auto px-6 mb-140"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-9xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'monospace' }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
              Unleash your
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              bars with AI
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Let AI finish your verse in your voice
          </motion.p>
          <Link href="/pages/verseAi">
          <motion.button
            variants={fadeInUp}
            className="bg-gradient-to-r from-green-400 to-purple-500 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 mb-16"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Spitting →
          </motion.button>
          </Link>

       
        </motion.div>
      </section>

    {/* Features Section */}
<motion.section
  ref={featuresAnimation.ref}
  initial="hidden"
  animate={featuresAnimation.controls}
  variants={staggerContainer}
  className="py-20 px-6"
>
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { 
          title: "AI Verse Generator", 
          desc: "Stuck on a line? Just drop 1 or 2 bars and let our AI rap engine generate a full verse in your style. Fast, fire, and original.",
          icon: "/star-icon-1.png",
          iconPosition: "bottom-left"
        },
        { 
          title: "AI Verse Generator", 
          desc: "Stuck on a line? Just drop 1 or 2 bars and let our AI rap engine generate a full verse in your style. Fast, fire, and original.",
          icon: "/star-icon-2.png",
          iconPosition: "top-center"
        },
        { 
          title: "AI Verse Generator", 
          desc: "Stuck on a line? Just drop 1 or 2 bars and let our AI rap engine generate a full verse in your style. Fast, fire, and original.",
          icon: "/star-icon-3.png",
          iconPosition: "bottom-right"
        }
      ].map((feature, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="relative bg-black/40 backdrop-blur-sm p-14 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
          whileHover={{
            y: -10,
            boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)"
          }}
        >
          {/* Blurred gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 blur-xl"></div>
          
          {/* Star icon with glow effect */}
          <div className={`absolute w-12 h-12 ${
            feature.iconPosition === "bottom-left" ? "bottom-4 left-3" :
            feature.iconPosition === "top-center" ? "top-6 right-2 transform -translate-x-1/2" :
            "bottom-6 right-6"
          }`}>
            {/* Glow effect behind icon */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-lg blur-md"></div>
            
            {/* Star icon */}
            <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
              <img 
                src={feature.icon} 
                alt="Star icon" 
                className="w-full h-full object-contain filter drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed opacity-90">
              {feature.desc}
            </p>
          </div>
          
          {/* Additional subtle glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-3xl"></div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* Rap Style Section */}
       <motion.section 
        ref={styleAnimation.ref}
        initial="hidden"
        animate={styleAnimation.controls}
        variants={fadeInUp}
        className="py-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 "></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInScale}
              className="relative"
            >
              {/* Replace with rapper-illustration.png from /public folder */}
              <div className="w-full h-[800px] rounded-2xl overflow-hidden border border-purple-500/30 relative">
                <img 
                  src="/RapStyle.jpg" 
                  alt="Rapper Illustration" 
                  className="w-full h-[800px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-green-600/10"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🎵</div>
                <h2 className="text-4xl md:text-5xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
                    Choose Your Rap Style
                  </span>
                </h2>
              </div>
              <h3 className="text-2xl text-gray-300 mb-6">From Drill to Old School</h3>
              
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Unlock the power of AI to generate bars that match your unique style. 
                Whether you're spitting hard-hitting drill verses or old-school lyrical flow, 
                our AI understands different rap genres and will craft verses that sound 
                authentically you. Perfect for rappers at any level looking to break through 
                creative blocks and elevate their art.
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Pick Your Style & Start Creating
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      
      {/* How It Works Section */}
      <motion.section 
        ref={howItWorksAnimation.ref}
        initial="hidden"
        animate={howItWorksAnimation.controls}
        variants={staggerContainer}
        className="py-20 px-6 relative overflow-hidden"
      >
        {/* Headphones decorations */}
        <motion.div 
          className="absolute left-0 top-1/4 transform -translate-y-1/2 -translate-x-1/4"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Replace with headphones-left.png from /public folder */}
          <img 
            src="/headphones-left.png" 
            alt="Headphones Left" 
            className="w-96 h-96 object-contain transform scale-x-[-1]"
          />
        </motion.div>
        
        <motion.div 
          className="absolute right-0 top-1/4 transform -translate-y-1/2 translate-x-1/4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Replace with headphones-right.png from /public folder */}
          <img 
            src="/headphones-right.png" 
            alt="Headphones Right" 
            className="w-96 h-96 object-contain"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How it Works
            </span>
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold mt-10 mb-16"
          >
            Steps
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
  {[
    { 
      number: "1", 
      title: "Write your Line", 
      desc: "Start with a line or hook that represents your style and the message you want to convey.",
      icon: "✏️",
      gradient: "from-purple-500 to-pink-500",
      numberColor: "text-purple-400"
    },
    { 
      number: "2", 
      title: "Choose a Tone", 
      desc: "Select the vibe - whether it's aggressive drill, smooth old school, or melodic trap. Our AI adapts.",
      icon: "🎹",
      gradient: "from-green-500 to-blue-500",
      numberColor: "text-green-400"
    },
    { 
      number: "3", 
      title: "Generate & Spit", 
      desc: "Watch as AI crafts the perfect continuation of your verse, maintaining your flow and amplifying your message.",
      icon: "💿",
      gradient: "from-pink-500 to-red-500",
      numberColor: "text-pink-400"
    }
  ].map((step, index) => (
    <motion.div
      key={index}
      variants={fadeInScale}
      className="relative group"
    >
      {/* Number positioned above the card */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className={`text-6xl font-black ${step.numberColor} drop-shadow-lg`}>
          {step.number}
        </div>
      </div>
      
      <motion.div
        className="relative h-[600px] bg-gradient-to-br from-gray-800/80 to-gray-900/80 pt-50 pb-8 px-8 rounded-2xl backdrop-blur-sm transition-all duration-300"
        style={{
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px ${
            step.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.2)' : 
            step.gradient.includes('green') ? 'rgba(16, 185, 129, 0.2)' : 
            'rgba(236, 72, 153, 0.2)'
          }`
        }}
        whileHover={{ 
          y: -10,
          scale: 1.02,
          boxShadow: `0 16px 48px rgba(0, 0, 0, 0.4), 0 0 0 1px ${
            step.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.4)' : 
            step.gradient.includes('green') ? 'rgba(16, 185, 129, 0.4)' : 
            'rgba(236, 72, 153, 0.4)'
          }`
        }}
      >
        {/* Card border glow effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.gradient} opacity-20 blur-sm`}></div>
        
        <div className="relative z-10">
          <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl mb-6 flex items-center justify-center text-3xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            {step.icon}
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
          <p className="text-gray-400 leading-relaxed">{step.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  ))}
</div>


          <motion.button
            variants={fadeInUp}
            className="mt-16 bg-gradient-to-r from-green-400 to-purple-500 px-12 py-4 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Spitting →
          </motion.button>
        </div>
      </motion.section>

      {/* Footer space */}
      <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
      className="bg-gradient-to-b from-black to-gray-900 border-t border-purple-500/20 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="" className='w-22 h-22' />
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              BarsGenius
            </h3>
          </div>

          {/* Simple Navigation */}
          <div className="flex items-center gap-8 text-sm">
            <a href="/pages/About" className="text-gray-400 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Fedbaak
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
          </div>

          {/* MVP Status */}
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400">MVP Live</span>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BarsGenius. AI-powered rap verse generation. Made for the culture.
          </p>
        </div>
      </div>
    </motion.footer>
    </div>
  );
};

export default BarsGeniusLanding;