"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Star, Zap, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PopartPage() {
  // ページロード時にポップアートスタイルを適用
  useEffect(() => {
    document.body.className = "popart"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="text-yellow-500">POP!</span> <span className="text-pink-500">ART</span>{" "}
            <span className="text-blue-500">STYLE!</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            大衆文化からインスピレーションを得た、鮮やかで大胆なデザイン。
            コミックやポップカルチャーの要素を取り入れた、インパクトのある表現方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-none bg-yellow-500 hover:bg-yellow-600 text-black">
              EXPLORE <Star className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
            >
              DETAILS
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-white">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-yellow-500" />,
                title: "大胆な色彩",
                description: "鮮やかで対照的な色使いによる、視覚的なインパクトと活気ある表現。",
                bgColor: "bg-white",
              },
              {
                icon: <Zap className="h-8 w-8 text-pink-500" />,
                title: "コミック要素",
                description: "漫画やコミックからインスピレーションを得た、ドットパターンや吹き出しの活用。",
                bgColor: "bg-white",
              },
              {
                icon: <Palette className="h-8 w-8 text-blue-500" />,
                title: "大衆文化",
                description: "日常的な商品や大衆文化のアイコンを芸術として再解釈する姿勢。",
                bgColor: "bg-white",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} p-8 shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
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
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-muted overflow-hidden border-4 border-black hover:border-yellow-500 transition-colors duration-300"
              >
                <Image
                  src={`/popart-design.png`}
                  alt={`ポップアートデザイン例 ${item}`}
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
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">有名アーティスト</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "アンディ・ウォーホル",
                desc: "大量生産品や有名人の肖像画を鮮やかな色彩で表現し、ポップアートの代表的存在となった。",
              },
              {
                name: "ロイ・リキテンスタイン",
                desc: "コミックのドットパターンと太い輪郭線を特徴とし、大衆文化を芸術として再解釈した。",
              },
            ].map((artist, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{artist.name}</h3>
                <p className="text-muted-foreground mb-6">{artist.desc}</p>
                <Button
                  variant="outline"
                  className="rounded-none border-black text-black hover:bg-black hover:text-white"
                >
                  詳しく見る
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            POP!
            <br />
            YOUR DESIGN!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            鮮やかで大胆なポップアートスタイルで、あなたのプロジェクトに新しい命を吹き込みませんか？
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-none bg-white text-pink-500 hover:bg-yellow-500 hover:text-black"
          >
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-black text-xl mb-4 md:mb-0">POP ART DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
