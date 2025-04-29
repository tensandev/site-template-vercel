"use client"

import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MinimalistPage() {
  // ページロード時にミニマリストスタイルを適用
  useEffect(() => {
    document.body.className = "minimalist"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-40">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">必要なものだけを。</h1>
          <p className="text-muted-foreground mb-12">
            余分なものをすべて取り除き、本質だけを残したデザイン。 シンプルであることの美しさと機能性を追求します。
          </p>
          <Button variant="outline" className="rounded-none">
            詳しく見る
          </Button>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-16">
          {[
            {
              title: "シンプル",
              description: "余計な装飾を排除し、必要最小限の要素だけで構成されたデザイン。",
            },
            {
              title: "機能的",
              description: "見た目の美しさだけでなく、使いやすさを重視した実用的なアプローチ。",
            },
            {
              title: "持続可能",
              description: "時代に左右されない普遍的な美しさを持つ長く使えるデザイン。",
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-normal mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 区切り線 */}
      <div className="container mx-auto px-4">
        <hr className="my-20" />
      </div>

      {/* プロジェクトセクション */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-normal mb-12">プロジェクト</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-card p-8 border">
              <h3 className="text-lg font-normal mb-2">プロジェクト {item}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                シンプルで機能的なデザインアプローチを用いたプロジェクト例です。
              </p>
              <Button variant="link" className="p-0 h-auto text-sm">
                詳細を見る <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-normal mb-6">一緒に始めましょう</h2>
            <p className="text-muted-foreground mb-8">
              シンプルで機能的なデザインで、あなたのプロジェクトを次のレベルへ。
            </p>
            <Button className="rounded-none">お問い合わせ</Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">ミニマルデザイン</p>
            <p className="text-muted-foreground text-sm">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
