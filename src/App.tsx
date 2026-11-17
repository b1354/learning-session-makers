import './App.css'
import React from 'react'
import BasicComponent from './practice/foundational-react/BasicComponent'
import CheckBoxComponent from './practice/intermediate-react/conditional-list-rendering/CheckBox'
import Mapping from './practice/intermediate-react/conditional-list-rendering/Mapping'
import PasswordInput from './practice/intermediate-react/lifecycle-method-hooks/PasswordInput'
import ApiPlayground from './practice/intermediate-react/lifecycle-method-hooks/ApiPlayground'
import FormComponent from './practice/intermediate-react/lifecycle-method-hooks/FormComponent'

function App() {
  const [showApi, setShowApi] = React.useState(false)

  return (
    <div className="relative p-2">
      <BasicComponent nama="Bayu" />
      <CheckBoxComponent className="px-4" checked={false} notes='ini adalah contoh' name="combo1" isTodos={true}/>
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
          {showApi ? 'Thats Enough Dad' : 'Show Me Jokes Dad'}
        </button>
        {showApi && <ApiPlayground />}

        <FormComponent />
      </div>
    </div>
  )
}

export default App
