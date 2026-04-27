import { Search, SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center gap-2 w-full", className)}>
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search your food"
          className="w-full h-14 pl-12 pr-4 bg-white rounded-3xl border-none shadow-sm focus:ring-2 focus:ring-primary/20 outline-none text-gray-600 placeholder:text-gray-400"
        />
      </div>
      <button className="h-14 w-14 flex items-center justify-center bg-primary/60 text-white rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary transition-colors">
        <SlidersHorizontal size={24} />
      </button>
    </div>
  )
}
