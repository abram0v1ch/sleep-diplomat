'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Coffee, ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a className="text-xl font-semibold text-gray-100 px-2">Sleep Diplomat</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-sm font-medium text-[#67B8FF] hover:text-[#89CDFF] transition-colors">Home</a>
              <a href="/what-is-sleep" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">What is Sleep?</a>
              <a href="/sleep-deprivation-effects" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">Effects of Sleep Deprivation</a>
              <a href="/calculator" className="text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors">Sleep Deprivation Calculator</a>
            </nav>
            <Button 
              variant="ghost" 
              className="md:hidden text-gray-100 px-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
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
                  <a href="#" className="block text-sm font-medium text-[#67B8FF] hover:text-[#89CDFF] transition-colors px-2">Home</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <a href="/what-is-sleep" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">What is Sleep?</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <a href="/sleep-deprivation-effects" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">Effects of Sleep Deprivation</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  <a href="/calculator" className="block text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors px-2">Sleep Deprivation Calculator</a>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">
          <div className="absolute inset-0 z-0">
            <div className="stars absolute inset-0 opacity-50"></div>
            <div className="moon-container absolute top-10 right-20">
              <div className="crescent-moon"></div>
            </div>
          </div>

          <motion.div 
            className="text-center z-10"
            style={{ opacity, scale }}
          >
            <h1 className="text-5xl font-bold mb-4 text-white">
              Why Sleep Matters
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-medium">
              Discover the true impact of sleep deprivation and learn why prioritizing rest is crucial for your health and performance.
            </p>
            <Button 
              onClick={() => {
                document.querySelector('.py-24')?.scrollIntoView({ 
                  behavior: 'smooth'
                });
              }}
              className="bg-gradient-to-r from-[#FFE55C] to-[#FFB833] text-[#0a192f] 
              hover:from-[#FFF494] hover:to-[#FFD700] 
              transition-all duration-300 transform hover:scale-105 
              shadow-[0_0_25px_rgba(255,215,0,0.5)] 
              hover:shadow-[0_0_35px_rgba(255,215,0,0.7)]">
              Explore
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </section>

        <section className="py-24 bg-[#112240]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">The Science of Sleep</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#1B2C4F] border border-[#243B67] shadow-[0_0_30px_rgba(0,0,0,0.3)] 
                hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:border-[#2D4A80] 
                transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                    <Brain className="w-6 h-6 mr-2 text-[#67B8FF]" />
                    What is Sleep?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">
                    Discover the fascinating world of sleep cycles, NREM, and REM stages. Learn how each phase contributes to your overall well-being.
                  </p>
                  <Link href="/what-is-sleep">
                    <Button variant="link" className="text-[#67B8FF] hover:text-[#89CDFF] p-0">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-[#1B2C4F] border border-[#243B67] shadow-[0_0_30px_rgba(0,0,0,0.3)] 
                hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] hover:border-[#2D4A80] 
                transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
                  <Coffee className="w-6 h-6 mr-2 text-blue-400" />
                    The Effects of Sleep Deprivation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 mb-4">
                  Explore the vital functions of sleep, from immune defense to brain health. Understand why sleep is non-negotiable for your body and mind.
                  </p>
                  <Link href="/sleep-deprivation-effects">
                    <Button variant="link" className="text-[#67B8FF] hover:text-[#89CDFF] p-0">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
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
            <Button size="lg" className="bg-gradient-to-r from-[#4A90E2] to-[#67B8FF] text-white 
              hover:from-[#60A5F7] hover:to-[#89CDFF] 
              transition-all duration-300 transform hover:scale-105 
              shadow-[0_0_25px_rgba(74,144,226,0.5)] 
              hover:shadow-[0_0_35px_rgba(74,144,226,0.7)]">
              Try the Sleep Calculator
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-[#112240] py-8 text-center text-gray-100">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sleep Diplomat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}