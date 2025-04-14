"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

const Navigation = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Only show the coral-orange background on non-home pages
  const isHomePage = pathname === "/"

  return (
    <motion.nav
      className={`${isHomePage ? "bg-transparent" : "bg-coral-orange dark:bg-phthalo-green"} text-white shadow-md`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Your Name
          </Link>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className={`hover:text-phthalo-green dark:hover:text-coral-orange ${pathname === "/" ? "text-phthalo-green dark:text-coral-orange" : ""}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`hover:text-phthalo-green dark:hover:text-coral-orange ${pathname === "/projects" ? "text-phthalo-green dark:text-coral-orange" : ""}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/bookshelf"
                  className={`hover:text-phthalo-green dark:hover:text-coral-orange ${pathname === "/bookshelf" ? "text-phthalo-green dark:text-coral-orange" : ""}`}
                >
                  Bookshelf
                </Link>
              </li>
            </ul>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white dark:bg-coral-orange text-coral-orange dark:text-phthalo-green"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
