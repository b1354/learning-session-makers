import React from 'react'
import BasicComponent from '../practice/foundational-react/BasicComponent'
import CheckBoxComponent from '../practice/intermediate-react/conditional-list-rendering/CheckBox'
import ApiPlayground from '../practice/intermediate-react/lifecycle-method-hooks/ApiPlayground'
import PasswordInput from '../practice/intermediate-react/lifecycle-method-hooks/PasswordInput'
import Mapping from '../practice/intermediate-react/Mapping'

const Index = () => {
    const [showApi, setShowApi] = React.useState(false)
    
    return (
        <div className="relative p-2">
            <BasicComponent nama="Bayu" />
            <CheckBoxComponent className="px-4" checked={false} notes='ini adalah contoh' name="combo1" isTodos={true} />
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

                <a href="/form" className="text-blue-500 underline font-light text-sm p-2">
                    Go to Form Page
                </a>
                 <a href="/about" className="text-blue-500 underline font-light text-sm p-2">
                    Go to About Page
                </a>
            </div>
        </div>
    )
}

export default Index