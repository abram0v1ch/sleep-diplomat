'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Moon, Sun, AlertTriangle, Brain, Heart, Coffee } from 'lucide-react'

interface CalculatedResults {
  recommendedSleep: number
  weeklyDebt: number
  weeklyOverslept: number
  monthlyDebt: number
  monthlyOverslept: number
  yearlyDebt: number
  yearlyOverslept: number
  averageSleep: number
}

export default function SleepCalculatorPage() {
  const [age, setAge] = useState(25)
  const [weekdaySleep, setWeekdaySleep] = useState(7)
  const [weekendSleep, setWeekendSleep] = useState(8)
  const [calculatedResults, setCalculatedResults] = useState<CalculatedResults | null>(null)

  useEffect(() => {
    calculateSleepDebt()
  }, [age, weekdaySleep, weekendSleep])

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
      recommendedSleep,
      weeklyDebt,
      weeklyOverslept,
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-semibold text-gray-900">SleepWise</a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Science of Sleep</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Effects</a>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Sleep Calculator</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Calculate Your Sleep Pattern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    min="1"
                    max="120"
                  />
                </div>
                <div>
                  <Label htmlFor="weekdaySleep">Average Weekday Sleep (hours)</Label>
                  <div className="flex items-center space-x-4">
                    <Moon className="text-blue-500" />
                    <Slider
                      id="weekdaySleep"
                      min={0}
                      max={12}
                      step={0.5}
                      value={[weekdaySleep]}
                      onValueChange={(value) => setWeekdaySleep(value[0])}
                    />
                    <Sun className="text-yellow-500" />
                    <span>{weekdaySleep} hours</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="weekendSleep">Average Weekend Sleep (hours)</Label>
                  <div className="flex items-center space-x-4">
                    <Moon className="text-blue-500" />
                    <Slider
                      id="weekendSleep"
                      min={0}
                      max={12}
                      step={0.5}
                      value={[weekendSleep]}
                      onValueChange={(value) => setWeekendSleep(value[0])}
                    />
                    <Sun className="text-yellow-500" />
                    <span>{weekendSleep} hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {calculatedResults && (
            <Card>
              <CardHeader>
                <CardTitle>Your Sleep Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Based on your age, your recommended sleep is {calculatedResults.recommendedSleep} hours per night.</p>
                <p className="mb-4">Your average sleep: {calculatedResults.averageSleep.toFixed(1)} hours per night.</p>
                <div className="space-y-4">
                  {calculatedResults.weeklyDebt > 0 && (
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="text-yellow-500" />
                      <span>Weekly Sleep Debt: {calculatedResults.weeklyDebt.toFixed(1)} hours</span>
                    </div>
                  )}
                  {calculatedResults.weeklyOverslept > 0 && (
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="text-blue-500" />
                      <span>Weekly Oversleep: {calculatedResults.weeklyOverslept.toFixed(1)} hours</span>
                    </div>
                  )}
                </div>
                {calculatedResults.weeklyDebt > 0 ? (
                  <div className="mt-6 p-4 bg-yellow-100 rounded-md">
                    <p className="text-yellow-800">
                      You're accumulating sleep debt. Consider adjusting your sleep schedule to get closer to the recommended amount of sleep for your age group.
                    </p>
                  </div>
                ) : calculatedResults.weeklyOverslept > 0 ? (
                  <div className="mt-6 p-4 bg-blue-100 rounded-md">
                    <p className="text-blue-800">
                      You're sleeping more than the recommended amount. While extra sleep can sometimes be beneficial, consistently oversleeping may have negative effects.
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-green-100 rounded-md">
                    <p className="text-green-800">
                      Great job! You're getting the right amount of sleep according to the general recommendations for your age group.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {calculatedResults && (
          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Potential Effects of Your Sleep Pattern</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(['immediate', 'shortTerm', 'longTerm'] as const).map((timeframe) => (
                <Card key={timeframe}>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {timeframe === 'immediate' && <Coffee className="w-5 h-5 mr-2 text-yellow-500" />}
                      {timeframe === 'shortTerm' && <Brain className="w-5 h-5 mr-2 text-blue-500" />}
                      {timeframe === 'longTerm' && <Heart className="w-5 h-5 mr-2 text-red-500" />}
                      {timeframe === 'immediate' ? 'Immediate' : timeframe === 'shortTerm' ? 'Short-term' : 'Long-term'} Effects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {getRelevantEffects(getSleepStatus(calculatedResults.averageSleep, calculatedResults.recommendedSleep))[timeframe]?.map((effect, index) => (
                        <li key={index}>{effect}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold mb-6">Understanding Your Sleep Pattern</h2>
          <p className="text-lg mb-6">
            Your sleep pattern is the difference between your actual sleep and the recommended amount for your age group. 
            Both insufficient sleep and excessive sleep can have impacts on your health and well-being.
          </p>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 text-center text-gray-600 mt-12">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 SleepWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}