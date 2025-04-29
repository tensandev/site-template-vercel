"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Palmtree, Sun, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TropicalPage() {
  // ページロード時にトロピカルスタイルを適用
  useEffect(() => {
    document.body.className = "tropical"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <Palmtree className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">トロピカル</span>
            <br />
            パラダイス
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            南国の鮮やかな色彩と自然の豊かさからインスピレーションを得たデザイン。
            明るく活気に満ちた雰囲気と、エキゾチックな魅力を持つ表現方法。
          </p>
          <Button className="rounded-full bg-primary hover:bg-primary/90">
            探索する <Sun className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palmtree className="h-8 w-8 text-primary" />,
                title: "エキゾチックな植物",
                description: "ヤシの木、モンステラ、バードオブパラダイスなど、南国特有の植物をモチーフにした表現。",
              },
              {
                icon: <Sun className="h-8 w-8 text-secondary-foreground" />,
                title: "鮮やかな色彩",
                description: "ターコイズブルー、コーラルピンク、ライムグリーンなど、明るく活気のある色使い。",
              },
              {
                icon: <Waves className="h-8 w-8 text-accent" />,
                title: "自然の豊かさ",
                description: "海、砂浜、熱帯雨林など、南国の豊かな自然環境からインスピレーションを得た表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-sm border-b-4 border-primary">
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
              <div key={item} className="aspect-square bg-muted overflow-hidden rounded-xl">
                <Image
                  src={`/tropical-design.png?height=400&width=400&query=tropical design pattern palm leaves ${item}`}
                  alt={`トロピカルデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* パターンセクション */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">トロピカルパターン</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                トロピカルデザインの魅力の一つは、その特徴的なパターンにあります。
                ヤシの葉、モンステラ、バナナの葉などの大きな葉を持つ植物や、
                エキゾチックな花々、カラフルな鳥や動物などをモチーフにしたパターンは、
                空間に活気と南国の雰囲気をもたらします。
              </p>
              <p className="text-muted-foreground mb-8">
                これらのパターンは、壁紙やテキスタイル、パッケージデザインなど様々な用途に活用され、
                日常空間に南国のリゾート感を演出する効果があります。
                大胆な色使いと組み合わせることで、より一層トロピカルな魅力が引き立ちます。
              </p>
              <Button variant="outline" className="rounded-full">
                パターンについて詳しく
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-card rounded-xl overflow-hidden">
                  <Image
                    src={`/tropical-pattern.png?height=300&width=300&query=tropical pattern ${item}`}
                    alt={`トロピカルパターン ${item}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            南国の魅力を
            <br />
            あなたのデザインに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            鮮やかな色彩とエキゾチックな自然のモチーフを取り入れた、明るく活気あふれるデザインを始めませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0">トロピカルデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
