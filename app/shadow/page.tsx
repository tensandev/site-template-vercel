"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Sun, Moon, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ShadowPage() {
  // ページロード時にシャドウスタイルを適用
  useEffect(() => {
    document.body.className = "shadow"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">影と光</span>の
            <br />
            コントラスト
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            光と影のコントラストが生み出す奥行きと立体感。 シンプルな要素に深みを与えるシャドウデザイン。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-md shadow-lg">
              詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-md shadow">
              事例を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "奥行き",
                description: "影の濃淡を使い分けることで生まれる立体感と空間の奥行き。",
              },
              {
                icon: <Sun className="h-8 w-8 text-accent" />,
                title: "コントラスト",
                description: "光と影のコントラストがもたらす視覚的なインパクトと明瞭さ。",
              },
              {
                icon: <Moon className="h-8 w-8 text-primary" />,
                title: "洗練",
                description: "余計な装飾を排し、影の効果だけで表現する洗練されたデザイン。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-md shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デモセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">シャドウの効果</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { depth: "浅い", class: "shadow-sm" },
              { depth: "標準", class: "shadow" },
              { depth: "深い", class: "shadow-lg" },
              { depth: "内側", class: "shadow-inner" },
              { depth: "上部", class: "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]" },
              { depth: "ぼかし", class: "shadow-lg shadow-primary/20" },
            ].map((item, index) => (
              <div
                key={index}
                className={`aspect-square bg-white rounded-md flex items-center justify-center ${item.class}`}
              >
                <p className="text-xl font-medium text-primary">{item.depth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">デザインギャラリー</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-md overflow-hidden shadow-${
                  index % 2 === 0 ? "lg" : "xl"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="aspect-video">
                  <Image
                    src={`/shadow-design.png`}
                    alt={`シャドウデザイン例 ${item}`}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">シャドウデザイン {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    光と影のコントラストを活かした、奥行きのあるデザイン例です。
                  </p>
                  <Button variant="outline" className="shadow-sm">
                    詳細を見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary-foreground/10 p-8 md:p-12 rounded-lg shadow-xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              影と光の表現で
              <br />
              デザインに深みを
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              シンプルながらも奥行きと立体感のある、印象的なデザインを一緒に創りませんか？
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">SHADOW DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
