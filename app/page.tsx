"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

function getTimeLeft() {
  const target = new Date("2026-02-17T00:00:00")
  const now = new Date()
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds }
}

export default function Page() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Lunar New Year Countdown
        </h1>

        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="text-6xl font-bold">{time.days}</div>
            <div className="mt-2 text-sm text-muted-foreground">Days</div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="flex items-center justify-center p-8">
            <div className="flex items-center gap-3 text-4xl font-mono font-bold">
              <span>{pad(time.hours)}</span>
              <span className="text-muted-foreground">:</span>
              <span>{pad(time.minutes)}</span>
              <span className="text-muted-foreground">:</span>
              <span>{pad(time.seconds)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
