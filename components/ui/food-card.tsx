import { Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FoodCardProps {
  id: string
  name: string
  image: string
  distance: string
  deliveryTime: string
  rating: number
}

export function FoodCard({ id, name, image, distance, deliveryTime, rating }: FoodCardProps) {
  return (
    <Link href={`/details/${id}`} className="block group">
      <div className="bg-white rounded-[32px] p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="aspect-square relative mb-4 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-gray-900 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? "fill-primary text-primary" : "text-gray-200"}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span>{distance}</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>{deliveryTime}</span>
        </div>
      </div>
    </Link>
  )
}
