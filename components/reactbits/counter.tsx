"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

interface CounterProps {
  value: number
  direction?: "up" | "down"
  duration?: number
  className?: string
}

export default function Counter({ value, direction = "up", duration = 2, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(direction === "up" ? 0 : value)

  useEffect(() => {
    if (!isInView) return

    const startValue = direction === "up" ? 0 : value
    const endValue = direction === "up" ? value : 0
    const startTime = performance.now()
    const durationMs = duration * 1000

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOut

      setCount(Math.round(currentValue * 10) / 10)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, direction, duration])

  // Format number with decimals if needed
  const displayValue = Number.isInteger(value) ? Math.round(count) : count.toFixed(1)

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
