"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: "chars" | "words" | "lines"
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  threshold?: number
  rootMargin?: string
  textAlign?: "left" | "center" | "right"
  onLetterAnimationComplete?: () => void
}

export function SplitText({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const elementsRef = useRef<HTMLSpanElement[]>([])

  const splitContent = () => {
    if (splitType === "words") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) elementsRef.current[index] = el
          }}
          className="inline-block"
          style={{ opacity: 0 }}
        >
          {word}
          {index < text.split(" ").length - 1 && "\u00A0"}
        </span>
      ))
    }

    return text.split("").map((char, index) => (
      <span
        key={index}
        ref={(el) => {
          if (el) elementsRef.current[index] = el
        }}
        className="inline-block"
        style={{ opacity: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  useEffect(() => {
    const elements = elementsRef.current

    if (!elements.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: onLetterAnimationComplete,
      })
    })

    return () => ctx.revert()
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete])

  return (
    <div ref={containerRef} className={className} style={{ textAlign }}>
      {splitContent()}
    </div>
  )
}

export default SplitText
