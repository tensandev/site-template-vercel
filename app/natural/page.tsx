"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Leaf, Wind, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NaturalPage() {
  // ページロード時にナチュラルスタイルを適用
  useEffect(() => {
    document.body.className = "natural"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-secondary/70 text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium mb-6">
            自然との調和
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            自然からインスピレーションを
            <br />
            得たデザイン
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            地球の色彩と形状を取り入れた、穏やかで持続可能なデザインアプローチ。 自然との調和を大切にした表現方法。
          </p>
          <Button className="rounded-full">
            探索する <Leaf className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "有機的",
                description: "自然界の有機的な形状と流れるような曲線を取り入れたデザイン。",
              },
              {
                icon: <Wind className="h-8 w-8 text-accent" />,
                title: "持続可能",
                description: "環境に配慮した持続可能なアプローチと長く使える普遍的な美しさ。",
              },
              {
                icon: <Droplets className="h-8 w-8 text-secondary-foreground" />,
                title: "調和",
                description: "自然の色彩と質感が生み出す、心地よい視覚的バランスと調和。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-2xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* イメージセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                自然の知恵を
                <br />
                デザインに
              </h2>
              <p className="text-muted-foreground mb-6">
                自然界には何百万年もの進化によって完成された美しいデザインが溢れています。
                私たちはそこから学び、インスピレーションを得ることで、
                より調和のとれた持続可能なデザインを生み出すことができます。
              </p>
              <p className="text-muted-foreground mb-8">
                このアプローチは、単に見た目の美しさだけでなく、
                機能性と持続可能性を兼ね備えた本質的な価値を持つデザインにつながります。
              </p>
              <Button variant="outline" className="rounded-full">
                もっと詳しく
              </Button>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image src="/natural-landscape.png" alt="自然の風景" width={800} height={600} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="bg-accent/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">プロジェクト</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card rounded-2xl overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/natural-design.png?height=400&width=600&query=minimal natural design ${item}`}
                    alt={`ナチュラルデザイン例 ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">プロジェクト {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    自然からインスピレーションを得た、持続可能なデザインプロジェクト。
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            自然との調和を
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            自然からインスピレーションを得たデザインで、持続可能で調和のとれた表現を実現しませんか？
          </p>
          <Button variant="secondary" size="lg" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">ナチュラルデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
