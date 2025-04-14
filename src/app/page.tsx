"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, Mail } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set light theme as default and ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine which image to show based on theme
  const backgroundImage = theme === "dark" ? "/images/about-background-dark.png" : "/images/hero-background.png"

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Sunset landscape"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Navigation */}
        <header className="pt-6 px-8 md:px-16 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-white text-3xl font-bold">
              Mackenzie Wilson
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <nav className="flex space-x-8">
              <Link href="/" className="text-white text-xl hover:text-gray-200">
                About
              </Link>
              <Link href="/projects" className="text-white text-xl hover:text-gray-200">
                Projects
              </Link>
              <Link href="/bookshelf" className="text-white text-xl hover:text-gray-200">
                Bookshelf
              </Link>
            </nav>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-white">
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </motion.div>
        </header>

        {/* Hero Content */}
        <main className="flex-1 container mx-auto px-8 md:px-16 pt-16 md:pt-24 flex flex-col">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex-shrink-0 mx-auto md:mx-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/images/mw-logo-new.png"
                  alt="MW Logo"
                  width={300}
                  height={300}
                  className="object-contain scale-125"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                About Me
              </motion.h1>

              <div className="overflow-y-auto pr-2 max-h-[calc(100vh-300px)] text-lg md:text-xl space-y-6 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
                <p className="text-white drop-shadow-md">
                  I have an educational background in Economics, Finance, and Computer Science, with experience spanning
                  business intelligence, process automation, and predictive analytics. I've designed and developed tools
                  for complex process analysis and cost modeling, automated reporting workflows, and managed projects
                  that optimize operations. My work has also included applying Monte Carlo algorithms to predict systems
                  failures in real estate portfolios and conducting analysis as an economist. I'm passionate about using
                  data and technology to drive better decision-making and efficiency.
                </p>

                <p className="text-white drop-shadow-md">
                  Beyond my formal professional experience, I co-founded CheapNite, a software startup focused on
                  helping users discover the best restaurant deals in their city. As a product manager and front-end
                  developer, I worked on everything from strategy and design to implementation, shaping an intuitive
                  platform that connects customers with great local experiences.
                </p>

                <p className="text-white drop-shadow-md">
                  This website is both a portfolio and a space where I document my ongoing learning journey. I believe
                  the best way to learn is by building, so I take on projects that push me to explore software
                  development, product management, and design from end to end. My goal is to be well-rounded in the full
                  product development cycle—understanding not just how things work, but how they come together
                  holistically.
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Contact Info in bottom left corner */}
        <motion.div
          className="absolute bottom-6 left-8 md:left-16 flex items-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <Mail className="mr-2" />
          <a href="mailto:mackenzie@macwilson.tech" className="text-white hover:text-gray-200 transition-colors">
            mackenzie@macwilson.tech
          </a>
        </motion.div>
      </div>
    </div>
  )
}
