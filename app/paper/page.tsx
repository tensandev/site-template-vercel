"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Scissors, FoldVerticalIcon as Fold, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaperPage() {
  // ページロード時にペーパースタイルを適用
  useEffect(() => {
    document.body.className = "paper"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6">
            紙の質感と
            <br />
            折り紙の美学
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            紙の質感とテクスチャーを活かした、温かみのあるデザイン。
            折り紙のような立体感と手作り感を大切にした表現方法。
          </p>
          <Button className="rounded-none font-serif">
            詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "テクスチャー",
                description: "紙の持つ自然な質感とテクスチャーを活かした温かみのある表現。",
              },
              {
                icon: <Fold className="h-8 w-8 text-primary" />,
                title: "折り目",
                description: "折り紙のような折り目と立体感が生み出す奥行きと構造。",
              },
              {
                icon: <Scissors className="h-8 w-8 text-primary" />,
                title: "手作り感",
                description: "デジタルでありながら、手作りの温かさと親しみやすさを感じさせる。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 shadow-md paper-texture">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">プロジェクト</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-card p-6 shadow-md paper-fold">
                <div className="aspect-[4/3] mb-4 overflow-hidden bg-muted">
                  <Image
                    src={`/paper-design.png`}
                    alt={`ペーパーデザイン例 ${item}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-2">ペーパープロジェクト {item}</h3>
                <p className="text-muted-foreground mb-4 font-serif">
                  紙の質感と折り紙の技法を取り入れた、温かみのあるデザインプロジェクト。
                </p>
                <Button variant="outline" className="rounded-none font-serif">
                  詳細を見る
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* テクスチャーセクション */}
      <section className="py-20 bg-muted paper-texture">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                紙の質感が
                <br />
                伝える温かさ
              </h2>
              <p className="text-muted-foreground mb-6 font-serif">
                デジタル時代において、紙の質感や手作り感を取り入れることは、人間らしさや温かみを表現する効果的な方法です。
                紙のテクスチャーや折り目は、触覚的な記憶を呼び起こし、より親しみやすい印象を与えます。
              </p>
              <p className="text-muted-foreground mb-8 font-serif">
                このデザインアプローチは、ブランドに親しみやすさや信頼感を加えたい場合に特に効果的です。
              </p>
              <Button variant="outline" className="rounded-none font-serif">
                テクスチャーについて
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-card shadow-md paper-fold"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-card p-8 shadow-lg paper-fold">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              紙の温かみを
              <br />
              あなたのプロジェクトに
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground font-serif">
              紙の質感と折り紙の美学を取り入れた、温かみと親しみやすさのあるデザインを始めませんか？
            </p>
            <Button size="lg" className="rounded-none font-serif">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-serif text-lg mb-4 md:mb-0">ペーパーデザイン</p>
            <p className="text-muted-foreground font-serif">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
