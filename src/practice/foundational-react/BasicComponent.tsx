import { useState } from "react";

const BasicComponent = ({ nama="John Doe" }: { nama: string }) => { 
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-2xl font-bold text-red-500">Ini adalah Sebuah Komponen</h1>
            <p>Hello, {nama}!!</p>
            <button onClick={() => setCount(count + 1)}>Tombol ini sudah di klik {count} kali</button>
        </div>
    )
}

export default BasicComponent;