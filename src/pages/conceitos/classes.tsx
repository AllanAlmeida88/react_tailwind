import Pagina from "@/components/Template/Pagina";

export default function Classes() {
    return (
        <Pagina>
            <div className={`
                flex
                justify-center items-center
                bg-green-700 text-yellow-400 text-4xl
            `}>
                Tailwind usa classes o tempo todo!
            </div>
        </Pagina>
    )
}