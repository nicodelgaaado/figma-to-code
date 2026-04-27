"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Heart, Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FOOD_DATA } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function DetailsPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const food = FOOD_DATA[id as keyof typeof FOOD_DATA]

  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("Small")

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => router.push("/home")}>Go Back Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F0] to-white pb-32">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={24} className="text-gray-900" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Details</h1>
        <button className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <Heart size={24} className="text-gray-400" />
        </button>
      </header>

      <div className="relative px-6">
        {/* Title and Info */}
        <div className="mt-4 max-w-[60%]">
          <h2 className="text-[32px] font-black text-gray-900 leading-tight mb-2">
            {food.name}
          </h2>
          <div className="flex items-center gap-2 mb-8">
            <Star size={18} className="fill-primary text-primary" />
            <span className="font-bold text-gray-900">{food.rating}</span>
            <span className="text-gray-400 font-medium">({food.reviews} review)</span>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <p className="text-gray-400 font-bold mb-1">Price</p>
              <p className="text-3xl font-black text-gray-900">$ {food.price.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-400 font-bold mb-1">Calories</p>
              <p className="text-2xl font-black text-gray-900">{food.calories}</p>
            </div>
            <div>
              <p className="text-gray-400 font-bold mb-1">Diameter</p>
              <p className="text-2xl font-black text-gray-900">{food.diameter}</p>
            </div>
          </div>
        </div>

        {/* Floating Image */}
        <div className="absolute right-[-40px] top-[-20px] w-[280px] h-[280px]">
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/50">
            <Image
              src={food.image}
              alt={food.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors"
          >
            <Minus size={20} strokeWidth={3} />
          </button>
          <span className="text-xl font-bold text-gray-900">{quantity.toString().padStart(2, "0")}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Size Selector */}
        <div className="mb-8">
          <p className="text-gray-400 font-bold mb-4">Size</p>
          <div className="flex gap-3">
            {["Small", "Medium", "Large"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "flex-1 py-3 rounded-2xl font-bold transition-all",
                  size === s
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <p className="text-gray-600 leading-relaxed font-medium">
            {food.description}
            <button className="text-black font-black">more_</button>
          </p>
        </div>

        {/* Add to Cart */}
        <Button className="w-full h-16 rounded-[24px] text-xl font-black shadow-xl shadow-primary/30">
          Add to Cart
        </Button>
      </div>

      {/* Home indicator */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-400 rounded-full" />
    </div>
  )
}
