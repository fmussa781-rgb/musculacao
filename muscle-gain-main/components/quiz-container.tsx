"use client"

import { useState } from "react"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"
import { useLanguage } from "@/hooks/use-language"
import { QUIZ_QUESTIONS, QUIZ_MESSAGES } from "@/lib/quiz-data"
import ProgressBar from "./progress-bar"

export default function QuizContainer() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const { language } = useLanguage()

  const totalQuestions = QUIZ_QUESTIONS.length

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex]
    setAnswers(newAnswers)

    // If this was the last question
    if (currentQuestion === totalQuestions - 1) {
      setIsComplete(true)
    } else {
      // Move to next question
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setIsComplete(false)
  }

  if (isComplete) {
    return <QuizResults answers={answers} onRestart={handleRestart} />
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ProgressBar current={currentQuestion + 1} total={totalQuestions} />

      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 sm:px-8">
        <div className="w-full max-w-md">
          {currentQuestion === 0 && (
            <div className="mb-8 text-center space-y-4 animate-fadeIn">
              <div className="text-4xl mb-4">😳</div>
              <h1 className="text-3xl font-bold text-white mb-3">{QUIZ_MESSAGES[language as keyof typeof QUIZ_MESSAGES].opening.title}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{QUIZ_MESSAGES[language as keyof typeof QUIZ_MESSAGES].opening.subtitle}</p>
              <button
                onClick={() => handleAnswer(0)}
                className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {QUIZ_MESSAGES[language as keyof typeof QUIZ_MESSAGES].startButton}
              </button>
            </div>
          )}

          {currentQuestion > 0 && (
            <QuizQuestion
              question={QUIZ_QUESTIONS[currentQuestion - 1]}
              questionNumber={currentQuestion}
              totalQuestions={totalQuestions}
              onAnswer={handleAnswer}
              language={language}
            />
          )}
        </div>
      </div>
    </div>
  )
}
