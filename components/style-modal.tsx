"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const styles = [
  { path: "/", label: "モノクローム", color: "bg-black", imageName: "monochrome" },
  { path: "/pastel", label: "パステル", color: "bg-pink-200", imageName: "pastel" },
  { path: "/bold", label: "ボールド", color: "bg-red-500", imageName: "bold" },
  { path: "/geometric", label: "ジオメトリック", color: "bg-blue-500", imageName: "geometric" },
  { path: "/minimalist", label: "ミニマリスト", color: "bg-gray-100", imageName: "minimalist" },
  { path: "/neon", label: "ネオン", color: "bg-purple-600", imageName: "neon" },
  { path: "/sepia", label: "セピア", color: "bg-amber-700", imageName: "sepia" },
  { path: "/natural", label: "ナチュラル", color: "bg-green-600", imageName: "natural" },
  { path: "/techno", label: "テクノ", color: "bg-blue-900", imageName: "techno" },
  { path: "/scandinavian", label: "北欧", color: "bg-blue-400", imageName: "scandinavian" },
  { path: "/retro", label: "レトロ", color: "bg-pink-600", imageName: "retro" },
  { path: "/wave", label: "ウェーブ", color: "bg-blue-500", imageName: "wave" },
  { path: "/shadow", label: "シャドウ", color: "bg-gray-700", imageName: "shadow" },
  {
    path: "/gradient",
    label: "グラデーション",
    color: "bg-gradient-to-r from-purple-500 to-blue-500",
    imageName: "gradient",
  },
  { path: "/monotone", label: "モノトーン", color: "bg-blue-800", imageName: "monotone" },
  { path: "/paper", label: "ペーパー", color: "bg-amber-100", imageName: "paper" },
  { path: "/brutalist", label: "ブルータリスト", color: "bg-gray-900", imageName: "brutalist" },
  { path: "/space", label: "スペース", color: "bg-indigo-900", imageName: "space" },
  { path: "/dot", label: "ドット", color: "bg-cyan-500", imageName: "dot" },
  // 既存の追加スタイル
  { path: "/zen", label: "禅", color: "bg-stone-200", imageName: "zen" },
  { path: "/nordic", label: "ノルディック", color: "bg-slate-300", imageName: "nordic" },
  { path: "/bauhaus", label: "バウハウス", color: "bg-yellow-500", imageName: "bauhaus" },
  { path: "/cyberpunk", label: "サイバーパンク", color: "bg-fuchsia-700", imageName: "cyberpunk" },
  { path: "/vintage", label: "ヴィンテージ", color: "bg-amber-300", imageName: "vintage" },
  { path: "/eco", label: "エコ", color: "bg-lime-500", imageName: "eco" },
  { path: "/futuristic", label: "フューチャリスティック", color: "bg-sky-500", imageName: "futuristic" },
  { path: "/origami", label: "折り紙", color: "bg-orange-200", imageName: "origami" },
  { path: "/watercolor", label: "水彩", color: "bg-teal-200", imageName: "watercolor" },
  { path: "/pixel", label: "ピクセル", color: "bg-violet-500", imageName: "pixel" },
  // 新しく追加する10個のスタイル
  { path: "/popart", label: "ポップアート", color: "bg-yellow-400", imageName: "popart" },
  { path: "/grunge", label: "グランジ", color: "bg-stone-700", imageName: "grunge" },
  { path: "/artnouveau", label: "アールヌーボー", color: "bg-emerald-600", imageName: "artnouveau" },
  {
    path: "/memphis",
    label: "メンフィス",
    color: "bg-gradient-to-r from-yellow-400 to-pink-500",
    imageName: "memphis",
  },
  { path: "/gothic", label: "ゴシック", color: "bg-slate-900", imageName: "gothic" },
  { path: "/tropical", label: "トロピカル", color: "bg-green-400", imageName: "tropical" },
  { path: "/industrial", label: "インダストリアル", color: "bg-zinc-700", imageName: "industrial" },
  { path: "/rococo", label: "ロココ", color: "bg-rose-200", imageName: "rococo" },
  { path: "/artdeco", label: "アールデコ", color: "bg-amber-500", imageName: "artdeco" },
  { path: "/midcentury", label: "ミッドセンチュリー", color: "bg-orange-400", imageName: "midcentury" },
]

interface StyleModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function StyleModal({ isOpen, setIsOpen }: StyleModalProps) {
  const pathname = usePathname()

  // モーダルが開いたときにスクロールを無効にする
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[90vw] w-full max-h-[90vh] overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-row items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">スタイルを選択</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-4">
          {styles.map((style) => {
            // デフォルトのプレースホルダー画像
            const defaultPlaceholder = "/vibrant-street-market.png"

            // 画像パスを安全に生成（空文字列を返さないように）
            const imagePath = style.imageName ? `/style-preview-${style.imageName}.png` : defaultPlaceholder

            return (
              <Link key={style.path} href={style.path} onClick={() => setIsOpen(false)} className="block">
                <div
                  className={`rounded-lg overflow-hidden border-2 transition-colors duration-300 hover:scale-105 ${
                    pathname === style.path ? "border-primary ring-2 ring-primary ring-offset-2" : "border-transparent"
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <div className={`absolute inset-0 ${style.color}`}></div>
                  </div>
                  <div className="p-2 text-center bg-card">
                    <p className="font-medium text-sm">{style.label}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
