import Grid from '../../components/Grid/Grid'
import Caixa from '../../components/box-model'
import Pagina from '@/components/Template/Pagina'

export default function GridLayout () {
    return (
        <Pagina>
            <Grid cols={3}>
                <Caixa>#01</Caixa>
                <Caixa>#02</Caixa>
                <Caixa>#03</Caixa>
                <Caixa>#04</Caixa>
            </Grid>
        </Pagina>
    )
}