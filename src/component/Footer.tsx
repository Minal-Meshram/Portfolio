import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="relative py-8 px-6 bg-white dark:bg-[#0b0f1a] border-t border-gray-200 dark:border-purple-500/20 overflow-hidden">
      {/* Subtle purple glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-500 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full bg-gray-100 dark:bg-white/10 text-purple-500 dark:text-purple-400 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Social Links Row (Optional - for quick access) */}
        
        {/* Main Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-600 dark:text-gray-400"
        >
          Designed & Built with{" "}
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              color: ['#a855f7', '#ec4899', '#a855f7']
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="inline-block text-purple-500 dark:text-purple-400"
          >
            <Heart className="w-4 h-4 inline fill-current" />
          </motion.span>{" "}
          — © {new Date().getFullYear()} Minal Meshram
        </motion.p>

      
      </div>
    </footer>
  )
}

export default Footer