import { useEffect, useState } from "react"

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const html = document.documentElement

    if (saved === "dark") {
      html.classList.add("dark")
      setDark(true)
    } else {
      html.classList.remove("dark") // ✅ force remove
      setDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement

    // 🔥 force toggle (no confusion)
    html.classList.toggle("dark")

    const isDark = html.classList.contains("dark")

    localStorage.setItem("theme", isDark ? "dark" : "light")
    setDark(isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-white/10"
    >
      {dark ? "🌞" : "🌙"}
    </button>
  )
}

export default ThemeToggle