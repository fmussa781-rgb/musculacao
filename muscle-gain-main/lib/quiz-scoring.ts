export type ProfileType = "beginner" | "intermediate" | "advanced" | "committed"

export function calculateProfile(answers: number[]): { type: ProfileType } {
  // Skip the first answer (opening button)
  const quizAnswers = answers.slice(0, 7)

  let score = 0

  // Q1: Goal (0-3 points)
  score += quizAnswers[0] || 0

  // Q2: Body feeling (weight by frustration level)
  if (quizAnswers[1] === 3)
    score += 3 // slowest growth = most frustrated
  else if (quizAnswers[1] === 0) score += 2
  else score += quizAnswers[1]

  // Q3: Time trying (reflects persistence)
  if (quizAnswers[2] === 3)
    score += 3 // quit and returned
  else if (quizAnswers[2] === 2)
    score += 2 // 1+ year
  else score += quizAnswers[2]

  // Q4: Nutrition (0-3 points)
  score += quizAnswers[3] || 0

  // Q5: Training frequency (0-3 points)
  score += quizAnswers[4] || 0

  // Q6: Biggest obstacle (0-3 points)
  score += quizAnswers[5] || 0

  // Q7: Commitment level (critical)
  const commitment = quizAnswers[6]
  if (commitment === 0)
    score += 4 // YES NOW = strongest signal
  else if (commitment === 1) score += 2
  else score += commitment

  // Calculate profile based on total score
  if (score >= 18) return { type: "committed" }
  if (score >= 14) return { type: "advanced" }
  if (score >= 8) return { type: "intermediate" }
  return { type: "beginner" }
}

export const PROFILE_MESSAGES = {
  en: {
    default: {
      title: "Body in Evolution",
      description:
        "You have everything to grow... You just need a sure plan that shows you exactly what to do to gain muscle day after day without excuses.",
      benefits: [
        "Simple but effective workouts",
        "Protein-based meal plan",
        "Weekly progression that delivers results",
        "Daily motivation and monitoring",
      ],
    },
    beginner: {
      title: "Starting Your Journey",
      description:
        "You're just beginning, and that's perfect! You have the motivation and the desire to change. Now you just need the right direction and guidance to transform your body in the next 30 days.",
      benefits: [
        "Beginner-friendly workout routine",
        "Simple meal planning made easy",
        "Step-by-step progression system",
        "Daily support and motivation",
      ],
    },
    intermediate: {
      title: "Ready to Level Up",
      description:
        "You've got the experience and the discipline. You're tired of slow results and want to see real muscle gains NOW. Our program is exactly what you need to break through your plateau.",
      benefits: [
        "Optimized workout for faster gains",
        "Advanced nutrition strategy",
        "Personalized progression plan",
        "Weekly coaching and adjustments",
      ],
    },
    advanced: {
      title: "Pushing Past the Plateau",
      description:
        "You've been training hard, but results have slowed down. You need advanced techniques and a structured program to get back on track. This 30-day challenge will reignite your gains.",
      benefits: [
        "Advanced training techniques",
        "Macro-optimized meal plan",
        "Plateau-breaking protocol",
        "Expert tracking and analysis",
      ],
    },
    committed: {
      title: "All-In Champion",
      description:
        "You're not just looking for results—you're ready to COMMIT to transformation. This is your moment. 30 days of intense focus, perfect execution, and unstoppable growth.",
      benefits: [
        "VIP premium workout program",
        "Competition-level meal plan",
        "Daily accountability coaching",
        "Guaranteed transformation results",
      ],
    },
  },
  pt: {
    default: {
      title: "Corpo em Evolução",
      description:
        "Você tem tudo para crescer… Só falta um plano certeiro que mostra exatamente o que fazer para ganhar massa dia após dia sem mimimi.",
      benefits: [
        "Treinos simples porém eficientes",
        "Plano alimentar baseado em proteínas",
        "Progressão semanal que dá resultado",
        "Motivação e acompanhamento diário",
      ],
    },
    beginner: {
      title: "Começando Sua Jornada",
      description:
        "Você está apenas começando, e isso é perfeito! Tem a motivação e a vontade de mudar. Agora precisa apenas da direção certa e orientação para transformar seu corpo nos próximos 30 dias.",
      benefits: [
        "Rotina de treino amiga do iniciante",
        "Planejamento alimentar simplificado",
        "Sistema de progressão passo a passo",
        "Suporte diário e motivação constante",
      ],
    },
    intermediate: {
      title: "Pronto para Evoluir",
      description:
        "Você tem experiência e disciplina. Está cansado de resultados lentos e quer ganho real de massa AGORA. Nosso programa é exatamente o que você precisa para quebrar o platô.",
      benefits: [
        "Treino otimizado para ganhos rápidos",
        "Estratégia avançada de nutrição",
        "Plano de progressão personalizado",
        "Coaching semanal e ajustes precisos",
      ],
    },
    advanced: {
      title: "Superando o Platô",
      description:
        "Você treina pra caramba, mas os resultados desaceleraram. Precisa de técnicas avançadas e um programa estruturado para voltar aos trilhos. Este desafio de 30 dias vai acender de novo seus ganhos.",
      benefits: [
        "Técnicas avançadas de treinamento",
        "Plano alimentar macro-otimizado",
        "Protocolo quebra-platô comprovado",
        "Rastreamento e análise especializada",
      ],
    },
    committed: {
      title: "Campeão Total",
      description:
        "Você não só quer resultados—quer COMPROMETER com transformação. Este é seu momento. 30 dias de foco intenso, execução perfeita e crescimento imparável.",
      benefits: [
        "Programa premium VIP de treinos",
        "Plano alimentar em nível competitivo",
        "Coaching de accountability diário",
        "Resultados garantidos de transformação",
      ],
    },
  },
  es: {
    default: {
      title: "Cuerpo en Evolución",
      description:
        "Tienes todo para crecer… Solo te falta un plan certero que te muestre exactamente qué hacer para ganar masa día tras día sin excusas.",
      benefits: [
        "Entrenamientos simples pero efectivos",
        "Plan de comidas basado en proteínas",
        "Progresión semanal que da resultados",
        "Motivación y seguimiento diario",
      ],
    },
    beginner: {
      title: "Comenzando Tu Camino",
      description:
        "Estás apenas comenzando, ¡y eso es perfecto! Tienes la motivación y el deseo de cambiar. Ahora solo necesitas la dirección correcta para transformar tu cuerpo en 30 días.",
      benefits: [
        "Rutina de entrenamiento para principiantes",
        "Planificación de comidas simplificada",
        "Sistema de progresión paso a paso",
        "Apoyo diario y motivación constante",
      ],
    },
    intermediate: {
      title: "Listo para Evolucionar",
      description:
        "Tienes experiencia y disciplina. Estás cansado de resultados lentos y quieres ganancia real de masa AHORA. Nuestro programa es exactamente lo que necesitas para romper tu meseta.",
      benefits: [
        "Entrenamiento optimizado para ganancias rápidas",
        "Estrategia avanzada de nutrición",
        "Plan de progresión personalizado",
        "Coaching semanal y ajustes precisos",
      ],
    },
    advanced: {
      title: "Superando La Meseta",
      description:
        "Entrenas duro, pero los resultados se han desacelerado. Necesitas técnicas avanzadas y un programa estructurado para volver a la pista. Este desafío de 30 días reavivará tus ganancias.",
      benefits: [
        "Técnicas avanzadas de entrenamiento",
        "Plan de comidas macro-optimizado",
        "Protocolo rompedor de mesetas",
        "Seguimiento y análisis especializado",
      ],
    },
    committed: {
      title: "Campeón Total",
      description:
        "No solo quieres resultados—quieres COMPROMETERTE con la transformación. Este es tu momento. 30 días de enfoque intenso, ejecución perfecta y crecimiento imparable.",
      benefits: [
        "Programa premium VIP de entrenamientos",
        "Plan de comidas a nivel competitivo",
        "Coaching de accountability diario",
        "Resultados garantizados de transformación",
      ],
    },
  },
}
