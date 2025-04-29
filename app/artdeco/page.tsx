"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Star, Sun, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArtDecoPage() {
  // ページロード時にアールデコスタイルを適用
  useEffect(() => {
    document.body.className = "artdeco"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Star className="h-8 w-8 text-primary" />
            <Sun className="h-8 w-8 text-secondary" />
            <Star className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-primary">ART DECO</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            1920年代から30年代に花開いた、豪華さと幾何学的な美しさが融合したデザインスタイル。
            モダニティと伝統工芸の融合による、洗練された優雅さと大胆さを持つ表現方法。
          </p>
          <Button className="rounded-none bg-primary hover:bg-primary/90">
            EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-primary" />,
                title: "幾何学的パターン",
                description: "ジグザグ、三角形、円などの幾何学的な形を組み合わせた、大胆で洗練されたパターン。",
              },
              {
                icon: <Sun className="h-8 w-8 text-primary" />,
                title: "豪華な素材",
                description: "大理石、貴金属、エキゾチックな木材など、高級感のある素材を用いた贅沢な表現。",
              },
              {
                icon: <Sparkles className="h-8 w-8 text-primary" />,
                title: "対照的な色彩",
                description: "黒と金、深い青と銀など、コントラストの強い色の組み合わせによる劇的な効果。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 border-t-4 border-primary">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden border border-primary/30">
                <Image
                  src={`/artdeco-design.png?height=400&width=400&query=art deco pattern design ${item}`}
                  alt={`アールデコデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 建築セクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">アールデコ建築</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-card border border-primary/30 overflow-hidden">
              <Image
                src="/artdeco-architecture.png?height=600&width=800&query=chrysler building art deco architecture"
                alt="アールデコ建築"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-6">
                アールデコ建築は、ニューヨークのクライスラービルやエンパイアステートビル、
                マイアミのサウスビーチなど、世界中の象徴的な建物に見ることができます。
                垂直性を強調した直線的なデザイン、幾何学的な装飾、そして豪華な素材の使用が特徴です。
              </p>
              <p className="text-muted-foreground mb-8">
                これらの建築物は、1920年代から30年代の繁栄と楽観主義を象徴し、
                現代でも洗練された優雅さと大胆さの象徴として高く評価されています。
                アールデコ建築の影響は、現代の高層ビルやホテル、劇場などにも見ることができます。
              </p>
              <Button variant="outline" className="rounded-none border-primary text-primary">
                建築について詳しく
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ELEGANCE &
            <br />
            BOLDNESS
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            幾何学的な美しさと豪華さを兼ね備えた、洗練されたアールデコスタイルを取り入れてみませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-none">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">ART DECO DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
