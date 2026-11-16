import React from 'react'

const PasswordInput = () => {
    const [password, setPassword] = React.useState("")
    const [strength, setStrength] = React.useState("weak")

    const weakClass = "bg-red-500 w-[25%]"
    const mediumClass = "bg-yellow-500 w-[50%]"
    const strongClass = "bg-green-500 w-[100%]"

    React.useEffect(() => {
        if (password.length > 8) {
            setStrength("strong")
        } else if (password.length > 3 ) {
            setStrength("medium")
        } else {
            setStrength("weak")
        }
    }, [password])

    return (
        <div className="flex relative flex-col border border-gray-200 rounded-lg bg-white shadow-sm m-2">
            <input
                type="password"
                className="border-none rounded bg-white shadow-sm m-2 px-2 py-2 text-xs"
                placeholder="type your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className={`h-2 absolute transition-all duration-300 bottom-0 rounded-b ${strength === "weak" ? weakClass : strength === "medium" ? mediumClass : strongClass}`}></div>
        </div>
    )
}

export default PasswordInput