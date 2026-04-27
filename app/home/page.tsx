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
      <header className="p-6 flex items-center justify-between gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1610871921824-3d5867e992dd?w=120&h=120&fit=crop&q=80"
            alt="User avatar"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-1 text-gray-900 font-semibold">
          <MapPin size={18} className="text-gray-900" />
          <span>Canada</span>
          <ChevronDown size={18} />
        </div>
        <button
          aria-label="Open menu"
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm shrink-0 text-gray-900"
        >
          <Menu size={24} strokeWidth={2.5} />
        </button>
      </header>

      {/* Hero Text */}
      <div className="px-6 mt-4">
        <h1
          className="text-[32px] font-black leading-tight text-gray-900"
          style={{ textShadow: "2px 3px 0 rgba(229, 91, 75, 0.18)" }}
        >
          Ready to order your <br /> favourite food ?
        </h1>
      </div>

      {/* Search */}
      <div className="px-6 mt-6">
        <SearchBar />
      </div>

      {/* Categories */}
      <div className="mt-8 overflow-x-auto no-scrollbar flex gap-3 px-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 pl-1.5 pr-5 py-1.5 rounded-full transition-all whitespace-nowrap text-white font-bold",
              activeCategory === cat.id
                ? "bg-primary/70 shadow-md shadow-primary/30"
                : "bg-gray-400/50"
            )}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
              <Image src={cat.icon} alt={cat.name} width={36} height={36} className="object-cover w-full h-full" />
            </div>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Popular Food Section */}
      <div className="mt-8">
        <div className="px-6 flex items-end justify-between mb-4">
          <h2 className="text-2xl font-black text-gray-900">Popular Food</h2>
          <button className="text-sm font-semibold text-gray-700">See all</button>
        </div>

        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-2">
          {FOOD_DATA[activeCategory as keyof typeof FOOD_DATA].map((food) => (
            <div key={food.id} className="w-[55%] shrink-0">
              <FoodCard {...food} />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
