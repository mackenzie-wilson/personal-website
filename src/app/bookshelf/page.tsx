"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp, BookOpen, Moon, Sun, Mail } from "lucide-react"

// Book category type
type BookCategory = {
  name: string
  books: string[]
}

// Book categories data
const bookCategories: BookCategory[] = [
  {
    name: "Philosophy",
    books: [
      "Meditations - Marcus Aurelius",
      "The Complete Essays - Michel de Montaigne",
      "Letters from a Stoic - Seneca",
      "On the Shortness of Life - Seneca",
      "The Open Society and its Enemies - Karl Popper",
      "The Art of Living - Epictetus",
      "Enchiridion - Epictetus",
      "Fooled by Randomness: The Hidden Role of Chance in Life and the Markets - Nassim Nicholas Taleb",
      "The Black Swan: The Impact of the Highly Improbable - Nassim Nicholas Taleb",
      "Antifragile: Things That Gain From Disorder - Nassim Nicholas Taleb",
      "The Bed of Procrustes: Practical and Philosophical Aphorisms - Nassim Nicholas Taleb",
      "Silent Risk - Nassim Nicholas Taleb",
      "Scala Politica - Nassim Nicholas Taleb",
      "Skin in the Game: The Hidden Asymmetries in Daily Life - Nassim Nicholas Taleb",
      "Walden - Henry David Thoreau",
      "This Is Water: Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life - David Foster Wallace",
      "Twilight of the Idols - Friedrich Nietzsche",
      "Thus Spoke Zarathustra - Friedrich Nietzsche",
      "Beyond Good and Evil - Friedrich Nietzsche",
      "Brave New World - Aldous Huxley",
      "The Doors of Perception - Aldous Huxley",
      "Dionysus: Myth and Cult - Walter Otto",
      "We - Yevgeny Zamyatin",
      "The Myth of Sisyphus - Albert Camus",
      "The Hero With a Thousand Faces - Joseph Campbell",
      "A Book of Five Rings - Miyamoto Musashi",
      "The Prince - Niccolo Machiavelli",
      "Self Reliance and Other Essays - Ralph Waldo Emerson",
      "A Guide to the Good Life: The Ancient Art of Stoic Joy - William B. Irvine",
      "The Stranger - Albert Camus",
      "The Art of Worldly Wisdom - Balthasar Gracian",
    ],
  },
  {
    name: "Science, Technology, & Mathematics",
    books: [
      "Open Data Structures: An Introduction - Pat Morin",
      "Mathematics for Computer Science - Eric Lehman",
      "The Tangle - Serguei Popov",
      "Ethereum Whitepaper - Vitalik Buterin",
      "Using Econometrics: A Practical Guide - A. Studenmund",
      "The Sovereign Individual: Mastering the Transition to the Information Age - James Dale Davidson",
      "The Pleasure of Finding Things Out: The Best Short Works of Richard P. Feynman - Richard Feynman",
      "Fundamental Methods of Mathematical Economics - Alpha C. Chiang",
      "Introduction to Econometrics - Christopher Dougherty",
      "Abundance: The Future Is Better Than You Think - Peter Diamandis",
      "Bold: How to Go Big, Create Wealth and Impact the World - Peter Diamandis",
      "Storytelling with Data: A Data Visualization Guide for Business Professionals - Cole Nussbaumer Knaflic",
      "The Inevitable: Understanding the 12 Technological Forces That Will Shape Our Future - Kevin Kelly",
      "Precision: Principles, Practices and Solutions for the Internet of Things - Timothy Chou",
      "Ethereum: Blockchains, Digital Assets, Smart Contracts, Decentralized Autonomous Organizations - Henning Diedrich",
      "Inventing Bitcoin: The Technology Behind The First Truly Scarce and Decentralized Money Explained - Yan Pritzker",
      "PropTech 101: Turning Chaos Into Cash Through Real Estate Innovation - Aaron Block",
      "Fundamentals of Database Systems - Ramez Elmasri",
      "Fabricated: The New World of 3D Printing - Hod Lipson",
      "The Industries of the Future - Alec Ross",
    ],
  },
  {
    name: "Economics & Finance",
    books: [
      "When Genius Failed: The Rise and Fall of Long-Term Capital Management - Roger Lowenstein",
      "The Misbehaviour of Markets - Benoit Mandelbrot",
      "What I Learned Losing a Million Dollars - Jim Paul",
      "The Origin of Financial Crises: Central Banks, Credit Bubbles, and the Efficient Market Fallacy - George Cooper",
      "I, Pencil - Leaonard Edward Read",
      "The Use of Knowledge in Society - Friedrich Hayek",
      "Options, Futures, and Other Derivatives - John C. Hull",
      "Dao of Capital: Austrian Investing in a Distorted World - Mark Spitznagel",
      "Safe Haven Investing: How to Take Cover from Financial Storms - Mark Spitznagel",
      "The New Market Wizards: Conversations with America's Top Traders - Jack D. Schwager",
      "Principles: Life and Work - Ray Dalio",
      "Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail - Ray Dalio",
      "What I Learned Losing a Million Dollars - Jim Paul",
      "Economics in One Lesson - Henry Hazlitt",
      "A Random Walk Down Wall Street - Burton G. Malkiel",
      "Investments - Zvi Bodie",
      "Fundamentals of Corporate Finance - Stephen A. Ross",
      "Economic Facts and Fallacies - Thomas Sowell",
      "The Housing Boom and Bust - Thomas Sowell",
      "How an Economy Grows and Why It Crashes - Peter Schiff",
      "Flash Boys: A Wallstreet Revolt: Michael Lewis",
      "The Alchemy of Finance - George Soros",
      "Secrets of Sandhill Road: Venture Capital and How to Get It - Scott Kupor",
      "Applied Corporate Finance - Aswath Damodaran",
      "Natural Capitalism - Paul Hawken",
      "Irrational Exuberence - Robert J. Shiller",
      "When to Rob a Bank - Steven Levitt",
      "Modern Portfolio Theory and Investment Analysis - Edwin J. Elton",
    ],
  },
  {
    name: "Business & Entrepreneurship",
    books: [
      "Founders at Work: Stories of Startups' Early Days - Jessica Livingston",
      "Innovation and Entrepreneurship: Practice and Principles - Peter Drucker",
      "Zero to One: Notes on Startups, or How to Build the Future - Peter Thiel",
      "Tribe of Mentors: Short Life Advice from the Best in the World - Tim Ferriss",
      "Tools of Titans: The Tactics, Routines, and Habits of Billionaires, Icons, and World-Class Performers - Tim Ferriss",
      "The 4-Hour Workweek - Tim Ferriss",
      "The Personal MBA: Master the Art of Business - Josh Kaufman",
      "Trust Me, I'm Lying: Confessions of a Media Manipulator - Ryan Holiday",
      "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers - Ben Horowitz",
      "Good Profit: How Creating Value for Others Built One of the World's Most Successful Companies - Charles Koch",
      "The Upstarts: How Uber, Airbnb, and the Killer Companies of the New Silicon Valley Are Changing the World - Brad Stone",
      "Kings of Crypto: One Startup's Quest to Take Cryptocurrency Out of Silicon Valley and Onto Wall Street - Jeff John Roberts",
      "The E-Myth Revisited: Why Most Small Businesses Don't Work and What to Do About It - Michael E. Gerber",
      "Business Adventures - John Brooks",
      "Outliers: The Story of Success - Malcolm Gladwell",
      "Bad Blood: Secrets and Lies in a Silicon Valley Startup - John Carreyou",
      "Billion Dollar Loser: The Epic Rise and Spectacular Fall of Adam Neumann and WeWork - Reeves Wiedeman",
      "Smartcuts: How Hackers, Innovators, and Icons Accelerate Success - Shane Snow",
      "Hatching Twitter: A True Story of Money, Power, Friendship, and Betrayal - Nick Bilton",
      "Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration - Ed Catmull",
      "Choose Yourself: Be Happy, Make Millions, Live the Dream - James Altucher",
      "The Entrepreneur's Weekly Nietzsche: A Book for Disruptors - Brad Feld",
    ],
  },
  {
    name: "Autobiography & Biography",
    books: [
      "Caesar: Life of a Colossus - Adrian Goldsworthy",
      "Howard Hughes: His Life and Madness - Donald L. Barlett",
      "Titan: The Life of John D. Rockefeller, Sr. - Ron Chernow",
      "A Man for All Markets - Edward O. Thorp",
      "Ludwig Wittgenstein: The Duty of Genius - Ray Monk",
      "The Fish That Ate the Whale: The Life and Times of America's Banana King - Rich Cohen",
      "Ecce Homo - Friedrich Nietzsche",
      "Genghis Khan and the Making of the Modern World - Jack Weatherford",
      "Ernest Hemingway: A Biography - Mary Dearborn",
      "A Moveable Feast - Ernest Hemingway",
      "The Wizard of Menlo Park: How Thomas Alva Edison Invented the Modern World - Randall E. Stross",
      "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future - Ashlee Vance",
      "Benjamin Franklin: An American Life - Walter Isaacson",
      "Steve Jobs - Walter Isaacson",
      "Einstein: His Life and Universe - Walter Isaacson",
      "Leonardo da Vinci - Walter Isaacson",
      "The Kid Stays in the Picture: A Notorious Life - Robert Evans",
      "Red Notice: A True Story of High Finance, Murder, and One Man's Fight for Justice - Bill Browder",
      "Greenlights - Matthew McConaughey",
      "Shoe Dog: A Memoir by the Creator of Nike - Phil Knight",
      "The Everything Store: Jeff Bezos and the Age of Amazon - Brad Stone",
      "Sons of Wichita: How the Koch Brothers Became America's Most Powerful and Private Dynasty - Daniel Schulman",
      "Idea Makers: Personal Perspectives on the Lives & Ideas of Some Notable People - Stephen Wolfram",
      "Daily Rituals: How Artists Work - Mason Curry",
      "The Start-Up of You: Adapt to the Future, Invest in Yourself, and Transform Your Career - Reid Hoffman",
      "Anything You Want - Derek Sivers",
    ],
  },
  {
    name: "History",
    books: [
      "Ancient Philosophy - Anthony Kenny",
      "Medievel Philosophy - Anthony Kenny",
      "The Rise of Modern Philosophy - Anthony Kelly",
      "Philosophy in the Modern World - Anthony Kenny",
      "Collapse: How Societies Choose to Fail or Succeed - Jared Diamond",
      "Guns, Germs, and Steel: The Fates of Human Societies - Jared Diamond",
      "Endurance: Shackleton's Incredible Voyage - Alfred Lansing",
      "A Short History of Nearly Everything - Bill Bryson",
      "The Lessons of History - Will Durant",
      "Sapiens: A Brief History of Humankind - Yuval Noah Harari",
      "The Worldly Philosophers - Robert Heilbroner",
      "Vintage Tattoos: The Book of Old-School Skin Art - Carol Clark",
      "The Ascent of Money: A Financial History of the World - Niall Ferguson",
    ],
  },
  {
    name: "Psychology",
    books: [
      "Extraordinary Popular Delusions and the Madness of Crowds - Charles Mackay",
      "Alchemy: The Dark Art and Curious Science of Creating Magic in Brands, Business, and Life - Rory Sutherland",
      "The Obstacle is the Way: The Timeless Art of Turning Trials into Triumph - Ryan Holiday",
      "Ego Is the Enemy - Ryan Holiday",
      "The Hour Between Dog and Wolf: Risk Taking, Gut Feelings and the Biology of Boom and Bust - John Coates",
      "How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence - Michael Pollen",
      "Mindset: The New Psychology of Success - Carol S. Dweck",
      "The 48 Laws of Power - Robert Greene",
      "The War of Art: Winning the Inner Creative Battle - Steven Pressfield",
      "The Magic of Thinking Big - David J. Schwartz",
      "Man's Search for Meaning - Viktor E. Frankl",
    ],
  },
  {
    name: "Product Management & Design",
    books: [
      "Inspired: How to Create Tech Products Customers Love - Marty Cagan",
      "Cracking the PM Interview: How to Land a Product Manager Job in Technology - Gayle Laakmann McDowell & Jackie Bavaro",
      "The Product Book: How to Become a Great Product Manager - Product School",
      "Continuous Discovery Habits: Discover Products that Create Customer Value and Business Value - Teresa Torres",
      "Build: An Unorthodox Guide to Making Things Worth Making - Tony Fadell",
      "Hooked: How to Build Habit-Forming Products - Nir Eyal",
      "Product Management's Sacred Seven: The Skills Required to Crush Product Manager Interviews and be a World-Class PM - Parth Detroja, Neel Mehta, Aditya Agashe",
      "Product Management in Practice: A Real-World Guide to the Key Connective Role of the 21st Century - Matt Lemay",
      "The Design of Everyday Things - Donald Norman",
      "Lean Customer Development: Building Products Your Customers Will Buy - Cindy Alvarez",
      "The Art of Innovation: Lessons in Creativity from IDEO, America's Leading Design Firm - Tom Kelley & Jonathan Littman",
      "Escaping the Build Trap: How Effective Product Management Creates Real Value - Melissa Perri",
      "User Story Mapping: Discover the Whole Story, Build the Right Product - Jeff Patton & Peter Economy",
      "Product Roadmaps Relaunched: How to Set Direction while Embracing Uncertainty - C. Todd Lombardo, Bruce McCarthy, Evan Ryan, Michael Connors",
      "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses - Eric Ries",
      "The New Business Road Test: What Entrepreneurs and Executives Should Do Before Launching a Lean Start-Up - John Mullins",
      "How to Measure Anything: Finding the Value of 'Intangibles' in Business - Douglas Hubbard",
    ],
  },
]

// Collapsible component for book categories
const Collapsible = ({ category }: { category: BookCategory }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-amber-800/60 hover:bg-amber-800/70 dark:bg-amber-900/60 dark:hover:bg-amber-900/70 text-amber-100 p-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
      >
        <span className="text-xl font-semibold flex items-center">
          <BookOpen size={20} className="mr-2" />
          {category.name}
        </span>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      {isOpen && (
        <motion.div
          className="mt-2 p-4 bg-amber-900/50 dark:bg-amber-950/60 backdrop-blur-sm rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-disc pl-6 text-amber-50 space-y-2 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
            {category.books.map((book, index) => (
              <li key={index} className="text-amber-50/90 hover:text-amber-50 transition-colors duration-200">
                {book}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function Bookshelf() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={theme === "dark" ? "/images/bookshelf-background-dark.png" : "/images/library-background.png"}
          alt="Library with sunset view"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <header className="pt-6 px-8 md:px-16 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-amber-50 text-3xl font-bold">
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
              <Link href="/" className="text-amber-50 text-xl hover:text-amber-200">
                About
              </Link>
              <Link href="/projects" className="text-amber-50 text-xl hover:text-amber-200">
                Projects
              </Link>
              <Link href="/bookshelf" className="text-amber-50 text-xl hover:text-amber-200">
                Bookshelf
              </Link>
            </nav>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-amber-50">
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </motion.div>
        </header>

        <main className="container mx-auto px-8 md:px-16 pt-16 md:pt-24">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-amber-100"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bookshelf
            </motion.h1>

            <motion.div
              className="mb-8 text-amber-50 text-lg space-y-4 bg-amber-900/50 dark:bg-amber-950/60 p-6 rounded-lg backdrop-blur-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>Since 2014, I've completed the annual "52 in 52" challenge by reading on average one book per week.</p>
              <p>
                Below is a categorized selection of some of my favourite nonfiction books. Fiction books have been
                omitted, but feel free to ask me about my recommendations if you're curious.
              </p>
            </motion.div>

            <div className="space-y-4 pb-12">
              {bookCategories.map((category, index) => (
                <Collapsible key={index} category={category} />
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              className="mt-8 mb-12 p-6 bg-amber-900/50 dark:bg-amber-950/60 rounded-lg backdrop-blur-sm text-amber-50"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Mail className="mr-2" /> Contact Me
              </h2>
              <p className="mb-2">
                Have questions about my reading list or want to discuss any of these books? Feel free to reach out!
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
