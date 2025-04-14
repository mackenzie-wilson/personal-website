"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-blue-950/60 rounded-lg shadow-md overflow-hidden backdrop-blur-sm h-full flex flex-col"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 w-full bg-white flex items-center justify-center p-4">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={200}
          height={150}
          className="object-contain max-h-full"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{description}</p>
        <Link
          href={link}
          className="text-blue-600 dark:text-blue-400 hover:underline mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard
