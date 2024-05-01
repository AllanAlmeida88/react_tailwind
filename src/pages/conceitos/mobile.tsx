export default function Mobile() {
    return (
        <div className={`
            flex flex-col justify-center items-center h-screen gap-4
            text-2xl
        `}>
            <span className="inline sm:hidden">Mobile</span>
            <span className="hidden sm:inline">Não Mobile</span>
        </div>
    )
}