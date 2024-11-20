'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Moon, Sun, Activity } from 'lucide-react'

export default function WhatIsSleepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-semibold text-gray-900">SleepWise</a>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Science of Sleep</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Effects</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Calculator</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">What is Sleep?</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-4">
            Sleep is a natural, periodic state of rest for the mind and body, characterized by altered consciousness, 
            relatively inhibited sensory activity, and reduced voluntary muscle activity. It's a complex biological 
            process that's essential for cognitive function, physical health, and overall well-being.
          </p>
          <p className="text-lg mb-4">
            During sleep, your body goes through various stages, each playing a crucial role in restoring and 
            rejuvenating different aspects of your physical and mental health.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Sleep Cycles and Stages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Moon className="w-6 h-6 mr-2 text-blue-500" />
                  NREM (Non-Rapid Eye Movement) Sleep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2"><strong>Stage 1:</strong> Light sleep, easily awakened</p>
                <p className="mb-2"><strong>Stage 2:</strong> Deeper sleep, body temperature drops, heart rate slows</p>
                <p><strong>Stages 3 & 4:</strong> Deep sleep, vital for physical restoration</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Activity className="w-6 h-6 mr-2 text-pink-500" />
                  REM (Rapid Eye Movement) Sleep
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Characterized by rapid eye movements, vivid dreams</p>
                <p className="mb-2">Critical for cognitive functions like learning and memory consolidation</p>
                <p>Typically occurs 90 minutes after falling asleep</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">The Role of Sleep in Our Lives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Brain className="w-5 h-5 mr-2 text-blue-500" />
                  Cognitive Function
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sleep enhances learning, problem-solving skills, and decision-making abilities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Activity className="w-5 h-5 mr-2 text-green-500" />
                  Physical Restoration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>During sleep, your body repairs tissues, synthesizes proteins, and releases growth hormones.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                  Emotional Regulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Sleep helps process emotional information and maintain mood stability.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Learn More?</h2>
          <p className="text-lg mb-6">Discover how sleep deprivation affects your body and mind.</p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Sleep Deprivation Effects
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