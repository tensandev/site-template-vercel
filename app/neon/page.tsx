"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Zap, Sparkles, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NeonPage() {
  // ページロード時にネオンスタイルを適用
  useEffect(() => {
    document.body.className = "neon"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 neon-glow">
            <span className="text-primary">ネオン</span>の輝き
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            暗闇の中で際立つ鮮やかな光。デジタルの世界で輝くネオンの美学。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-md neon-border">
              探索する <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md">
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary neon-glow">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "鮮やかさ",
                description: "暗い背景に映える鮮やかな色彩が生み出す視覚的なインパクト。",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-secondary" />,
                title: "輝き",
                description: "ネオンの光のような輝きが与える未来的で都会的な雰囲気。",
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-accent" />,
                title: "コントラスト",
                description: "暗闇と光のコントラストが生み出す劇的な視覚効果。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-md border border-primary/20 neon-border">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary neon-glow">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-md overflow-hidden border border-primary/20">
                <Image
                  src={`/neon-city.png`}
                  alt={`ネオンデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary neon-glow">
            あなたのプロジェクトを
            <br />
            輝かせましょう
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            ネオンの美学を取り入れて、印象的で記憶に残るデザインを実現しませんか？
          </p>
          <Button size="lg" className="rounded-md neon-border">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0 text-primary neon-glow">NEON DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
