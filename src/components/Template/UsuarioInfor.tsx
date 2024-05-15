import { IconDotsVertical } from "@tabler/icons-react"
import Image from "next/image"

interface UsuarioInforProps {
    nome: string
    email: string
    imageUrl: string
    className?: string
}

export default function UsuarioInfor(props: UsuarioInforProps) {
    return (
        <div className={`flex gap-2 ${props.className ?? ''}`}>
            <Image src={props.imageUrl} alt="avatar"
                width={40} 
                height={40}
                className="rounded-full"
            />            
            <div className="flex flex-col">
                <span>{props.nome}</span>
                <span className="text-sm text-zinc-400">{props.email}</span>
            </div>
            {/* <div className="flex-1"></div> */}
            <span>
                <IconDotsVertical className="cursor-pointer"/>
            </span>
        </div>
    )
}