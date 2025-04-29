"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Star, Moon, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SpacePage() {
  // ページロード時にスペーススタイルを適用
  useEffect(() => {
    document.body.className = "space"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 stars-bg">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Star className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">宇宙</span>の
            <br />
            無限の可能性
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            広大な宇宙空間からインスピレーションを得たミニマルなデザイン。
            星々の輝きと深遠な闇が織りなす神秘的な世界観。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-primary/80 backdrop-blur-sm hover:bg-primary/90">
              探索を始める <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/50 backdrop-blur-sm">
              詳しく見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "星の輝き",
                description: "遠い星々の輝きのような、小さくも力強い視覚的アクセント。",
              },
              {
                icon: <Moon className="h-8 w-8 text-accent" />,
                title: "深遠な空間",
                description: "広大な宇宙空間のような、余白と深みを持つレイアウト。",
              },
              {
                icon: <Rocket className="h-8 w-8 text-secondary-foreground" />,
                title: "未来への旅",
                description: "未知の領域への探求心を刺激する、先進的な表現方法。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 stars-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-muted/30 backdrop-blur-sm rounded-lg overflow-hidden border border-primary/20"
              >
                <Image
                  src={`/space-design.png`}
                  alt={`スペースデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 宇宙探索セクション */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                宇宙の神秘を
                <br />
                デザインに
              </h2>
              <p className="text-muted-foreground mb-6">
                宇宙の広大さと神秘性は、デザインに深みと視点を与えてくれます。
                星々の輝きや銀河の渦、そして無限に広がる闇は、 ミニマルでありながらも豊かな表現の可能性を秘めています。
              </p>
              <p className="text-muted-foreground mb-8">
                このデザインアプローチは、先進性や探求心、そして無限の可能性を表現したいブランドに特に適しています。
              </p>
              <Button variant="outline" className="rounded-full border-primary/50">
                宇宙デザインについて
              </Button>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-full overflow-hidden stars-bg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Star className="h-12 w-12 text-primary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/80 text-primary-foreground py-20 stars-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            宇宙の神秘を
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            広大な宇宙からインスピレーションを得た、神秘的で印象的なデザインを一緒に創りませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            お問い合わせ <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">SPACE DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
