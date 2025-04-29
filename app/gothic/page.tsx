"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Moon, Castle, Skull } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GothicPage() {
  // ページロード時にゴシックスタイルを適用
  useEffect(() => {
    document.body.className = "gothic"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Moon className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
            <span className="text-primary">GOTHIC</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            中世の神秘と暗黒の美学を現代に蘇らせる、荘厳で神秘的なデザインスタイル。
            光と影のコントラスト、尖塔のシルエット、そして装飾的な細部が織りなす深遠な世界。
          </p>
          <Button className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground">
            闇を探索する <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-primary">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Castle className="h-8 w-8 text-primary" />,
                title: "尖塔と垂直性",
                description: "天に向かって伸びる尖塔と垂直線が生み出す、荘厳さと崇高さを表現したデザイン。",
              },
              {
                icon: <Moon className="h-8 w-8 text-primary" />,
                title: "光と影",
                description: "強いコントラストと影の演出による、神秘的で劇的な雰囲気の創出。",
              },
              {
                icon: <Skull className="h-8 w-8 text-primary" />,
                title: "装飾的細部",
                description: "精緻な装飾と象徴的なモチーフを用いた、物語性と神秘性に富んだ表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 border border-primary">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-primary">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden border border-primary">
                <Image
                  src={`/gothic-design.png?height=400&width=400&query=gothic architecture dark design ${item}`}
                  alt={`ゴシックデザイン例 ${item}`}
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
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-primary">ゴシック建築</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                ゴシック様式は12世紀から16世紀にかけてヨーロッパで発展した建築様式で、
                それまでのロマネスク様式に代わるものとして登場しました。
                尖頭アーチ、リブ・ヴォールト、飛梁などの革新的な建築技術により、
                より高く、より光に満ちた空間を実現しました。
              </p>
              <p className="text-muted-foreground mb-8">
                ノートルダム大聖堂やシャルトル大聖堂などの壮大な建築物は、
                現代のゴシックデザインにも大きな影響を与え続けています。
                その神秘的で荘厳な雰囲気は、現代のデザインにおいても独特の魅力を放っています。
              </p>
              <Button variant="outline" className="rounded-none border-primary text-primary">
                建築様式を学ぶ
              </Button>
            </div>
            <div className="aspect-video bg-card border border-primary overflow-hidden">
              <Image
                src="/gothic-cathedral.png?height=600&width=800&query=gothic cathedral interior stained glass"
                alt="ゴシック大聖堂"
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
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            神秘と荘厳さを
            <br />
            あなたのデザインに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            ゴシックスタイルの深遠な美学と象徴性を取り入れた、印象的で物語性豊かなデザインを始めませんか？
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
            <p className="font-serif text-lg mb-4 md:mb-0 text-primary">GOTHIC DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
