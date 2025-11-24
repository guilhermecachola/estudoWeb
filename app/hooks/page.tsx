export default function HooksPage() {
    
    const [count, setCount] = useState(0)
    
    return(
        <>
            <h2>Hooks</h2>
            <div className="bg-blue-400 p-2 rounded-xl">
                <p>Hooks são funções React client-side. Permitem gerir o comportamento de componentes.</p>
                <p><strong><code>useState, useEffect, useSWR, useParams</code></strong></p>
                <p>São uma das principais inovações do React. Tornam o código mais modular e fácil de entender.</p>
            </div>

            <h2 className="mt-4">Contador</h2>

            <p></p>

            

        </>
    )
}