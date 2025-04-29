"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Box, Grid, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrutalistPage() {
  // ページロード時にブルータリストスタイルを適用
  useEffect(() => {
    document.body.className = "brutalist"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-mono uppercase tracking-tight mb-6">
            無骨な
            <br />
            <span className="text-primary">直接性</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
            装飾を排除し、素材そのものの特性を活かした無骨で直接的な表現。
            機能性と構造を前面に押し出した、妥協のないデザインアプローチ。
          </p>
          <Button className="rounded-none text-lg uppercase font-mono">
            EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-mono uppercase text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Box className="h-8 w-8 text-primary" />,
                title: "RAW",
                description: "素材そのものの特性を活かした、飾り気のない直接的な表現。",
              },
              {
                icon: <Grid className="h-8 w-8 text-primary" />,
                title: "GRID",
                description: "厳格なグリッドと構造に基づいた、機能的なレイアウト。",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" />,
                title: "CONTRAST",
                description: "強いコントラストと大胆な要素配置による視覚的インパクト。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-background border-4 border-primary p-8">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-mono uppercase mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-mono uppercase mb-12">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={`/brutalist-design.png`}
                    alt={`ブルータリストデザイン例 ${item}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground p-2 font-mono">
                  WORK {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* マニフェストセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-mono uppercase mb-8">MANIFESTO</h2>
            <div className="space-y-6 font-mono">
              <p className="text-xl">1. 装飾より機能を優先する。</p>
              <p className="text-xl">2. 素材の本質的な特性を隠さない。</p>
              <p className="text-xl">3. 構造と機能を正直に表現する。</p>
              <p className="text-xl">4. 完璧さより真実性を重視する。</p>
              <p className="text-xl">5. 妥協のない直接的な表現を追求する。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-background border-4 border-primary p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-mono uppercase mb-6">
              無骨な直接性を
              <br />
              あなたのプロジェクトに
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground font-mono">
              妥協のない直接的な表現で、強い印象と本質的な価値を持つデザインを実現しませんか？
            </p>
            <Button size="lg" className="rounded-none uppercase font-mono">
              CONTACT <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono uppercase text-lg mb-4 md:mb-0">BRUTALIST DESIGN</p>
            <p className="text-muted-foreground font-mono">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
