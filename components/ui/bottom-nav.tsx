"use client"

import { Home, Heart, Trash2, Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: Heart, label: "Favorite", href: "/favorites" },
    { icon: Trash2, label: "Trash", href: "/trash" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-lg border-t border-gray-100 flex items-center justify-around px-6 pb-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 transition-all",
              isActive ? "text-primary" : "text-gray-400"
            )}
          >
            <div className={cn(
              "p-2 rounded-2xl transition-all",
              isActive && "bg-primary text-white shadow-lg shadow-primary/30"
            )}>
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
