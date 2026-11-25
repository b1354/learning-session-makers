import React from 'react'

const ChartSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="h-10 w-48 animate-pulse bg-gray-200 rounded-md" />
      <div className="h-[600px] w-full animate-pulse bg-gray-100 rounded-lg overflow-hidden relative">
        <div className="h-full flex items-center justify-center">
          <div className="text-gray-400 text-center p-4">
            <div className="animate-spin rounded-full h-12 w-12 border-3 border-gray-200 border-t-blue-500 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-600">Loading chart data...</p>
            <p className="text-sm mt-2 text-gray-500">Fetching market data from TradingView</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" />
      </div>
    </div>
  )
}

export default ChartSkeleton