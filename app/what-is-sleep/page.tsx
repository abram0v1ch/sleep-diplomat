'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Moon, Sun, Activity, Clock, Trophy, Scale, AlertCircle, Heart, Shield, Cloud } from 'lucide-react'

export default function WhatIsSleepPage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-semibold text-gray-100">Sleep Diplomat</a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-[#67B8FF] hover:text-[#89CDFF] transition-colors">What is Sleep?</a>
              <a href="/sleep-deprivation-effects" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">Effects of Sleep Deprivation</a>
              <a href="/calculator" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">Sleep Deprivation Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="stars absolute inset-0 opacity-50"></div>
            <div className="crescent-moon absolute top-10 right-20"></div>
          </div>
          <div className="text-center z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Understanding Sleep
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Sleep is a natural, periodic state of rest for the mind and body, characterized by altered consciousness, 
              reduced sensory activity, and decreased voluntary muscle movement. It's an essential biological process 
              that is crucial for your mental and physical well-being.
            </p>
          </div>
        </section>

        <section className="py-24 bg-[#112240]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              The Stages of Sleep: A Journey Through the Night
            </h2>
            <p className="text-xl mb-12 text-center text-gray-200">
              During sleep, the body cycles through different stages, each playing a vital role in restoring physical and mental health.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Moon className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Light & Moderate Sleep (Stages 1 & 2)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-200">
                    <strong className="text-white">Stage 1:</strong> The transition phase between wakefulness and sleep. You can easily be awakened.
                  </p>
                  <p className="text-gray-200">
                    <strong className="text-white">Stage 2:</strong> Body temperature drops, heart rate slows, preparing for deep sleep.
                  </p>
                </CardContent>
              </Card>

              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Activity className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Deep Sleep & REM (Stages 3, 4 & REM)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-200">
                    <strong className="text-white">Stages 3 & 4:</strong> Crucial for physical restoration. Growth hormones are released, muscles repair.
                  </p>
                  <p className="text-gray-200">
                    <strong className="text-white">REM Sleep:</strong> Essential for learning and emotional health, characterized by vivid dreaming.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a192f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              The Benefits of Sleep for Body and Mind
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Brain className="w-5 h-5 mr-2 text-[#67B8FF]" />
                    Cognitive Function
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">Sleep enhances learning, problem-solving skills, and decision-making abilities.</p>
                </CardContent>
              </Card>
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Activity className="w-5 h-5 mr-2 text-[#67B8FF]" />
                    Physical Restoration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">During sleep, your body repairs tissues, synthesizes proteins, and releases growth hormones.</p>
                </CardContent>
              </Card>
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Sun className="w-5 h-5 mr-2 text-[#67B8FF]" />
                    Emotional Regulation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">Sleep helps process emotional information and maintain mood stability.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#112240]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Understanding Your Sleep Cycle
            </h2>
            
            <Card className="night-card mb-12">
              <CardContent className="p-8">
                {/* Introduction */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                    The Architecture of Sleep
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Your sleep is composed of multiple cycles, each typically lasting around 90 minutes. These cycles consist of two main categories: Non-Rapid Eye Movement (NREM) and Rapid Eye Movement (REM) sleep. Each cycle involves four distinct stages, gradually transitioning from light to deep sleep, followed by a period of REM sleep where dreaming occurs.
                  </p>
                </div>

                {/* Sleep Stages Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* NREM Sleep Stages */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold mb-3 flex items-center text-[#67B8FF]">
                      <Moon className="w-5 h-5 mr-2" />
                      NREM Sleep Stages
                    </h4>
                    
                    {/* Stage 1 */}
                    <div className="p-4 rounded-lg bg-[#243B67]/50 border border-[#67B8FF]/20 hover:border-[#67B8FF]/40 transition-colors">
                      <h5 className="text-white font-medium mb-2 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#67B8FF] mr-2"></div>
                        Stage 1
                      </h5>
                      <p className="text-gray-200 leading-relaxed">
                        Marks the transition between wakefulness and sleep. Characterized by light sleep where you can easily be awakened.
                      </p>
                    </div>

                    {/* Stage 2 */}
                    <div className="p-4 rounded-lg bg-[#243B67]/50 border border-[#67B8FF]/20 hover:border-[#67B8FF]/40 transition-colors">
                      <h5 className="text-white font-medium mb-2 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#67B8FF] mr-2"></div>
                        Stage 2
                      </h5>
                      <p className="text-gray-200 leading-relaxed">
                        Involves a deeper level of relaxation as your heart rate slows, and body temperature drops.
                      </p>
                    </div>

                    {/* Stages 3 & 4 */}
                    <div className="p-4 rounded-lg bg-[#243B67]/50 border border-[#67B8FF]/20 hover:border-[#67B8FF]/40 transition-colors">
                      <h5 className="text-white font-medium mb-2 flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#67B8FF] mr-2"></div>
                        Stages 3 & 4
                      </h5>
                      <p className="text-gray-200 leading-relaxed">
                        Often referred to as deep sleep, these stages are crucial for physical restoration, immune function, and overall recovery.
                      </p>
                    </div>
                  </div>

                  {/* REM Sleep */}
                  <div>
                    <h4 className="text-xl font-semibold mb-3 flex items-center text-[#67B8FF]">
                      <Brain className="w-5 h-5 mr-2" />
                      REM Sleep
                    </h4>
                    <div className="p-6 rounded-lg bg-[#243B67]/50 border border-[#67B8FF]/20 hover:border-[#67B8FF]/40 transition-colors h-[calc(100%-2rem)]">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#1B2C4F] p-2 mr-4">
                          <Brain className="w-6 h-6 text-[#67B8FF]" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium mb-2">Rapid Eye Movement</h5>
                          <p className="text-gray-200 leading-relaxed mb-4">
                            During REM sleep, your brain becomes highly active, with brain wave patterns similar to when you're awake. This stage is most famous for vivid dreaming, where your brain creates rich, story-like experiences while your body remains in a state of temporary paralysis to prevent acting out these dreams.
                          </p>
                        </div>
                      </div>
                      
                      <div className="pl-14 space-y-6">
                        <div>
                          <h6 className="text-[#67B8FF] font-medium mb-2">Key Benefits:</h6>
                          <ul className="text-gray-200 space-y-2">
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mr-2 mt-2"></div>
                              <span>Memory consolidation and learning enhancement</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mr-2 mt-2"></div>
                              <span>Emotional processing and stress regulation</span>
                            </li>
                            <li className="flex items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mr-2 mt-2"></div>
                              <span>Creative problem-solving through dream experiences</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sleep Pattern */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-3 flex items-center text-[#67B8FF]">
                    <Activity className="w-5 h-5 mr-2" />
                    Sleep Pattern Evolution
                  </h4>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    Throughout the night, your sleep cycles change. The amount of deep sleep gradually decreases, while REM sleep periods become longer and more frequent toward the morning. Understanding this pattern can help you plan your sleep schedule to ensure you get sufficient deep and REM sleep, optimizing rest and waking up refreshed.
                  </p>
                </div>

                {/* Key Insight */}
                <div className="bg-[#243B67] rounded-lg p-6 border border-[#67B8FF]/20">
                  <p className="text-gray-200 leading-relaxed">
                    <span className="font-semibold text-white">Key Insight:</span> The sleep cycle repeats about four to five times throughout the night, which is why consistent, uninterrupted sleep is so important. Fragmented sleep can prevent you from getting enough deep or REM sleep, which may leave you feeling tired and unfocused even if you spent enough time in bed.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Sleep Cycle Visualization */}
            <Card className="night-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                  Typical Sleep Cycle Pattern
                </h3>
                <p className="text-lg text-gray-200 mb-6">
                  The visualization below shows how sleep cycles progress throughout the night, demonstrating the alternating patterns of NREM and REM sleep stages.
                </p>
                <SleepCycleVisualization />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 bg-[#0a192f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Sleep Facts You Should Know
            </h2>
            
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sleep Duration Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Clock className="w-6 h-6 mr-2 text-[#67B8FF]" />
                      Sleep Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Main fact */}
                      <p className="text-gray-200">
                        Adults should get between 7-9 hours of sleep every night. Failing to do so can lead to a buildup of sleep debt and increased risk of health issues.
                      </p>

                      {/* Visual representation */}
                      <div className="flex items-center gap-2 p-3 bg-[#1B2C4F] rounded-lg">
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between text-sm text-gray-300">
                            <span>Too Little</span>
                            <span>Optimal</span>
                            <span>Too Much</span>
                          </div>
                          <div className="relative h-3 bg-[#243B67] rounded-full">
                            <div className="absolute left-[30%] right-[30%] h-full bg-gradient-to-r from-[#4A90E2] to-[#67B8FF] rounded-full"></div>
                            <div className="absolute left-[42%] h-full w-1 bg-white/50"></div>
                            <div className="absolute left-[50%] h-full w-1 bg-white"></div>
                            <div className="absolute left-[58%] h-full w-1 bg-white/50"></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-300">
                            <span>6h</span>
                            <span className="text-[#67B8FF]">7-9h</span>
                            <span>10h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Record Holder Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Trophy className="w-6 h-6 mr-2 text-[#FFD700]" />
                      Longest No-Sleep Record
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-200">
                      The longest recorded time without sleep is 264 hours (approximately 11 days) by Randy Gardner in 1964.
                    </p>
                    <div className="p-3 bg-[#1B2C4F] rounded-md border border-red-500/20">
                      <p className="text-red-400 text-sm">
                        ⚠️ This record is no longer officially pursued due to severe health risks, including hallucinations, paranoia, and potential death.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Sleep Debt Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Scale className="w-6 h-6 mr-2 text-[#67B8FF]" />
                      Sleep Debt Accumulation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-200">
                        Missing just 2 hours of sleep per night can accumulate to the equivalent of an entire sleepless day over the course of a week.
                      </p>
                      <div className="flex items-center p-3 bg-[#1B2C4F] rounded-md">
                        <AlertCircle className="w-5 h-5 text-[#67B8FF] mr-2" />
                        <p className="text-gray-200 text-sm">
                          Sleep debt is cumulative, meaning even small daily deficits add up to significant consequences.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emotional Regulation Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Heart className="w-6 h-6 mr-2 text-[#67B8FF]" />
                      Emotional Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-200">
                        Lack of REM sleep can make individuals 60% more emotionally reactive, as the brain's amygdala becomes overactive without the emotional regulation benefits provided by REM sleep.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-3 py-1 rounded-full bg-[#1B2C4F] text-[#67B8FF] text-sm">
                          60% increase
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#1B2C4F] text-[#67B8FF] text-sm">
                          Emotional reactivity
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Immune System Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Shield className="w-6 h-6 mr-2 text-[#67B8FF]" />
                      Immune System Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-200">
                        A single night of only 4-5 hours of sleep can reduce natural killer cells—essential for immune defense—by up to 70%.
                      </p>
                      <div className="w-full bg-[#1B2C4F] rounded-full h-2">
                        <div className="bg-[#67B8FF] h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <p className="text-sm text-gray-400 text-center">
                        Immune system efficiency after sleep deprivation
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Dreams Card */}
                <Card className="night-card">
                  <CardHeader>
                    <CardTitle className="night-card-title">
                      <Cloud className="w-6 h-6 mr-2 text-[#67B8FF]" />
                      Dreams & Mental Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-200">
                        Dreams during REM sleep are believed to help process emotional experiences and reduce their intensity, contributing to improved mental health and emotional stability.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#1B2C4F] text-[#67B8FF] text-sm">
                          Emotional Processing
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#1B2C4F] text-[#67B8FF] text-sm">
                          Mental Health
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#1B2C4F] text-[#67B8FF] text-sm">
                          Emotional Stability
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
        </section>

        <section className="py-24 bg-[#112240]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Ready to Learn More?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Explore what happens when we don't get enough sleep and how it affects our health.
            </p>
            <Button className="bg-gradient-to-r from-[#4A90E2] to-[#67B8FF] text-white 
              hover:from-[#60A5F7] hover:to-[#89CDFF] 
              transition-all duration-300 transform hover:scale-105 
              shadow-[0_0_25px_rgba(74,144,226,0.5)] 
              hover:shadow-[0_0_35px_rgba(74,144,226,0.7)]">
              Discover the Consequences
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0a192f] py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sleep Diplomat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const SleepCycleVisualization = () => {
  return (
    <div className="w-full p-8 pb-0 rounded-lg bg-[#1B2C4F]/50 backdrop-blur-sm">
      <svg className="w-full h-auto" viewBox="-60 0 720 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background layers */}
        <rect y="20" width="600" height="40" fill="#FFD700" fillOpacity="0.2" />
        <rect y="60" width="600" height="40" fill="#67B8FF" fillOpacity="0.2" />
        <rect y="100" width="600" height="40" fill="#4A90E2" fillOpacity="0.2" />
        <rect y="140" width="600" height="40" fill="#4A90E2" fillOpacity="0.3" />
        <rect y="180" width="600" height="40" fill="#4A90E2" fillOpacity="0.4" />
        <rect y="220" width="600" height="40" fill="#4A90E2" fillOpacity="0.5" />

        {/* Hour markers */}
        <line x1="0" y1="270" x2="0" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="75" y1="270" x2="75" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="150" y1="270" x2="150" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="225" y1="270" x2="225" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="300" y1="270" x2="300" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="375" y1="270" x2="375" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="450" y1="270" x2="450" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="525" y1="270" x2="525" y2="280" stroke="#67B8FF" strokeWidth="1" />
        <line x1="600" y1="270" x2="600" y2="280" stroke="#67B8FF" strokeWidth="1" />

        {/* Hour labels */}
        <text className="fill-gray-200 text-xs" x="0" y="295" textAnchor="middle">11 PM</text>
        <text className="fill-gray-200 text-xs" x="75" y="295" textAnchor="middle">12 AM</text>
        <text className="fill-gray-200 text-xs" x="150" y="295" textAnchor="middle">1 AM</text>
        <text className="fill-gray-200 text-xs" x="225" y="295" textAnchor="middle">2 AM</text>
        <text className="fill-gray-200 text-xs" x="300" y="295" textAnchor="middle">3 AM</text>
        <text className="fill-gray-200 text-xs" x="375" y="295" textAnchor="middle">4 AM</text>
        <text className="fill-gray-200 text-xs" x="450" y="295" textAnchor="middle">5 AM</text>
        <text className="fill-gray-200 text-xs" x="525" y="295" textAnchor="middle">6 AM</text>
        <text className="fill-gray-200 text-xs" x="600" y="295" textAnchor="middle">7 AM</text>

        {/* Horizontal line for time axis */}
        <line x1="0" y1="270" x2="600" y2="270" stroke="#67B8FF" strokeWidth="1" strokeOpacity="0.5" />

        {/* Sleep cycle line */}
        <path
          d="M0 20 L22.5 20 L22.5 100 L38.1 100 L38.1 140 L50.9 140 L50.9 180 L63.7 180 L63.7 221.8 L73.2 221.8 L73.2 252.4 L140.4 252.4 L140.4 220 L149.5 220 L149.5 180 L158.3 180 L158.3 140 L167.7 140 L167.7 60 L204.9 60 L204.9 140 L218.4 140 L218.4 180 L233.9 180 L233.9 248.3 L248.8 248.3 L248.8 140 L264.5 140 L264.5 180 L283.9 180 L283.9 220 L306.9 220 L306.9 140 L322 140 L322 60 L379.1 60 L379.1 100 L396.7 100 L396.7 140 L419.7 140 L419.7 180 L431.8 180 L431.8 140 L446 140 L446 60 L469.6 60 L469.6 20 L484.5 20 L484.5 60 L502.7 60 L502.7 140 L548 140 L548 20 L600 20"
          stroke="#67B8FF"
          strokeWidth="2"
          className="glow-path"
        />

        {/* Cycle labels */}
        <text className="fill-gray-200 text-sm" x="68" y="15">First Cycle</text>
        <text className="fill-gray-200 text-sm" x="180.8" y="15">Second Cycle</text>
        <text className="fill-gray-200 text-sm" x="279.4" y="15">Third Cycle</text>
        <text className="fill-gray-200 text-sm" x="381.7" y="15">Fourth Cycle</text>
        <text className="fill-gray-200 text-sm" x="499.3" y="15">Fifth Cycle</text>

        {/* Stage labels - left side */}
        <text className="fill-gray-200 text-sm" x="-45" y="45">Wake</text>
        <text className="fill-gray-200 text-sm" x="-40" y="85">REM</text>
        <text className="fill-gray-200 text-sm" x="-55" y="125">Stage 1</text>
        <text className="fill-gray-200 text-sm" x="-55" y="165">Stage 2</text>
        <text className="fill-gray-200 text-sm" x="-55" y="205">Stage 3</text>
        <text className="fill-gray-200 text-sm" x="-55" y="245">Stage 4</text>
      </svg>
    </div>
  );
};