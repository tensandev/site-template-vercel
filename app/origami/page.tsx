"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, FoldVerticalIcon as Fold, Scissors, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OrigamiPage() {
  // ページロード時に折り紙スタイルを適用
  useEffect(() => {
    document.body.className = "origami"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            <span className="text-primary">折り紙</span>の
            <br />
            美しさと精密さ
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            日本の伝統的な折り紙からインスピレーションを得たデザイン。
            一枚の紙から生まれる無限の可能性と幾何学的な美しさを表現します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none origami-fold">
              探索する <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none">
              詳細を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Fold className="h-8 w-8 text-primary" />,
                title: "折り目",
                description: "精密な折り目と幾何学的なパターンが生み出す立体感と構造美。",
              },
              {
                icon: <Square className="h-8 w-8 text-primary" />,
                title: "変形",
                description: "一枚の紙から様々な形へと変化する、無限の可能性と創造性。",
              },
              {
                icon: <Scissors className="h-8 w-8 text-primary" />,
                title: "シンプルさ",
                description: "余計なものを加えず、折ることだけで表現する純粋なミニマリズム。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 origami-fold">
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
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-card rounded-none overflow-hidden origami-fold">
                <Image
                  src={`/origami-design.png`}
                  alt={`折り紙デザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* プロセスセクション */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">折り紙のプロセス</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "正方形の紙", desc: "一枚の正方形の紙から始まる全ての可能性。" },
              { step: "2", title: "基本の折り", desc: "谷折り、山折りの基本技術が形の基礎を作る。" },
              { step: "3", title: "中間形態", desc: "基本形から派生する様々な中間的な形状。" },
              { step: "4", title: "完成形", desc: "精密な折りが生み出す最終的な美しい形。" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="aspect-square bg-card flex items-center justify-center mb-4 origami-fold">
                  <span className="text-3xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card p-8 origami-fold">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              折り紙の精神を
              <br />
              デザインに
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              シンプルさと精密さを兼ね備えた折り紙の美学を、あなたのプロジェクトに取り入れてみませんか？
            </p>
            <Button size="lg" className="rounded-none">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">折り紙デザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
