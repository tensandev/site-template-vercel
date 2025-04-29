"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Palette, Droplets, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GradientPage() {
  // ページロード時にグラデーションスタイルを適用
  useEffect(() => {
    document.body.className = "gradient"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-2 bg-gradient-to-r from-primary to-accent rounded-full mb-6">
            <Palette className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text">
            グラデーションの
            <br />
            美しさを表現
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            色彩の自然な移り変わりが生み出す、深みと立体感。 シンプルながらも印象的なグラデーションデザイン。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white border-0"
            >
              詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary">
              事例を見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-8 w-8 text-primary" />,
                title: "色彩の調和",
                description: "複数の色が滑らかに溶け合うことで生まれる調和と統一感。",
                gradient: "from-primary/10 to-primary/30",
              },
              {
                icon: <Droplets className="h-8 w-8 text-secondary" />,
                title: "流動的な表現",
                description: "固定的ではなく、流れるような自然な色彩の変化と移り変わり。",
                gradient: "from-secondary/10 to-secondary/30",
              },
              {
                icon: <Layers className="h-8 w-8 text-accent" />,
                title: "奥行きと立体感",
                description: "グラデーションがもたらす視覚的な奥行きと立体的な印象。",
                gradient: "from-accent/10 to-accent/30",
              },
            ].map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-xl`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">グラデーションギャラリー</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "サンセット", gradient: "from-orange-400 to-pink-500" },
              { name: "オーシャン", gradient: "from-blue-400 to-cyan-500" },
              { name: "フォレスト", gradient: "from-green-400 to-emerald-500" },
              { name: "ギャラクシー", gradient: "from-purple-500 to-indigo-600" },
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.gradient} rounded-xl overflow-hidden`}>
                <div className="aspect-video p-8 flex items-end">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg w-full">
                    <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                    <p className="text-white/90 mb-4">自然からインスピレーションを得たグラデーションデザイン。</p>
                    <Button variant="secondary" className="bg-white/90 hover:bg-white">
                      詳細を見る
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 実例セクション */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">デザイン実例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-square">
                  <Image
                    src={`/gradient-design.png`}
                    alt={`グラデーションデザイン例 ${item}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">グラデーションデザイン {item}</h3>
                  <p className="text-muted-foreground mb-4">色彩の自然な変化を活かした、印象的なデザイン例です。</p>
                  <Button
                    variant="outline"
                    className="bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border-0"
                  >
                    詳細を見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            色彩の調和で
            <br />
            魅力的なデザインを
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            グラデーションの美しさを取り入れた、印象的で魅力的なデザインを一緒に創りませんか？
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0 gradient-text">GRADIENT DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
