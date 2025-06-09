"use client"

type Props = {
    label: string;
    iconSrc: string;
    href: string;
}

import React from 'react'
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const SidebarItem = ({ label, iconSrc, href }: Props) => {
    const pathname = usePathname();
    const active = pathname == href
    return (
        <Button variant={active ? "sidebarOutline" : "sidebar"} className='pl-5 justify-start h-[52px]' asChild>
            <Link href={href}>
            <Image src={iconSrc} alt={label} className="" height={32} width={32} />
                {label}
            </Link>
        </Button>
    )
}

export default SidebarItem