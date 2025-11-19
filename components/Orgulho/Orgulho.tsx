interface OrgulhoProps{
    nome: string
    link: string
}

export default function Orgulho({nome, link}: OrgulhoProps) {
    return (
        <div className="bg-pink-300 hover:bg-pink-500 p-2">
            <p>O meu orgulho é {nome} que fiz, 
                disponivel aqui: {link}.</p>
        </div>
    )
}