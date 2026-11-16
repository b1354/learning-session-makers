import React from "react"

interface ComboBox extends React.HTMLAttributes<HTMLInputElement> {
    checked: boolean, 
    notes: string,
    name: string
}

const ConditionalRendering = ({...props}: ComboBox) => {
    const [isChecked, setChecked] = React.useState(props.checked || false)
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
    return (
        <div className={
            "flex items-center gap-3 px-4 rounded-lg shadow-sm transition-colors hover:bg-gray-50" + " " +
            props.className
        }>
            <input
                type="checkbox"
                name={props.name}
                id={props.name}
                checked={isChecked}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (props.onChange) {
                        handleOnChange(e)
                        props.onChange(e)
                    } else {
                         handleOnChange(e)   
                    }
                }}
                className="h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 text-indigo-600 accent-indigo-600 focus:ring-2 focus:ring-indigo-500"
            />
            <label
                htmlFor={props.name}
                className={`cursor-pointer w-full py-3 select-none text-sm transition-colors ${isChecked ? "text-gray-400 line-through" : "text-gray-800"}`}
            >
                {props.notes}
            </label>
        </div>
    )
}

export default ConditionalRendering