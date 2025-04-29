"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Heart, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PastelPage() {
  // ページロード時にパステルスタイルを適用
  useEffect(() => {
    document.body.className = "pastel"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            優しい色合い
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            パステルカラーで
            <br />
            心地よい空間を
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            柔らかな色彩が織りなす穏やかな印象。 優しさと親しみやすさを大切にしたデザイン。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              サンプルを見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              詳しく知る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "優しさ",
                description: "柔らかなパステルカラーが生み出す、優しく温かみのある雰囲気。",
              },
              {
                icon: <Star className="h-8 w-8 text-accent-foreground" />,
                title: "調和",
                description: "互いを引き立てる色彩の組み合わせによる、心地よい視覚的バランス。",
              },
              {
                icon: <Zap className="h-8 w-8 text-secondary-foreground" />,
                title: "親しみやすさ",
                description: "誰にでも受け入れられる、親しみやすく開かれたデザイン。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* イメージセクション */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                心を和ませる
                <br />
                デザインの力
              </h2>
              <p className="text-muted-foreground mb-6">
                パステルカラーは視覚的な優しさだけでなく、心理的にもポジティブな影響を与えます。
                淡い色合いは緊張を和らげ、リラックスした雰囲気を作り出します。
              </p>
              <p className="text-muted-foreground mb-8">
                このデザインスタイルは、ユーザーに安心感を与え、長時間滞在しても疲れにくい特徴があります。
              </p>
              <Button variant="outline" className="rounded-full">
                もっと詳しく
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/pastel-abstract-shapes.png"
                alt="パステルカラーのデザイン"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-accent/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたのプロジェクトに
            <br />
            優しい色合いを
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            パステルカラーを活用して、親しみやすく心地よいデザインを実現しませんか？
          </p>
          <Button size="lg" className="rounded-full">
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
