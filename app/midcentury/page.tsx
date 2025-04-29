"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Armchair, Lamp, Orbit } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MidCenturyPage() {
  // ページロード時にミッドセンチュリースタイルを適用
  useEffect(() => {
    document.body.className = "midcentury"
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
            <span className="text-primary">ミッドセンチュリー</span>
            <br />
            モダン
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            1940年代から1960年代にかけて花開いた、機能性と美しさを兼ね備えたデザインスタイル。
            有機的な形状と幾何学的なフォルムが融合した、時代を超えて愛される普遍的な魅力。
          </p>
          <Button className="rounded-md bg-primary hover:bg-primary/90">
            探索する <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Armchair className="h-8 w-8 text-primary" />,
                title: "有機的フォルム",
                description: "自然界からインスピレーションを得た、流れるような有機的な形状と曲線。",
              },
              {
                icon: <Lamp className="h-8 w-8 text-primary" />,
                title: "機能美",
                description: "装飾より機能を優先しながらも、美しさと実用性を両立させたデザイン。",
              },
              {
                icon: <Orbit className="h-8 w-8 text-primary" />,
                title: "新素材の活用",
                description: "プラスチックやファイバーグラスなど、当時の新素材を積極的に取り入れた革新性。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-md shadow-sm">
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
              <div key={item} className="aspect-square bg-muted overflow-hidden rounded-md">
                <Image
                  src={`/midcentury-design.png?height=400&width=400&query=mid century modern interior design ${item}`}
                  alt={`ミッドセンチュリーデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* デザイナーセクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">代表的デザイナー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "チャールズ・イームズ",
                desc: "妻のレイと共に、プライウッドやファイバーグラスを用いた革新的な椅子のデザインで知られる。",
                image: "charles-eames",
              },
              {
                name: "アルヴァ・アアルト",
                desc: "フィンランドの建築家・デザイナーで、曲げ木技術を用いた家具デザインのパイオニア。",
                image: "alvar-aalto",
              },
              {
                name: "イサム・ノグチ",
                desc: "日系アメリカ人の彫刻家・デザイナーで、有機的な形状のテーブルやランプのデザインで有名。",
                image: "isamu-noguchi",
              },
            ].map((designer, index) => (
              <div key={index} className="bg-card p-6 rounded-md overflow-hidden">
                <div className="aspect-square rounded-md overflow-hidden mb-4">
                  <Image
                    src={`/midcentury-designer.png?height=300&width=300&query=${designer.image} portrait`}
                    alt={designer.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{designer.name}</h3>
                <p className="text-muted-foreground text-sm">{designer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 家具セクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">アイコニックな家具</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                ミッドセンチュリーモダンは、今日でも高く評価され続けている数々のアイコニックな家具デザインを生み出しました。
                イームズラウンジチェア、ノグチコーヒーテーブル、サーリネンのチューリップチェアなど、
                これらの作品は単なる家具を超えて、芸術作品としての地位を確立しています。
              </p>
              <p className="text-muted-foreground mb-8">
                これらのデザインの特徴は、機能性と美しさの完璧なバランス、そして時代を超えた普遍的な魅力にあります。
                現代の住空間にも自然に溶け込み、温かみと洗練さを同時にもたらすことができるのは、
                ミッドセンチュリーデザインの大きな強みです。
              </p>
              <Button variant="outline" className="rounded-md">
                家具について詳しく
              </Button>
            </div>
            <div className="aspect-video bg-card rounded-md overflow-hidden">
              <Image
                src="/midcentury-furniture.png?height=600&width=800&query=iconic mid century modern furniture eames lounge chair"
                alt="ミッドセンチュリー家具"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            時代を超える
            <br />
            デザインを
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            機能性と美しさを兼ね備えた、ミッドセンチュリーモダンの普遍的な魅力をあなたの空間に取り入れてみませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-md">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-medium text-lg mb-4 md:mb-0">ミッドセンチュリーモダン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
