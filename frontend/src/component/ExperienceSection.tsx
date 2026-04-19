import { motion } from "framer-motion"

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Bootcoding",
    period: "Jan 2026 – Present",
    description:
      "Developing scalable web applications using React, Next.js, Node.js, and MongoDB. Implemented REST APIs, improved UI responsiveness, and optimized performance, reducing page load time by ~30%. Collaborating with the team using Git and Agile practices.",
  },
  {
    title: "Full Stack Java Course",
    company: "Naresh i Technologies",
    period: "Jun 2022 – Aug 2022",
    description:
      "Learned core Java, JDBC, Servlets, and basic Spring concepts. Built mini-projects like CRUD applications with MySQL and gained hands-on experience in backend development and database integration.",
  },
  {
    title: "MERN Stack Developer",
    company: "Apna College",
    period: "Jan 2025 – Nov 2025",
    description:
      "Built full-stack projects using MongoDB, Express.js, React, and Node.js. Developed responsive UI components, implemented authentication (JWT), and integrated APIs for real-world applications like portfolio sites and dashboards.",
  },
  {
    title: "B.Tech Information Technology",
    company: "DBATU University",
    period: "2023 – 2026",
    description:
      "Studying core subjects including Data Structures & Algorithms, DBMS, Operating Systems, and Web Development. Actively building projects and improving problem-solving skills on platforms like LeetCode.",
  },
]

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative py-28 bg-white dark:bg-[#0b0f1a] text-black dark:text-white overflow-hidden"
    >
      {/* Purple Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 blur-[120px] opacity-20"></div>
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 blur-[150px] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* heading */}
        <div className="text-center mb-20">
          <p className="text-purple-500 dark:text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My journey so far
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300">
            From academic learning to real-world development experience.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line - pure purple gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] 
            bg-gradient-to-b from-purple-400 via-purple-600 to-indigo-500" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* dot with purple glow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 
                  bg-gradient-to-r from-purple-500 to-indigo-500
                  border-4 border-white dark:border-[#0b0f1a] 
                  rounded-full shadow-lg shadow-purple-500/30" />

                {/* card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="w-[45%] rounded-3xl p-6 shadow-xl backdrop-blur transition-all duration-300
                    bg-gray-100 dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20
                    group"
                >
                  <span className="text-sm text-purple-500 dark:text-purple-400 font-semibold">
                    {exp.period}
                  </span>

                  <h3 className="mt-1 text-xl font-bold group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                    {exp.company}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection