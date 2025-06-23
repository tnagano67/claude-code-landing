export default function CourseSection() {
  const courses = [
    {
      icon: "🚀",
      title: "基礎編",
      description: "Claude Codeの基本をマスター",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      borderColor: "border-indigo-200",
      items: [
        "Claude Codeの基本操作",
        "AI支援プログラミングの概念",
        "効果的なプロンプトの書き方",
        "開発環境のセットアップ"
      ]
    },
    {
      icon: "💡",
      title: "実践編",
      description: "リアルプロジェクトで実力を養成",
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      items: [
        "リアルプロジェクトでの活用",
        "コードレビューとリファクタリング",
        "テスト駆動開発との組み合わせ",
        "チーム開発での協働"
      ]
    },
    {
      icon: "⚡",
      title: "応用編",
      description: "高度なワークフローを構築",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      items: [
        "高度なワークフロー構築",
        "カスタムツールの開発",
        "企業での導入戦略",
        "最新技術との統合"
      ]
    }
  ];

  return (
    <section id="course" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-6">
            📚 カリキュラム
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">講座内容</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            実践的なカリキュラムで確実にスキルアップ。段階的に学習して着実に成長できます。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className={`group bg-gradient-to-br ${course.bgGradient} p-8 rounded-2xl border-2 ${course.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center mb-6">
                <div className={`text-4xl p-3 bg-gradient-to-r ${course.gradient} rounded-xl shadow-lg`}>
                  <span className="filter drop-shadow-sm">{course.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {course.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-gray-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}