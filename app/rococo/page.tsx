"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Flower, Shell, Feather } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RococoPage() {
  // ページロード時にロココスタイルを適用
  useEffect(() => {
    document.body.className = "rococo"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-6 italic">
            <span className="text-primary">Rococo</span>
            <br />
            優美と装飾の芸術
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-serif">
            18世紀フランスで花開いた、曲線美と繊細な装飾が特徴的な優雅なデザインスタイル。
            軽やかさと遊び心に満ちた、華やかで洗練された表現方法。
          </p>
          <Button className="rounded-full bg-primary/90 hover:bg-primary text-white">
            優雅に探索する <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 italic">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shell className="h-8 w-8 text-primary" />,
                title: "曲線と非対称",
                description: "流れるような曲線と非対称の構図による、軽やかで動きのある表現。",
              },
              {
                icon: <Flower className="h-8 w-8 text-primary" />,
                title: "繊細な装飾",
                description: "花、貝殻、葉などのモチーフを用いた、細部まで行き届いた装飾性。",
              },
              {
                icon: <Feather className="h-8 w-8 text-primary" />,
                title: "パステルカラー",
                description: "淡いピンク、水色、クリーム色などの柔らかな色彩による優美な雰囲気の演出。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-sm border border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif mb-4 italic">{feature.title}</h3>
                <p className="text-muted-foreground font-serif">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 italic">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden rounded-3xl border border-primary/20">
                <Image
                  src={`/rococo-design.png?height=400&width=400&query=rococo interior design ${item}`}
                  alt={`ロココデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 歴史セクション */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 italic">ロココの歴史</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6 font-serif">
                ロココ様式は18世紀初頭のフランスで誕生し、ルイ15世の治世に最盛期を迎えました。
                それまでのバロック様式の重厚さに対して、より軽やかで親密な表現を追求したスタイルです。
              </p>
              <p className="text-muted-foreground mb-8 font-serif">
                「ロココ」という名前は、フランス語の「ロカイユ（rocaille）」に由来し、
                貝殻や小石を用いた装飾を意味します。貴族の邸宅やサロンを中心に広まり、
                建築、インテリア、絵画、家具など幅広い分野に影響を与えました。
              </p>
              <Button variant="outline" className="rounded-full border-primary/50">
                歴史について詳しく
              </Button>
            </div>
            <div className="aspect-video bg-card rounded-3xl overflow-hidden border border-primary/20">
              <Image
                src="/rococo-history.png?height=600&width=800&query=versailles rococo salon"
                alt="ロココの歴史"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 italic">
            優美さと装飾性を
            <br />
            あなたのデザインに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground font-serif">
            曲線美と繊細な装飾が織りなす、優雅で華やかなロココスタイルを取り入れてみませんか？
          </p>
          <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary text-white">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-serif text-lg mb-4 md:mb-0 italic">Rococo Design</p>
            <p className="text-muted-foreground font-serif">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
