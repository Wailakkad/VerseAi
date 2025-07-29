"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  PenTool, 
  Palette, 
  Volume2, 
  Sparkles, 
  Download, 
  Copy, 
  Share2, 
  ArrowRight,
  Music,
  Type,
  Sliders,
  Play
} from 'lucide-react';



const TutorialPage = () => {
const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const tutorialSteps = [
    {
      id: 1,
      title: "Enter Your Lyrics",
      subtitle: "Start with inspiration",
      description: "Type a single line or phrase that captures your song's essence. This will be the foundation for your AI-generated lyrics.",
      icon: <PenTool className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      example: "Example: \"Walking through the city lights tonight\"",
      mockup: (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Input Line</div>
          <div className="bg-white/10 rounded-lg p-3 text-white font-mono text-sm">
            Walking through the city lights tonight
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Choose Your Style",
      subtitle: "Define the genre",
      description: "Select from various music styles like Pop, Rock, Hip-Hop, Country, or Jazz to match your creative vision.",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      example: "Available: Pop, Rock, Hip-Hop, R&B, Country, Jazz, Electronic",
      mockup: (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Music Style</div>
          <div className="grid grid-cols-2 gap-2">
            {['Pop', 'Rock', 'Hip-Hop', 'R&B'].map((style, i) => (
              <div 
                key={style}
                className={`p-2 rounded-lg text-center text-sm transition-all ${
                  i === 1 ? 'bg-purple-500/20 border border-purple-400/30 text-purple-300' : 'bg-white/5 text-slate-400'
                }`}
              >
                {style}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Set the Tone",
      subtitle: "Emotional direction",
      description: "Pick the emotional tone for your lyrics: Upbeat, Melancholic, Romantic, Energetic, or Contemplative.",
      icon: <Volume2 className="w-6 h-6" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
      example: "Tones: Upbeat, Melancholic, Romantic, Energetic, Contemplative",
      mockup: (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Emotional Tone</div>
          <div className="flex flex-wrap gap-2">
            {['Upbeat', 'Romantic', 'Energetic'].map((tone, i) => (
              <div 
                key={tone}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  i === 0 ? 'bg-emerald-500/20 border border-emerald-400/30 text-emerald-300' : 'bg-white/5 text-slate-400'
                }`}
              >
                {tone}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Generate & Export",
      subtitle: "Create and share",
      description: "Click generate to create 8-12 complete lyric lines. Then copy, download as .txt, or share for feedback.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      example: "Output: 8-12 AI-generated lyric lines ready to use",
      mockup: (
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
          <div className="text-xs text-slate-400 uppercase tracking-wide font-medium">Generated Lyrics</div>
          <div className="bg-black/20 rounded-lg p-3 space-y-1 text-sm">
            <div className="text-white opacity-90">Walking through the city lights tonight</div>
            <div className="text-white opacity-90">Neon dreams are calling out my name</div>
            <div className="text-white opacity-90">Every street corner tells a story</div>
            <div className="text-slate-400">+ 5 more lines...</div>
          </div>
          <div className="flex gap-2 pt-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded-lg text-xs">
              <Copy className="w-3 h-3" /> Copy
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-300 rounded-lg text-xs">
              <Download className="w-3 h-3" /> Download
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-xs">
              <Share2 className="w-3 h-3" /> Share
            </button>
          </div>
        </div>
      )
    }
  ];

  interface TutorialStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  example: string;
  mockup: React.ReactNode;
}

interface StepCardProps {
  step: TutorialStep;
  index: number;
  isActive: boolean;
}

const StepCard = ({ step, index, isActive }: StepCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { once: true });  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group cursor-pointer"
      onClick={() => setActiveStep(activeStep === index ? null : index)}
    >
      <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${
        isActive 
          ? 'bg-white/[0.02] border-white/20 shadow-2xl' 
          : 'bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
      }`}>
        
        {/* Step indicator */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div 
            className={`flex items-center justify-center w-12 h-12 rounded-xl ${step.color} transition-all duration-300`}
            animate={{ 
              scale: isActive ? 1.05 : 1,
              boxShadow: isActive ? "0 8px 32px rgba(255,255,255,0.1)" : "0 4px 16px rgba(0,0,0,0.1)"
            }}
          >
            <motion.div
              animate={{ rotate: isActive ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white"
            >
              {step.icon}
            </motion.div>
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-slate-500 font-medium">STEP {step.id}</span>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{step.title}</h3>
            <p className="text-sm text-slate-400 font-medium">{step.subtitle}</p>
          </div>
          
          {/* Expand/Collapse indicator */}
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-slate-500 group-hover:text-slate-300 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </div>

        {/* Content - Only show when step is active */}
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 mb-6 pt-2">
              <p className="text-slate-300 leading-relaxed">{step.description}</p>
              <div className="text-sm text-slate-400 bg-white/5 rounded-lg p-3 border-l-2 border-slate-600">
                {step.example}
              </div>
            </div>

            {/* Interactive mockup */}
            <div className="pb-4">
              {step.mockup}
            </div>
            
            {/* Back to all steps button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveStep(null);
                }}
                className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to all steps
              </button>
            </div>
          </motion.div>
        )}

        {/* Active indicator */}
        {isActive && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          />
        )}
      </div>
    </motion.div>
  );
};

  const ProgressBar = () => (
    <div className="flex items-center justify-center gap-3 mb-16">
      {tutorialSteps.map((_, index) => (
        <motion.div
          key={index}
          className="flex items-center"
        >
          <motion.button
            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-sm font-semibold ${
              index === activeStep
                ? 'border-blue-400 bg-blue-400 text-white'
                : 'border-slate-600 text-slate-400 hover:border-slate-500'
            }`}
            onClick={() => setActiveStep(activeStep === index ? null : index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {index + 1}
          </motion.button>
          
          {index < tutorialSteps.length - 1 && (
            <motion.div
              className={`w-12 h-px mx-2 transition-colors duration-500 bg-slate-700`}
              initial={{ scaleX: 0.3 }}
              animate={{ scaleX: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-slate-900/20" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Music className="w-4 h-4" />
            AI Lyrics Generator
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Create Amazing
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Song Lyrics
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Transform your creative ideas into complete song lyrics with our AI-powered generator. 
            Follow these simple steps to create your masterpiece.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <ProgressBar />

        {/* Tutorial Steps */}
        <div className="mb-16">
          {activeStep !== null ? (
            // Show only the active step card with details
            <StepCard 
              key={tutorialSteps[activeStep].id} 
              step={tutorialSteps[activeStep]} 
              index={activeStep} 
              isActive={true}
            />
          ) : (
            // Show all step cards collapsed (headers only)
            <div className="space-y-6">
              {tutorialSteps.map((step, index) => (
                <StepCard 
                  key={step.id} 
                  step={step} 
                  index={index} 
                  isActive={false}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-3">Ready to Create?</h3>
            <p className="text-slate-400 mb-6">Start generating professional lyrics in seconds</p>
            
             <motion.button onClick={()=> window.location.href = '/pages/verseAi'}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold text-lg shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              Start Generating Lyrics
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TutorialPage;