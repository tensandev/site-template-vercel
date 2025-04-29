"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, WavesIcon as WaveIcon, Waves, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WavePage() {
  // ページロード時にウェーブスタイルを適用
  useEffect(() => {
    document.body.className = "wave"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 wave-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <WaveIcon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">流れるような</span>
            <br />
            デザインの美学
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            自然界の流れるような曲線と波のリズムからインスピレーションを得たデザイン。
            柔らかさと動きが調和する新しい表現方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              詳しく見る <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              プロジェクト例
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <WaveIcon className="h-8 w-8 text-primary" />,
                title: "流動的",
                description: "自然界の波や水の流れからインスピレーションを得た有機的なデザイン。",
              },
              {
                icon: <Waves className="h-8 w-8 text-accent" />,
                title: "リズミカル",
                description: "繰り返しのパターンが生み出す心地よいリズム感と調和。",
              },
              {
                icon: <Droplets className="h-8 w-8 text-secondary-foreground" />,
                title: "柔軟性",
                description: "硬直した直線ではなく、柔らかな曲線による自由な表現。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ショーケースセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">デザインショーケース</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-3xl">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={`/wave-design.png`}
                    alt={`ウェーブデザイン例 ${item}`}
                    width={1000}
                    height={600}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">ウェーブデザイン {item}</h3>
                  <p className="text-white/80 mb-4 max-w-md">
                    流れるような曲線と自然なリズムを取り入れたデザイン例です。
                  </p>
                  <Button variant="outline" className="w-fit">
                    詳細を見る
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 波形セクション */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                自然界の
                <br />
                <span className="text-primary">リズム</span>を取り入れる
              </h2>
              <p className="text-muted-foreground mb-6">
                自然界には美しい波形やリズムが溢れています。海の波、風紋、音の波形など、
                自然界の流れるようなパターンは私たちに心地よさと安らぎを与えてくれます。
              </p>
              <p className="text-muted-foreground mb-8">
                このデザインアプローチは、そうした自然界のリズムをデジタルデザインに取り入れ、
                有機的で柔らかな印象を与えることを目指しています。
              </p>
              <Button className="rounded-full">
                詳しく見る <WaveIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <WaveIcon className="w-12 h-12 text-primary/40" />
                  </div>
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
            流れるような美しさを
            <br />
            あなたのプロジェクトに
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            自然界のリズムと調和を取り入れた、印象的で心地よいデザインを一緒に創りませんか？
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
            <p className="font-bold text-lg mb-4 md:mb-0">WAVE DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
