import React from 'react'

interface JokeResult {
  id: string
  joke: string
  fact?: string
  status: number
}

const ApiPlayground = ({url='https://icanhazdadjoke.com/'}: {url?: string}) => {
  const [data, setData] = React.useState<JokeResult | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      setError(null)
      try {
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json'
          }
        })
        const res:JokeResult = await response.json()
        setData(res)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to fetch data')
      }
    }

    fetchData()
  }, [])
  return (
    <div className={`p-2 ${error && 'text-red-500'}`}>
      {data ? data.joke ? data.joke : data.fact : error}
      <br />
      {/* <button 
        className="text-blue-500 underline font-light text-sm"
      >
        unmount
      </button> */}
    </div>
  )
}

export default ApiPlayground