interface BoxModelProps {
    children: any
    className?: string
}

export default function BoxModel(props: BoxModelProps) {
    return (
        <div className={`
            bg-green-700 rounded-md
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}