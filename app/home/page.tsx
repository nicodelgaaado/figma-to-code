"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, ChevronDown, Menu } from "lucide-react"
import { SearchBar } from "@/components/ui/search-bar"
import { FoodCard } from "@/components/ui/food-card"
import { BottomNav } from "@/components/ui/bottom-nav"
import { cn } from "@/lib/utils"

const CATEGORIES = [
  { id: "biryani", name: "Biryani", icon: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=100&q=80" },
  { id: "pizza", name: "Pizza", icon: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&q=80" },
  { id: "burger", name: "Burger", icon: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=80" },
  { id: "sandwich", name: "Sandwich", icon: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?w=100&q=80" },
]

const FOOD_DATA = {
  biryani: [
    {
      id: "hyderabadi-biryani",
      name: "Hyderabadi Biryani",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80",
      distance: "2.5 km",
      deliveryTime: "20 min delivery",
      rating: 5,
    },
    {
      id: "bombay-biryani",
      name: "Bombay Biryani",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=80",
      distance: "3.5 km",
      deliveryTime: "25 min delivery",
      rating: 5,
    },
  ],
  pizza: [
    {
      id: "onion-capsicum-pizza",
      name: "onion capsicum pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
      distance: "2.5 km",
      deliveryTime: "20 min delivery",
      rating: 5,
    },
    {
      id: "panner-pizza",
      name: "Panner pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
      distance: "3.5 km",
      deliveryTime: "25 min delivery",
      rating: 5,
    },
  ],
  burger: [
    {
      id: "veg-burger",
      name: "Veg Burger",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
      distance: "2.5 km",
      deliveryTime: "20 min delivery",
      rating: 5,
    },
    {
      id: "paneer-burger",
      name: "Paneer Burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
      distance: "3.5 km",
      deliveryTime: "25 min delivery",
      rating: 5,
    },
  ],
  sandwich: [
    {
      id: "veg-sandwhic",
      name: "Veg Sandwhic",
      image: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?w=500&q=80",
      distance: "2.5 km",
      deliveryTime: "20 min delivery",
      rating: 5,
    },
    {
      id: "potato-sandwhic",
      name: "Potato Sandwhic",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80",
      distance: "3.5 km",
      deliveryTime: "25 min delivery",
      rating: 5,
    },
  ],
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("biryani")

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F0] to-white pb-32">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
              alt="User"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-1 text-gray-900 font-semibold">
            <MapPin size={18} className="text-gray-900" />
            <span>Canada</span>
            <ChevronDown size={18} />
          </div>
        </div>
        <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Menu size={24} />
        </button>
      </header>

      {/* Hero Text */}
      <div className="px-6 mt-4">
        <h1 className="text-[32px] font-bold leading-tight text-gray-900">
          Ready to order your <br /> favourite food ?
        </h1>
      </div>

      {/* Search */}
      <div className="px-6 mt-6">
        <SearchBar />
      </div>

      {/* Categories */}
      <div className="mt-8 overflow-x-auto no-scrollbar flex gap-4 px-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all whitespace-nowrap",
              activeCategory === cat.id
                ? "bg-primary/20 border-primary/30 text-primary font-bold shadow-sm"
                : "bg-gray-100/50 border-transparent text-gray-500 font-medium"
            )}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image src={cat.icon} alt={cat.name} width={32} height={32} className="object-cover" />
            </div>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Popular Food Section */}
      <div className="px-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Food</h2>
          <button className="text-sm font-semibold text-gray-500">See all</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {FOOD_DATA[activeCategory as keyof typeof FOOD_DATA].map((food) => (
            <FoodCard key={food.id} {...food} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
