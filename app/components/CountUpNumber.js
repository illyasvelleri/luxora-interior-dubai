'use client'

import { useEffect, useRef, useState } from "react"

export default function CountUpNumber({ end, duration = 1000, suffix = "" }) {
  const [value, setValue] = useState(end) // SEO-safe default
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let start = 0
        const step = Math.ceil(end / (duration / 16))

        const counter = setInterval(() => {
          start += step
          if (start >= end) {
            setValue(end)
            clearInterval(counter)
          } else {
            setValue(start)
          }
        }, 16)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{value}{suffix}</span>
}
