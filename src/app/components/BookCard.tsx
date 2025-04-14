"use client"

import type React from "react"

import Image from "next/image"
import { motion } from "framer-motion"

interface BookCardProps {
  title: string
  author: string
  imageUrl: string
  review: string
}

const BookCard: React.FC<BookCardProps> = ({ title, author, imageUrl, review }) => {
  return (
    <motion.div
      className="bg-white dark:bg-phthalo-green rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src="/images/hero-background.png"
        alt={title || "Book cover"}
        width={130}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 text-phthalo-green dark:text-coral-orange">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">by {author}</p>
        <p className="text-sm text-gray-700 dark:text-gray-200">{review}</p>
      </div>
    </motion.div>
  )
}

export default BookCard
