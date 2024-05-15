import Link from "next/link";
import React from "react";

interface MenuItemProps {
    href?: string
    label?: string
    icon?: any
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className="flex gap-2 pt-2 items-center hover:text-zinc-50 ">
            <span>{React.cloneElement(props.icon, {
                stroke: 1
            })}</span>
            <span><Link href={`${props.href}`}>{props.label}</Link></span>
        </div>
    )
}