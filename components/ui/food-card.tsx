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
      <div className="bg-[#FBE3E1] rounded-[28px] p-4 pt-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
        <div className="aspect-square relative mb-3 overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 430px) 50vw, 200px"
          />
        </div>
        <h3 className="font-bold text-base mb-1.5 text-gray-900 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-700 whitespace-nowrap">
          <span>{distance}</span>
          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
          <span>{deliveryTime}</span>
        </div>
      </div>
    </Link>
  )
}
