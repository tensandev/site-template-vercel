"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Circle, Square, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MonotonePage() {
  // ページロード時にモノトーンスタイルを適用
  useEffect(() => {
    document.body.className = "monotone"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            単一色の
            <br />
            <span className="text-primary">濃淡</span>による表現
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            一つの色の異なる濃淡だけで表現する洗練されたデザイン。 シンプルながらも深みのある視覚体験を提供します。
          </p>
          <Button className="rounded-none">
            詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Circle className="h-8 w-8 text-primary" />,
                title: "統一感",
                description: "単一色の異なる濃淡を使用することで生まれる強い統一感と調和。",
              },
              {
                icon: <Square className="h-8 w-8 text-primary" />,
                title: "洗練",
                description: "余計な色彩を排除した、洗練された印象と落ち着いた雰囲気。",
              },
              {
                icon: <Minus className="h-8 w-8 text-primary" />,
                title: "階調",
                description: "同じ色の微妙な濃淡の違いが生み出す奥行きと立体感。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 border-t-4 border-primary">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden">
                <Image
                  src={`/monotone-design.png`}
                  alt={`モノトーンデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* コンセプトセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                単一色の
                <br />
                可能性を探る
              </h2>
              <p className="text-muted-foreground mb-6">
                一つの色だけを使用することで、デザインはより純粋で本質的な表現に近づきます。
                色の濃淡だけで形を表現し、情報を伝える挑戦は、デザインの本質を問い直す機会となります。
              </p>
              <p className="text-muted-foreground mb-8">
                このアプローチは、ブランドカラーを強調したい場合や、コンテンツ自体の力を引き立てたい場合に特に効果的です。
              </p>
              <Button variant="outline" className="rounded-none">
                コンセプトを学ぶ
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[10, 30, 50, 70, 90].map((opacity, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-primary/${opacity} ${
                    index === 4 ? "col-span-2" : ""
                  } flex items-center justify-center`}
                >
                  <span className="text-primary-foreground font-medium">{opacity}%</span>
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
            単一色の力を
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            シンプルながらも深みのあるモノトーンデザインで、あなたのブランドを際立たせませんか？
          </p>
          <Button variant="secondary" size="lg" className="rounded-none">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">モノトーンデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
