"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Home, Sun, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScandinavianPage() {
  // ページロード時に北欧スタイルを適用
  useEffect(() => {
    document.body.className = "scandinavian"
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
            シンプルさと
            <br />
            機能美の調和
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            北欧デザインの特徴である、シンプルさと機能性、そして自然との調和を大切にしたアプローチ。
            余計なものを削ぎ落とし、本質的な美しさを追求します。
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
                icon: <Home className="h-8 w-8 text-primary" />,
                title: "機能美",
                description: "美しさと実用性を兼ね備えた、無駄のないデザインアプローチ。",
              },
              {
                icon: <Sun className="h-8 w-8 text-accent" />,
                title: "明るさ",
                description: "自然光を活かした明るく開放的な空間づくりと色使い。",
              },
              {
                icon: <Snowflake className="h-8 w-8 text-secondary-foreground" />,
                title: "シンプルさ",
                description: "余計な装飾を排除し、本質的な要素だけを残したミニマルな表現。",
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

      {/* プロダクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">プロダクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="aspect-square bg-muted rounded-md overflow-hidden mb-4">
                  <Image
                    src={`/scandinavian-interior.png`}
                    alt={`北欧デザイン例 ${item}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">プロダクト {item}</h3>
                <p className="text-muted-foreground text-sm mb-2">シンプルで機能的な北欧デザインの製品。</p>
                <Button variant="link" className="p-0 h-auto">
                  詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インテリアセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                心地よい
                <br />
                空間づくり
              </h2>
              <p className="text-muted-foreground mb-6">
                北欧デザインは、自然光を最大限に活かし、明るく開放的な空間を作り出します。
                自然素材を活用し、シンプルながらも温かみのある雰囲気を大切にしています。
              </p>
              <p className="text-muted-foreground mb-8">
                機能性と美しさを兼ね備えた家具や小物が、日常生活をより豊かで快適なものにします。
              </p>
              <Button variant="outline" className="rounded-md">
                インテリアのヒント
              </Button>
            </div>
            <div className="rounded-md overflow-hidden">
              <Image
                src="/scandinavian-living.png"
                alt="北欧インテリア"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            シンプルで機能的な
            <br />
            デザインを
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            北欧デザインの考え方を取り入れて、シンプルで機能的、そして美しい空間づくりを始めませんか？
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
            <p className="font-medium text-lg mb-4 md:mb-0">北欧デザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
