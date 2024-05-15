import BoxModel from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Size() {
    return (
        <Pagina>
            <div className='flex flex-col gap-4  text-4xl'>
                <BoxModel className='w-16 h-16'> #1 </BoxModel>
                <BoxModel className='w-4/5'> #2 </BoxModel>
                <BoxModel className='w-1/2'> #3 </BoxModel>
                <BoxModel className='w-[75%]'> #4 </BoxModel>
                <BoxModel className='min-w-[200px]'> #5 </BoxModel>
                <BoxModel className='w-full'> #6 </BoxModel>
            </div>
        </Pagina>
    )
}