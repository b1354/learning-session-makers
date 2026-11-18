import React from 'react'
import BasicComponent from '../practice/foundational-react/BasicComponent'
import CheckBoxComponent from '../practice/intermediate-react/conditional-list-rendering/CheckBox'
import ApiPlayground from '../practice/intermediate-react/lifecycle-method-hooks/ApiPlayground'
import PasswordInput from '../practice/intermediate-react/lifecycle-method-hooks/PasswordInput'
import Mapping from '../practice/intermediate-react/Mapping'
import SButton from '../practice/intermediate-react/css-styling/SButton'
import SCard from '../practice/intermediate-react/css-styling/SCard'

const Index = () => {
    const [showDadApi, setshowDadApi] = React.useState(false)
    const [showCatApi, setshowCatApi] = React.useState(false)

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
                    onClick={() => setshowDadApi(!showDadApi)}>
                    {showDadApi ? 'Thats Enough Dad' : 'Show Me Jokes Dad'}
                </button>
                {showDadApi && <ApiPlayground />}

                <button
                    className="text-blue-500 underline font-light text-sm p-2"
                    onClick={() => setshowCatApi(!showCatApi)}>
                    {showCatApi ? 'Thats Enough' : 'Give me cat fact'}
                </button>
                {showCatApi && <ApiPlayground url="https://catfact.ninja/fact" />}
            </div>

            <div className="p-4 flex gap-2">
                <a href="/form" className="text-blue-500 underline font-light text-sm">
                    Go to Form Page
                </a>
                <a href="/about" className="text-blue-500 underline font-light text-sm">
                    Go to About Page
                </a>
            </div>

            <div className="p-4 flex gap-2 items-center">
                <SButton size="small" className="rounded">small</SButton>
                <SButton className="rounded">Medium</SButton>
                <SButton size="large" className="rounded">Large</SButton>
            </div>
            <div className="p-4 flex gap-2 items-center">
                <SButton variant="primary" className="rounded">Primary</SButton>
                <SButton variant="secondary" className="rounded">Secondary</SButton>
                <SButton variant="tertiary" className="rounded">Tertiary</SButton>
                <SButton variant="danger" className="rounded">Danger</SButton>
            </div>
             <div className="p-4 flex gap-2 items-center">
                <SCard imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10'>
                    <h2 className="text-lg font-bold">Gucci Bag</h2>
                    <p className="text-xl font-bold">$1,200.00</p>
                </SCard>
                <SCard imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10'>
                    <h2 className="text-lg font-bold">Gucci Bag</h2>
                    <p className="text-xl font-bold">$1,200.00</p>
                </SCard>
                <SCard imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk39XkZRTODftzkKQg6jpU17_BvmmnsOAEMd-K_nYmIw&s=10'>
                    <h2 className="text-lg font-bold">Gucci Bag</h2>
                    <p className="text-xl font-bold">$1,200.00</p>
                </SCard>
            </div>
        </div>
    )
}

export default Index