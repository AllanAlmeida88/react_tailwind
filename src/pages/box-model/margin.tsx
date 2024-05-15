import BoxModel from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Margin() {
    return (
        <Pagina>
            <div className='flex-center  text-4xl'>
                <BoxModel className='mx-2'> #1 </BoxModel>
                <BoxModel className='my-4'> #2 </BoxModel>
                <BoxModel className='ml-4 mb-4'> #3 </BoxModel>
                <BoxModel className='m-96'> #4 </BoxModel>
                <BoxModel className='mt-[28px]'> #5 </BoxModel>
            </div>
        </Pagina>
    )
}