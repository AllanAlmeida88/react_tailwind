import Caixa from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Posicao() {
    return (
        <Pagina>
            <div className="grid grid-cols-3 gap-2.5 m-5 h-72 bg-zinc-500">
                <Caixa className='row-start-1 row-end-5'>#01</Caixa>
                <Caixa className='row-start-1 row-end-4 col-start-2 col-end-4'>#02</Caixa>
                <Caixa>#03</Caixa>
                <Caixa>#04</Caixa>
                {/* <Caixa>#05</Caixa>
                <Caixa>#06</Caixa>
                <Caixa>#07</Caixa>
                <Caixa>#08</Caixa>
                <Caixa>#09</Caixa> */}
            </div>
        </Pagina>
    )
}