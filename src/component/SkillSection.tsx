import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Palette,
  Server,
  GitBranch,
  Globe,
  Terminal,
  Smartphone,
} from "lucide-react"

const skills = [
  { name: "React / Next.js", percent: 85, Icon: Code2 },
  { name: "TypeScript", percent: 80, Icon: Terminal },
  { name: "Tailwind CSS", percent: 90, Icon: Palette },
  { name: "Node.js", percent: 75, Icon: Server },
  { name: "MongoDB", percent: 70, Icon: Database },
  { name: "Express.js", percent: 80, Icon: Globe },
  { name: "Git & GitHub", percent: 85, Icon: GitBranch },
  { name: "Java", percent: 70, Icon: Smartphone },
]

const SkillSection = () => {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 
      bg-white dark:bg-[#0b0f1a] 
      text-black dark:text-white 
      overflow-hidden"
    >
      {/* Purple Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 blur-[120px] opacity-20"></div>
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 blur-[150px] opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-500 dark:text-purple-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Technologies I work with
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            A blend of front-end craft and back-end logic.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map(({ name, percent, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                rounded-3xl p-6 backdrop-blur transition-all duration-300
                bg-gray-100 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                hover:border-purple-500/40 
                hover:shadow-lg hover:shadow-purple-500/20
                group
              "
            >
              {/* Icon - with purple hover effect */}
              <div className="w-12 h-12 rounded-xl 
                bg-gray-200 dark:bg-white/10 
                flex items-center justify-center mb-5
                group-hover:bg-purple-500/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title - with purple hover */}
              <h3 className="font-semibold mb-4 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                {name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full h-2 
                bg-gray-300 dark:bg-white/10 
                rounded-full mb-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  transition={{ duration: 1, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                />
              </div>

              {/* Percentage */}
              <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                {percent}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection