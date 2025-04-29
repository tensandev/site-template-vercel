"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Circle, Square, Triangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BauhausPage() {
  // ページロード時にバウハウススタイルを適用
  useEffect(() => {
    document.body.className = "bauhaus"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bauhaus-pattern opacity-10"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-4 mb-8">
            <Circle className="text-primary h-8 w-8" />
            <Square className="text-secondary h-8 w-8" />
            <Triangle className="text-accent h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            形態は
            <br />
            <span className="text-primary">機能に従う</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            バウハウスの理念に基づいた、機能性と美しさを兼ね備えたデザイン。
            基本的な形と色を組み合わせた、普遍的で力強い表現方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none">
              探索する <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none">
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Square className="h-8 w-8 text-primary" />,
                title: "機能性",
                description: "装飾より機能を優先し、目的に最適化された実用的なデザイン。",
              },
              {
                icon: <Circle className="h-8 w-8 text-secondary" />,
                title: "基本形態",
                description: "円、正方形、三角形などの基本的な形を組み合わせた普遍的な表現。",
              },
              {
                icon: <Triangle className="h-8 w-8 text-accent" />,
                title: "原色",
                description: "赤、青、黄の原色と黒、白、グレーを基調とした鮮明な色使い。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-none border-2 border-primary">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-white rounded-none overflow-hidden border-2 border-black">
                <Image
                  src={`/bauhaus-design.png?height=400&width=400&query=bauhaus geometric design ${item}`}
                  alt={`バウハウスデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* マニフェストセクション */}
      <section className="bg-accent text-accent-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">バウハウス・マニフェスト</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-4">
              「建築家、彫刻家、画家、私たちは皆、工芸に戻らなければならない。芸術は職業ではなく、芸術家と職人の間に本質的な違いはない。」
            </p>
            <p className="text-lg">- ヴァルター・グロピウス、1919年</p>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            バウハウスの精神を
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            機能性と美しさを兼ね備えた、普遍的で力強いデザインを一緒に創りませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-none">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">BAUHAUS DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
