"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Star, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnimePage() {
  // ページロード時にアニメスタイルを適用
  useEffect(() => {
    document.body.className = "anime"
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
            <Star className="h-8 w-8 text-yellow-400" />
            <Heart className="h-8 w-8 text-pink-500" />
            <Star className="h-8 w-8 text-yellow-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-primary">アニメ</span>
            <br />
            スタイル
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            日本のアニメーション文化からインスピレーションを得た、鮮やかで表現力豊かなデザイン。
            特徴的なキャラクターと感情表現が織りなす、魅力的な視覚世界。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              冒険を始める <Zap className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-primary/50">
              詳しく見る
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 text-yellow-400" />,
                title: "鮮やかな色彩",
                description: "感情や雰囲気を表現する、明るく鮮やかな色使いと対比的なカラーパレット。",
              },
              {
                icon: <Heart className="h-8 w-8 text-pink-500" />,
                title: "感情表現",
                description: "誇張された表情や視覚効果による、わかりやすく印象的な感情の表現方法。",
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-500" />,
                title: "動きの表現",
                description: "スピード線やエフェクトを用いた、静止画でも動きを感じさせる表現技法。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-md border-2 border-primary/20">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* キャラクターセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">キャラクターデザイン</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                アニメスタイルの中心となるのは、特徴的なキャラクターデザインです。大きな目、誇張された表情、
                シンプルながらも個性的な髪型など、一目で認識できる特徴を持ったキャラクターが、
                物語や感情を伝える重要な要素となります。
              </p>
              <p className="text-muted-foreground mb-8">
                また、キャラクターの衣装や小物にも細部までこだわり、その人物の性格や背景を
                視覚的に表現することで、言葉以上に多くの情報を伝えることができます。
              </p>
              <Button variant="outline" className="rounded-full">
                キャラクターについて詳しく
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square bg-card rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={`/anime-character.png`}
                    alt={`アニメキャラクター ${item}`}
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

      {/* 背景セクション */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">背景デザイン</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-card rounded-xl overflow-hidden shadow-md">
                <div className="aspect-video">
                  <Image
                    src={`/anime-background.png`}
                    alt={`アニメ背景 ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">背景シーン {item}</h3>
                  <p className="text-muted-foreground mb-4">
                    細部まで作り込まれた背景は、物語の世界観を豊かに表現し、キャラクターの活動舞台となります。
                  </p>
                  <Button variant="link" className="p-0 h-auto">
                    詳細を見る <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* エフェクトセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">視覚エフェクト</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "スピード線", desc: "動きの速さや方向性を表現" },
              { name: "集中線", desc: "注目や驚きの感情を強調" },
              { name: "効果音", desc: "音を視覚的に表現するテキスト" },
              { name: "感情記号", desc: "汗や怒りマークなどの感情表現" },
            ].map((effect, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-md border-2 border-primary/20">
                <h3 className="text-xl font-bold mb-2">{effect.name}</h3>
                <p className="text-muted-foreground">{effect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたの物語を
            <br />
            アニメスタイルで
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            鮮やかな色彩と表現力豊かなアニメスタイルで、あなたのプロジェクトに物語性と感情を吹き込みませんか？
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
            <p className="font-bold text-lg mb-4 md:mb-0">アニメスタイルデザイン</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
