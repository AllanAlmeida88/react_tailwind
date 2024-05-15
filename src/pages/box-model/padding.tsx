import BoxModel from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Padding() {
    return (
        <Pagina>
            <div className='flex-center gap-4  text-4xl'>
                <BoxModel className='px-2'> #1 </BoxModel>
                <BoxModel className='py-4'> #2 </BoxModel>
                <BoxModel className='pl-4 pb-4'> #3 </BoxModel>
                <BoxModel className='p-96'> #4 </BoxModel>
                <BoxModel className='pt-[28px]'> #5 </BoxModel>
            </div>
        </Pagina>
    )
}