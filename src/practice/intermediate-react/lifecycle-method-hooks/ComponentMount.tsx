import React from 'react'

const ComponentMount = () => {
  // Dijalankan ketika komponen pertama kali di render
  React.useEffect(() => {
    console.log('Component mounted')
  }, [])
  return (
    <div>ComponentMount</div>
  )
}

export default ComponentMount