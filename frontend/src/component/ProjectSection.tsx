import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "Full-featured admin dashboard with real-time analytics, product management, order tracking, and user analytics.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
 
  {
    title: "Wanderlust web",
    desc: "Beautiful weather application with location detection, 7-day forecast, interactive maps, and weather alerts.",
    tags: ["React", "JS", "MongoDB", "Express", "Node.js"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with smooth animations, dark mode, and responsive design. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    live: "https://minal-meshram.vercel.app",
    github: "https://github.com/Minal-Meshram/portfolio",
  },
]

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 
      bg-white dark:bg-[#0b0f1a] 
      text-black dark:text-white
      overflow-hidden"
    >
      {/* Purple Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 blur-[120px] opacity-20"></div>
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-500 dark:text-purple-400 font-semibold tracking-widest uppercase mb-3">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Things I've Built
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A collection of projects showcasing my real-world work.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                rounded-2xl overflow-hidden 
                bg-gray-100 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                hover:shadow-lg hover:shadow-purple-500/20 
                hover:border-purple-500/30
                transition-all duration-300
                group
              "
            >
              {/* IMAGE */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-all duration-300"></div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-xs rounded-full 
                        bg-gray-200 dark:bg-white/10
                        text-gray-700 dark:text-gray-300
                        group-hover:bg-purple-500/20
                        group-hover:text-purple-600 dark:group-hover:text-purple-400
                        transition-all duration-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1 px-3 py-1.5 text-sm rounded-full 
                      bg-gray-200 dark:bg-white/10
                      text-gray-800 dark:text-white
                      hover:bg-purple-500 hover:text-white
                      hover:scale-105 transition-all duration-300
                    "
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-1 px-3 py-1.5 text-sm rounded-full 
                      bg-gradient-to-r from-purple-500 to-indigo-500
                      text-white 
                      hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
                      transition-all duration-300
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection