'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertTriangle, Brain, Heart, Frown, ChevronRight, Shield, Car, Hospital } from 'lucide-react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function EffectsOfSleepDeprivationPage() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-semibold text-gray-100">Sleep Diplomat</a>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/what-is-sleep" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">What is Sleep?</Link>
              <Link href="#" className="text-sm font-medium text-[#67B8FF] hover:text-[#4A90E2] transition-colors">Effects of Sleep Deprivation</Link>
              <Link href="/calculator" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sleep Deprivation Calculator</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="stars absolute inset-0 opacity-50"></div>
            <div className="crescent-moon absolute top-10 right-20"></div>
          </div>
          <motion.div 
            initial={{ opacity: 1, scale: 1 }}
            className="text-center z-10 max-w-4xl mx-auto px-4"
            style={{ opacity, scale }}
          >
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Effects of Sleep Deprivation
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Sleep deprivation can have a profound impact on both your mind and body. The effects can be immediate, 
              accumulate over time, and lead to serious long-term health consequences if left unchecked. Understanding 
              these effects is crucial for maintaining your overall well-being and quality of life.
            </p>
          </motion.div>
        </section>

        {/* Immediate Effects Section */}
        <section className="py-24 bg-[#112240]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Immediate Effects of Sleep Deprivation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Effects on Body Card */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Shield className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Effects on the Body
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Just one night of poor sleep can weaken your immune system. A study showed that sleep-deprived 
                    individuals produced less than half the antibodies compared to those who got enough sleep after 
                    a flu vaccine.
                  </p>
                  
                  {/* Animated Comparison */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#1B2C4F] rounded-lg">
                    <div className="text-center p-4 border border-[#67B8FF]/20 rounded-lg">
                      <div className="mb-2">
                        <div className="w-16 h-16 mx-auto bg-[#67B8FF] rounded-full animate-pulse" />
                      </div>
                      <p className="text-sm text-[#67B8FF]">Normal Immune Response</p>
                      <p className="text-2xl font-bold text-white">100%</p>
                    </div>
                    <div className="text-center p-4 border border-red-500/20 rounded-lg">
                      <div className="mb-2">
                        <div className="w-16 h-16 mx-auto bg-red-400 rounded-full animate-pulse opacity-50" />
                      </div>
                      <p className="text-sm text-red-400">Sleep Deprived Response</p>
                      <p className="text-2xl font-bold text-white">50%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Effects on Brain Card */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Brain className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Effects on the Brain
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Sleep deprivation affects your brain&apos;s ability to concentrate and react quickly. Psychomotor 
                    Vigilance Tasks (PVT) show a dramatic increase in &apos;lapses&apos; or micro-sleeps when participants 
                    are sleep-deprived.
                  </p>
                  
                  {/* Reaction Time Graph */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Reaction Time Increase</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="w-20 text-sm text-gray-300">4 hours:</span>
                        <div className="flex-1 h-4 bg-[#243B67] rounded-full overflow-hidden">
                          <div className="h-full bg-red-400" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="w-20 text-sm text-gray-300">6 hours:</span>
                        <div className="flex-1 h-4 bg-[#243B67] rounded-full overflow-hidden">
                          <div className="h-full bg-orange-400" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="w-20 text-sm text-gray-300">8 hours:</span>
                        <div className="flex-1 h-4 bg-[#243B67] rounded-full overflow-hidden">
                          <div className="h-full bg-[#67B8FF]" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Long-term Effects Section */}
        <section className="py-24 bg-[#0a192f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Long-term Effects of Sleep Deprivation
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Chronic Health Risks Card */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Heart className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Chronic Health Risks
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Sleep deprivation doesn&apos;t just make you feel tired. Over time, it increases the risk of chronic 
                    diseases like cancer, Type II diabetes, and heart disease. It also impairs glucose metabolism, 
                    contributing to weight gain.
                  </p>

                  {/* Timeline Visualization */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Progressive Health Impact</h4>
                    <div className="grid grid-cols-[100px_1fr] gap-4">
                      {/* Timeline Labels */}
                      <div className="space-y-4">
                        <div className="h-12 flex items-center">
                          <span className="text-sm text-gray-300">Day 1:</span>
                        </div>
                        <div className="h-12 flex items-center">
                          <span className="text-sm text-gray-300">Week 1:</span>
                        </div>
                        <div className="h-12 flex items-center">
                          <span className="text-sm text-gray-300">Month 1:</span>
                        </div>
                        <div className="h-12 flex items-center">
                          <span className="text-sm text-gray-300">Year 1:</span>
                        </div>
                      </div>

                      {/* Timeline Content */}
                      <div className="space-y-4">
                        <div className="h-12 flex items-center">
                          <div className="w-full p-3 bg-[#243B67] rounded-lg border border-[#67B8FF]/20">
                            <p className="text-sm text-[#67B8FF]">Decreased immunity</p>
                          </div>
                        </div>
                        <div className="h-12 flex items-center">
                          <div className="w-full p-3 bg-[#243B67] rounded-lg border border-orange-400/20">
                            <p className="text-sm text-orange-400">Increased stress levels</p>
                          </div>
                        </div>
                        <div className="h-12 flex items-center">
                          <div className="w-full p-3 bg-[#243B67] rounded-lg border border-red-400/20">
                            <p className="text-sm text-red-400">Increased glucose levels</p>
                          </div>
                        </div>
                        <div className="h-12 flex items-center">
                          <div className="w-full p-3 bg-[#243B67] rounded-lg border border-red-500/20">
                            <p className="text-sm text-red-400">Chronic disease risk</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metabolism Comparison */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Metabolic Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 border border-[#67B8FF]/20 rounded-lg">
                        <h5 className="text-sm font-medium text-[#67B8FF] mb-2">Normal Sleep</h5>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#67B8FF] mr-2"></div>
                            <span className="text-sm text-gray-200">Efficient glucose processing</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-[#67B8FF] mr-2"></div>
                            <span className="text-sm text-gray-200">Normal insulin sensitivity</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-red-500/20 rounded-lg">
                        <h5 className="text-sm font-medium text-red-400 mb-2">Sleep Deprived</h5>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                            <span className="text-sm text-gray-200">Impaired glucose clearance</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
                            <span className="text-sm text-gray-200">Insulin resistance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brain Health Card */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Brain className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Brain Health and Mental Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Prolonged sleep deprivation impacts mental health, contributing to anxiety, depression, and even 
                    psychosis. Studies on rats have shown that lack of REM sleep can be lethal, highlighting its 
                    importance for mental stability.
                  </p>

                  {/* Brain Visualization */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Progressive Mental Impact</h4>
                    <div className="relative h-48 bg-[#243B67] rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-red-500/60 animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="w-24 h-24 text-white opacity-20" />
                      </div>
                    </div>
                  </div>

                  {/* Mental Health Graph */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Mental Health Symptoms</h4>
                    <div className="space-y-4">
                      {/* Base Level Reference */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Normal Level</span>
                          <span>100%</span>
                        </div>
                        <div className="h-2 bg-[#243B67] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#67B8FF] transition-all duration-1000" 
                            style={{ width: '55.5%' }} // 100/180 = ~55.5%
                          />
                        </div>
                        <div className="text-xs text-[#67B8FF] text-right">
                          Baseline
                        </div>
                      </div>

                      {/* Anxiety Levels */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Anxiety Levels</span>
                          <span>180%</span>
                        </div>
                        <div className="h-2 bg-[#243B67] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-400 transition-all duration-1000" 
                            style={{ width: '100%' }} // Using full width for 180%
                          >
                            <div className="w-full h-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-xs text-orange-400 text-right">
                          1.8x higher than normal
                        </div>
                      </div>

                      {/* Depression Risk */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Depression Risk</span>
                          <span>150%</span>
                        </div>
                        <div className="h-2 bg-[#243B67] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-red-400 transition-all duration-1000" 
                            style={{ width: '83.3%' }} // 150/180 = ~83.3%
                          >
                            <div className="w-full h-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-xs text-red-400 text-right">
                          1.5x higher than normal
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real-life Stories Section */}
        <section className="py-24 bg-[#112240]">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Real-life Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Peter Tripp's Story */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Clock className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Peter Tripp&apos;s Record-breaking Wakeathon
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    In 1959, radio DJ Peter Tripp stayed awake for 200 hours. As the days progressed, he experienced 
                    severe hallucinations and paranoia, ultimately suffering long-term mental health issues. His story 
                    illustrates the risks of severe sleep deprivation.
                  </p>

                  {/* Timeline of Events */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Timeline of Deterioration</h4>
                    <div className="relative">
                      {/* Vertical Timeline Line */}
                      <div className="absolute left-2.5 top-0 h-full w-0.5 bg-[#243B67]"></div>
                      
                      <div className="space-y-6">
                        {/* Day 1-2 */}
                        <div className="relative flex items-center pl-8">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1B2C4F] border-2 border-[#67B8FF]"></div>
                          <div className="bg-[#243B67] p-3 rounded-lg w-full">
                            <p className="text-sm text-[#67B8FF] font-medium">Day 1-2</p>
                            <p className="text-sm text-gray-200">Initial fatigue and irritability</p>
                          </div>
                        </div>

                        {/* Day 3-4 */}
                        <div className="relative flex items-center pl-8">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1B2C4F] border-2 border-orange-400"></div>
                          <div className="bg-[#243B67] p-3 rounded-lg w-full">
                            <p className="text-sm text-orange-400 font-medium">Day 3-4</p>
                            <p className="text-sm text-gray-200">Memory issues and confusion begin</p>
                          </div>
                        </div>

                        {/* Day 5-6 */}
                        <div className="relative flex items-center pl-8">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1B2C4F] border-2 border-red-400"></div>
                          <div className="bg-[#243B67] p-3 rounded-lg w-full">
                            <p className="text-sm text-red-400 font-medium">Day 5-6</p>
                            <p className="text-sm text-gray-200">Severe hallucinations start</p>
                          </div>
                        </div>

                        {/* Day 7-8 */}
                        <div className="relative flex items-center pl-8">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#1B2C4F] border-2 border-red-500"></div>
                          <div className="bg-[#243B67] p-3 rounded-lg w-full border border-red-500/20">
                            <p className="text-sm text-red-500 font-medium">Day 7-8</p>
                            <p className="text-sm text-gray-200">Complete paranoid delusions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Psychological Impact */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-[#1B2C4F] rounded-lg text-center">
                      <Brain className="w-5 h-5 text-[#67B8FF] mx-auto mb-2" />
                      <p className="text-xs text-gray-200">Cognitive Decline</p>
                      <p className="text-sm font-medium text-[#67B8FF]">-70%</p>
                    </div>
                    <div className="p-3 bg-[#1B2C4F] rounded-lg text-center">
                      <Frown className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-200">Mood Changes</p>
                      <p className="text-sm font-medium text-orange-400">+400%</p>
                    </div>
                    <div className="p-3 bg-[#1B2C4F] rounded-lg text-center">
                      <AlertTriangle className="w-5 h-5 text-red-400 mx-auto mb-2" />
                      <p className="text-xs text-gray-200">Hallucinations</p>
                      <p className="text-sm font-medium text-red-400">Severe</p>
                    </div>
                  </div>

                  {/* Warning Box */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg border border-red-500/20">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-200">
                        This record is no longer officially recognized due to the severe health risks involved, 
                        including potential long-term psychological damage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Interns Story */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Hospital className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Medical Interns and Shift Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Medical interns working 30-hour shifts are prone to 170% more road accidents and a 460% increase 
                    in diagnostic errors in the ICU. Chronic sleep loss isn&apos;t just inconvenient—it&apos;s dangerous.
                  </p>

                  {/* Shift Duration Impact */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">30-Hour Shift Timeline</h4>
                    <div className="relative h-4 bg-[#243B67] rounded-full overflow-hidden mb-2">
                      <div className="absolute inset-y-0 left-0 w-1/3 bg-[#67B8FF]"></div>
                      <div className="absolute inset-y-0 left-1/3 w-1/3 bg-orange-400"></div>
                      <div className="absolute inset-y-0 left-2/3 w-1/3 bg-red-400"></div>
                    </div>
                    <div className="grid grid-cols-3 text-xs text-gray-300">
                      <div>Hour 1-10<br/>Alert</div>
                      <div className="text-center">Hour 11-20<br/>Fatigue Sets In</div>
                      <div className="text-right">Hour 21-30<br/>High Risk</div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#1B2C4F] rounded-lg">
                      <h5 className="text-sm font-medium text-[#67B8FF] mb-3">Attention Span</h5>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-200">
                          <Brain className="w-4 h-4 mr-2 text-orange-400" />
                          <span>-68% after 24h</span>
                        </div>
                        <div className="w-full bg-[#243B67] h-2 rounded-full overflow-hidden">
                          <div className="w-[32%] h-full bg-orange-400"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1B2C4F] rounded-lg">
                      <h5 className="text-sm font-medium text-[#67B8FF] mb-3">Memory Recall</h5>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-200">
                          <Brain className="w-4 h-4 mr-2 text-orange-400" />
                          <span>-40% accuracy</span>
                        </div>
                        <div className="w-full bg-[#243B67] h-2 rounded-full overflow-hidden">
                          <div className="w-[60%] h-full bg-orange-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Diagnostic Errors */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Impact on Performance</h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Diagnostic Errors</span>
                          <span>+460%</span>
                        </div>
                        <div className="relative h-16 bg-[#243B67] rounded-lg overflow-hidden">
                          <div className="absolute inset-y-0 left-0 w-[18%] bg-[#67B8FF] opacity-50">
                            <div className="h-full w-full flex items-center justify-center">
                              <AlertTriangle className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute inset-y-0 left-0 w-full bg-red-400/20">
                            <div className="h-full w-full flex items-center justify-center">
                              <AlertTriangle className="w-6 h-6 text-red-400" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-red-400 text-center mt-2">
                          4.6x higher error rate compared to well-rested state
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Warning Box */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg border border-red-500/20">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-red-400">Critical Impact on Patient Care</p>
                        <p className="text-sm text-gray-200">
                          These statistics highlight the critical importance of proper rest for healthcare workers 
                          and the potential consequences of sleep deprivation in high-stakes environments. The impact 
                          extends beyond personal well-being to patient safety and care quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Road Safety Card */}
              <Card className="night-card">
                <CardHeader>
                  <CardTitle className="night-card-title">
                    <Car className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Drowsy Driving Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-200">
                    Sleep-deprived medical interns face a 170% increase in road accidents during their commute. 
                    This dramatically higher risk is comparable to driving with a blood alcohol content of 0.08% - 
                    the legal limit in most countries.
                  </p>

                  {/* Risk Comparison */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg">
                    <h4 className="text-sm font-medium text-[#67B8FF] mb-4">Accident Risk Comparison</h4>
                    
                    <div className="space-y-6">
                      {/* Normal Driver */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Well-Rested Driver</span>
                          <span>Baseline</span>
                        </div>
                        <div className="relative h-16 bg-[#243B67] rounded-lg overflow-hidden">
                          <div className="absolute inset-y-0 left-0 w-[37%] bg-[#67B8FF]">
                            <div className="h-full w-full flex items-center justify-center">
                              <Car className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sleep Deprived */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-300">
                          <span>Sleep-Deprived Driver</span>
                          <span>+170%</span>
                        </div>
                        <div className="relative h-16 bg-[#243B67] rounded-lg overflow-hidden">
                          <div className="absolute inset-y-0 left-0 w-full bg-orange-400/20">
                            <div className="h-full w-full flex items-center justify-center">
                              <Car className="w-6 h-6 text-orange-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Risk Factors */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#1B2C4F] rounded-lg">
                      <h5 className="text-sm font-medium text-[#67B8FF] mb-3">Reaction Time</h5>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-200">
                          <Clock className="w-4 h-4 mr-2 text-orange-400" />
                          <span>40% slower</span>
                        </div>
                        <div className="w-full bg-[#243B67] h-2 rounded-full overflow-hidden">
                          <div className="w-[60%] h-full bg-orange-400"></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-[#1B2C4F] rounded-lg">
                      <h5 className="text-sm font-medium text-[#67B8FF] mb-3">Lane Deviation</h5>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-200">
                          <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
                          <span>2.5x more frequent</span>
                        </div>
                        <div className="w-full bg-[#243B67] h-2 rounded-full overflow-hidden">
                          <div className="w-[250%] h-full bg-red-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Warning Box */}
                  <div className="p-4 bg-[#1B2C4F] rounded-lg border border-red-500/20">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-1" />
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-red-400">High-Risk Hours</p>
                        <p className="text-sm text-gray-200">
                          The risk is highest between 2 AM and 6 AM, when the body&apos;s circadian rhythm is at its lowest point. 
                          Night shift workers are particularly vulnerable during their commute home.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#0a192f] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">How Much Sleep Are You Losing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-medium">
              Use our Sleep Calculator to see the impact of your sleep habits.
            </p>
            <Link href="/calculator">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#4A90E2] to-[#67B8FF] text-white 
                  hover:from-[#60A5F7] hover:to-[#89CDFF] 
                  transition-all duration-300 transform hover:scale-105 
                  shadow-[0_0_25px_rgba(74,144,226,0.5)] 
                  hover:shadow-[0_0_35px_rgba(74,144,226,0.7)]"
              >
                Try the Sleep Calculator
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-[#112240] py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sleep Diplomat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}