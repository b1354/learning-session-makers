import React from 'react'

interface JokeResult {
  id: string
  joke: string
  status: number
}

const ApiPlayground = ({show=false}: {show?: boolean}) => {
  const [data, setData] = React.useState<JokeResult | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        })
        const res:JokeResult = await response.json()
        setData(res)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return ( show && 
    <div className="p-2 ">
      {data?.joke}
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