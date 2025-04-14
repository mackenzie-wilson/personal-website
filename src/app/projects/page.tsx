"use client"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, Mail } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "CheapNite",
    description:
      "An app I co-founded to help users discover the best restaurant deals nearby, while providing restaurants with tools to reach new customers.",
    imageUrl: "/images/cheapnite-logo.png",
    link: "#",
  },
  {
    title: "Bookshelf Dashboard",
    description:
      "A Tailwind CSS-based dashboard that visualizes over 10 years of my reading habits using data stored in an SQLite database pulled from Goodreads.",
    imageUrl: "/placeholder.svg?height=200&width=300&text=Coming+Soon",
    link: "#",
  },
]

export default function Projects() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {theme && (<Image
          src={theme === "dark" ? "/images/projects-background-dark.png" : "/images/projects-background.png"}
          alt="Workshop with view of city"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center" }}
        />)}
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="pt-6 px-4 sm:px-8 md:px-16 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-white text-2xl sm:text-3xl font-bold">
              Mackenzie Wilson
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 sm:space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <nav className="flex space-x-4 sm:space-x-8">
              <Link href="/" className="text-white text-lg sm:text-xl hover:text-gray-200">
                About
              </Link>
              <Link href="/projects" className="text-white text-lg sm:text-xl hover:text-gray-200">
                Projects
              </Link>
              <Link href="/bookshelf" className="text-white text-lg sm:text-xl hover:text-gray-200">
                Bookshelf
              </Link>
            </nav>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-white">
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </motion.div>
        </header>

        <main className="flex-1 container mx-auto px-4 sm:px-8 md:px-16 pt-8 sm:pt-16 md:pt-24 pb-16">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My Projects
            </motion.h1>

            <motion.div
              className="mb-8 text-white text-base sm:text-lg space-y-4 bg-blue-900/40 dark:bg-blue-950/50 p-4 sm:p-6 rounded-lg backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>
                Here you'll find a collection of my work spanning software development,
                design, and creative experiments.
              </p>
              <p>
                Each project represents a problem I wanted to solve or a skill I wanted to learn. Feel free to explore
                and reach out if you have any questions.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="mt-16 p-6 bg-blue-900/40 dark:bg-blue-950/50 rounded-lg backdrop-blur-sm text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="mr-2" /> Contact Me
              </h2>
              <p className="mb-2">
                Interested in collaborating or have questions about my projects? Feel free to reach out!
              </p>
              <a
                href="mailto:mackenzie@macwilson.tech"
                className="inline-block text-amber-200 hover:text-amber-100 transition-colors"
              >
                mackenzie@macwilson.tech
              </a>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
