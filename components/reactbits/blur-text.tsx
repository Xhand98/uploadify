"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, type Variants } from "motion/react"

interface BlurTextProps {
  text: string
  animateBy?: "words" | "letters"
  direction?: "top" | "bottom"
  delay?: number
  stepDuration?: number
  threshold?: number
  rootMargin?: string
  className?: string
  onAnimationComplete?: () => void
}

export default function BlurText({
  text,
  animateBy = "words",
  direction = "top",
  delay = 200,
  stepDuration = 0.35,
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: rootMargin, amount: threshold })
  const controls = useAnimation()

  const elements = animateBy === "words" ? text.split(" ") : text.split("")

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "top" ? -20 : 20,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: stepDuration,
        delay: i * (delay / 1000),
        ease: "easeOut",
      },
    }),
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className={className}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="inline-block"
          onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
        >
          {element}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </div>
  )
}
