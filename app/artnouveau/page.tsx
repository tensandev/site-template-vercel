"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Flower, Leaf, Wind } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ArtNouveauPage() {
  // ページロード時にアールヌーボースタイルを適用
  useEffect(() => {
    document.body.className = "artnouveau"
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
            <span className="text-primary italic">アール・ヌーボー</span>
            <br />
            自然の曲線美
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            自然界の有機的な曲線と植物のモチーフからインスピレーションを得た装飾的なデザイン。
            19世紀末から20世紀初頭にかけて花開いた、流れるような美しさと優雅さを持つ芸術様式。
          </p>
          <Button className="rounded-full bg-primary hover:bg-primary/90">
            探索する <Flower className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Flower className="h-8 w-8 text-primary" />,
                title: "有機的な曲線",
                description: "自然界の植物や花からインスピレーションを得た、流れるような曲線と装飾的なデザイン。",
              },
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: "自然モチーフ",
                description: "花、蔓、葉などの自然のモチーフを様式化し、装飾的に表現した優美なパターン。",
              },
              {
                icon: <Wind className="h-8 w-8 text-primary" />,
                title: "流動的な動き",
                description: "静止した形ではなく、風に揺れる植物のような動きと流れを感じさせる表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-sm border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden rounded-3xl border border-primary/20">
                <Image
                  src={`/artnouveau-design.png?height=400&width=400&query=art nouveau alphonse mucha design ${item}`}
                  alt={`アールヌーボーデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* アーティストセクション */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">代表的アーティスト</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "アルフォンス・ミュシャ",
                desc: "チェコ出身の画家で、アール・ヌーボーを代表する装飾的なポスターや広告を多数制作。美しい女性と花のモチーフが特徴。",
                image: "alphonse-mucha",
              },
              {
                name: "アントニ・ガウディ",
                desc: "スペインの建築家で、バルセロナのサグラダ・ファミリアなど、有機的な曲線と自然のモチーフを取り入れた建築作品で知られる。",
                image: "antoni-gaudi",
              },
            ].map((artist, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src={`/artnouveau-artist.png?height=300&width=300&query=${artist.image} portrait`}
                    alt={artist.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-serif mb-4">{artist.name}</h3>
                  <p className="text-muted-foreground mb-4">{artist.desc}</p>
                  <Button variant="outline" className="rounded-full">
                    詳しく見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            自然の曲線美を
            <br />
            あなたのデザインに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            アール・ヌーボーの優雅で装飾的な曲線と自然のモチーフを取り入れた、美しく洗練されたデザインを始めませんか？
          </p>
          <Button size="lg" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-serif text-lg mb-4 md:mb-0">アール・ヌーボーデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
