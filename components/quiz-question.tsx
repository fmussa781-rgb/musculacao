"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { QUIZ_MESSAGES, QUIZ_TRANSLATIONS } from "@/lib/quiz-data"
type Lang = "en" | "pt" | "es" | "fr" | "hi"

interface QuestionProps {
  question: {
    id: number
    titleKey: string
    options: Array<{ textKey: string; icon: string }>
  }
  questionNumber: number
  totalQuestions: number
  onAnswer: (answerIndex: number) => void
  language: Lang
}

export default function QuizQuestion({ question, questionNumber, totalQuestions, onAnswer, language }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
    setTimeout(() => {
      onAnswer(index)
    }, 200)
  }

  const t = QUIZ_TRANSLATIONS[language as keyof typeof QUIZ_TRANSLATIONS]
  const m = QUIZ_MESSAGES[language as keyof typeof QUIZ_MESSAGES]

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-6 animate-slideIn"
    >
      <div className="space-y-2">
        <p className="text-sm text-gray-400">
          {m.questionLabel} {questionNumber}/{totalQuestions}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          {t.questions[question.titleKey as keyof typeof t.questions] || question.titleKey}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelectAnswer(index)}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium flex items-start gap-3 ${
              selectedAnswer === index
                ? "bg-red-600 border-red-600 text-white"
                : "bg-zinc-900 border-zinc-800 text-white hover:border-red-600 hover:bg-zinc-800"
            }`}
          >
            <span className="text-xl flex-shrink-0">{option.icon}</span>
            <span className="flex-1">{t.options[option.textKey as keyof typeof t.options] || option.textKey}</span>
          </motion.button>
        ))}
      </div>

      <p className="text-xs text-gray-500 text-center pt-4">{QUIZ_MESSAGES[language].noScroll}</p>
    </motion.div>
  )
}
