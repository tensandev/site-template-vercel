"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, MountainIcon as Mountains, Leaf, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NordicPage() {
  // ページロード時にノルディックスタイルを適用
  useEffect(() => {
    document.body.className = "nordic"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            北欧の
            <br />
            <span className="text-primary">自然と調和</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            北欧の雄大な自然と文化からインスピレーションを得たデザイン。
            シンプルさと機能性、そして自然との調和を大切にしたアプローチ。
          </p>
          <Button className="rounded-md">
            詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mountains className="h-8 w-8 text-primary" />,
                title: "自然との調和",
                description: "北欧の雄大な自然からインスピレーションを得た、調和のとれたデザイン。",
              },
              {
                icon: <Leaf className="h-8 w-8 text-accent" />,
                title: "持続可能性",
                description: "環境に配慮した持続可能なアプローチと長く使える普遍的な美しさ。",
              },
              {
                icon: <Snowflake className="h-8 w-8 text-primary" />,
                title: "シンプルさ",
                description: "余計な装飾を排除し、機能性と美しさを兼ね備えたミニマルな表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-md shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* イメージセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                北欧の
                <br />
                デザイン哲学
              </h2>
              <p className="text-muted-foreground mb-6">
                北欧デザインは、厳しい気候と限られた資源の中で発展してきました。
                そのため、実用性と美しさを兼ね備え、無駄を省いたシンプルなデザインが特徴です。
              </p>
              <p className="text-muted-foreground mb-8">
                また、自然光を最大限に活かし、明るく開放的な空間づくりを重視しています。
                自然素材を活用し、持続可能性を大切にする姿勢も北欧デザインの重要な要素です。
              </p>
              <Button variant="outline" className="rounded-md">
                もっと詳しく
              </Button>
            </div>
            <div className="rounded-md overflow-hidden">
              <Image src="/nordic-landscape.png" alt="北欧の風景" width={800} height={600} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* プロダクトセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">プロダクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-card rounded-md overflow-hidden mb-4">
                  <Image
                    src={`/nordic-design.png`}
                    alt={`ノルディックデザイン例 ${item}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">プロダクト {item}</h3>
                <p className="text-muted-foreground text-sm mb-2">北欧の自然と文化に影響を受けたデザイン製品。</p>
                <Button variant="link" className="p-0 h-auto">
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            北欧の美しさを
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            シンプルで機能的、そして自然と調和した北欧デザインの考え方を取り入れてみませんか？
          </p>
          <Button variant="secondary" size="lg" className="rounded-md">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">ノルディックデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
