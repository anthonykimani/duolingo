import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
   <footer className='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
    <div className='mx-auto flex items-center justify-evenly h-full'>
      <Button variant={"ghost"} className=''>
        <Image src="/hr.svg" alt="cros" height={32} width={40} className='mr-4 rounded-md' />
        Croatian
      </Button>
      <Button variant={"ghost"} className=''>
        <Image src="/es.svg" alt="span" height={32} width={40} className='mr-4 rounded-md' />
        Spanish
      </Button>
    </div>
   </footer>
  )
}

export default Footer