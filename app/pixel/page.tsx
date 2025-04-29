"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Grid, Gamepad2, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PixelPage() {
  // ページロード時にピクセルスタイルを適用
  useEffect(() => {
    document.body.className = "pixel"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 pixel-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">ピクセル</span>
            <br />
            アートの世界
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            レトロゲームからインスピレーションを得た、ドット単位の表現美学。
            限られた解像度から生まれる創造性と懐かしさを現代に再解釈。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none">
              PLAY <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none">
              OPTIONS
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Grid className="h-8 w-8 text-primary" />,
                title: "ドット表現",
                description: "一つ一つのピクセル（ドット）を意識的に配置することで生まれる独特の表現方法。",
              },
              {
                icon: <Gamepad2 className="h-8 w-8 text-primary" />,
                title: "レトロ感",
                description: "8ビット、16ビット時代のゲームを彷彿とさせる懐かしくも新鮮な雰囲気。",
              },
              {
                icon: <Monitor className="h-8 w-8 text-primary" />,
                title: "限定表現",
                description: "限られた解像度と色数の中で最大限の表現を追求する創造性。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 border-2 border-primary">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 pixel-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-card border-2 border-primary overflow-hidden">
                <Image
                  src={`/pixel-design.png`}
                  alt={`ピクセルアート例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* キャラクターセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ピクセルキャラクター</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="aspect-square bg-card border-2 border-primary mb-4 flex items-center justify-center">
                  <Image
                    src={`/pixel-character.png`}
                    alt={`ピクセルキャラクター ${item}`}
                    width={200}
                    height={200}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">CHARACTER {item}</h3>
                <p className="text-muted-foreground">限られたピクセル数で表現された個性的なキャラクター。</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20 pixel-pattern">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card/20 backdrop-blur-sm p-8 border-2 border-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              PRESS START
              <br />
              TO CONTINUE
            </h2>
            <p className="text-lg md:text-xl mb-8">
              レトロゲームの魅力を現代のデザインに取り入れた、懐かしくも新鮮なプロジェクトを始めませんか？
            </p>
            <Button size="lg" variant="secondary" className="rounded-none">
              START GAME <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">PIXEL DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
