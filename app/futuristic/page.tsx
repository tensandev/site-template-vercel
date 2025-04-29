"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Zap, Globe, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FuturisticPage() {
  // ページロード時にフューチャリスティックスタイルを適用
  useEffect(() => {
    document.body.className = "futuristic"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-muted px-4 py-1 rounded-sm text-sm font-mono mb-6">
            FUTURE.DESIGN.SYSTEM
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">未来</span>を
            <br />
            デザインする
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            先進的なテクノロジーと洗練された美学が融合した未来志向のデザイン。
            明日の可能性を今日に具現化する革新的なアプローチ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-sm">
              EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-sm">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FEATURES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "INNOVATION",
                description: "従来の枠組みを超えた革新的なアイデアと先進的な表現方法。",
              },
              {
                icon: <Globe className="h-8 w-8 text-secondary" />,
                title: "CONNECTIVITY",
                description: "テクノロジーによって実現する、新しいつながりと可能性の探求。",
              },
              {
                icon: <Cpu className="h-8 w-8 text-accent" />,
                title: "INTELLIGENCE",
                description: "スマートな機能と直感的な操作性を兼ね備えた知的なデザイン。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-sm border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-sm">
                <Image
                  src={`/futuristic-design.png`}
                  alt={`フューチャリスティックデザイン例 ${item}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">PROJECT {item}</h3>
                    <p className="text-muted-foreground mb-4">
                      先進的なテクノロジーと洗練されたデザインが融合した未来志向のプロジェクト。
                    </p>
                    <Button variant="outline" className="rounded-sm">
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* テクノロジーセクション */}
      <section className="bg-gradient-to-b from-background to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">TECHNOLOGIES</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "AI & MACHINE LEARNING", value: "95%" },
              { name: "AUGMENTED REALITY", value: "85%" },
              { name: "QUANTUM COMPUTING", value: "75%" },
              { name: "BIOTECHNOLOGY", value: "80%" },
            ].map((tech, index) => (
              <div key={index} className="bg-card p-6 rounded-sm border border-primary/20">
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <div className="w-full bg-muted h-2 mb-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: tech.value }}></div>
                </div>
                <p className="text-right text-sm text-muted-foreground">{tech.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            FUTURE IS
            <br />
            NOW
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            先進的なテクノロジーと洗練されたデザインで、あなたのプロジェクトを未来へと導きます。
          </p>
          <Button size="lg" variant="secondary" className="rounded-sm">
            CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">FUTURISTIC.DESIGN</p>
            <p className="text-muted-foreground">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
