"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Circle, Grid, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DotPage() {
  // ページロード時にドットスタイルを適用
  useEffect(() => {
    document.body.className = "dot"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 dots-pattern">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="text-primary">点</span>が織りなす
            <br />
            パターンの美学
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            シンプルな点の集合が生み出す複雑で美しいパターン。 最小限の要素から最大限の表現を引き出すドットデザイン。
          </p>
          <Button className="rounded-full">
            詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Circle className="h-8 w-8 text-primary" />,
                title: "単純性",
                description: "最も単純な形状である点を基本単位とした、本質的なデザインアプローチ。",
              },
              {
                icon: <Grid className="h-8 w-8 text-primary" />,
                title: "パターン",
                description: "点の集合と配置が生み出す、複雑で美しいパターンと視覚効果。",
              },
              {
                icon: <LayoutGrid className="h-8 w-8 text-primary" />,
                title: "リズム",
                description: "点の密度と間隔によって生まれる、視覚的なリズムと動き。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-full">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 dots-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-card rounded-lg overflow-hidden">
                <Image
                  src={`/dot-design.png`}
                  alt={`ドットデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* パターンセクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                点から生まれる
                <br />
                無限のパターン
              </h2>
              <p className="text-muted-foreground mb-6">
                点は最も単純な視覚要素でありながら、その配置や密度、大きさを変えることで、
                無限に近いバリエーションのパターンを生み出すことができます。
              </p>
              <p className="text-muted-foreground mb-8">
                このミニマルなアプローチは、複雑さを排除しながらも、 視覚的な豊かさと奥行きを表現することができる、
                洗練されたデザイン手法です。
              </p>
              <Button variant="outline" className="rounded-full">
                パターンについて学ぶ
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["grid-cols-2 gap-2", "grid-cols-3 gap-1", "grid-cols-4 gap-0.5", "grid-cols-6 gap-0.5"].map(
                (gridClass, index) => (
                  <div key={index} className={`aspect-square bg-card rounded-lg p-2`}>
                    <div className={`grid ${gridClass} h-full w-full`}>
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="aspect-square bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20 dots-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            点の集合が織りなす
            <br />
            美しいデザインを
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            シンプルながらも奥深いドットパターンを活用した、印象的なデザインを一緒に創りませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">DOT DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
