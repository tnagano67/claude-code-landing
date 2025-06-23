# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Claude Code講座のランディングページ - Next.js 15.3.4とApp Router、TypeScriptを使用して構築されたAI支援プログラミング講座のランディングページです。Claude Codeを使った講座を宣伝するためのサイトです。

## アーキテクチャと構造

**シングルページアプリケーション**: ランディングページ全体が`src/app/page.tsx`の単一コンポーネントに含まれ、以下のセクションで構成されています：
- ナビゲーション付きヘッダー
- 講座紹介のヒーローセクション
- 講座内容（基礎編/実践編/応用編）
- 講座の特徴セクション
- 料金プラン（ベーシック/スタンダード/プレミアム）
- お問い合わせ/CTAセクション
- フッター

**スタイリング**: Tailwind CSS v4を使用し、カスタムグラデーション背景とレスポンシブデザインを実装。カラースキームは主にインディゴ/ブルーのグラデーション。

**フォント**: `layout.tsx`でGoogle FontsのGeistとGeist Monoフォントを設定。

**コンテンツ言語**: すべてのコンテンツは日本語で、Claude Code研修に興味を持つ日本の開発者をターゲットにしています。

## 開発コマンド

```bash
# Turbopackで開発サーバーを起動
npm run dev

# 本番用ビルド
npm run build

# 本番サーバーを起動
npm start

# ESLintを実行
npm run lint
```

## 重要なファイル

- `src/app/page.tsx` - 全セクションを含むメインランディングページコンポーネント
- `src/app/layout.tsx` - メタデータとフォント設定を含むルートレイアウト
- `src/app/globals.css` - グローバルTailwind CSSスタイル
- `package.json` - Next.js 15.3.4、React 19、TypeScript 5、Tailwind CSS v4を使用

## 開発時の注意事項

- 開発サーバーはデフォルトで`http://localhost:3000`で動作
- プロジェクトはより高速な開発ビルドのためTurbopackを使用
- すべてのコンテンツはページコンポーネントにハードコード - 外部データソースやCMSは使用していない
- Tailwindのレスポンシブクラスでレスポンシブデザインを実装
- ホバーエフェクト以外のステート管理やクライアントサイドインタラクションはなし