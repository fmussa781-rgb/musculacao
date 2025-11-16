"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { calculateProfile, PROFILE_MESSAGES } from "@/lib/quiz-scoring"
import { Flame, Trophy } from "lucide-react"
import ProgressBar from "@/components/progress-bar"
import { QUIZ_QUESTIONS } from "@/lib/quiz-data"

interface ResultsProps {
  answers: number[]
  onRestart: () => void
}

export default function QuizResults({ answers, onRestart }: ResultsProps) {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const profile = calculateProfile(answers)
  const messages = PROFILE_MESSAGES[language as keyof typeof PROFILE_MESSAGES] || PROFILE_MESSAGES.en
  const profileMessage = messages[profile.type] || messages.default
  const totalQuestions = QUIZ_QUESTIONS.length

  const handleCopyLink = () => {}

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ProgressBar current={totalQuestions} total={totalQuestions} />
      {/* Header */}
      <div className="bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800 px-6 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <div className="text-5xl mb-4">🎯</div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            {language === "pt"
              ? "Seu Perfil: Corpo em Evolução 💪🔥"
              : language === "es"
                ? "¡Tu Perfil: Cuerpo en Evolución 💪🔥!"
                : "Your Profile: Body in Evolution 💪🔥"}
          </h1>
          <p className="text-gray-400 text-lg">
            {language === "pt"
              ? `Tipo: ${profileMessage.title}`
              : language === "es"
                ? `Tipo: ${profileMessage.title}`
                : `Type: ${profileMessage.title}`}
          </p>
        </div>
      </div>

      {/* Results Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Main Message */}
          <div className="space-y-4 bg-zinc-900 rounded-lg p-6 border border-red-600/20">
            <p className="text-xl text-white leading-relaxed">{profileMessage.description}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-red-500" />
              {language === "pt"
                ? "O que você vai ganhar:"
                : language === "es"
                  ? "Lo que vas a ganar:"
                  : "What you will gain:"}
            </h2>
            <div className="space-y-3">
              {[
                language === "pt"
                  ? "Treinos curtos, intensos e fáceis de seguir ✅"
                  : language === "es"
                    ? "Entrenamientos cortos, intensos y fáciles de seguir ✅"
                    : "Short, intense, easy-to-follow workouts ✅",
                language === "pt"
                  ? "Cardápio semanal focado em proteína ✅"
                  : language === "es"
                    ? "Menú semanal enfocado en proteína ✅"
                    : "Weekly menu focused on protein ✅",
                language === "pt"
                  ? "Acompanhamento e evolução dia a dia ✅"
                  : language === "es"
                    ? "Acompañamiento y evolución día a día ✅"
                    : "Daily tracking and progression ✅",
                language === "pt"
                  ? "Resultados reais em 30 dias ✅"
                  : language === "es"
                    ? "Resultados reales en 30 días ✅"
                    : "Real results in 30 days ✅",
              ].map((benefit: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-red-600/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Flame className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <a
              href="/muscle.html"
              className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg text-center"
            >
              {language === "pt"
                ? "👉 Começar o Desafio Corpo Forte — Agora Mesmo!"
                : language === "es"
                  ? "👉 ¡Comenzar el Desafío Cuerpo Fuerte — Ahora!"
                  : "👉 Start the Strong Body Challenge — Right Now!"}
            </a>
            <p className="text-center text-gray-400 italic text-sm">
              {language === "pt"
                ? "Você está muito perto do físico que quer. O que falta é um plano guiado, simples e feito para ganhar músculos sem enrolação."
                : language === "es"
                  ? "Estás muy cerca del físico que quieres. Solo falta un plan guiado, simple y hecho para ganar músculo sin rodeos."
                  : "You are very close to the physique you want. All you need is a guided, simple plan made to build muscle without fuss."}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 px-6 py-6 text-center text-gray-500 text-sm">
        <p>
          {language === "pt"
            ? "© 2025 Desafio Corpo Forte. Todos os direitos reservados."
            : language === "es"
              ? "© 2025 Desafío Cuerpo Fuerte. Todos los derechos reservados."
              : "© 2025 Strong Body Challenge. All rights reserved."}
        </p>
      </div>
    </div>
  )
}
