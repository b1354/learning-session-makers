import { useState } from "react";

const BasicComponent = ({ nama="John Doe" }: { nama: string }) => { 
    const [count, setCount] = useState(0);
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm m-2">
            <h1 className="text-2xl font-bold">Ini adalah Sebuah Komponen</h1>
            <p>Hello, {nama}!!</p>
            <div className="flex flex-row items-center justify-center gap-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded" onClick={() => setCount(count + 1)}>{count} klik</button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded" onClick={() => setCount(0)}>reset</button>
            </div>
        </div>
    )
}

export default BasicComponent;