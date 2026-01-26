import { useState } from 'react'
import CoinDetails from './CoinDetails'

function Catalog({ coins, onAddCoin }) {
  const [selectedCoin, setSelectedCoin] = useState(null)
  const getMaterialColor = (material) => {
    switch (material.toLowerCase()) {
      case 'gold':
        return 'from-amber-400 to-yellow-600'
      case 'silver':
        return 'from-slate-300 to-slate-500'
      case 'platinum':
        return 'from-gray-300 to-gray-500'
      case 'copper':
        return 'from-orange-600 to-red-700'
      default:
        return 'from-white/20 to-white/40'
    }
  }

  const getMaterialGlow = (material) => {
    switch (material.toLowerCase()) {
      case 'gold':
        return 'shadow-amber-500/50'
      case 'silver':
        return 'shadow-slate-400/50'
      case 'platinum':
        return 'shadow-gray-400/50'
      case 'copper':
        return 'shadow-orange-500/50'
      default:
        return 'shadow-white/20'
    }
  }

  if (selectedCoin) {
    return <CoinDetails coin={selectedCoin} onBack={() => setSelectedCoin(null)} />
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
          {coins.length === 0 ? (
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
                No Coins Yet
              </h2>
              <p className="text-sm text-white/40 font-light tracking-wide max-w-sm mb-12 leading-relaxed">
                Start building your collection by adding your first coin
              </p>
              
              <button 
                onClick={onAddCoin}
                className="group relative px-8 py-3 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-amber-400/50"
              >
                <span className="text-sm font-light tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
                  Add Coin
                </span>
                <div className="absolute inset-0 border border-amber-400/0 group-hover:border-amber-400/30 transition-all duration-300"></div>
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-xl font-light tracking-wide text-white/70 mb-2">
                  Your Collection
                </h2>
                <p className="text-sm text-white/40 font-light">
                  {coins.length} {coins.length === 1 ? 'coin' : 'coins'} in your collection
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {coins.map((coin) => (
                  <div
                    key={coin.id}
                    className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-amber-400/30 transition-all duration-300 backdrop-blur-sm"
                  >
                    {/* Material indicator */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${getMaterialColor(coin.material)} shadow-lg ${getMaterialGlow(coin.material)}`}></div>
                    
                    {/* Coin Image */}
                    <div className="aspect-square bg-white/5 flex items-center justify-center overflow-hidden">
                      {coin.image ? (
                        <img
                          src={coin.image}
                          alt={coin.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getMaterialColor(coin.material)}/20 ${coin.image ? 'hidden' : ''}`}>
                        <span className="text-6xl opacity-30">🪙</span>
                      </div>
                    </div>

                    {/* Coin Info */}
                    <div className="p-5">
                      <h3 className="text-lg font-light text-white/90 mb-2 line-clamp-2">
                        {coin.name}
                      </h3>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span 
                          className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${getMaterialColor(coin.material)}/20 text-white/70 font-light tracking-wide border`}
                          style={{
                            borderColor: coin.material.toLowerCase() === 'gold' 
                              ? 'rgba(251, 191, 36, 0.3)' 
                              : coin.material.toLowerCase() === 'silver'
                              ? 'rgba(148, 163, 184, 0.3)'
                              : coin.material.toLowerCase() === 'platinum'
                              ? 'rgba(156, 163, 175, 0.3)'
                              : coin.material.toLowerCase() === 'copper'
                              ? 'rgba(234, 88, 12, 0.3)'
                              : 'rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {coin.material}
                        </span>
                        <span className="text-lg font-light text-white/90">
                          ${parseFloat(coin.price).toFixed(2)}
                        </span>
                      </div>

                      {coin.description && (
                        <p className="text-xs text-white/50 font-light leading-relaxed line-clamp-2 mb-4">
                          {coin.description}
                        </p>
                      )}

                      <div className="pt-3 border-t border-white/5">
                        <button 
                          onClick={() => setSelectedCoin(coin)}
                          className="w-full text-xs font-light tracking-widest uppercase text-white/50 hover:text-white/70 transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
    </div>
  )
}

export default Catalog
