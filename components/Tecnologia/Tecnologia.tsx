interface TecnologiaProps{
    title: string
    description: string
}


export default function Tecnologia({title, description}:TecnologiaProps) {
    return(
        <div className="p-2 m-2 bg-blue-800 text-white">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}