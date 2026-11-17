import React from 'react'
import CheckBoxComponent from '../conditional-list-rendering/CheckBox'

const FormComponent = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [isChecked, setIsChecked] = React.useState(false)
  return (
    <div className="" onSubmit={(e) => {
      e.preventDefault()
      alert(`Form submitted with: { name: ${name}, email: ${email}, isChecked: ${isChecked} }`)
    }}>
      <form>
        <input type="text"
          className="border border-gray-200 rounded-lg bg-white shadow-sm m-2 px-4 py-2"
          placeholder="Type your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email"
          className="border border-gray-200 rounded-lg bg-white shadow-sm m-2 px-4 py-2"
          placeholder="Type your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <CheckBoxComponent checked={false} notes={'Check me'} name={'checkme'} onChange={(e) => setIsChecked(e.target.checked)} />
        <button 
          type="submit" 
          className="border border-gray-200 rounded-lg bg-white shadow-sm m-2 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormComponent