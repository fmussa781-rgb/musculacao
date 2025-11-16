"use client"

export default function ProgressBar({
  current,
  total,
}: {
  current: number
  total: number
}) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full bg-zinc-900 border-b border-zinc-800 sticky top-0 z-40">
      <div className="max-w-2xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-400">Progress</span>
          <span className="text-xs font-medium text-red-500">
            {current}/{total}
          </span>
        </div>
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}
