interface GridProps {
    children: any
    cols?: number
    gap?: number
}

export default function Grid(props: GridProps) {
    return (
        <div className={`
            grid grid-cols-${props.cols ?? 1}
            gap-${props.gap ?? 1}
        `}>
            {props.children}
        </div>
    )
}