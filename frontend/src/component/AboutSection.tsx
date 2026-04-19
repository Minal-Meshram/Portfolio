import { motion } from "framer-motion"
import { GraduationCap, Heart, Rocket, Sparkles } from "lucide-react"

const cards = [
  {
    icon: GraduationCap,
    title: "Fresh Graduate",
    desc: "B.Tech in Information Technology with a passion for building scalable web applications.",
  },
  {
    icon: Heart,
    title: "Passionate Coder",
    desc: "Love turning ideas into reality through clean, efficient and beautiful code.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    desc: "Quickly adapt to new technologies and thrive in fast-paced environments.",
  },
  {
    icon: Sparkles,
    title: "Design Enthusiast",
    desc: "Eye for aesthetics — I believe great software looks as good as it works.",
  },
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-28 bg-white dark:bg-[#0b0f1a] relative overflow-hidden text-black dark:text-white"
    >
      {/* subtle glow - purple */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-purple-500 dark:text-purple-400 font-semibold tracking-widest uppercase text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A little bit about myself
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I'm a fresher full-stack developer specializing in the MERN stack. 
            I love designing modern UI experiences and building efficient backend APIs.
          </p>
        </div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="
                rounded-3xl p-8 
                bg-gray-100 dark:bg-white/5 
                backdrop-blur 
                border border-gray-200 dark:border-white/10 
                hover:border-purple-500/40 
                hover:shadow-lg hover:shadow-purple-500/20 
                transition-all duration-300
                group
              "
            >
              {/* icon - with purple gradient on hover */}
              <div className="w-14 h-14 rounded-2xl bg-gray-200 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 transition-colors duration-300">
                <Icon className="w-6 h-6 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* title */}
              <h3 className="font-semibold text-lg mb-3 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                {title}
              </h3>

              {/* desc */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection