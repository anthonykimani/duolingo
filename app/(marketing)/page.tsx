import { Button } from '@/components/ui/button'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2'>
            <div className='relative w-[240px] h-[240px] lg:w-[424px] mb-8 lg:mb-0'>
                <Image src="/hero.svg" fill alt="hero" />
            </div>
            <div className='text-xl lg:text-3xl font-bold text-neutral600  max-w-[480px] text-center'>
                <h1>Learn, practice and master new languages with Lingo.</h1>
            </div>
            <div className='flex flex-col items-center gap-y-3 max-w-[330px] w-full'>
                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedOut>
                        <SignUpButton>
                            <Button size="lg" variant={"secondary"} className='w-full'>
                                Get Started
                            </Button>
                        </SignUpButton>
                        <SignInButton mode='modal' >
                            <Button size="lg" variant={"primaryOutline"} className='w-full'>
                                I already have an account
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Button size={"lg"} variant={"secondary"} className='w-full'>
                            <Link href={"/learn"}>Continue Learning</Link>
                        </Button>
                    </SignedIn>
                </ClerkLoaded>
            </div>
        </div>
    )
}

export default Home