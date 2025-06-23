export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">Claude Code 講座</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#course" className="text-gray-700 hover:text-indigo-600 transition-colors">講座内容</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">特徴</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">料金</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">お申し込み</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            AI開発の
            <span className="text-indigo-600 block">新しい時代へ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Claude CodeでAI支援プログラミングをマスターし、開発生産性を革新的に向上させる実践的な講座です。
            初心者から上級者まで、あなたのレベルに合わせた学習プログラムを提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
              今すぐ始める
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
              詳細を見る
            </button>
          </div>
        </div>
      </section>

      <section id="course" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">講座内容</h2>
            <p className="text-xl text-gray-600">実践的なカリキュラムで確実にスキルアップ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-indigo-100">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">基礎編</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Claude Codeの基本操作</li>
                <li>• AI支援プログラミングの概念</li>
                <li>• 効果的なプロンプトの書き方</li>
                <li>• 開発環境のセットアップ</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-emerald-100">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">実践編</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• リアルプロジェクトでの活用</li>
                <li>• コードレビューとリファクタリング</li>
                <li>• テスト駆動開発との組み合わせ</li>
                <li>• チーム開発での協働</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-violet-100">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">応用編</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 高度なワークフロー構築</li>
                <li>• カスタムツールの開発</li>
                <li>• 企業での導入戦略</li>
                <li>• 最新技術との統合</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">講座の特徴</h2>
            <p className="text-xl text-gray-600">なぜ私たちの講座が選ばれるのか</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">実践重視</h3>
              <p className="text-gray-600">理論だけでなく、実際のプロジェクトを通じて学習</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">個別サポート</h3>
              <p className="text-gray-600">一人ひとりの進度に合わせたきめ細かい指導</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">実績豊富</h3>
              <p className="text-gray-600">多くの受講生が現場で活躍中</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">継続サポート</h3>
              <p className="text-gray-600">講座終了後も質問や相談に対応</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-xl text-gray-600">あなたに最適なプランをお選びください</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ベーシック</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">¥29,800</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>基礎編全コンテンツ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>3ヶ月間のアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>基本サポート</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                申し込む
              </button>
            </div>
            <div className="border-2 border-indigo-500 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                人気
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">スタンダード</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">¥49,800</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>基礎編・実践編全コンテンツ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>6ヶ月間のアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>個別メンタリング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>プロジェクトレビュー</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                申し込む
              </button>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">プレミアム</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-4">¥79,800</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>全コンテンツアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>12ヶ月間のアクセス</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>1対1コーチング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>企業導入支援</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">✓</span>
                  <span>生涯サポート</span>
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                申し込む
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">今すぐ始めませんか？</h2>
          <p className="text-xl text-indigo-100 mb-12">
            AI支援プログラミングの世界へ一歩踏み出すことで、あなたの開発スキルは飛躍的に向上します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
              無料相談を予約
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
              資料をダウンロード
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Claude Code 講座</h3>
              <p className="text-gray-400">AI支援プログラミングの専門講座</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">講座情報</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">カリキュラム</a></li>
                <li><a href="#" className="hover:text-white transition-colors">講師紹介</a></li>
                <li><a href="#" className="hover:text-white transition-colors">受講生の声</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">技術サポート</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">法的事項</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Claude Code 講座. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
