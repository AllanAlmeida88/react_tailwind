import Pagina from '@/components/Template/Pagina'

export default function Mobile() {
    return (
        <Pagina>
            <div className={`
                flex flex-col justify-center items-center gap-4
                text-2xl
            `}>
                <span className="inline sm:hidden">Mobile</span>
                <span className="hidden sm:inline">Não Mobile</span>
            </div>
        </Pagina>
    )
}