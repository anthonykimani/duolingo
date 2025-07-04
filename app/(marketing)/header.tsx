import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Loader } from 'lucide-react';

const Header = () => {
    return (
        <div className='h-20 w-full border-b-2 border-slate-200 px-4'>
            <div className='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
                <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                    <Image src="/mascot.svg" height={40} width={40} alt='Mascot' />
                    <h1 className='text-2xl font-semibold text-green-600 tracking-wide'>Lingo</h1>
                </div>
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ClerkLoaded>
            </div>
        </div>
    )
}

export default Header