import Pagina from '@/components/Template/Pagina'
import Titulo from '@/components/Template/Titulo';

export default function Home() {
    return (
       <div className='flex h-screen'>
            <Pagina>
                <Titulo principal='Início' secundario='React com tailwindCSS'></Titulo>
            </Pagina>
       </div>
    );
}
