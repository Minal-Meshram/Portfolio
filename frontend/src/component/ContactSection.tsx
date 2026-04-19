import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/Minal-Meshram", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/minal-meshram-34ba5b21a/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/your-username", label: "Twitter" },
  { icon: Mail, href: "mailto:your-email@gmail.com", label: "Email" },
]

const ContactSection = () => {
  const [focused, setFocused] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully ✅");

      // reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong ❌");
  }
};

  return (
    <section
      id="contact"
      className="relative py-28 bg-white dark:bg-[#0b0f1a] text-black dark:text-white overflow-hidden"
    >
      {/* 🔥 Purple Glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 blur-[120px] opacity-20"></div>
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 blur-[150px] opacity-10"></div>

      <div className="max-w-xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-purple-500 dark:text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's work together
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Form */}
       <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          {[
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Your Email", type: "email" },
          ].map((field) => {
            const value = form[field.name as keyof typeof form]

            return (
              <div key={field.name} className="relative">
                <motion.label
                  animate={{
                    y: focused === field.name || value ? -8 : 16,
                    scale: focused === field.name || value ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute left-3 px-1 text-sm origin-left pointer-events-none
                    text-gray-500 dark:text-gray-400
                    bg-white dark:bg-[#0b0f1a]
                  "
                >
                  {field.label}
                </motion.label>

                <input
                  type={field.type}
                  value={value}
                  onChange={(e) =>
                    setForm({ ...form, [field.name]: e.target.value })
                  }
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  placeholder=" "
                  className="
                    w-full px-3 pt-6 pb-2 rounded-xl
                    bg-gray-100 dark:bg-white/10
                    text-black dark:text-white
                    border border-gray-300 dark:border-white/20
                    outline-none
                    focus:ring-2 focus:ring-purple-500/40
                    focus:border-purple-500/40
                    transition-all duration-300
                  "
                />
              </div>
            )
          })}

          {/* Message */}
          <div className="relative">
            <motion.label
              animate={{
                y: focused === "message" || form.message ? -8 : 16,
                scale: focused === "message" || form.message ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="
                absolute left-3 px-1 text-sm origin-left pointer-events-none
                text-gray-500 dark:text-gray-400
                bg-white dark:bg-[#0b0f1a]
              "
            >
              Your Message
            </motion.label>

            <textarea
              rows={4}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              placeholder=" "
              className="
                w-full px-3 pt-6 pb-2 rounded-xl
                bg-gray-100 dark:bg-white/10
                text-black dark:text-white
                border border-gray-300 dark:border-white/20
                outline-none resize-none
                focus:ring-2 focus:ring-purple-500/40
                focus:border-purple-500/40
                transition-all duration-300
              "
            />
          </div>

          {/* Button - Pure Purple Gradient */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="
              w-full flex items-center justify-center gap-2 py-4 rounded-full
              text-white font-semibold
              bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-500
              shadow-lg hover:shadow-purple-500/30 
              transition-all duration-300
            "
          >
            <Send size={18} /> Send Message
          </motion.button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-12">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -6, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-12 h-12 rounded-2xl
                bg-gray-100 dark:bg-white/10
                border border-gray-300 dark:border-white/20
                flex items-center justify-center
                text-gray-600 dark:text-gray-300
                hover:bg-purple-500 hover:text-white
                hover:border-purple-500
                transition-all duration-300
              "
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Minal Meshram. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection