"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Triangle, Circle, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MemphisPage() {
  // ページロード時にメンフィススタイルを適用
  useEffect(() => {
    document.body.className = "memphis"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-50 -z-10"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-pink-400 opacity-50 -z-10"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-blue-400 transform rotate-45 opacity-50 -z-10"></div>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-pink-500">MEM</span>
            <span className="text-blue-500">PH</span>
            <span className="text-yellow-500">IS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            1980年代に誕生した、大胆な色彩と幾何学的なパターンが特徴的なデザインスタイル。
            遊び心と反逆精神に満ちた、ポストモダンデザインの代表的な様式。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none bg-pink-500 hover:bg-pink-600">
              EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              DETAILS
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-yellow-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Circle className="h-8 w-8 text-pink-500" />,
                title: "大胆な色彩",
                description: "鮮やかで対照的な色使いによる、視覚的なインパクトと遊び心のある表現。",
                bgColor: "bg-white",
                borderColor: "border-pink-500",
              },
              {
                icon: <Triangle className="h-8 w-8 text-blue-500" />,
                title: "幾何学パターン",
                description: "円、三角形、ジグザグなどの幾何学的な形を組み合わせた、活気あるパターン。",
                bgColor: "bg-white",
                borderColor: "border-blue-500",
              },
              {
                icon: <Square className="h-8 w-8 text-yellow-500" />,
                title: "反逆精神",
                description: "従来のモダニズムの「形は機能に従う」という原則に反発した、装飾的で遊び心のあるデザイン。",
                bgColor: "bg-white",
                borderColor: "border-yellow-500",
              },
            ].map((feature, index) => (
              <div key={index} className={`${feature.bgColor} p-8 border-2 ${feature.borderColor} relative`}>
                <div className="absolute top-2 right-2 w-6 h-6 bg-black transform rotate-12"></div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-white overflow-hidden border-2 border-black relative">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-20 z-10"></div>
                <Image
                  src={`/memphis-design.png?height=400&width=400&query=memphis design 80s pattern ${item}`}
                  alt={`メンフィスデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">メンフィスの歴史</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                メンフィス・グループは1981年にイタリアのデザイナー、エットレ・ソットサスによってミラノで結成されました。
                グループ名は、当時スタジオで流れていたボブ・ディランの曲「Stuck Inside of Mobile with the Memphis Blues
                Again」から取られたと言われています。
              </p>
              <p className="text-muted-foreground mb-8">
                彼らは、モダニズムの厳格さと最小限の装飾という原則に反発し、大胆な色彩、非対称の形、そして遊び心のある
                デザインを提案しました。1980年代のポップカルチャーに大きな影響を与え、現代でも定期的に復活しています。
              </p>
              <Button variant="outline" className="rounded-none border-black">
                もっと詳しく
              </Button>
            </div>
            <div className="aspect-video bg-white border-2 border-black relative">
              <div className="absolute top-4 left-4 w-full h-full bg-pink-300 -z-10"></div>
              <Image
                src="/memphis-history.png?height=600&width=800&query=ettore sottsass memphis milano group"
                alt="メンフィス・グループの歴史"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 text-black relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-300 -z-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              BREAK
              <br />
              THE RULES
            </h2>
            <p className="text-lg md:text-xl mb-8">
              大胆な色彩と幾何学的なパターンで、従来の枠にとらわれない、遊び心あふれるデザインを始めませんか？
            </p>
            <Button size="lg" className="rounded-none bg-blue-500 hover:bg-blue-600">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-xl mb-4 md:mb-0">MEMPHIS DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
