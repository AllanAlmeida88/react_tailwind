import Caixa from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Redimensionamento() {
    return (
        <Pagina>
            <div className='flex gap-1.5'>
                <Caixa className='w-14 flex-none'>#1</Caixa>
                <Caixa className='w-32 flex-1'>#2</Caixa>
                <Caixa className='w-64 flex-auto'>#3</Caixa>
            </div>
        </Pagina>
    )
}