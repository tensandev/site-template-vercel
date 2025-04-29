"use client"

import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ZenPage() {
  // ページロード時に禅スタイルを適用
  useEffect(() => {
    document.body.className = "zen"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 zen-pattern">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">余白の美学。</h1>
          <p className="text-muted-foreground mb-12">
            必要最小限の要素だけを残し、余白を大切にした禅の美学に基づくデザイン。
            シンプルさの中に深い意味を持たせる日本の伝統的なアプローチ。
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
              title: "余白",
              description: "空間の余白が生み出す静けさと調和。必要なものだけを残した本質的な美しさ。",
            },
            {
              title: "非対称",
              description: "完璧な対称性を避け、自然な不均衡がもたらす動的な調和と緊張感。",
            },
            {
              title: "簡素",
              description: "装飾を削ぎ落とし、素材そのものの質感と形状を活かした表現方法。",
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

      {/* ギャラリーセクション */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-normal mb-12">作品</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-card p-8 border">
              <h3 className="text-lg font-normal mb-2">作品 {item}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                禅の美学を取り入れた、余白と簡素さを大切にしたデザイン例です。
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
            <h2 className="text-2xl font-normal mb-6">禅の美学を取り入れる</h2>
            <p className="text-muted-foreground mb-8">
              余白と簡素さを大切にした、本質的な価値を持つデザインを始めませんか。
            </p>
            <Button className="rounded-none">お問い合わせ</Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">禅デザイン</p>
            <p className="text-muted-foreground text-sm">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
