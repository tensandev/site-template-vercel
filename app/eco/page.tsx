"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Leaf, Recycle, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EcoPage() {
  // ページロード時にエコスタイルを適用
  useEffect(() => {
    document.body.className = "eco"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            持続可能なデザイン
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="text-primary">地球</span>に
            <br />
            優しいデザイン
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            環境への配慮と持続可能性を大切にしたエコフレンドリーなデザインアプローチ。
            自然の美しさと調和を尊重し、未来の世代のために考えられた表現方法。
          </p>
          <Button className="rounded-full">
            探索する <Leaf className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "自然素材",
                description: "環境に優しい素材と再生可能な資源を活用した持続可能なデザイン。",
              },
              {
                icon: <Recycle className="h-8 w-8 text-primary" />,
                title: "循環型",
                description: "廃棄物を最小限に抑え、再利用と再生を前提とした循環型のアプローチ。",
              },
              {
                icon: <Sprout className="h-8 w-8 text-primary" />,
                title: "成長",
                description: "時間とともに成長し、環境との調和を深めていく生命力あるデザイン。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">エコプロジェクト</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-card rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image src={`/eco-design.png`} alt={`エコデザイン例 ${item}`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">エコプロジェクト {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    持続可能性と環境への配慮を中心に据えた、未来志向のデザインプロジェクト。
                  </p>
                  <Button variant="outline" className="rounded-full">
                    詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 持続可能性セクション */}
      <section className="bg-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                持続可能な
                <br />
                デザインの原則
              </h2>
              <p className="text-muted-foreground mb-6">
                持続可能なデザインは、環境への影響を最小限に抑えながら、美しさと機能性を両立させることを目指します。
                それは単なるトレンドではなく、地球と共存するための必要不可欠な考え方です。
              </p>
              <p className="text-muted-foreground mb-8">
                素材の選択から製造プロセス、使用期間、そして最終的な廃棄まで、
                ライフサイクル全体を考慮したホリスティックなアプローチが求められます。
              </p>
              <Button variant="outline" className="rounded-full">
                原則について学ぶ
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-card rounded-2xl overflow-hidden">
                  <Image
                    src={`/eco-principle.png`}
                    alt={`持続可能なデザイン原則 ${item}`}
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
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            地球に優しい
            <br />
            デザインを始めよう
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            持続可能性と環境への配慮を取り入れた、未来の世代にも価値のあるデザインを一緒に創りませんか？
          </p>
          <Button variant="secondary" size="lg" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">エコデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
