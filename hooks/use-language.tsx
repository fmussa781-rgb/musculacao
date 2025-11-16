"use client"

import { useEffect, useState } from "react"

type Lang = "en" | "pt" | "es" | "fr" | "hi"

export function useLanguage() {
  const [language, setLanguage] = useState<Lang>("en")

  useEffect(() => {
    // Get browser language
    const browserLanguage = navigator.language.split("-")[0].toLowerCase()

    // Determine language (default to English)
    const supported: Lang[] = ["en", "pt", "es", "fr", "hi"]
    const lang: Lang = supported.includes(browserLanguage as Lang) ? (browserLanguage as Lang) : "en"

    setLanguage(lang)
  }, [])

  return { language }
}
