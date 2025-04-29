"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Hammer, Cog, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IndustrialPage() {
  // ページロード時にインダストリアルスタイルを適用
  useEffect(() => {
    document.body.className = "industrial"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 uppercase">
            <span className="text-primary">INDUSTRIAL</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            工場や倉庫などの産業空間からインスピレーションを得た、無骨で機能的なデザイン。
            素材の質感を活かし、構造をあえて露出させることで生まれる、力強く本質的な表現方法。
          </p>
          <Button className="rounded-none bg-primary hover:bg-primary/90">
            EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer className="h-8 w-8 text-primary" />,
                title: "素材の露出",
                description: "コンクリート、鉄、木材などの素材をそのまま見せる、飾らない正直な表現。",
              },
              {
                icon: <Cog className="h-8 w-8 text-primary" />,
                title: "機能性重視",
                description: "装飾より機能を優先し、目的に最適化された実用的なデザインアプローチ。",
              },
              {
                icon: <Wrench className="h-8 w-8 text-primary" />,
                title: "構造の露出",
                description: "配管、ダクト、梁などの構造要素をあえて隠さず、デザイン要素として活用。",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-card p-8 border border-primary/50">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-muted overflow-hidden border border-primary/30">
                <Image
                  src={`/industrial-design.png?height=400&width=400&query=industrial interior design loft ${item}`}
                  alt={`インダストリアルデザイン例 ${item}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 素材セクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">素材</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "コンクリート", image: "concrete" },
                { name: "鉄", image: "metal" },
                { name: "木材", image: "wood" },
                { name: "レンガ", image: "brick" },
              ].map((material, index) => (
                <div key={index} className="aspect-square relative">
                  <Image
                    src={`/industrial-material.png?height=300&width=300&query=industrial ${material.image} texture`}
                    alt={material.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <p className="text-white font-bold uppercase">{material.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-muted-foreground mb-6">
                インダストリアルデザインの魅力は、素材そのものの質感と特性を活かした表現にあります。
                コンクリートの無骨さ、鉄の力強さ、木材の温かみ、レンガの歴史的な風合いなど、
                それぞれの素材が持つ個性を最大限に引き出すことで、 本物志向の空間が生まれます。
              </p>
              <p className="text-muted-foreground mb-8">
                これらの素材は、時間の経過とともに味わいが増し、エイジングによる変化も
                デザインの一部として受け入れられます。使い込まれた跡や傷も含めて、
                素材の「正直さ」を大切にする姿勢が、インダストリアルデザインの本質です。
              </p>
              <Button variant="outline" className="rounded-none border-primary text-primary">
                素材について詳しく
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
            RAW &
            <br />
            FUNCTIONAL
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            素材の質感と構造の美しさを活かした、無骨で機能的なインダストリアルデザインを始めませんか？
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
            <p className="font-bold text-lg mb-4 md:mb-0 uppercase">INDUSTRIAL DESIGN</p>
            <p className="text-muted-foreground">© 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
