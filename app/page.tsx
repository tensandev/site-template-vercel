"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MonochromePage() {
  // ページロード時にモノクロームスタイルを適用
  useEffect(() => {
    document.body.className = "monochrome"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            モノクロームの美しさを
            <br />
            シンプルに表現する
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            余計なものを削ぎ落とし、本質だけを残したデザイン。 白と黒のコントラストが生み出す洗練された空間。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              詳細を見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              お問い合わせ
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
                title: "シンプルさ",
                description: "余計な装飾を排除し、必要な情報だけを伝えるミニマルなデザイン。",
              },
              {
                title: "コントラスト",
                description: "白と黒のコントラストが生み出す視覚的な強さと明確さ。",
              },
              {
                title: "タイポグラフィ",
                description: "読みやすさと美しさを兼ね備えた洗練されたフォントの使用。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-muted rounded-lg overflow-hidden">
              <Image
                src={`/abstract-monochrome.png`}
                alt={`モノクロームデザイン例 ${item}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">あなたのプロジェクトを始めましょう</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            モノクロームデザインの力を活かして、印象的なウェブサイトを作成しませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            今すぐ始める <ArrowRight className="ml-2 h-4 w-4" />
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
