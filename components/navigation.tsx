"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Github } from "lucide-react"
// スタイルカルーセルのインポートをスタイルモーダルに変更
import StyleModal from "./style-modal"
import { Button } from "@/components/ui/button"

// routes配列にアニメスタイルを追加します
const routes = [
  { path: "/", label: "モノクローム" },
  { path: "/pastel", label: "パステル" },
  { path: "/bold", label: "ボールド" },
  { path: "/geometric", label: "ジオメトリック" },
  { path: "/minimalist", label: "ミニマリスト" },
  { path: "/neon", label: "ネオン" },
  { path: "/sepia", label: "セピア" },
  { path: "/natural", label: "ナチュラル" },
  { path: "/techno", label: "テクノ" },
  { path: "/scandinavian", label: "北欧" },
  { path: "/retro", label: "レトロ" },
  { path: "/wave", label: "ウェーブ" },
  { path: "/shadow", label: "シャドウ" },
  { path: "/gradient", label: "グラデーション" },
  { path: "/monotone", label: "モノトーン" },
  { path: "/paper", label: "ペーパー" },
  { path: "/brutalist", label: "ブルータリスト" },
  { path: "/space", label: "スペース" },
  { path: "/dot", label: "ドット" },
  // 既存の追加スタイル
  { path: "/zen", label: "禅" },
  { path: "/nordic", label: "ノルディック" },
  { path: "/bauhaus", label: "バウハウス" },
  { path: "/cyberpunk", label: "サイバーパンク" },
  { path: "/vintage", label: "ヴィンテージ" },
  { path: "/eco", label: "エコ" },
  { path: "/futuristic", label: "フューチャリスティック" },
  { path: "/origami", label: "折り紙" },
  { path: "/watercolor", label: "水彩" },
  { path: "/pixel", label: "ピクセル" },
  { path: "/popart", label: "ポップアート" },
  { path: "/grunge", label: "グランジ" },
  { path: "/artnouveau", label: "アールヌーボー" },
  { path: "/memphis", label: "メンフィス" },
  { path: "/gothic", label: "ゴシック" },
  { path: "/tropical", label: "トロピカル" },
  { path: "/industrial", label: "インダストリアル" },
  { path: "/rococo", label: "ロココ" },
  { path: "/artdeco", label: "アールデコ" },
  { path: "/midcentury", label: "ミッドセンチュリー" },
  // 新しく追加するスタイル
  { path: "/anime", label: "アニメ" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* メインナビゲーション */}
      <nav className="bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            デザインスタイルギャラリー
          </Link>

          {/* モバイルボタン */}
          <div className="md:hidden flex items-center gap-2">
            {/* スタイルを開くボタン */}
            <Button
              variant="outline"
              size="sm"
              className="rounded-full text-xs px-2 py-1"
              onClick={() => setIsCarouselOpen(true)}
              aria-label="スタイルを開く"
            >
              スタイル
            </Button>

            {/* メニューボタン */}
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>

          {/* デスクトップボタン */}
          <div className="hidden md:flex items-center gap-2">
            {/* スタイルを開くボタン */}
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              onClick={() => setIsCarouselOpen(true)}
              aria-label="スタイルを開く"
            >
              スタイルを開く <ChevronRight className="ml-1 h-4 w-4" />
            </Button>

            {/* GitHubリンク */}
            <Button variant="outline" size="icon" className="rounded-full" asChild aria-label="GitHubリポジトリを開く">
              <a href="https://github.com/tensandev/site-template-vercel" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-background border-b">
          <ul className="py-4 px-4 space-y-4">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={`block py-2 transition-colors hover:text-primary ${
                    pathname === route.path ? "font-medium text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* スタイルカルーセル */}
      <StyleModal isOpen={isCarouselOpen} setIsOpen={setIsCarouselOpen} />
    </header>
  )
}
