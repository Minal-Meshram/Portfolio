import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ThemeToggle from "./Toggle"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setScrolled(window.scrollY > 20)

      // Handle active section highlighting
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu on click
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0b0f1a]/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-200 dark:border-purple-500/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO - Purple Gradient */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
        >
          Minal Meshram
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 items-center">
          {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className={`relative text-sm font-medium transition-all duration-300 capitalize ${
                activeSection === section
                  ? "text-purple-500 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
              }`}
            >
              {section}

              {activeSection === section && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* RIGHT SIDE - Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0b0f1a]/95 backdrop-blur-md border-b border-gray-200 dark:border-purple-500/20 shadow-lg"
        >
          <div className="flex flex-col py-4">
            {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 capitalize ${
                  activeSection === section
                    ? "text-purple-500 dark:text-purple-400 bg-purple-50 dark:bg-purple-500/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/5"
                }`}
              >
                {section}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar