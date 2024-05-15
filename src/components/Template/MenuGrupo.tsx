interface MenuGrupoProps {
    grupo: string
    children?: any
}

export default function MenuGrupo(props: MenuGrupoProps) {
    return (
        <div className="text-sm font-bold text-zinc-400 pt-4 py-2">
            {props.grupo}
            <div className="px-4">
                {props.children}
            </div>
        </div>
    )
}