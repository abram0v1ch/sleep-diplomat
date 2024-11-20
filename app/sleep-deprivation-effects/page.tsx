'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Activity, AlertTriangle, Brain, Heart, Coffee, Frown } from 'lucide-react'

export default function EffectsOfSleepDeprivationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-semibold text-gray-900">SleepWise</a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Science of Sleep</a>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Effects</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Effects of Sleep Deprivation</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-4">
            Sleep deprivation can have a profound impact on both your mind and body. The effects can be immediate, 
            accumulate over the short term, and lead to serious long-term health consequences if left unchecked.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Immediate Effects</h2>
          <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-none shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Clock className="w-6 h-6 mr-2 text-yellow-500" />
                Within 24 Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Decreased alertness and concentration</li>
                <li>Impaired memory and cognitive performance</li>
                <li>Mood changes, including irritability and stress</li>
                <li>Reduced coordination and increased risk of accidents</li>
                <li>Weakened immune system response</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-lg">
            Even a single night of poor sleep can significantly impact your daily functioning, affecting everything 
            from your ability to focus at work or school to your emotional well-being.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Short-term Effects</h2>
          <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-none shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Activity className="w-6 h-6 mr-2 text-green-500" />
                After Several Days to Weeks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cumulative cognitive deficits, including reduced decision-making abilities</li>
                <li>Increased risk of microsleeps (brief, involuntary episodes of sleep)</li>
                <li>Weight gain due to hormonal imbalances affecting appetite</li>
                <li>Weakened immune system, making you more susceptible to illnesses</li>
                <li>Increased stress levels and potential mood disorders</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-lg">
            As sleep debt accumulates over days or weeks, the effects become more pronounced and can start to impact 
            various aspects of your physical and mental health.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Long-term Effects</h2>
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-none shadow-lg mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <AlertTriangle className="w-6 h-6 mr-2 text-red-500" />
                Chronic Sleep Deprivation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased risk of cardiovascular diseases, including hypertension and heart disease</li>
                <li>Higher likelihood of developing type 2 diabetes</li>
                <li>Compromised immune function, leading to frequent illnesses</li>
                <li>Increased risk of obesity and associated health problems</li>
                <li>Higher risk of mental health disorders, including depression and anxiety</li>
                <li>Potential cognitive decline and increased risk of neurodegenerative diseases</li>
              </ul>
            </CardContent>
          </Card>
          <p className="text-lg">
            Chronic sleep deprivation can have severe, long-lasting effects on your health, potentially contributing 
            to serious medical conditions and reducing overall quality of life.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Impact on Different Aspects of Health</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Brain className="w-5 h-5 mr-2 text-purple-500" />
                  Cognitive Function
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Impaired attention, decision-making, and problem-solving skills. Reduced learning and memory consolidation.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Heart className="w-5 h-5 mr-2 text-red-500" />
                  Physical Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Increased risk of obesity, diabetes, and cardiovascular diseases. Weakened immune system and slower recovery.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Frown className="w-5 h-5 mr-2 text-yellow-500" />
                  Mental Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Higher risk of mood disorders, anxiety, and depression. Reduced emotional regulation and stress resilience.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Take Action for Better Sleep</h2>
          <p className="text-lg mb-6">Don't let sleep deprivation impact your health and well-being. Start improving your sleep habits today.</p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Try Our Sleep Calculator
          </Button>
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