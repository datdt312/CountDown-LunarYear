
"use client"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
const target=new Date("2026-02-17T00:00:00")
function getLeft(){
  const diff=target.getTime()-Date.now()
  if(diff<=0) return {d:0,h:0,m:0,s:0}
  return {
    d:Math.floor(diff/86400000),
    h:Math.floor(diff/3600000)%24,
    m:Math.floor(diff/60000)%60,
    s:Math.floor(diff/1000)%60
  }
}
export default function Page(){
  const [t,setT]=useState(getLeft())
  useEffect(()=>{const i=setInterval(()=>setT(getLeft()),1000);return()=>clearInterval(i)},[])
  const pad=(n:number)=>String(n).padStart(2,"0")
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Lunar New Year Countdown</h1>
      <Card><CardContent><div className="text-6xl font-bold text-center">{t.d}</div><div className="text-center">Days</div></CardContent></Card>
      <Card><CardContent><div className="text-4xl font-mono text-center">{pad(t.h)}:{pad(t.m)}:{pad(t.s)}</div></CardContent></Card>
    </main>
  )
}
