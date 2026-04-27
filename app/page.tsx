import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OnboardingPage() {
  const foodImages = [
    { src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80", size: 180, top: "5%", left: "-10%" }, // Dumplings
    { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", size: 240, top: "20%", left: "30%" }, // Pizza
    { src: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80", size: 180, top: "10%", left: "80%" }, // Biryani
    { src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", size: 220, top: "45%", left: "-15%" }, // Burger
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80", size: 160, top: "55%", left: "45%" }, // Spring rolls
    { src: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&q=80", size: 180, top: "48%", left: "85%" }, // Biryani
  ]

  return (
    <div className="relative min-h-screen bg-[#FFF0F0] overflow-hidden flex flex-col">
      {/* Background food items */}
      <div className="absolute inset-0">
        {foodImages.map((img, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden shadow-xl border-4 border-white/50"
            style={{
              width: img.size,
              height: img.size,
              top: img.top,
              left: img.left,
            }}
          >
            <Image
              src={img.src}
              alt="Food"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mt-auto p-8 pb-16 bg-gradient-to-t from-[#FFF0F0] via-[#FFF0F0]/95 to-transparent text-center">
        <h1
          className="text-4xl font-black text-gray-900 mb-4 leading-tight"
          style={{ textShadow: "2px 3px 0 rgba(229, 91, 75, 0.18)" }}
        >
          Test the Joy of <br /> Delivery
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-[280px] mx-auto leading-relaxed">
          Unlock a world of culinary delights, right at your fingertips
        </p>

        <Link href="/home">
          <Button className="w-full h-16 rounded-[24px] text-xl shadow-xl shadow-primary/30">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-400 rounded-full" />
    </div>
  )
}
