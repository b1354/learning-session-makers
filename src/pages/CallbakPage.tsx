import CallBackTest from '../practice/advanced-react/use-callback/CallBackTest'
import { Link } from 'react-router'

const CallbackPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">useCallback Demo</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <CallBackTest />
        </div>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default CallbackPage