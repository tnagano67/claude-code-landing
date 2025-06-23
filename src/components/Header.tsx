export default function Header() {
  return (
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
  );
}