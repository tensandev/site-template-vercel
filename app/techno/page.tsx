"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Cpu, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechnoPage() {
  // ページロード時にテクノスタイルを適用
  useEffect(() => {
    document.body.className = "techno"
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
            <span className="text-primary">テクノロジー</span>が
            <br />
            導く未来
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
            デジタル時代の最先端を行くデザイン。 テクノロジーの可能性を最大限に引き出す未来志向のアプローチ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-sm font-mono">
              EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-sm font-mono">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono">FEATURES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="h-8 w-8 text-primary" />,
                title: "INNOVATION",
                description: "最新のテクノロジーを取り入れた革新的なデザインアプローチ。",
              },
              {
                icon: <Globe className="h-8 w-8 text-secondary" />,
                title: "CONNECTIVITY",
                description: "デジタルとフィジカルの境界を超えた、つながりを重視した表現。",
              },
              {
                icon: <Database className="h-8 w-8 text-accent" />,
                title: "EFFICIENCY",
                description: "無駄を省き、機能性と効率性を追求した洗練されたデザイン。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-sm border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-mono">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-sm">
                <Image
                  src={`/techno-futuristic.png`}
                  alt={`テクノデザイン例 ${item}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold mb-2 font-mono text-primary-foreground">PROJECT {item}</h3>
                    <p className="text-primary-foreground/80 mb-4">
                      未来志向のテクノロジーを活用した革新的なデザインプロジェクト。
                    </p>
                    <Button variant="secondary" className="rounded-sm font-mono">
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 数字セクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "85%", label: "EFFICIENCY" },
              { number: "24/7", label: "AVAILABILITY" },
              { number: "100+", label: "PROJECTS" },
              { number: "5x", label: "PERFORMANCE" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl md:text-5xl font-bold mb-2 font-mono">{stat.number}</p>
                <p className="text-primary-foreground/70 font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            FUTURE IS
            <br />
            NOW
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            テクノロジーの力を活かした未来志向のデザインで、あなたのプロジェクトを次のレベルへ。
          </p>
          <Button size="lg" className="rounded-sm font-mono">
            CONTACT US <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0 font-mono">TECHNO.DESIGN</p>
            <p className="text-muted-foreground font-mono">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
