import { useState } from 'react'
import AddCoin from './components/AddCoin'
import Catalog from './components/Catalog'

function App() {
  const [coins, setCoins] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home' or 'catalog'

  const handleAddCoin = (coin) => {
    setCoins([...coins, coin])
    setShowAddForm(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Ambient glow effects - gold and silver */}
      <div className="fixed top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="fixed top-0 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-slate-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <header className="border-b border-white/5 backdrop-blur-sm bg-black/40">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center text-xl shadow-lg shadow-amber-500/50">
                  🪙
                </div>
                <div>
                  <h1 className="text-2xl font-light tracking-wider text-white/90">
                    COINS SHELTER
                  </h1>
                  <p className="text-xs text-white/40 font-light tracking-widest uppercase mt-1">
                    Coin Collection Manager
                  </p>
                </div>
              </div>
              
              <nav className="flex items-center gap-6">
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`text-sm font-light tracking-widest uppercase transition-colors ${
                    currentPage === 'home' 
                      ? 'text-white/90 border-b border-amber-400/50 pb-1' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentPage('catalog')}
                  className={`text-sm font-light tracking-widest uppercase transition-colors ${
                    currentPage === 'catalog' 
                      ? 'text-white/90 border-b border-amber-400/50 pb-1' 
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  Catalog
                </button>
                <button
                  onClick={() => setShowAddForm(true)}
                  className="px-6 py-2 border border-amber-400/50 bg-amber-400/10 hover:bg-amber-400/20 hover:border-amber-400/70 transition-all duration-300 rounded-lg"
                >
                  <span className="text-xs font-light tracking-widest uppercase text-white/90">
                    + Add Coin
                  </span>
                </button>
              </nav>
            </div>
          </div>
        </header>

        <main>
          {currentPage === 'home' ? (
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <div className="mb-12 relative">
                  <div className="w-32 h-32 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full border-2 border-amber-400/30 flex items-center justify-center">
                      <span className="text-4xl opacity-50">🪙</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-slate-400 rounded-full shadow-lg shadow-slate-400/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <h2 className="text-3xl font-light tracking-wide text-white/80 mb-4">
                  Welcome to Coins Shelter
                </h2>
                <p className="text-sm text-white/40 font-light tracking-wide max-w-sm mb-12 leading-relaxed">
                  Manage your coin collection with ease. Add coins, view your catalog, and keep track of your valuable collection.
                </p>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowAddForm(true)}
                    className="group relative px-8 py-3 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-amber-400/50"
                  >
                    <span className="text-sm font-light tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                      Add Coin
                    </span>
                    <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-300"></div>
                  </button>
                  {coins.length > 0 && (
                    <button 
                      onClick={() => setCurrentPage('catalog')}
                      className="group relative px-8 py-3 border border-amber-400/50 bg-amber-400/10 hover:bg-amber-400/20 hover:border-amber-400/70 transition-all duration-300"
                    >
                      <span className="text-sm font-light tracking-widest uppercase text-white/90">
                        View Catalog
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Catalog coins={coins} onAddCoin={() => setShowAddForm(true)} />
          )}
        </main>
      </div>

      {showAddForm && (
        <AddCoin
          onAddCoin={handleAddCoin}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  )
}

export default App
