"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Circle, Square, Triangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GeometricPage() {
  // ページロード時にジオメトリックスタイルを適用
  useEffect(() => {
    document.body.className = "geometric"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 grid-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-8">
            <Circle className="text-primary h-8 w-8" />
            <Square className="text-secondary h-8 w-8" />
            <Triangle className="text-accent h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            幾何学的な美しさを
            <br />
            デザインに
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            規則性と秩序が生み出す洗練された空間。 シンプルな形状が織りなす複雑な美しさ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-md">
              探索する <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md">
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 circle-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Square className="h-8 w-8 text-primary" />,
                title: "秩序",
                description: "規則的なグリッドと幾何学的な形状による整然としたデザイン。",
              },
              {
                icon: <Circle className="h-8 w-8 text-secondary" />,
                title: "バランス",
                description: "形と空間のバランスが生み出す視覚的な安定感と調和。",
              },
              {
                icon: <Triangle className="h-8 w-8 text-accent" />,
                title: "精度",
                description: "正確な計算に基づいた、無駄のない洗練された表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-md border">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">プロジェクト</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-background rounded-md overflow-hidden border">
                <Image
                  src={`/interconnected-shapes.png`}
                  alt={`ジオメトリックデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 説明セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                幾何学的デザインの
                <br />
                原理と応用
              </h2>
              <p className="text-muted-foreground mb-6">
                幾何学的デザインは、基本的な形状（円、正方形、三角形など）を組み合わせることで、
                複雑で美しいパターンを生み出します。
              </p>
              <p className="text-muted-foreground mb-8">
                このアプローチは、古代の建築から現代のデジタルデザインまで、
                時代を超えて普遍的な美しさを持ち続けています。
              </p>
              <Button variant="outline" className="rounded-md">
                もっと学ぶ
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-primary rounded-md"></div>
              <div className="aspect-square bg-secondary rounded-full"></div>
              <div className="aspect-square overflow-hidden">
                <div
                  className="w-full h-full bg-accent"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
              </div>
              <div className="aspect-square bg-muted rounded-md grid-pattern"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            幾何学的な美しさを
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            秩序と調和のとれたデザインで、洗練された印象を与えましょう。
          </p>
          <Button size="lg" variant="secondary" className="rounded-md">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">ミニマルデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
