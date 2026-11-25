import { useState, memo, useCallback, useEffect } from 'react'

const ComplexChild = memo(({ onClick, title }: {
  onClick: () => void
  title: string
}) => {
  console.log(`${title} : component rendered`)

  useEffect(() => {
    console.log(`${title} : complex process started...`)

    const timer = setTimeout(() => {
      console.log(`${title} : complex process finished!`)
    }, 3000)

    return () => {
      clearTimeout(timer)
      console.log(`${title} : process cancelled / cleanup`)
    }
  }, [onClick, title])

  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {title}
    </button>
  )
})

const ParentWithCallback = () => {
  const [count, setCount] = useState(0)
  const [trigger, setTrigger] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <div className="space-y-2">
      <p>Count: {count}</p>
      <p>Parent trigger: {trigger}</p>

      <button
        onClick={() => setTrigger(prev => prev + 1)}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Re-render Parent
      </button>

      <ComplexChild
        onClick={handleClick}
        title="With useCallback"
      />
    </div>
  )
}

const ParentWithoutCallback = () => {
  const [count, setCount] = useState(0)
  const [trigger, setTrigger] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="space-y-2">
      <p>Count: {count}</p>
      <p>Parent trigger: {trigger}</p>

      <button
        onClick={() => setTrigger(prev => prev + 1)}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Re-render Parent
      </button>

      <ComplexChild
        onClick={handleClick}
        title="Without useCallback"
      />
    </div>
  )
}

const CallBackTest = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-2">
          With useCallback + memo
        </h3>
        <ParentWithCallback />
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Without useCallback + memo
        </h3>
        <ParentWithoutCallback />
      </div>
    </div>
  )
}

export default CallBackTest