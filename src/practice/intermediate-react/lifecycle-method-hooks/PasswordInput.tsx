
import React from 'react'

const PasswordInput = () => {
    const [password, setPassword] = React.useState("")

    const strength =
        password.length > 8 ? "strong" :
        password.length > 3 ? "medium" :
        password.length > 0 ? "weak" : "zero"

    const strengthClasses = {
        weak: "bg-red-500 w-[25%]",
        medium: "bg-yellow-500 w-[50%]",
        strong: "bg-green-500 w-[100%]",
        zero: "bg-gray-300 w-[0%]"
    }

    return (
        <div className="flex relative flex-col border border-gray-200 rounded shadow-sm m-2 mt-5">
            <span className="text-xs text-gray-400 bg-white px-1 mb-1 absolute -top-3 left-3">
                Password <span className="text-red-500">*</span>
            </span>

            <input
                type="password"
                className="border-none rounded bg-white px-4 py-4 text-xs"
                placeholder="Type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className={`h-1 absolute transition-all duration-300 bottom-0 rounded-b ${strengthClasses[strength]}`} />
        </div>
    )
}

export default PasswordInput
