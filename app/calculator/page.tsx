'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun, AlertTriangle, Brain, Heart, Coffee } from 'lucide-react'
import Link from 'next/link'
import styled from 'styled-components';

interface CalculatedResults {
  weeklyDebt: number;
}

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OrbitalSection = styled.div`
  width: 50%;
  min-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

const OrbitalSystem = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; // Makes it square
`;

const OrbitalContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Orbit = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => `${props.size}%`};
  height: ${props => `${props.size}%`};
`;

const OrbitPath = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => `${props.size}%`};
  height: ${props => `${props.size}%`};
  animation: rotate ${props => props.duration}s linear infinite;

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const OrbitItem = styled.div`
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ResultsContainer = styled.div`
  background: rgba(27, 44, 79, 0.5); // Slightly transparent dark blue
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  margin-top: 1rem;
`;

const ContentBlock = styled.div`
  background: rgba(27, 44, 79, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  color: #fff;
`;

export default function SleepCalculatorPage() {
  const [age, setAge] = useState(25)
  const [weekdaySleep, setWeekdaySleep] = useState(7)
  const [weekendSleep, setWeekendSleep] = useState(8)
  const [duration, setDuration] = useState<number>(3)
  const [calculatedResults, setCalculatedResults] = useState<CalculatedResults | null>(null)

  useEffect(() => {
    calculateSleepDebt()
  }, [duration, weekdaySleep, weekendSleep, age])

  const calculateSleepDebt = () => {
    let recommendedSleep
    if (age <= 13) recommendedSleep = 11
    else if (age <= 18) recommendedSleep = 10
    else if (age <= 64) recommendedSleep = 8
    else recommendedSleep = 7

    const weekdayDiff = recommendedSleep - weekdaySleep
    const weekendDiff = recommendedSleep - weekendSleep
    const totalWeeklyDiff = (weekdayDiff * 5) + (weekendDiff * 2)

    const weeklyDebt = Math.max(totalWeeklyDiff, 0)
    const weeklyOverslept = Math.max(-totalWeeklyDiff, 0)

    setCalculatedResults({
      weeklyDebt,
      monthlyDebt: weeklyDebt * 4,
      monthlyOverslept: weeklyOverslept * 4,
      yearlyDebt: weeklyDebt * 52,
      yearlyOverslept: weeklyOverslept * 52,
      averageSleep: (weekdaySleep * 5 + weekendSleep * 2) / 7
    })
  }

  const getSleepStatus = (averageSleep: number, recommendedSleep: number) => {
    const diff = averageSleep - recommendedSleep
    if (Math.abs(diff) <= 0.5) return "optimal"
    if (diff < 0) return "deprived"
    return "excess"
  }

  const getRelevantEffects = (status: 'deprived' | 'excess' | 'optimal') => {
    type TimeframeKey = 'immediate' | 'shortTerm' | 'longTerm';
    const effects: Record<typeof status, Record<TimeframeKey, string[]>> = {
      deprived: {
        immediate: [
          "Decreased alertness and concentration",
          "Impaired memory and cognitive performance",
          "Mood changes, including irritability",
          "Reduced coordination and increased risk of accidents"
        ],
        shortTerm: [
          "Cumulative cognitive deficits",
          "Increased risk of microsleeps during the day",
          "Weakened immune system",
          "Increased stress levels"
        ],
        longTerm: [
          "Increased risk of cardiovascular diseases",
          "Higher likelihood of developing type 2 diabetes",
          "Chronic immune system issues",
          "Increased risk of obesity and associated health problems",
          "Higher risk of mental health disorders"
        ]
      },
      excess: {
        immediate: [
          "Grogginess and difficulty waking up",
          "Headaches",
          "Back pain",
          "Increased fatigue during the day"
        ],
        shortTerm: [
          "Disrupted sleep cycle",
          "Increased risk of obesity",
          "Higher risk of depression",
          "Impaired cognitive function"
        ],
        longTerm: [
          "Increased risk of diabetes",
          "Higher risk of heart disease",
          "Potential cognitive decline",
          "Increased inflammation in the body"
        ]
      },
      optimal: {
        immediate: [],
        shortTerm: [],
        longTerm: []
      }
    }
    return effects[status]
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-semibold text-gray-100">Sleep Diplomat</a>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
                Home
              </Link>
              <Link href="/what-is-sleep" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
                What is Sleep?
              </Link>
              <Link href="/sleep-deprivation-effects" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">
                Effects of Sleep Deprivation
              </Link>
              <Link href="/calculator" className="text-sm font-medium text-[#67B8FF] hover:text-[#89CDFF] transition-colors">
                Sleep Deprivation Calculator
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="stars absolute inset-0 opacity-50"></div>
          <div className="crescent-moon absolute top-10 right-20"></div>
        </div>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Sleep Deprivation Calculator
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Understand your sleep patterns and discover how they might be affecting your health. 
          </p>
        </div>
      </section>

      {/* Add the visualization section after the hero section */}
      <section className="py-24 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4">
          <FlexContainer>
            <OrbitalSection>
              <OrbitalSystem>
                <OrbitalContent>
                  {/* Center emoji */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <span style={{ fontSize: 'min(10vw, 100px)' }}>
                      {calculatedResults?.weeklyDebt > 0 ? '🫠' : '😊'}
                    </span>
                  </div>

                  {/* Orbits */}
                  <Orbit size={60} />  {/* 300px / 500px * 100 = 60% */}
                  <Orbit size={80} />  {/* 400px / 500px * 100 = 80% */}
                  <Orbit size={100} /> {/* 500px / 500px * 100 = 100% */}

                  {/* Orbital items with percentage-based paths */}
                  <OrbitPath size={60} duration={15}>
                    <OrbitItem>
                      <span style={{ fontSize: 'min(3vw, 24px)' }}>🦠</span>
                    </OrbitItem>
                  </OrbitPath>

                  <OrbitPath size={80} duration={20}>
                    <OrbitItem>
                      <span style={{ fontSize: 'min(3vw, 24px)' }}>🍟</span>
                    </OrbitItem>
                  </OrbitPath>

                  <OrbitPath size={80} duration={20} style={{ animationDelay: '-10s' }}>
                    <OrbitItem>
                      <span style={{ fontSize: 'min(3vw, 24px)' }}>💔</span>
                    </OrbitItem>
                  </OrbitPath>

                  <OrbitPath size={100} duration={25}>
                    <OrbitItem>
                      <span style={{ fontSize: 'min(3vw, 24px)' }}>💊</span>
                    </OrbitItem>
                  </OrbitPath>
                </OrbitalContent>
              </OrbitalSystem>
            </OrbitalSection>

            <div className="flex-1 min-w-[300px]">
              <ContentBlock>
                {/* Sliders Section */}
                <div className="space-y-6">
                  {/* First Slider */}
                  <div>
                    <Label className="text-gray-200">
                      Average Weekday Sleep (hours)
                    </Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Moon className="text-[#67B8FF]" />
                      <Slider
                        min={0}
                        max={12}
                        step={0.5}
                        value={[weekdaySleep]}
                        onValueChange={(value) => setWeekdaySleep(value[0])}
                        className="flex-1 [&_[role=slider]]:!bg-[#67B8FF]"
                      />
                      <Sun className="text-[#67B8FF]" />
                      <span className="min-w-[4rem] text-right text-[#67B8FF]">
                        {weekdaySleep} hrs
                      </span>
                    </div>
                  </div>

                  {/* Second Slider */}
                  <div>
                    <Label className="text-gray-200">
                      Duration of the period
                    </Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Moon className="text-[#67B8FF]" />
                      <Slider
                        min={1}
                        max={12}
                        step={1}
                        value={[duration]}
                        onValueChange={(value) => setDuration(value[0])}
                        className="flex-1 [&_[role=slider]]:!bg-[#67B8FF]"
                      />
                      <Sun className="text-[#67B8FF]" />
                      <span className="min-w-[4rem] text-right text-[#67B8FF]">
                        {duration} {duration === 1 ? 'week' : 'weeks'}
                      </span>
                    </div>
                  </div>

                  {/* Results Section */}
                  {calculatedResults && (
                    <div className="space-y-4 mt-8">
                      <p>You have {calculatedResults.weeklyDebt.toFixed(1)} hours of sleep debt</p>
                      <p>You function the same as a person who hasn't slept for 3 days straight</p>
                      <p>Your cognitive ability will be 1.5x slower,</p>
                      <p>your immune response will be 3.1x weaker. You will catch more colds and will be less productive.</p>
                      <p>you will crave unhealthy food and will gain weight</p>
                      <p>You will need to sleep 2 more hours a day for 3 months straight to remove your sleep debt</p>
                    </div>
                  )}
                </div>
              </ContentBlock>
            </div>
          </FlexContainer>
        </div>
      </section>

      {/* Effects Section */}
      {calculatedResults && (
        <section className="py-24 bg-[#0a192f]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Potential Effects of Your Sleep Pattern
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(['immediate', 'shortTerm', 'longTerm'] as const).map((timeframe) => (
                <Card key={timeframe} className="bg-[#112240] border-none shadow-lg shadow-black/20">
                  <CardHeader>
                    <CardTitle className="text-gray-100 flex items-center text-lg">
                      {timeframe === 'immediate' && <Coffee className="w-5 h-5 mr-2 text-[#67B8FF]" />}
                      {timeframe === 'shortTerm' && <Brain className="w-5 h-5 mr-2 text-[#67B8FF]" />}
                      {timeframe === 'longTerm' && <Heart className="w-5 h-5 mr-2 text-[#67B8FF]" />}
                      {timeframe === 'immediate' ? 'Immediate' : timeframe === 'shortTerm' ? 'Short-term' : 'Long-term'} Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {getRelevantEffects(getSleepStatus(calculatedResults.averageSleep, calculatedResults.recommendedSleep))[timeframe]?.map((effect, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                          <span className="text-gray-300">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recommendations Section */}
      {calculatedResults && (
        <section className="py-24 bg-[#112240]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              Sleep Recommendations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#1B2C4F] border-none shadow-lg shadow-black/20">
                <CardHeader>
                  <CardTitle className="text-gray-100 flex items-center">
                    <Moon className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    Healthy Sleep Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Maintain a consistent sleep schedule</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Create a relaxing bedtime routine</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Optimize your sleep environment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Limit screen time before bed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1B2C4F] border-none shadow-lg shadow-black/20">
                <CardHeader>
                  <CardTitle className="text-gray-100 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    What to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Caffeine late in the day</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Irregular sleep patterns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Long daytime naps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF] mt-2 flex-shrink-0" />
                      <span className="text-gray-300">Heavy meals before bedtime</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-[#0a192f] py-8 text-center text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sleep Diplomat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}