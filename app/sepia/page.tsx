"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SepiaPage() {
  // ページロード時にセピアスタイルを適用
  useEffect(() => {
    // セピアスタイルをbodyに適用するが、モーダル関連の要素には影響しないようにする
    document.body.className = "sepia"

    // モーダル関連の要素にはセピアスタイルが適用されないようにする
    const dialogElements = document.querySelectorAll('[role="dialog"]')
    dialogElements.forEach((el) => {
      el.classList.remove("sepia")
      el.classList.add("modal-reset")
    })

    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
            時を超える
            <br />
            セピアの物語
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            古き良き時代の温かみと懐かしさを現代のデザインに。 時間が醸し出す味わい深さを大切にしたアプローチ。
          </p>
          <Button variant="outline" className="rounded-none font-serif">
            物語を読む <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "時の流れ",
                description: "時間の経過が生み出す独特の風合いと深みを表現したデザイン。",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "物語性",
                description: "一つ一つの要素に込められた物語と歴史を感じさせる表現。",
              },
              {
                icon: <Coffee className="h-8 w-8 text-primary" />,
                title: "温かみ",
                description: "セピア調の色合いが醸し出す、温かく親しみやすい雰囲気。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-none border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">ギャラリー</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-muted rounded-none overflow-hidden border">
              <Image
                src={`/sepia-vintage.png`}
                alt={`セピアデザイン例 ${item}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 引用セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif mb-6 italic">
              "時間が経つほどに価値を増すものがある。セピアの色合いは、そんな時の流れの美しさを表現している。"
            </p>
            <cite className="text-muted-foreground font-serif">— デザイン哲学より</cite>
          </blockquote>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            時を超える
            <br />
            デザインを
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground font-serif">
            セピアの温かみを取り入れて、時間が経つほどに味わい深くなるデザインを実現しませんか？
          </p>
          <Button className="rounded-none font-serif">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-serif text-lg mb-4 md:mb-0">セピアデザイン</p>
            <p className="text-muted-foreground font-serif">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
