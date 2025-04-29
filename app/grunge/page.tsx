"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Layers, FileText, Brush } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GrungePage() {
  // ページロード時にグランジスタイルを適用
  useEffect(() => {
    document.body.className = "grunge"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-stone-800 opacity-10 mix-blend-multiply"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase text-stone-800 relative">
            <span className="relative inline-block">
              GRUNGE
              <span className="absolute -inset-1 bg-stone-300 opacity-30 -z-10 transform -rotate-1"></span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-stone-700 mb-8">
            90年代のグランジムーブメントからインスピレーションを得た、荒々しくも魅力的なデザイン。
            テクスチャ豊かで不完全さを受け入れる、反逆的でオーセンティックな表現方法。
          </p>
          <Button className="rounded-none bg-stone-800 hover:bg-stone-900 uppercase font-bold">
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-stone-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase text-stone-800">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-8 w-8 text-stone-700" />,
                title: "テクスチャ",
                description: "擦れた跡や汚れ、傷などのテクスチャを積極的に取り入れた、生々しい表現。",
              },
              {
                icon: <FileText className="h-8 w-8 text-stone-700" />,
                title: "タイポグラフィ",
                description: "切り貼りしたような不揃いなフォントや手書き風の文字を用いた反逆的な表現。",
              },
              {
                icon: <Brush className="h-8 w-8 text-stone-700" />,
                title: "不完全さ",
                description: "完璧さを追求せず、あえての不完全さや荒さを魅力として活かすアプローチ。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 shadow-md relative">
                <div className="absolute top-0 right-0 w-full h-full bg-stone-300 opacity-10 transform rotate-1 -z-10"></div>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase text-stone-800">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-stone-100 overflow-hidden relative">
                <div className="absolute inset-0 border border-stone-800 opacity-30 transform rotate-1 z-10"></div>
                <Image
                  src={`/grunge-design.png`}
                  alt={`グランジデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* インスピレーションセクション */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">インスピレーション</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 uppercase">90年代のグランジムーブメント</h3>
              <p className="text-stone-300 mb-6">
                シアトル発祥の音楽ジャンルから広がった文化的ムーブメント。反抗的で生々しい表現と、
                商業主義への反発が特徴。ニルヴァーナやパールジャムなどのバンドのアルバムアートや
                ポスターが、グランジデザインの代表例として今も影響を与え続けている。
              </p>
              <Button
                variant="outline"
                className="rounded-none border-white text-white hover:bg-white hover:text-stone-800"
              >
                詳しく見る
              </Button>
            </div>
            <div className="aspect-video bg-stone-700 relative">
              <Image
                src="/grunge-inspiration.png"
                alt="グランジインスピレーション"
                width={800}
                height={600}
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              />
              <div className="absolute inset-0 border border-white opacity-30 transform -rotate-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-stone-300">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg relative">
            <div className="absolute inset-0 border-2 border-stone-800 transform translate-x-2 translate-y-2 -z-10"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase text-stone-800">
              RAW &
              <br />
              AUTHENTIC
            </h2>
            <p className="text-lg md:text-xl mb-8 text-stone-600">
              荒々しくも魅力的なグランジスタイルで、あなたのプロジェクトに本物の個性を吹き込みませんか？
            </p>
            <Button size="lg" className="rounded-none bg-stone-800 hover:bg-stone-900 uppercase font-bold">
              お問い合わせ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-stone-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-xl mb-4 md:mb-0 uppercase">GRUNGE DESIGN</p>
            <p className="text-stone-500">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
