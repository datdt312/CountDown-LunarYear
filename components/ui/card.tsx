
import * as React from "react"
export function Card({ children, className }: any) {
  return <div className={"rounded-xl border shadow "+(className||"")}>{children}</div>
}
export function CardContent({ children, className }: any) {
  return <div className={"p-6 "+(className||"")}>{children}</div>
}
