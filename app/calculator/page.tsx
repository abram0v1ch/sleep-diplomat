'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun, AlertTriangle, Brain, Heart, Coffee, Menu } from 'lucide-react'
import Link from 'next/link'
import styled from 'styled-components';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

interface CalculatedResults {
  totalDebt: number;
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

// Add interfaces for the styled components that use props
interface OrbitProps {
  size: number;
}

interface OrbitPathProps {
  size: number;
  duration: number;
}

interface AlertTitleProps {
  $hasDebt: boolean;
}

interface RecoveryMessageProps {
  $hasDebt: boolean;
}

const Orbit = styled.div<OrbitProps>`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => `${props.size}%`};
  height: ${props => `${props.size}%`};
`;

const OrbitPath = styled.div<OrbitPathProps>`
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

const ContentBlock = styled.div`
  background: rgba(27, 44, 79, 0.5);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  color: #fff;
`;

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const AlertTitle = styled.div<AlertTitleProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.$hasDebt ? '#FFC107' : '#4CAF50'}; // Yellow for debt, Green for no debt
  font-size: 1.25rem;
  font-weight: 500;
`;

const MainEffect = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const RecoveryMessage = styled.p<RecoveryMessageProps>`
  font-weight: ${props => props.$hasDebt ? 600 : 'normal'};
  font-size: ${props => props.$hasDebt ? '1.25rem' : '1rem'};
  color: ${props => props.$hasDebt ? '#FF4444' : 'inherit'};
  margin-top: 1rem;
`;

export default function SleepCalculatorPage() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.95])

  const [weekdaySleep, setWeekdaySleep] = useState(7)
  const [duration, setDuration] = useState<number>(3)
  const [calculatedResults, setCalculatedResults] = useState<CalculatedResults | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const rawDebt = (8 - weekdaySleep) * duration;
    const finalDebt = Math.max(0, rawDebt);
    console.log('Sleep debt calculation:', {
      weekdaySleep,
      duration,
      rawDebt,
      finalDebt,
      formula: `max(0, (8 - ${weekdaySleep}) * ${duration}) = ${finalDebt}`
    });
    setCalculatedResults({ totalDebt: finalDebt });
  }, [weekdaySleep, duration]);

  const getSleepStatus = (weekdaySleep: number): 'deprived' | 'optimal' => {
    const recommendedSleep = 8; // Using 8 hours as the recommended amount
    const diff = weekdaySleep - recommendedSleep;
    if (Math.abs(diff) <= 0.5) return "optimal";
    return "deprived";
  };

  const getRelevantEffects = (status: 'deprived' | 'optimal') => {
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
      optimal: {
        immediate: [],
        shortTerm: [],
        longTerm: []
      }
    }
    return effects[status]
  }

  const getSleepDeprivationEffects = (sleepDebt: number) => {
    if (sleepDebt === 0) {
      return {
        emojis: ['💪', '🌟', '🎯'],
        message: {
          mainEffect: "You're getting enough sleep!",
          details: [
            "✨ Keep maintaining this healthy sleep schedule.",
            "💪 Your body and mind are getting the rest they need.",
            "🎯 This helps maintain optimal cognitive and physical performance."
          ]
        }
      };
    } else if (sleepDebt <= 10) {
      return {
        emojis: ['🥱', '⚡', '📉'],
        message: {
          mainEffect: "Mild drowsiness and slower thinking.",
          details: [
            "🥱 You may notice slight memory issues and reduced ability to stay alert.",
            "📉 You are more prone to errors and struggle to stay focused, making it difficult to perform routine activities effectively."
          ]
        }
      };
    } else if (sleepDebt <= 20) {
      return {
        emojis: ['💔', '😫', '🦠'],
        message: {
          mainEffect: "You feel fatigued and irritable.",
          details: [
            "🦠 Your immune system is weakened, making you more susceptible to colds and infections.",
            "😫 Emotional regulation becomes harder, resulting in increased anxiety, irritability, and mood swings."
          ]
        }
      };
    } else if (sleepDebt <= 30) {
      return {
        emojis: ['🥴', '💊', '🍟'],
        message: {
          mainEffect: "Your cognitive ability will be 30% slower, and your decision-making capacity significantly drops.",
          details: [
            "🤢 Cravings for unhealthy, calorie-dense food increase due to hormonal imbalances, making weight management more difficult."          ]
        }
      };
    } else if (sleepDebt <= 40) {
      return {
        emojis: ['💔', '🍟', '🦠'],
        message: {
          mainEffect: "You are functioning similarly to someone who has been awake for multiple consecutive nights.",
          details: [
            "🫠 Cognitive performance is severely impaired, with reduced memory recall and difficulty focusing. ", 
            "🦠 Your immune system's response is weakened, making you more susceptible to infections and illnesses.", 
            "🍟 Hormonal imbalances result in strong cravings for high-calorie and unhealthy foods, leading to weight gain.", 
            "😫 Emotional regulation becomes challenging, causing irritability, mood swings, and reduced resilience to stress.", 
            "💔 These effects, if prolonged, increase the risk of more serious conditions, such as cardiovascular issues, type 2 diabetes, and anxiety disorders."
          ]
        }
      };
    } else if (sleepDebt <= 50) {
      return {
        emojis: ['🥵', '💥', '💊'],
        message: {
          mainEffect: "Severe cognitive impairment, confusion, and significant emotional instability. ",
          details: [
            "🥵 You may experience microsleeps, putting you at risk of accidents.", 
            "💊 You are also at an increased risk of chronic health conditions, including hypertension, diabetes, and weakened cardiac health.", 
            "💥 Expect persistent fatigue, difficulty in performing basic tasks, and impaired judgment that can impact your day-to-day safety."
          ]
        }
      };
    } else {
      return {
        emojis: ['🤯 ', '💔','🧟‍♂️'],
        message: {
          mainEffect: "Critical sleep debt!",
          details: [
            "🤕 Your physical health is in a serious decline.", 
            "💔 Chronic stress levels are damaging your heart and overall health.", 
            "🫠 You may experience hallucinations, paranoia, or extreme mental fatigue similar to the symptoms experienced by Peter Tripp during his record-breaking wakeathon.", 
            "💀 Immediate medical intervention may be necessary to prevent long-term damage or fatal consequences."
          ]
        }
      };
    }
  };

  const getCenterEmoji = (sleepDebt: number): string => {
    if (sleepDebt === 0) return '😊';
    if (sleepDebt <= 10) return '😐';
    if (sleepDebt <= 20) return '😫';
    if (sleepDebt <= 30) return '🫠';
    if (sleepDebt <= 40) return '🥴';
    if (sleepDebt <= 50) return '🤢';
    return '💀'; // 65+ hours
  };

  // First, get the effects based on current sleep debt
  const effects = calculatedResults ? getSleepDeprivationEffects(calculatedResults.totalDebt) : null;

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-semibold text-gray-100 px-2">Sleep Diplomat</a>
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
            <Button 
              variant="ghost" 
              className="md:hidden text-gray-100 px-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav 
                className="md:hidden py-4 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Link href="/" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <Link href="/what-is-sleep" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">
                    What is Sleep?
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link href="/sleep-deprivation-effects" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">
                    Effects of Sleep Deprivation
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  <Link href="/calculator" className="block text-sm font-medium text-[#67B8FF] hover:text-[#89CDFF] transition-colors px-2">
                    Sleep Deprivation Calculator
                  </Link>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

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
            Sleep Deprivation Calculator
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Understand your sleep patterns and discover how they might be affecting your health. 
          </p>
        </motion.div>
      </section>

      {/* Add the visualization section after the hero section */}
      <section className="py-24 bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
            Calculate Your Sleep Debt
          </h2>
          <FlexContainer>
            <OrbitalSection>
              <OrbitalSystem>
                {/* Center emoji */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span style={{ fontSize: 'min(10vw, 100px)' }}>
                    {calculatedResults && getCenterEmoji(calculatedResults.totalDebt)}
                  </span>
                </div>

                {/* Static orbits */}
                {effects && effects.emojis.map((_, index) => (
                  <Orbit 
                    key={`static-orbit-${index}`} 
                    size={40 + (index * 20)} 
                  />
                ))}

                {/* Orbital items - This is where we need to use the effects */}
                {effects && effects.emojis.map((emoji, index) => {
                  // Calculate orbit size dynamically based on number of emojis
                  const orbitSize = 40 + (index * 20); // This will create orbits at 40px, 60px, 80px, 100px, etc.
                  const duration = 15 + (index * 5); // This will create durations of 15s, 20s, 25s, 30s, etc.
                  
                  return (
                    <OrbitPath 
                      key={`orbit-${index}-${emoji}`}
                      size={orbitSize} 
                      duration={duration}
                    >
                      <OrbitItem>
                        <span style={{ fontSize: 'min(3vw, 24px)' }}>{emoji}</span>
                      </OrbitItem>
                    </OrbitPath>
                  );
                })}
              </OrbitalSystem>
            </OrbitalSection>

            <div className="flex-1 min-w-[300px]">
              <ContentBlock>
                {/* Sliders Section */}
                <div className="space-y-6">
                  {/* First Slider */}
                  <div>
                    <Label className="text-gray-200">
                      Average Daily Sleep (hours)
                    </Label>
                    <div className="flex items-center space-x-4 mt-2">
                      <Moon className="text-[#67B8FF]" />
                      <Slider
                        min={2}
                        max={10}
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
                        max={10}
                        step={1}
                        value={[duration]}
                        onValueChange={(value) => setDuration(value[0])}
                        className="flex-1 [&_[role=slider]]:!bg-[#67B8FF]"
                      />
                      <Sun className="text-[#67B8FF]" />
                      <span className="min-w-[4rem] text-right text-[#67B8FF]">
                        {duration} {duration === 1 ? 'day' : 'days'}
                      </span>
                    </div>
                  </div>

                  {/* Results Section */}
                  {calculatedResults && (
                    <AlertContainer>
                      <AlertTitle $hasDebt={calculatedResults.totalDebt > 0}>
                        {calculatedResults.totalDebt > 0 ? (
                          <>
                            <span>⚠️</span>
                            <p>You have {calculatedResults.totalDebt.toFixed(1)} hours of sleep debt</p>
                          </>
                        ) : (
                          <>
                            <span>✅</span>
                            <p>Good job! You don&apos;t have any sleep debt!</p>
                          </>
                        )}
                      </AlertTitle>
                      
                      <div className="space-y-4">
                        <MainEffect>
                          {getSleepDeprivationEffects(calculatedResults.totalDebt).message.mainEffect}
                        </MainEffect>
                        {getSleepDeprivationEffects(calculatedResults.totalDebt).message.details.map((detail, index) => (
                          <p key={`detail-${index}`}>{detail}</p>
                        ))}
                        {calculatedResults.totalDebt > 0 && (
                          <RecoveryMessage $hasDebt={true}>
                            You will need to sleep 2 additional hours a day for {Math.ceil(calculatedResults.totalDebt / 2)} days straight to remove your sleep debt
                          </RecoveryMessage>
                        )}
                      </div>
                    </AlertContainer>
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
            
            {getSleepStatus(weekdaySleep) === 'optimal' ? (
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[#112240] border-none shadow-lg shadow-black/20 md:col-span-2">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Left side - Icon and Title */}
                      <div className="text-center md:text-left md:flex-shrink-0">
                        <div className="text-6xl mb-4">✨</div>
                        <h3 className="text-2xl font-semibold text-[#67B8FF] mb-2">
                          Optimal Sleep Duration
                        </h3>
                        <p className="text-gray-300 text-lg">
                          You&apos;re maintaining healthy sleep habits!
                        </p>
                      </div>

                      {/* Right side - Benefits Grid */}
                      <div className="flex-grow">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#67B8FF]">
                              <Brain className="w-5 h-5" />
                              <h4 className="font-semibold">Cognitive Benefits</h4>
                            </div>
                            <ul className="text-gray-300 space-y-1">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Enhanced memory and focus
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Better decision-making
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#67B8FF]">
                              <Heart className="w-5 h-5" />
                              <h4 className="font-semibold">Physical Benefits</h4>
                            </div>
                            <ul className="text-gray-300 space-y-1">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Strong immune system
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Optimal recovery
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#67B8FF]">
                              <Coffee className="w-5 h-5" />
                              <h4 className="font-semibold">Energy Levels</h4>
                            </div>
                            <ul className="text-gray-300 space-y-1">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Sustained daytime alertness
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Natural energy regulation
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#67B8FF]">
                              <Sun className="w-5 h-5" />
                              <h4 className="font-semibold">Emotional Balance</h4>
                            </div>
                            <ul className="text-gray-300 space-y-1">
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Stable mood
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#67B8FF]" />
                                Better stress resilience
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
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
                        {getRelevantEffects(getSleepStatus(weekdaySleep))[timeframe]?.map((effect, index) => (
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
            )}
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