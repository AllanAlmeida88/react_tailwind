import Pagina from '@/components/Template/Pagina'

export default function Componenetes() {
    return (
        <Pagina>
            <div className="flex justify-center items-center gap-4">
                <button className="btn-info">Info</button>
                <button className="btn-success">Sucesso</button>
                <button className="btn-error">Erro</button>
            </div>
        </Pagina>
    )
}