import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

type Props = {
    activeCourse: { imageSrc: string; title: string; };
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => {
    return (
        <div className='flex items-center justify-between gap-x-2 w-full'>
            <Link href={"/courses"}>
                <Button variant={"ghost"}>
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} className='rounded-md border' height={32} width={32} />
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className='text-orange-500'>
                    <Image src={"/points.svg"} alt={activeCourse.title} className='mr-2' height={28} width={28} />
                    {points}
                </Button>
            </Link>
            <Link href={"/shop"}>
                <Button variant={"ghost"} className='text-orange-500'>
                    <Image src={"/heart.svg"} alt={activeCourse.title} className='mr-2' height={28} width={28} />
                    {hasActiveSubscription ? <InfinityIcon className='h-4 w-4 stroke-3' /> : hearts }
                </Button>
            </Link>
        </div>
    )
}

export default UserProgress