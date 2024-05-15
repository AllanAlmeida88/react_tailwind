import BoxModel from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function Space() {
    return (
        <Pagina>
            <div className='space-y-5'>
                <BoxModel className=''> #1 </BoxModel>
                <BoxModel className=''> #2 </BoxModel>
                <BoxModel className=''> #3 </BoxModel>
                <BoxModel className=''> #4 </BoxModel>
                <BoxModel className=''> #5 </BoxModel>
            </div>
        </Pagina>
    )
}