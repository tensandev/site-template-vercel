"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Droplets, Palette, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WatercolorPage() {
  // ページロード時に水彩スタイルを適用
  useEffect(() => {
    document.body.className = "watercolor"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 watercolor-effect">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
            <span className="text-primary">水彩</span>の
            <br />
            繊細な表現
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            水と色が織りなす柔らかく繊細な表現世界。
            にじみや透明感が生み出す、自然で有機的な美しさを大切にしたデザイン。
          </p>
          <Button className="rounded-full">
            探索する <Droplets className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30 watercolor-effect">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Droplets className="h-8 w-8 text-primary" />,
                title: "にじみ",
                description: "水と色が自然に広がることで生まれる、予測不可能で有機的な表現。",
              },
              {
                icon: <Palette className="h-8 w-8 text-primary" />,
                title: "透明感",
                description: "重ねた色が透けて見える透明感と、それによって生まれる奥行き。",
              },
              {
                icon: <Brush className="h-8 w-8 text-primary" />,
                title: "筆致",
                description: "手作業による筆のタッチが残る、温かみと人間味のある表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 watercolor-effect">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-card rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={`/watercolor-design.png`}
                  alt={`水彩デザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* テクニックセクション */}
      <section className="bg-muted py-20 watercolor-effect">
        <div className="containerx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">水彩テクニック</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    title: "ウェット・オン・ウェット",
                    desc: "湿った紙に色を乗せることで、自然なにじみと柔らかい境界を作り出す技法。",
                  },
                  {
                    title: "グラデーション",
                    desc: "色が徐々に変化していく滑らかな移行を表現する技法。",
                  },
                  {
                    title: "レイヤリング",
                    desc: "透明な色を重ねることで、深みと複雑さを生み出す技法。",
                  },
                ].map((technique, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-serif mb-2">{technique.title}</h3>
                    <p className="text-muted-foreground font-serif">{technique.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-card rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src={`/watercolor-technique.png`}
                    alt={`水彩テクニック ${item}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20 watercolor-effect">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            水彩の繊細さを
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground font-serif">
            柔らかく繊細な水彩の表現を取り入れた、温かみと有機的な美しさを持つデザインを始めませんか？
          </p>
          <Button size="lg" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-serif text-lg mb-4 md:mb-0">水彩デザイン</p>
            <p className="text-muted-foreground font-serif">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
