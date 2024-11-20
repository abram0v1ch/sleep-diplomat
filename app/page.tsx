'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Activity, Coffee, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-semibold text-gray-900">SleepWise</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Science of Sleep</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Effects</a>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Calculator</a>
            </nav>
            <Button variant="ghost" className="md:hidden">Menu</Button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="text-center z-10"
            style={{ opacity, scale }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Why Sleep Matters
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Discover the true impact of sleep deprivation and learn why prioritizing rest is crucial for your health and performance.
            </p>
            <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Explore the Effects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 opacity-50" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M0,0 C40,40 60,40 100,0 L100,100 L0,100 Z" 
                fill="rgba(255,255,255,0.8)"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </motion.div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">The Science of Sleep</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Brain className="w-6 h-6 mr-2 text-blue-500" />
                    What is Sleep?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Sleep is a biological necessity, occurring in cycles of NREM and REM. Each phase plays a unique role in physical restoration, memory consolidation, and emotional regulation.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Coffee className="w-6 h-6 mr-2 text-pink-500" />
                    Why We Sleep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Sleep supports vital functions like immune defense, metabolic regulation, and brain health. Lack of sleep impairs these functions, leading to serious health risks.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Immediate Effects of Sleep Deprivation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Activity className="w-6 h-6 mr-2 text-purple-500" />
                    Effects on the Body
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Just one night of poor sleep can weaken your immune system, producing less than half the antibodies compared to those who got enough sleep after a flu vaccine.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Brain className="w-6 h-6 mr-2 text-blue-500" />
                    Effects on the Brain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Sleep deprivation affects your brain's ability to concentrate and react quickly, leading to increased 'lapses' or micro-sleeps during tasks requiring vigilance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">How Much Sleep Are You Losing?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Use our Sleep Calculator to see the impact of your sleep habits and get personalized recommendations.</p>
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Try the Sleep Calculator
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 text-center text-gray-600">
        <div className="container mx-auto px-4">
          <p>&copy; 2023 SleepWise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}