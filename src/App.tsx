import './App.css'
import BasicComponent from './practice/foundational-react/BasicComponent'
import ComboBox from './practice/intermediate-react/ConditionalRendering'
import Mapping from './practice/intermediate-react/Mapping'

function App() {
  return (
    <>
      <BasicComponent nama="Bayu" />
      <ComboBox checked={false} notes='ini adalah contoh' name="combo1"/>
      <Mapping todosData={[
        {id: 1, text: 'Belajar React', completed: false},
        {id: 2, text: 'Belajar TypeScript', completed: true},
        {id: 3, text: 'Belajar Tailwind CSS', completed: false},
      ]}/>
    </>
  )
}

export default App
