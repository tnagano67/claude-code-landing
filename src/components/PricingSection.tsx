export default function PricingSection() {
  const plans = [
    {
      name: "ベーシック",
      price: "29,800",
      description: "基礎を学びたい方におすすめ",
      features: [
        "基礎編全コンテンツ",
        "3ヶ月間のアクセス",
        "基本サポート",
        "コミュニティアクセス"
      ],
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
      popular: false
    },
    {
      name: "スタンダード",
      price: "49,800",
      description: "実践力を身につけたい方に最適",
      features: [
        "基礎編・実践編全コンテンツ",
        "6ヶ月間のアクセス",
        "個別メンタリング",
        "プロジェクトレビュー",
        "優先サポート"
      ],
      buttonStyle: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105",
      popular: true
    },
    {
      name: "プレミアム",
      price: "79,800",
      description: "企業導入や本格活用を考える方に",
      features: [
        "全コンテンツアクセス",
        "12ヶ月間のアクセス",
        "1対1コーチング",
        "企業導入支援",
        "生涯サポート",
        "特別セミナー参加権"
      ],
      buttonStyle: "bg-gray-900 text-white hover:bg-gray-800",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-6">
            💰 料金プラン
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">料金プラン</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            あなたに最適なプランをお選びください。全プラン満足保証付きです。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🔥 人気No.1
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">¥{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ 一括</span>
                </div>
                <div className="text-sm text-gray-500">
                  月割り換算: ¥{Math.floor(parseInt(plan.price.replace(',', '')) / (plan.name === 'ベーシック' ? 3 : plan.name === 'スタンダード' ? 6 : 12)).toLocaleString()}~/月
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                {plan.name}を選ぶ
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">30日間の満足保証付き・分割払いも可能</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30日間返金保証
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              分割払い対応
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              SSL暗号化決済
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}