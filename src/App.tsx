import './App.css'
import React from 'react'
import BasicComponent from './practice/foundational-react/BasicComponent'
import ComboBox from './practice/intermediate-react/conditional-list-rendering/ComboBox'
import Mapping from './practice/intermediate-react/conditional-list-rendering/Mapping'
import PasswordInput from './practice/intermediate-react/lifecycle-method-hooks/PasswordInput'
import ApiPlayground from './practice/intermediate-react/lifecycle-method-hooks/ApiPlayground'

function App() {
  const [showApi, setShowApi] = React.useState(false)

  return (
    <div className="relative p-2">
      <BasicComponent nama="Bayu" />
      <ComboBox className="px-4" checked={false} notes='ini adalah contoh' name="combo1" />
      <Mapping todosData={[
        { id: 1, text: 'Belajar React', completed: false },
        { id: 2, text: 'Belajar TypeScript', completed: true },
        { id: 3, text: 'Belajar Tailwind CSS', completed: false },
      ]} />

      <PasswordInput />
      <div className="p-2">
        <button
          className="text-blue-500 underline font-light text-sm p-2"
          onClick={() => setShowApi(!showApi)}>
          {showApi ? 'Hide API Playground' : 'Show API Playground'}
        </button>
        {showApi && <ApiPlayground show={showApi} />}
      </div>
    </div>
  )
}

export default App
