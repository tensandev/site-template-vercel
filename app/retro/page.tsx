"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Radio, Disc, Tv } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RetroPage() {
  // ページロード時にレトロスタイルを適用
  useEffect(() => {
    document.body.className = "retro"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 retro-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-primary">レトロ</span>な
            <br />
            魅力を現代に
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            80年代、90年代の懐かしさと現代のデザインを融合。 ノスタルジックでありながら新鮮な表現を追求します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              タイムトラベル <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              詳しく見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Radio className="h-8 w-8 text-primary" />,
                title: "ノスタルジー",
                description: "過去の時代を懐かしむ感覚と、それを現代的に再解釈したデザイン。",
              },
              {
                icon: <Disc className="h-8 w-8 text-accent" />,
                title: "ポップカルチャー",
                description: "80年代、90年代のポップカルチャーからインスピレーションを得た表現。",
              },
              {
                icon: <Tv className="h-8 w-8 text-secondary-foreground" />,
                title: "アナログ感",
                description: "デジタル時代に逆行する、あえてのアナログ感とテクスチャーの活用。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border-2 border-primary/30">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">レトロギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-primary/20">
                <Image
                  src={`/retro-style.png`}
                  alt={`レトロデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* タイムラインセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">レトロタイムライン</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {[
              {
                year: "1980年代初頭",
                title: "ネオン＆シンセウェーブ",
                desc: "鮮やかなネオンカラーとシンセサイザーサウンドが特徴的な時代。",
              },
              {
                year: "1980年代後半",
                title: "メンフィススタイル",
                desc: "大胆な幾何学模様とカラフルなデザインが流行。",
              },
              { year: "1990年代", title: "グランジ＆ミニマル", desc: "反抗的なグランジスタイルとミニマリズムの台頭。" },
              { year: "現代", title: "レトロリバイバル", desc: "過去のスタイルを現代的に再解釈したデザインの流行。" },
            ].map((item, index) => (
              <div key={index} className="relative flex items-center md:justify-between md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-card shadow md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-primary">{index + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-4 rounded-xl shadow">
                  <div className="text-primary font-bold">{item.year}</div>
                  <div className="font-bold mb-1">{item.title}</div>
                  <div className="text-muted-foreground text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20 retro-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            レトロな魅力を
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            懐かしさと新しさが融合した、印象的なデザインを一緒に作りませんか？
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-xl mb-4 md:mb-0">RETRO DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
