"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VintagePage() {
  // ページロード時にヴィンテージスタイルを適用
  useEffect(() => {
    document.body.className = "vintage"
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
            <span className="text-primary">ヴィンテージ</span>の魅力
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            過去の時代の美しさと職人技を現代に蘇らせるデザイン。 時間が醸し出す味わい深さと物語性を大切にした表現方法。
          </p>
          <Button variant="outline" className="rounded-none font-serif">
            物語を紡ぐ <ArrowRight className="ml-2 h-4 w-4" />
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
                title: "時代感",
                description: "過去の特定の時代のデザイン要素や美学を取り入れた懐かしさと新鮮さ。",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "物語性",
                description: "一つ一つの要素に込められた歴史と物語を感じさせる深みのある表現。",
              },
              {
                icon: <Coffee className="h-8 w-8 text-primary" />,
                title: "職人技",
                description: "手作業による細部へのこだわりと、時間をかけて作り上げる価値観。",
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
                src={`/vintage-design.png`}
                alt={`ヴィンテージデザイン例 ${item}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 時代セクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">時代の美学</h2>
          <div className="space-y-12">
            {[
              {
                era: "1920年代 - アールデコ",
                desc: "幾何学的なパターンと豪華な装飾が特徴的な、モダンで洗練された様式。",
              },
              {
                era: "1950年代 - ミッドセンチュリー",
                desc: "機能性と有機的な形状を組み合わせた、明るく楽観的なデザイン。",
              },
              {
                era: "1970年代 - レトロポップ",
                desc: "大胆な色使いとパターンが特徴的な、自由で実験的な表現。",
              },
            ].map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h3 className="text-2xl font-serif mb-4">{item.era}</h3>
                  <p className="text-muted-foreground font-serif mb-6">{item.desc}</p>
                  <Button variant="outline" className="rounded-none font-serif">
                    詳しく見る
                  </Button>
                </div>
                <div className="aspect-[4/3] bg-card rounded-none overflow-hidden border">
                  <Image
                    src={`/vintage-era.png`}
                    alt={item.era}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 引用セクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4">
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-serif mb-6 italic">
              "過去を知ることは、未来を創造するための最も確かな道である。"
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
            過去の美学と職人技を取り入れた、味わい深く物語性のあるデザインを実現しませんか？
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
            <p className="font-serif text-lg mb-4 md:mb-0">ヴィンテージデザイン</p>
            <p className="text-muted-foreground font-serif">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
