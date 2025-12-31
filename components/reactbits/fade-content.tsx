"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface FadeContentProps {
  children: ReactNode
  blur?: boolean
  duration?: number
  delay?: number
  easing?: string
  threshold?: number
  initialOpacity?: number
  className?: string
}

export function FadeContent({
  children,
  blur = false,
  duration = 1000,
  delay = 0,
  easing = "ease-out",
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: initialOpacity,
        filter: blur ? "blur(10px)" : "blur(0px)",
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }
          : {
              opacity: initialOpacity,
              filter: blur ? "blur(10px)" : "blur(0px)",
              y: 20,
            }
      }
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: easing === "ease-out" ? [0, 0, 0.2, 1] : [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeContent
