"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Bolt, Target, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BoldPage() {
  // ページロード時にボールドスタイルを適用
  useEffect(() => {
    document.body.className = "bold"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="text-primary">大胆</span>に<br />
            表現する
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            強いコントラストと鮮やかな色彩。 インパクトを重視した大胆なデザイン。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none text-lg">
              始める <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none text-lg">
              詳細
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">特徴</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Bolt className="h-12 w-12 text-primary" />,
                title: "インパクト",
                description: "一目で印象に残る、強いコントラストと大胆な色使い。",
              },
              {
                icon: <Target className="h-12 w-12 text-secondary" />,
                title: "明確さ",
                description: "伝えたいメッセージを迷いなく、力強く表現。",
              },
              {
                icon: <Rocket className="h-12 w-12 text-accent" />,
                title: "革新性",
                description: "常識にとらわれない、新しい表現方法への挑戦。",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ポートフォリオセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden">
                <Image
                  src={`/abstract-bold-shapes.png`}
                  alt={`ボールドデザイン例 ${item}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    詳細を見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">行動を起こす時</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            インパクトのあるデザインで、あなたのブランドを際立たせましょう。
          </p>
          <Button size="lg" variant="secondary" className="rounded-none text-lg">
            今すぐ相談する <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-xl mb-4 md:mb-0">BOLD DESIGN</p>
            <p className="text-gray-400">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
