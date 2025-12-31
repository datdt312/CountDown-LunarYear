
"use client"
import { useEffect, useState } from "react"
import { Card, CardContent } from "../components/ui/card"
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
    <main style={{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>Lunar New Year Countdown</h1>
      <Card><CardContent><h2>{t.d} Days</h2></CardContent></Card>
      <Card><CardContent><h2>{pad(t.h)}:{pad(t.m)}:{pad(t.s)}</h2></CardContent></Card>
    </main>
  )
}
