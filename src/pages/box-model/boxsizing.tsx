import Pagina from '@/components/Template/Pagina'
import BoxModel from '../../components/box-model'

export default function BoxSizing() {
    return (
        <Pagina>
            <div className='flex flex-col gap-4  text-4xl'>
                <BoxModel className='w-36 h-36'> #1 </BoxModel>
                <BoxModel className='w-36 h-36 border-r-8 border-white box-content'> #2 </BoxModel>
                
            </div>
        </Pagina>
    )
}