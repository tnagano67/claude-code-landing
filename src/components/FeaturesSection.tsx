export default function FeaturesSection() {
  const features = [
    {
      icon: "👨‍💻",
      title: "実践重視",
      description: "理論だけでなく、実際のプロジェクトを通じて学習",
      bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: "🎯",
      title: "個別サポート",
      description: "一人ひとりの進度に合わせたきめ細かい指導",
      bgColor: "bg-gradient-to-br from-emerald-100 to-green-100",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-600"
    },
    {
      icon: "🏆",
      title: "実績豊富",
      description: "多くの受講生が現場で活躍中",
      bgColor: "bg-gradient-to-br from-amber-100 to-yellow-100",
      iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600"
    },
    {
      icon: "🔄",
      title: "継続サポート",
      description: "講座終了後も質問や相談に対応",
      bgColor: "bg-gradient-to-br from-purple-100 to-violet-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-violet-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 text-sm font-medium mb-6 shadow-sm">
            ✨ 特徴
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">講座の特徴</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            なぜ私たちの講座が選ばれるのか。他とは違う価値をお届けします。
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={`${feature.bgColor} p-8 rounded-3xl hover:shadow-xl hover:scale-105 transition-all duration-300 mb-6`}>
                <div className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl filter drop-shadow-sm">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}