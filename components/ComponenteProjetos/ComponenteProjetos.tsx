import Link from 'next/link'
import Orgulho from '@/components/Orgulho/Orgulho'

export default function ComponenteProjetos() {

    return (
        <>
            <h2>Projetos</h2>
            <p>Em DIW fizemos vários projetos usando HTML, CSS e JavaScript</p>
            <p>Os projetos estão disponíveis em <Link href="/">website</Link></p>
            < Orgulho 
                nome="loja"
                link="http://minha-loja.github.com"
            />
        </>
    )
}