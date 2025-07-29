"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function BarsGeniusApp() {

  const [userLine, setUserLine] = useState('')
  const [tone, setTone] = useState('confident')
  const [style, setStyle] = useState('drill')
  const [originalLyrics, setOriginalLyrics] = useState('')
  const [generatedLyrics, setGeneratedLyrics] = useState('')
  const [completeLyrics, setCompleteLyrics] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')
  const [showSeparated, setShowSeparated] = useState(false)

  const toneOptions = ['confident', 'aggressive', 'chill', 'emotional', 'playful']
  const styleOptions = ['drill', 'trap', 'boom-bap', 'melodic', 'old-school']

  const handleGenerate = async () => {
    if (!userLine.trim()) {
      setError('Please enter some lyrics first')
      return
    }

    setIsGenerating(true)
    setShowSuccess(false)
    setOriginalLyrics('')
    setGeneratedLyrics('')
    setCompleteLyrics('')
    setError('')

    try {
      console.log('Sending request with:', { lyrics: userLine, tone, style })

      const res = await fetch('/api/generate-rap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lyrics: userLine.trim(),
          tone,
          style
        })
      })

      console.log('Response status:', res.status)

      let data
      try {
        data = await res.json()
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', jsonError)
        throw new Error('Server returned invalid response')
      }

      console.log("API response:", data)

      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}: ${res.statusText}`)
      }

      if (!data.success) {
        throw new Error(data.error || 'Failed to generate lyrics')
      }

      // Set the response data
      setOriginalLyrics(data.originalLyrics)
      setGeneratedLyrics(data.generatedLyrics)
      setCompleteLyrics(data.completeLyrics)
      setShowSuccess(true)
      
    } catch (err) {
      console.error('Failed to generate lyrics:', err)
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
      setError(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

 const handleCopy = async () => {
  if (!completeLyrics) return
  try {
    await navigator.clipboard.writeText(completeLyrics)
    // Show copy success feedback
    const button = document.querySelector('.copy-btn')
    if (!button) return // <-- Add this null check
    const originalText = button.textContent
    button.textContent = 'COPIED ✓'
    button.classList.add('bg-green-500')
    setTimeout(() => {
      button.textContent = originalText
      button.classList.remove('bg-green-500')
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

  const handleTryAgain = () => {
    setUserLine('')
    setOriginalLyrics('')
    setGeneratedLyrics('')
    setCompleteLyrics('')
    setShowSuccess(false)
    setError('')
    setShowSeparated(false)
  }

  const toggleView = () => {
    setShowSeparated(!showSeparated)
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute h-[1200px] inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg2.png')"
        }}
      />
      
      {/* Gradient overlays for corners */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-400/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <h1 className="text-white text-3xl font-bold">Barsgenius</h1>
          <Link href="/pages/tuturial" >
           
          <button className="px-6 py-2 bg-green-500 hover:bg-green-400 text-white rounded-full font-medium transition-all duration-200 shadow-lg shadow-green-500/25">
            Tutorial
          </button>
          </Link>
        </header>

        {/* Error message */}
        {error && (
          <div className="mx-8 mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 animate-fade-in">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <div>
                <strong>Error:</strong> {error}
              </div>
            </div>
          </div>
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 pb-16">
          {/* Two cards container */}
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left card - Input */}
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold mb-2">Split your first bar</h2>
              <p className="text-gray-400 text-lg mb-8">to unlock fire.</p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <textarea
                  value={userLine}
                  onChange={(e) => setUserLine(e.target.value)}
                  placeholder="Your verse to lyrics..."
                  className="w-full h-32 bg-transparent text-white placeholder-gray-500 resize-none outline-none text-lg leading-relaxed"
                />
              </div>

              {/* Tone selection */}
              <div className="mt-6 mb-4">
                <label className="block text-white font-medium mb-3">Tone</label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {toneOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setTone(option)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
                        tone === option
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style selection */}
              <div>
                <label className="block text-white font-medium mb-3">Style</label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {styleOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setStyle(option)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-200 capitalize ${
                        style === option
                          ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right card - Output */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                <h2 className="text-white text-4xl font-bold">AI output</h2>
                {completeLyrics && (
                  <button
                    onClick={toggleView}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-600/50 transition-all duration-200"
                  >
                    {showSeparated ? 'Combined' : 'Separated'}
                  </button>
                )}
              </div>
              <p className="text-gray-400 text-lg mb-8">generate lyrics.</p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 mb-6 relative">
                {isGenerating && (
                  <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <div className="text-white font-medium">Generating your fire bars...</div>
                      <div className="text-gray-400 text-sm mt-1">This may take a few seconds</div>
                    </div>
                  </div>
                )}
                
                {!showSeparated || !completeLyrics ? (
                  // Combined view
                  <textarea
                    value={completeLyrics || (isGenerating ? '' : '')}
                    readOnly
                    placeholder="AI Output will appear here..."
                    className="w-full h-48 bg-transparent text-white placeholder-gray-500 resize-none outline-none text-lg leading-relaxed"
                  />
                ) : (
                  // Separated view
                  <div className="text-left space-y-4">
                    <div>
                      <div className="text-sm text-purple-400 font-medium mb-2">YOUR LYRICS:</div>
                      <div className="text-white text-lg leading-relaxed p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                        {originalLyrics}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-green-400 font-medium mb-2">AI CONTINUATION:</div>
                      <div className="text-white text-lg leading-relaxed p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                        {generatedLyrics}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={handleCopy}
                  className="copy-btn px-6 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!completeLyrics || isGenerating}
                >
                  COPY
                </button>
                <button 
                  className="px-6 py-2 bg-gray-800/50 text-white rounded-full font-medium hover:bg-gray-700/50 transition-all duration-200 border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!completeLyrics || isGenerating}
                >
                  Download
                </button>
                <button 
                  className="px-6 py-2 bg-gray-800/50 text-white rounded-full font-medium hover:bg-gray-700/50 transition-all duration-200 border border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!completeLyrics || isGenerating}
                >
                  Share
                </button>
              </div>

              {/* Stats */}
              {completeLyrics && (
                <div className="mt-4 flex justify-center gap-6 text-sm text-gray-400">
                  <div>
                    <span className="text-purple-400 font-medium">Your lines:</span> {originalLyrics.split('\n').length}
                  </div>
                  <div>
                    <span className="text-green-400 font-medium">AI lines:</span> {generatedLyrics.split('\n').filter(line => line.trim()).length}
                  </div>
                  <div>
                    <span className="text-blue-400 font-medium">Total:</span> {completeLyrics.split('\n').filter(line => line.trim()).length} lines
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            disabled={!userLine.trim() || isGenerating}
            className="px-12 py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white text-xl font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isGenerating ? (
              <div className="flex items-center gap-3">
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                Generating...
              </div>
            ) : 'Generate'}
          </button>

          {/* Success message */}
          {showSuccess && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="text-2xl mb-4">🔥 Bars unlocked!</div>
              <div className="flex gap-4 justify-center items-center">
                <button
                  onClick={handleTryAgain}
                  className="text-green-400 hover:text-green-300 font-medium transition-colors duration-200"
                >
                  Try another one?
                </button>
                <span className="text-gray-500">•</span>
                <div className="text-gray-400 text-sm">
                  Style: <span className="text-green-400 capitalize">{style}</span> • 
                  Tone: <span className="text-purple-400 capitalize">{tone}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  )
}