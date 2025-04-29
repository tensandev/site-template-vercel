"use client"

import { useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Zap, Monitor, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CyberpunkPage() {
  // ページロード時にサイバーパンクスタイルを適用
  useEffect(() => {
    document.body.className = "cyberpunk"
    return () => {
      document.body.className = ""
    }
  }, [])

  return (
    <main className="pt-16">
      {/* ヒーローセクション */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-sm text-sm font-mono mb-6">
            SYSTEM.INIT_SEQUENCE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 neon-glow">
            <span className="text-primary">サイバー</span>
            <br />
            パンク
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono">
            ハイテクとローライフが交差する未来的なデザイン。 ネオンの輝きとデジタルの美学が融合した新しい表現方法。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-sm font-mono neon-border">
              EXPLORE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-sm font-mono border-primary/50">
              SYSTEM INFO
            </Button>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-mono text-primary neon-glow">
            FEATURES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "NEON AESTHETICS",
                description: "暗闇に浮かび上がるネオンの輝きが生み出す、未来的で都会的な雰囲気。",
              },
              {
                icon: <Monitor className="h-8 w-8 text-secondary" />,
                title: "DIGITAL GLITCH",
                description: "デジタルノイズやグリッチエフェクトを取り入れた、荒々しくも魅力的な表現。",
              },
              {
                icon: <Cpu className="h-8 w-8 text-accent" />,
                title: "TECH FUSION",
                description: "ハイテクとストリートカルチャーが融合した、独特の世界観とアイデンティティ。",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm p-8 rounded-sm border border-primary/30 neon-border"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4 font-mono text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono text-primary">GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-sm">
                <Image
                  src={`/cyberpunk-design.png`}
                  alt={`サイバーパンクデザイン例 ${item}`}
                  width={800}
                  height={600}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-mono text-primary neon-glow">PROJECT {item}</h3>
                    <p className="text-white/80 mb-4">
                      ネオンとデジタルグリッチを活用した、サイバーパンク的世界観のデザイン。
                    </p>
                    <Button variant="outline" className="rounded-sm border-primary/50 neon-border">
                      VIEW DETAILS
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="bg-primary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card/20 backdrop-blur-sm p-8 rounded-sm border border-primary/30 neon-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono text-primary neon-glow">
              SYSTEM.UPGRADE
              <br />
              AVAILABLE
            </h2>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              未来的でエッジの効いたサイバーパンクデザインで、あなたのプロジェクトを次のレベルへ。
            </p>
            <Button size="lg" className="rounded-sm font-mono neon-border">
              INITIALIZE <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-primary/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold text-lg mb-4 md:mb-0 font-mono text-primary neon-glow">CYBERPUNK.SYS</p>
            <p className="text-muted-foreground font-mono">© 2025 ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
