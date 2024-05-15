import Menu from '@/components/Template/Menu'
import UsuarioInfor from '@/components/Template/UsuarioInfor'

interface PaginaProps {
    children: any
}

export default function Pagina(props: PaginaProps) {
    const usuario = {
        nome: 'Frankie Sullivan',
        email: 'frank@untilUi.com',
        imageUrl: 'https://img.freepik.com/vetores-premium/design-de-avatar-de-pessoa_24877-38131.jpg?w=1380'

    }
    return (
        <div className="flex h-screen">
            <aside className='flex flex-col w-72 bg-zinc-900 p-7'>
                <Menu className='p-1'></Menu> 
                <hr className='mx-7 border-zinc-700'/>
                <UsuarioInfor {...usuario} className='p-7'></UsuarioInfor>
            </aside>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    )
}