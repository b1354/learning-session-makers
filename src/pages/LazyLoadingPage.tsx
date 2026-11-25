import { Suspense, lazy } from 'react'
import ChartSkeleton from '../components/ChartSkeleton'
import { Link } from 'react-router'

const ChartContainer = lazy(() => import('../components/ChartContainer'))

const LazyLoadingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Lazy Loading Demo
          </h1>
          <p className="text-gray-600 text-lg">
            Chart component is loaded on demand with skeleton fallback
          </p>
        </header>

        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            TradingView Chart (Lazy Loaded)
          </h2>
          <Link to={"/"} className='text-blue-500 underline text-sm'>Back To Home</Link>
          <Suspense fallback={<ChartSkeleton />}>
            <ChartContainer />
          </Suspense>
        </section>

        <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">How it works</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              ChartContainer is dynamically imported with React.lazy()
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Suspense shows ChartSkeleton while loading
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              TradingView widget loads asynchronously after mount
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default LazyLoadingPage